import { CURRENCY, PLANS } from './pricing'
import { ZED_CRM } from './site'

export const HERO = {
  eyebrow: 'Meco Innova Ltd · Lusaka, Zambia',
  headline: 'One Lusaka team for your CRM, your website and your IT.',
  sub: `We make Zed CRM, a CRM priced in Kwacha from ${CURRENCY}${PLANS[0].price} a month. Through Innova Services, we set up and look after websites, business email and IT for Zambian businesses.`,
  primaryCta: 'Talk to us',
  secondaryCta: 'See Zed CRM',
}

/** The two lines of business, shown directly under the hero. */
export const TWO_LINES = {
  zed: {
    label: 'Product',
    title: 'Zed CRM',
    body: 'For your sales team. Track leads, send quotes in Kwacha, and email or WhatsApp customers from their record.',
    cta: 'Explore Zed CRM',
  },
  services: {
    label: 'Managed IT',
    title: 'Innova Services',
    body: 'For your office. Your website, email on your own domain, devices, accounts and backups, looked after by one team.',
    cta: 'See services',
  },
}

export const WHY = {
  eyebrow: 'Why Meco Innova',
  heading: 'Small, local, and on WhatsApp.',
  points: [
    {
      title: 'Local',
      body: 'We’re a Lusaka team. We price in Kwacha and you can pay by Airtel Money, MTN MoMo or Zamtel Kwacha, with no dollar card needed.',
    },
    {
      title: 'Built properly',
      body: 'Off-server backups and HTTPS on everything we host, as standard, not as an extra.',
    },
    {
      title: 'Human support',
      body: 'Message us on WhatsApp and you reach the people who built your system, not a call centre.',
    },
  ],
}

export type CtaVariant = 'company' | 'services' | 'zed'

/** Closing CTA band, one variant per context. */
export const CTA_BANDS: Record<
  CtaVariant,
  { heading: string; body: string; primary: string; primaryTo: string; secondary: string }
> = {
  company: {
    heading: 'Tell us what you’re working on.',
    body: 'Whether it’s Zed CRM or your website and email, start with a message.',
    primary: 'Talk to us',
    primaryTo: '/contact',
    secondary: 'WhatsApp us',
  },
  services: {
    heading: 'Need a website, email or IT sorted?',
    body: 'Tell us what you have now and what you need. We’ll come back with a written scope and a price in Kwacha.',
    primary: 'Get a quote',
    primaryTo: '/contact?need=services',
    secondary: 'WhatsApp us',
  },
  zed: {
    heading: `Try Zed CRM free for ${ZED_CRM.trialLabel}.`,
    body: 'No card needed. Sign up, add your team, and pay by mobile money or cash only when you’re ready.',
    primary: 'Start free trial',
    primaryTo: ZED_CRM.signupUrl,
    secondary: 'Ask about Zed CRM',
  },
}
