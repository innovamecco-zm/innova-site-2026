// Generates static brand assets into /public. Run with `npm run assets` and commit the output.
//  - favicon.svg, apple-touch-icon.png, logo.png
//  - og-image.png (1200x630)
//  - whatsapp-qr.svg
//  - placeholder screenshots (/screens) and team photos (/team) — only if missing,
//    so real files you drop in are never overwritten.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import QRCode from 'qrcode'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const pub = path.join(root, 'public')
const write = (rel, data) => {
  const file = path.join(pub, rel)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, data)
  console.log('wrote', rel)
}
const writeIfMissing = (rel, data) => {
  if (fs.existsSync(path.join(pub, rel))) return console.log('kept ', rel)
  write(rel, data)
}

const RED = '#FC1817'
const BLUE = '#0075E2'
const PURPLE = '#A81E7D'
const GOLD = '#C9A24B'
const BG = '#0A0B10'
const ELEV = '#12141C'
const LINE = '#23262f'
const MUTED = '#9AA0AE'
const ZED = '#2563EB'

const mark = (x, y, s) => `
  <g transform="translate(${x} ${y}) scale(${s})">
    <defs><clipPath id="mk${x}"><circle cx="18" cy="18" r="16"/></clipPath></defs>
    <circle cx="18" cy="18" r="16" fill="${RED}"/>
    <circle cx="38" cy="18" r="16" fill="${BLUE}"/>
    <circle cx="38" cy="18" r="16" fill="${PURPLE}" clip-path="url(#mk${x})"/>
  </g>`

// Favicon: the mark on a dark rounded square so it reads on light and dark tabs.
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${BG}"/>${mark(4, 14, 1)}</svg>`
write('favicon.svg', favicon)
write('apple-touch-icon.png', await sharp(Buffer.from(favicon.replace('viewBox="0 0 64 64"', 'viewBox="0 0 64 64" width="180" height="180"'))).png().toBuffer())

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 64 64"><rect width="64" height="64" fill="${BG}"/>${mark(4, 14, 1)}</svg>`
write('logo.png', await sharp(Buffer.from(logoSvg)).png().toBuffer())

// OG image: lit spheres + wordmark.
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="r" cx="38%" cy="32%" r="75%"><stop offset="0" stop-color="#ff7a6e"/><stop offset=".35" stop-color="${RED}"/><stop offset=".8" stop-color="#7a0a10"/><stop offset="1" stop-color="#2a0306"/></radialGradient>
    <radialGradient id="b" cx="38%" cy="32%" r="75%"><stop offset="0" stop-color="#7cc0ff"/><stop offset=".35" stop-color="${BLUE}"/><stop offset=".8" stop-color="#002f66"/><stop offset="1" stop-color="#020c1d"/></radialGradient>
    <radialGradient id="g" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#e05ab8" stop-opacity=".95"/><stop offset=".45" stop-color="${PURPLE}" stop-opacity=".55"/><stop offset="1" stop-color="${PURPLE}" stop-opacity="0"/></radialGradient>
    <radialGradient id="s" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff" stop-opacity=".7"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
    <clipPath id="c"><circle cx="812" cy="315" r="170"/></clipPath>
    <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse"><path d="M64 0H0V64" fill="none" stroke="#fff" stroke-opacity=".04"/></pattern>
  </defs>
  <rect width="1200" height="630" fill="${BG}"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <ellipse cx="890" cy="315" rx="380" ry="260" fill="url(#g)" opacity=".35"/>
  <circle cx="812" cy="315" r="170" fill="url(#r)"/>
  <circle cx="968" cy="315" r="170" fill="url(#b)"/>
  <g clip-path="url(#c)"><circle cx="968" cy="315" r="170" fill="${PURPLE}" opacity=".85"/><ellipse cx="890" cy="315" rx="80" ry="150" fill="url(#g)"/></g>
  <ellipse cx="752" cy="238" rx="52" ry="32" fill="url(#s)" transform="rotate(-30 752 238)"/>
  <ellipse cx="908" cy="238" rx="52" ry="32" fill="url(#s)" transform="rotate(-30 908 238)" opacity=".8"/>
  <text x="80" y="300" font-family="Geist, 'Segoe UI', Arial, sans-serif" font-size="76" font-weight="700" fill="#F4F5F7" letter-spacing="-2">Meco Innova<tspan fill="${GOLD}">.</tspan></text>
  <text x="80" y="360" font-family="Geist, 'Segoe UI', Arial, sans-serif" font-size="28" fill="${MUTED}">Software and IT for Zambian businesses</text>
  <text x="80" y="540" font-family="Geist, 'Segoe UI', Arial, sans-serif" font-size="22" fill="${MUTED}">mecoinnova.com · Lusaka, Zambia</text>
