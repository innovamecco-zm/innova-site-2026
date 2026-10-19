import type { LucideIcon } from 'lucide-react'
import { Code2, Globe, Mail, ServerCog } from 'lucide-react'

export interface Service {
  icon: LucideIcon
  title: string
  summary: string
  detail: string
}

export const SERVICES_INTRO = {
  eyebrow: 'Innova Services',
  heading: 'Your website, email and IT, looked after.',
  body: 'Innova Services is Meco Innova’s managed IT line. We set things up, host them and fix them when they break, and you deal with the same small Lusaka team every time.',
}

export const SERVICES: Service[] = [
  {
    icon: Globe,
    title: 'Websites',
    summary: 'Built, hosted and kept up to date.',
    detail: 'Sites that load fast on mobile data, hosted by us, and updated when you message us. No freelancer to chase.',
  },
  {
    icon: Mail,
    title: 'Business email & domains',
    summary: 'Email on your own domain.',
    detail: 'We register or move your domain, set up email so it reaches inboxes instead of spam, and add staff or reset passwords when you need it.',
  },
  {
    icon: Code2,
    title: 'Custom software',
    summary: 'Systems built for one job, and kept running.',
    detail: 'Like the Youth Candidate Tracker we built and maintain for WeCode Zambia and Global Platform Zambia: when off-the-shelf software doesn’t fit, we build it, host it and look after it after launch.',
  },
  {
    icon: ServerCog,
    title: 'IT management',
    summary: 'Accounts, devices and backups, handled.',
    detail: 'We keep track of who has access to what, keep your backups off-site, and are a WhatsApp message away when something stops working.',
  },
]

export const PROCESS_HEADING = 'How a job runs.'

export const PROCESS = [
  { step: '01', title: 'Talk', body: 'Tell us what you have and what’s not working, on a call or on WhatsApp.' },
  { step: '02', title: 'Plan', body: 'You get a written scope, a price in Kwacha and a date.' },
  { step: '03', title: 'Build', body: 'We set it up or build it, and send you progress as we go.' },
  { step: '04', title: 'Run', body: 'We stay on to host, maintain and support it.' },
]
