import { StrictMode } from 'react'
import { prerender } from 'react-dom/static'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { REDIRECTS, ROUTES, getRouteMeta } from './content/seo'
import { SITE, WHATSAPP_URL, ZED_CRM } from './content/site'
import { PLANS } from './content/pricing'

export { REDIRECTS, ROUTES, SITE }

/** Renders a route to HTML, waiting for lazy page chunks (Suspense) to resolve. */
export async function render(url: string): Promise<string> {
  const tree = (
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  )
  // Infinity stops React from outlining large Suspense boundaries into an out-of-order
  // <template> swap, so each page's HTML is complete and in place without JS.
  const { prelude } = await prerender(tree, { progressiveChunkSize: Infinity })
  return new Response(prelude).text()
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Head tags for a route: title, description, canonical, OG/Twitter, JSON-LD. */
export function head(path: string): string {
  const meta = getRouteMeta(path)
  const url = SITE.url + (meta.path === '/' ? '/' : meta.path)
  const isZed = meta.path === '/products/zed-crm'
  const og = `${SITE.url}${meta.ogImage ?? '/og-image.png'}`
  const ogAlt = isZed
    ? 'Zed CRM by Meco Innova: the CRM for Zambian SMEs, priced in Kwacha'
    : 'Meco Innova logo: overlapping red and blue circles'
  const notFound = meta.path === '/404'

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.legalName,
    alternateName: SITE.name,
    description: SITE.schemaDescription,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.city,
      addressCountry: SITE.countryCode,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        telephone: SITE.whatsappNumber.replace(/\s/g, ''),
        url: WHATSAPP_URL,
        areaServed: SITE.countryCode,
        availableLanguage: ['en'],
      },
    ],
  }

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}/#localbusiness`,
    name: SITE.legalName,
    description: SITE.schemaDescription,
    image: `${SITE.url}/og-image.png`,
    url: SITE.url,
    telephone: SITE.whatsappNumber.replace(/\s/g, ''),
    email: SITE.email,
    currenciesAccepted: 'ZMW',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.city,
      addressCountry: SITE.countryCode,
    },
    areaServed: { '@type': 'Country', name: SITE.country },
    parentOrganization: { '@id': `${SITE.url}/#organization` },
  }

  const starter = PLANS[0]
  const software = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: ZED_CRM.name,
    url: ZED_CRM.url,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Android, iOS (PWA)',
    description: 'A Kwacha-priced CRM for Zambian SMEs: leads and pipeline, contacts, quotations, email inside the CRM, click-to-call and WhatsApp.',
    publisher: { '@id': `${SITE.url}/#organization` },
    offers: {
      '@type': 'Offer',
      price: String(starter.price),
      priceCurrency: 'ZMW',
      category: 'subscription',
    },
  }

  const ld = [organization, localBusiness]
  if (meta.path === '/' || meta.path === '/products/zed-crm') ld.push(software as never)

  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    notFound ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(SITE.name)}" />`,
    `<meta property="og:locale" content="en_ZM" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    notFound ? '' : `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${og}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(ogAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${og}" />`,
    ...ld.map((o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`),
  ]
  return tags.filter(Boolean).join('\n    ')
}
