/**
 * Zed CRM pricing, in Kwacha per month.
 * Confirmed 17 Oct 2026 against the live zedcrms.com pricing page and the owner.
 */
export interface Plan {
  name: string
  price: number
  blurb: string
  features: string[]
}

export const CURRENCY = 'K'

/** Included on every plan (listed under each plan's limits). */
const ALL_PLANS = ['Email from your own domain', 'Email integration', 'Reporting & dashboard']

export const PLANS: Plan[] = [
  {
    name: 'Starter',
    price: 50,
    blurb: 'For a small team running its first CRM.',
    features: ['Up to 3 users', 'Up to 500 leads', 'Up to 200 contacts', ...ALL_PLANS],
  },
  {
    name: 'Growth',
    price: 150,
    blurb: 'For teams with more people and more leads.',
    features: ['Up to 10 users', 'Up to 2,000 leads', 'Up to 5,000 contacts', ...ALL_PLANS],
  },
  {
    name: 'Pro',
    price: 500,
    blurb: 'For larger teams that want no caps and priority support.',
    features: ['Unlimited users, leads and contacts', ...ALL_PLANS, 'Priority support'],
  },
]