</svg>`
write('og-image.png', await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toBuffer())

// Zed CRM OG image (used on /products/zed-crm only): Zed blue on dark, endorsed by Meco Innova.
const ogZed = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="zg" cx="80%" cy="20%" r="70%"><stop offset="0" stop-color="${ZED}" stop-opacity=".45"/><stop offset="1" stop-color="${ZED}" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse"><path d="M64 0H0V64" fill="none" stroke="#fff" stroke-opacity=".04"/></pattern>
  </defs>
  <rect width="1200" height="630" fill="${BG}"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#zg)"/>
  <rect x="0" y="0" width="1200" height="6" fill="${ZED}"/>
  <g transform="translate(80 150) scale(4)"><rect width="24" height="24" rx="6" fill="${ZED}"/><polyline points="7,7.5 17,7.5 7,16.5 17,16.5" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></g>
  <text x="200" y="222" font-family="Geist, 'Segoe UI', Arial, sans-serif" font-size="72" font-weight="700" fill="#F4F5F7" letter-spacing="-2">Zed CRM</text>
  <text x="80" y="350" font-family="Geist, 'Segoe UI', Arial, sans-serif" font-size="48" font-weight="600" fill="#F4F5F7" letter-spacing="-1">The CRM for Zambian SMEs,</text>
  <text x="80" y="410" font-family="Geist, 'Segoe UI', Arial, sans-serif" font-size="48" font-weight="600" fill="#F4F5F7" letter-spacing="-1">priced in Kwacha.</text>
  <text x="80" y="540" font-family="Geist, 'Segoe UI', Arial, sans-serif" font-size="24" fill="${MUTED}">by Meco Innova · zedcrms.com</text>
</svg>`
write('og-zed-crm.png', await sharp(Buffer.from(ogZed)).png({ compressionLevel: 9 }).toBuffer())

// WhatsApp QR (crisp SVG).
write(
  'whatsapp-qr.svg',
  await QRCode.toString('https://wa.me/260767030735', { type: 'svg', margin: 1, errorCorrectionLevel: 'M', color: { dark: '#0A0B10', light: '#FFFFFF' } }),
)

// ── Placeholder screenshots ────────────────────────────────────────────────
const label = (x, y, text) =>
  `<text x="${x}" y="${y}" font-family="Segoe UI, Arial, sans-serif" font-size="13" fill="${MUTED}" letter-spacing="1">${text}</text>`
const bar = (x, y, w, h = 10, o = 0.12) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="#fff" fill-opacity="${o}"/>`
const zed = (x, y, s = 1) =>
  `<g transform="translate(${x} ${y}) scale(${s})"><rect width="24" height="24" rx="6" fill="${ZED}"/><polyline points="7,7.5 17,7.5 7,16.5 17,16.5" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></g>`

const chrome = (w, h, inner) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${ELEV}"/>
  <rect width="${w}" height="56" fill="#0e1017"/><line x1="0" y1="56" x2="${w}" y2="56" stroke="${LINE}"/>
  ${zed(20, 16)}<text x="54" y="34" font-family="Segoe UI, Arial, sans-serif" font-size="15" font-weight="600" fill="#F4F5F7">Zed CRM</text>
  <rect x="0" y="56" width="220" height="${h - 56}" fill="#0e1017"/><line x1="220" y1="56" x2="220" y2="${h}" stroke="${LINE}"/>
  ${[0, 1, 2, 3, 4, 5].map((i) => bar(24, 92 + i * 40, 120 + (i % 3) * 20, 10, i === 1 ? 0.35 : 0.12)).join('')}
  ${inner}
  ${label(w - 230, h - 20, 'PLACEHOLDER SCREENSHOT')}
</svg>`

