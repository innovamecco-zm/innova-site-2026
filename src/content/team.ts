export interface TeamMember {
  name: string
  role: string
  /** TODO(placeholder): replace with a real square 2x WebP in /public/team/ and update the path. */
  photo: string
}

export const TEAM: TeamMember[] = [
  { name: 'Daliso Banda', role: 'Founder — Operations & Development', photo: '/team/daliso-banda.svg' },
  { name: 'Memory Mupotola', role: 'Co-founder — Marketing', photo: '/team/memory-mupotola.svg' },
  { name: 'Chimwemwe Banda', role: 'Client Success & Support', photo: '/team/chimwemwe-banda.svg' },
]

export const ABOUT = {
  eyebrow: 'About',
  heading: 'Three people in Lusaka, building software for Zambian businesses.',
  mission:
    'We make software and IT that Zambian businesses can afford, pay for in Kwacha, and get help with from someone they can actually reach.',
  storyHeading: 'Our story',
  // TODO(owner): confirm — owner to supply the year founded and how it started; current paragraphs are a draft.
  story: [
    'Meco Innova started in Lusaka building websites and running IT for local companies. We kept meeting businesses that tracked customers in notebooks, spreadsheets and WhatsApp threads, because the tools made for them were priced in dollars and designed for somewhere else.',
    'So we built Zed CRM: a CRM priced in Kwacha, that works on a phone, and keeps each business’s data in its own database. We run it ourselves, alongside the managed IT work the company started with.',
  ],
  teamHeading: 'The team',
}
