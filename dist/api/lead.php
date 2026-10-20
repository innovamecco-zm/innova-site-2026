<?php
/**
 * Contact form → Zed CRM lead.
 *
 * The site is static, so the contact form posts here (same origin) and this script
 * forwards the enquiry to Meco Innova's own Zed CRM web form, which creates a lead.
 * The Zed CRM web-form endpoint is public by design (no key), so nothing here is secret;
 * this relay exists to stop spam before it reaches the CRM and to read Zed CRM's reply.
 *
 * Zed CRM only stores the fields that are on the web form (Settings → Web Forms → form 1):
 * Name, Emails, Contact Numbers, Pipeline, Title, Description. Remove one there and that
 * value is silently dropped.
 *
 * Works on PHP 7.4+ with the curl and mbstring extensions (standard on cPanel).
 *
 * Responds with JSON: { ok: true } or { ok: false, error: string, field?: string }.
 */

declare(strict_types=1);

// ── Config ──────────────────────────────────────────────────────────────────────────────
// Override with environment variables when testing against a local mock.
const ZED_WEBFORM_URL_DEFAULT = 'https://mecoinnovaltd.zedcrms.com/web-forms/forms/1';

/** "What do you need?" option → Zed CRM pipeline id (ids from the web form's Pipeline list). */
const PIPELINES = [
    'Zed CRM (trial, pricing or support)' => 2, // Zedcrms Tenants
    'A website'                          => 3, // Websites
    'Business email & domains'           => 3, // Websites
    'Custom software'                    => 4, // Information system
    'IT management'                      => 4, // Information system
    'Marketplace updates'                => 1, // Default Pipeline
    'Something else'                     => 1, // Default Pipeline
];

/** Short label used at the start of each lead title. */
const TITLE_PREFIX = [
    'Zed CRM (trial, pricing or support)' => 'Zed CRM',
    'A website'                          => 'Website',
    'Business email & domains'           => 'Business email & domains',
    'Custom software'                    => 'Custom software',
    'IT management'                      => 'IT management',
    'Marketplace updates'                => 'Marketplace updates',
    'Something else'                     => 'Enquiry',
];

/** At most this many submissions per IP address per window. */
const RATE_LIMIT = 5;
const RATE_WINDOW_SECONDS = 600;

// ── Helpers ─────────────────────────────────────────────────────────────────────────────

function respond(int $status, array $body): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    echo json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function field(string $key, int $maxLength): string
{
    $value = $_POST[$key] ?? '';
    if (!is_string($value)) {
        return '';
    }
    // Normalise whitespace and strip control characters except newlines in the message.
    $value = preg_replace('/[^\P{C}\n]+/u', '', $value) ?? '';
    $value = trim($value);

    return mb_substr($value, 0, $maxLength);
}

/** Simple file-based rate limit, kept outside the web root. */
function rateLimited(string $visitor): bool
{
    $dir = sys_get_temp_dir() . '/mecoinnova-leads';
    if (!is_dir($dir) && !@mkdir($dir, 0700, true) && !is_dir($dir)) {
        return false; // Can't track: fail open rather than lose real enquiries.
    }
    $file = $dir . '/' . hash('sha256', $visitor);
    $now = time();
    $hits = [];
    if (is_file($file)) {
        $hits = array_filter(
            array_map('intval', explode(',', (string) @file_get_contents($file))),
            function (int $t) use ($now) { return $t > $now - RATE_WINDOW_SECONDS; }
        );
    }
    if (count($hits) >= RATE_LIMIT) {
        return true;
    }
    $hits[] = $now;
    @file_put_contents($file, implode(',', $hits), LOCK_EX);

    return false;
}

// ── Request checks ──────────────────────────────────────────────────────────────────────

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'Method not allowed.']);
}

// Only accept submissions from our own pages.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$originHost = (string) parse_url($origin, PHP_URL_HOST);
$originPort = parse_url($origin, PHP_URL_PORT);
$originAuthority = $originHost . ($originPort ? ':' . $originPort : '');
if ($origin !== '' && strcasecmp($originAuthority, $_SERVER['HTTP_HOST'] ?? '') !== 0) {
    respond(403, ['ok' => false, 'error' => 'Forbidden.']);
}

// Honeypot: real people never see or fill this field. Pretend it worked.
if (field('company_website', 200) !== '') {
    respond(200, ['ok' => true]);
}

