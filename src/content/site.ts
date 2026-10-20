/**
 * Global site constants. Edit values here — components read from this file.
 */
export const SITE = {
  name: 'Meco Innova',
  legalName: 'Meco Innova Ltd',
  url: 'https://mecoinnova.com',
  descriptor:
    'Meco Innova Ltd is a Lusaka software company. We make Zed CRM, and we set up and look after websites, email and IT for Zambian businesses.',
  /** Used for JSON-LD Organization / LocalBusiness `description`. */
  schemaDescription:
    'Lusaka software company. Makes Zed CRM and provides websites, business email and IT services.',
  foundingYear: 2026,
  city: 'Lusaka',
  country: 'Zambia',
  countryCode: 'ZM',
  // TODO(owner): confirm the hello@mecoinnova.com inbox exists before launch.
  email: 'hello@mecoinnova.com',
  whatsappNumber: '+260 767 030 735',
  whatsappDigits: '260767030735',
} as const

/** Base WhatsApp link (no prefill). Used for the QR code and JSON-LD. */
export const WHATSAPP_URL = `https://wa.me/${SITE.whatsappDigits}`

const wa = (text: string) => `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`

/** Every WhatsApp link picks the prefill that matches its context. */
export const WHATSAPP_URLS = {
  meco: wa('Hi Meco Innova'),
  /** Zed CRM sales and product questions. */
  zed: wa('Hi, I’d like to know more about Zed CRM'),
  /** Existing Zed CRM customers who need help with their account. */
  zedSupport: wa('Hi, I need help with my Zed CRM account'),
  services: wa('Hi Meco Innova, I need help with my website, email or IT'),
} as const

export const ZED_CRM = {
  name: 'Zed CRM',
  url: 'https://zedcrms.com',
  signupUrl: 'https://zedcrms.com/register',
  /** Free-trial length, as shown in copy ("3 months free"). */
  trialLabel: '3 months',
} as const

/** Payment methods accepted for Zed CRM. */
export const PAYMENT_METHODS = 'Airtel Money, MTN MoMo, Zamtel Kwacha or cash'

/** The marketplace has no name yet — keep this generic until it does. */
export const MARKETPLACE = {
  badge: 'Coming next from Meco Innova',
  pitch: 'A marketplace that puts Lusaka market stalls online.',
  body: 'Buyers find a trader’s stall, see what’s in stock, and order on WhatsApp.',
  launch: 'Planned for November 2026.',
  cta: 'Get launch updates',
} as const

export const TRUST_LINE = ['Lusaka-based', 'PACRA registered', 'Priced in Kwacha'] as const

/** Per the FAEO letter of 24 Aug 2026, Zed CRM is what was selected. */
export const RECOGNITION =
  'Zed CRM was selected as a winning innovation by the FAEO Women in Engineering Committee and exhibited at the 12th UNESCO Africa Engineering Week, Dar es Salaam, September 2026.'

/** Short form, used as a badge on the Zed CRM page. */
export const RECOGNITION_BADGE = 'Winning innovation · FAEO Women in Engineering · UNESCO Africa Engineering Week 2026'

/** Contact form endpoint (Google Apps Script web app). Set VITE_CONTACT_ENDPOINT in .env. */
export const CONTACT_ENDPOINT: string = import.meta.env.VITE_CONTACT_ENDPOINT ?? ''
