import type { LucideIcon } from 'lucide-react'
import { Database, FileText, Inbox, MessageCircle, Smartphone, Users, Workflow } from 'lucide-react'

export interface Feature {
  icon: LucideIcon
  title: string
  body: string
}

export const ZED_INTRO = {
  eyebrow: 'Our product',
  tagline: 'The CRM for Zambian SMEs, priced in Kwacha.',
  body: 'Leads, contacts, quotes and customer emails on one record, on a laptop at the office or a phone on the road.',
  byline: 'by Meco Innova Ltd, Lusaka',
  noCard: 'No credit card. Pay by mobile money or cash when you’re ready.',
}

export const ZED_SCREENS_COPY = {
  eyebrow: 'On any screen',
  heading: 'Install it on your phone. No app store.',
  body: 'Use Zed CRM in the browser at your desk, then add it to your phone’s home screen for when you’re out seeing customers.',
}

export const ZED_FEATURES: Feature[] = [
  { icon: Workflow, title: 'Leads & pipeline', body: 'See every lead by stage, from first call to won or lost, and who on your team owns it.' },
  { icon: Users, title: 'Contacts', body: 'People and organisations in one place, with the full history of every conversation.' },
  { icon: FileText, title: 'Quotations', body: 'Build and send quotes in Kwacha straight from the deal you’re working on.' },
  { icon: Inbox, title: 'Email inside the CRM', body: 'Each business gets its own inbox in Zed CRM, so emails sit next to the customer they belong to.' },
  { icon: MessageCircle, title: 'Click-to-call & WhatsApp', body: 'Call or message a customer from their record in one tap.' },
  { icon: Smartphone, title: 'Works on your phone', body: 'Install Zed CRM as an app (PWA) on Android or iPhone. No app store needed.' },
  { icon: Database, title: 'Your data, kept separate', body: 'Every business runs on its own separate database. Your records never share a table with anyone else’s.' },
]

export interface Screen {
  src: string
  alt: string
  width: number
  height: number
}

/**
 * Screens shown in the layered product card.
 * TODO(placeholder): drop real 2x WebP/AVIF screenshots into /public/screens/ and update these paths.
 */
export const ZED_SCREENS: Screen[] = [
  { src: '/screens/zed-pipeline.svg', alt: 'Zed CRM pipeline board with deals grouped by stage', width: 1280, height: 800 },
  { src: '/screens/zed-contact.svg', alt: 'Zed CRM contact record with an activity timeline', width: 1280, height: 800 },
  { src: '/screens/zed-mobile.svg', alt: 'Zed CRM installed as an app on a phone', width: 390, height: 780 },
]
