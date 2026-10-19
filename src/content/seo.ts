import { CURRENCY, PLANS } from './pricing'
import { SITE, ZED_CRM } from './site'

export interface RouteMeta {
  path: string
  title: string
  description: string
  /** Include in sitemap.xml. */
  index?: boolean
  /** Route-specific Open Graph image (defaults to /og-image.png). */
  ogImage?: string
}

export const ROUTES: RouteMeta[] = [
  {
    path: '/',
    title: 'Meco Innova | Software and IT for Zambian businesses',
    description:
      `Meco Innova is a Lusaka software company. We make Zed CRM, a CRM priced in Kwacha from ${CURRENCY}${PLANS[0].price} a month, and run websites, business email and IT for Zambian businesses.`,
    index: true,
  },
  {
    path: '/products/zed-crm',
    title: 'Zed CRM — The Kwacha-priced CRM for Zambian SMEs | Meco Innova',
    ogImage: '/og-zed-crm.png',
    description:
      `Leads, pipeline, contacts, quotations and email in one CRM. Works on your phone, priced in Kwacha. Free for ${ZED_CRM.trialLabel}, no credit card.`,
    index: true,
  },
  {
    path: '/services',
    title: 'Innova Services: websites, business email and IT in Lusaka | Meco Innova',
    description:
      'Innova Services is Meco Innova’s managed IT line: websites, business email and domains, custom software and IT management for Zambian businesses, priced in Kwacha.',
    index: true,
  },
  {
    path: '/work',
    title: 'Client work | Meco Innova',
    description: 'Client work from Meco Innova: a civic platform for Zambia’s 2026 elections, and managed website, email and IT for a Lusaka procurement firm.',
    index: true,
  },
  {
    path: '/about',
    title: 'About us | Meco Innova',
    description: 'Meet the Lusaka team behind Zed CRM and Innova Services, and why we build software priced in Kwacha.',
    index: true,
  },
  {
    path: '/contact',
    title: 'Contact us | Meco Innova',
    description: `Talk to Meco Innova about Zed CRM, websites, email or IT. Message us on WhatsApp at ${SITE.whatsappNumber} or send the form.`,
    index: true,
  },
  {
    path: '/404',
    title: 'Page not found | Meco Innova',
    description: 'This page does not exist. Head back to the Meco Innova home page.',
  },
]

/** Old-site URLs that now redirect (prerendered meta-refresh pages). */
export const REDIRECTS: Record<string, string> = {
  '/get-started': '/products/zed-crm',
  '/compliance': '/about',
}

export const NOT_FOUND_META = ROUTES[ROUTES.length - 1]

export const getRouteMeta = (path: string): RouteMeta => {
  const clean = path !== '/' ? path.replace(/\/+$/, '') : path
  return ROUTES.find((r) => r.path === clean) ?? NOT_FOUND_META
}
