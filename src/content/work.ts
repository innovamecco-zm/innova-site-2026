export interface CaseStudy {
  slug: string
  title: string
  client: string
  summary: string
  tags: string[]
  /** Accent used for the abstract card art. */
  accent: 'blue' | 'red'
  /** Optional small figures shown on the card. */
  stats?: { items: string[]; caption: string }
  /** Optional external link, shown as "Visit site". */
  href?: string
}

export const WORK_INTRO = {
  eyebrow: 'Selected work',
  heading: 'Client work.',
  body: 'A civic platform for Zambia’s 2026 elections, and the website, email and IT for a Lusaka procurement firm.',
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'youth-candidate-tracker',
    title: 'Youth Candidate Tracker',
    client: 'For WeCode Zambia and Global Platform Zambia',
    summary:
      'A non-partisan directory of the young candidates, aged 18 to 35, who stood in Zambia’s August 2026 General Election. Voters could search by name and filter by party, position, province, district, constituency and ward, and the site now carries the results. Owned by WeCode Zambia and Global Platform Zambia; built and maintained by Meco Innova.',
    tags: ['Civic tech', 'Search & filters', 'Election results'],
    accent: 'red',
    // Read from the live site on 17 Oct 2026 — update as the directory grows.
    stats: { items: ['222 candidates', '84 constituencies', '10 provinces'], caption: 'As of October 2026' },
    href: 'https://youthcandidates-zm.org',
  },
  {
    slug: 'gentlemans-resources',
    title: 'Gentleman’s Resources Ltd',
    client: 'Managed IT client · Procurement',
    summary: 'Gentleman’s Resources is a Lusaka procurement firm. We run its website and business email and look after its IT.',
    tags: ['Website', 'Email', 'IT management'],
    accent: 'blue',
  },
]