$name     = field('name', 120);
$business = field('business', 160);
$email    = field('email', 160);
$phone    = field('phone', 40);
$need     = field('need', 80);
$message  = field('message', 5000);

if ($name === '') {
    respond(422, ['ok' => false, 'field' => 'name', 'error' => 'Please enter your name.']);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'field' => 'email', 'error' => 'Please enter a valid email address.']);
}
if ($phone !== '' && !preg_match('/^\+?[0-9\s\-()]{7,20}$/', $phone)) {
    respond(422, ['ok' => false, 'field' => 'phone', 'error' => 'Please enter a valid phone number, for example +260 97 123 4567.']);
}
if (!array_key_exists($need, PIPELINES)) {
    respond(422, ['ok' => false, 'field' => 'need', 'error' => 'Please choose what you need.']);
}
if ($message === '') {
    respond(422, ['ok' => false, 'field' => 'message', 'error' => 'Please enter a message.']);
}

// Counted only once the submission is valid, so fixing a typo doesn't use up the allowance.
// Behind Cloudflare every request shares a few proxy addresses, so count the visitor's own address too.
$visitor = ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . '|' . ($_SERVER['HTTP_CF_CONNECTING_IP'] ?? '');
if (rateLimited($visitor)) {
    respond(429, ['ok' => false, 'error' => 'Too many messages in a short time. Please try again in a few minutes.']);
}

// ── Build the lead ──────────────────────────────────────────────────────────────────────

$title = TITLE_PREFIX[$need] . ': ' . $name . ($business !== '' ? " ({$business})" : '');

$description = implode("\n", array_filter([
    $message,
    '',
    '— Sent from the mecoinnova.com contact form —',
    "Request: {$need}",
    $business !== '' ? "Business: {$business}" : null,
    $phone !== '' ? "Phone: {$phone}" : null,
    "Email: {$email}",
], function ($line) { return $line !== null; }));

$payload = [
    'persons' => [
        'name'   => $name,
        'emails' => [['value' => $email, 'label' => 'work']],
    ],
    'leads' => [
        'title'            => mb_substr($title, 0, 190),
        'description'      => $description,
        'lead_pipeline_id' => PIPELINES[$need],
    ],
];
if ($phone !== '') {
    $payload['persons']['contact_numbers'] = [['value' => $phone, 'label' => 'work']];
}

// ── Send to Zed CRM ─────────────────────────────────────────────────────────────────────

$url = getenv('ZED_WEBFORM_URL') ?: ZED_WEBFORM_URL_DEFAULT;

$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => http_build_query($payload),
    CURLOPT_HTTPHEADER     => ['Accept: application/json', 'Content-Type: application/x-www-form-urlencoded'],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => false,
    CURLOPT_CONNECTTIMEOUT => 5,
    CURLOPT_TIMEOUT        => 15,
    CURLOPT_USERAGENT      => 'mecoinnova.com contact form',
]);
$responseBody = curl_exec($ch);
$status = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
$curlError = curl_error($ch);
curl_close($ch);

// Zed CRM answers 200 with a message, or 301 with a redirect URL, depending on the
// web form's "Submit Success Action". Both mean the lead was created.
if ($responseBody !== false && ($status === 200 || $status === 301)) {
    respond(200, ['ok' => true]);
}

$errorLog = sprintf('[mecoinnova lead] Zed CRM returned %d %s %s', $status, $curlError, is_string($responseBody) ? mb_substr($responseBody, 0, 500) : '');
error_log($errorLog);

// Validation errors: point the visitor at the field Zed CRM rejected.
if ($status === 422 && is_string($responseBody)) {
    $errors = json_decode($responseBody, true)['errors'] ?? [];
    $fieldMap = [
        'persons.contact_numbers' => 'phone',
        'persons.emails'          => 'email',
        'persons.name'            => 'name',
    ];
    foreach ($errors as $key => $messages) {
        foreach ($fieldMap as $prefix => $formField) {
            if (strpos((string) $key, $prefix) === 0) {
                $hint = $formField === 'phone'
                    ? 'Please check your phone number, for example +260 97 123 4567.'
                    : 'Please check your ' . $formField . '.';
                respond(422, ['ok' => false, 'field' => $formField, 'error' => $hint]);
            }
        }
    }
}

respond(502, ['ok' => false, 'error' => 'We couldn’t send your message just now. Please try again.']);
