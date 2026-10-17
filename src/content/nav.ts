export interface NavItem {
  label: string
  to: string
  /** Show the Zed CRM mark before the label. */
  zed?: boolean
}

export const NAV: NavItem[] = [
  { label: 'Zed CRM', to: '/products/zed-crm', zed: true },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const FOOTER_LINKS: { heading: string; links: NavItem[] }[] = [
  {
    heading: 'Zed CRM',
    links: [
      { label: 'Overview', to: '/products/zed-crm' },
      { label: 'Pricing', to: '/products/zed-crm#pricing' },
      { label: 'Sign in / Start trial', to: 'https://zedcrms.com' },
    ],
  },
  {
    heading: 'Innova Services',
    links: [{ label: 'Overview', to: '/services' }],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Work', to: '/work' },
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

/** Section anchors in the Zed CRM product sub-bar. */
export const ZED_SUBNAV: NavItem[] = [
  { label: 'Features', to: '#features' },
  { label: 'Pricing', to: '#pricing' },
  { label: 'FAQ', to: '#faq' },
]