const stages = ['NEW', 'CONTACTED', 'QUOTED', 'WON']
const pipeline = chrome(
  1280,
  800,
  stages
    .map((s, i) => {
      const x = 248 + i * 252
      const cards = [0, 1, 2, 3 - (i % 2)].slice(0, 4 - (i === 3 ? 2 : 0))
      return `${label(x, 92, s)}<rect x="${x}" y="104" width="232" height="660" rx="12" fill="#fff" fill-opacity=".02" stroke="${LINE}"/>
      ${cards
        .map(
          (_, j) => `<rect x="${x + 12}" y="${116 + j * 116}" width="208" height="100" rx="10" fill="${ELEV}" stroke="${LINE}"/>
        ${bar(x + 28, 136 + j * 116, 120, 10, 0.4)}${bar(x + 28, 158 + j * 116, 160)}${bar(x + 28, 186 + j * 116, 56, 14, 0.08)}
        <rect x="${x + 156}" y="${186 + j * 116}" width="48" height="14" rx="7" fill="${i === 3 ? '#1f8f4e' : ZED}" fill-opacity=".5"/>`,
        )
        .join('')}`
    })
    .join(''),
)
writeIfMissing('screens/zed-pipeline.svg', pipeline)

const contact = chrome(
  1280,
  800,
  `<circle cx="300" cy="120" r="32" fill="${ZED}" fill-opacity=".4"/>${bar(348, 104, 220, 14, 0.5)}${bar(348, 130, 160)}
   <rect x="248" y="184" width="400" height="580" rx="12" fill="#fff" fill-opacity=".02" stroke="${LINE}"/>
   ${[0, 1, 2, 3, 4, 5, 6].map((i) => `${bar(272, 216 + i * 72, 90)}${bar(272, 240 + i * 72, 300, 12, 0.2)}`).join('')}
   <rect x="672" y="184" width="584" height="580" rx="12" fill="#fff" fill-opacity=".02" stroke="${LINE}"/>
   ${label(696, 216, 'ACTIVITY')}
   <line x1="708" y1="240" x2="708" y2="740" stroke="${LINE}"/>
   ${[0, 1, 2, 3, 4].map((i) => `<circle cx="708" cy="${262 + i * 100}" r="6" fill="${[ZED, '#1f8f4e', GOLD, ZED, MUTED][i]}"/>${bar(732, 254 + i * 100, 260, 12, 0.35)}${bar(732, 278 + i * 100, 420)}${bar(732, 298 + i * 100, 300)}`).join('')}`,
)
writeIfMissing('screens/zed-contact.svg', contact)

const mobile = `<svg xmlns="http://www.w3.org/2000/svg" width="390" height="780" viewBox="0 0 390 780">
  <rect width="390" height="780" fill="${ELEV}"/>
  <rect width="390" height="96" fill="#0e1017"/><line x1="0" y1="96" x2="390" y2="96" stroke="${LINE}"/>
  ${zed(24, 48, 1.1)}<text x="62" y="68" font-family="Segoe UI, Arial, sans-serif" font-size="18" font-weight="600" fill="#F4F5F7">Leads</text>
  ${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="16" y="${116 + i * 100}" width="358" height="84" rx="12" fill="#fff" fill-opacity=".02" stroke="${LINE}"/>
    <circle cx="52" cy="${158 + i * 100}" r="18" fill="${[ZED, RED, BLUE, PURPLE, GOLD, ZED][i]}" fill-opacity=".45"/>
    ${bar(84, 142 + i * 100, 150, 12, 0.45)}${bar(84, 166 + i * 100, 210)}
    <circle cx="340" cy="${158 + i * 100}" r="14" fill="#1f8f4e" fill-opacity=".6"/>`).join('')}
  ${label(110, 760, 'PLACEHOLDER')}
</svg>`
writeIfMissing('screens/zed-mobile.svg', mobile)

// ── Placeholder team photos (initials) ─────────────────────────────────────
const team = [
  ['daliso-banda', 'DB', RED],
  ['memory-mupotola', 'MM', BLUE],
  ['chimwemwe-banda', 'CB', PURPLE],
]
for (const [slug, initials, color] of team) {
  writeIfMissing(
    `team/${slug}.svg`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="640" viewBox="0 0 640 640">
  <defs><radialGradient id="g" cx="50%" cy="35%" r="70%"><stop offset="0" stop-color="${color}" stop-opacity=".35"/><stop offset="1" stop-color="${ELEV}"/></radialGradient></defs>
  <rect width="640" height="640" fill="url(#g)"/>
  <text x="320" y="350" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="140" font-weight="600" fill="#F4F5F7" fill-opacity=".9" letter-spacing="-4">${initials}</text>
  <text x="320" y="600" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="16" fill="${MUTED}" letter-spacing="2">PHOTO PLACEHOLDER</text>
</svg>`,
  )
}
