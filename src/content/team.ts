export interface TeamMember {
  name: string
  role: string
  /** Square 1280px WebP in /public/team/. */
  photo: string
}

export const TEAM: TeamMember[] = [
  { name: 'Daliso Banda', role: 'Operations & Development', photo: '/team/daliso-banda.webp' },
  { name: 'Memory Mupotola', role: 'Marketing', photo: '/team/memory-mupotola.webp' },
  { name: 'Chimwemwe Banda', role: 'Client Success & Support', photo: '/team/chimwemwe-banda.webp' },
]

export const ABOUT = {
  eyebrow: 'About',
  heading: 'A Lusaka team building software for Zambian businesses.',
  mission:
    'We make software and IT that Zambian businesses can afford, pay for in Kwacha, and get help with from someone they can actually reach.',
  storyHeading: 'Our story',
  // Founded 2026 (confirmed by the owner, 20 Oct 2026).
  story: [
    'We founded Meco Innova in Lusaka in 2026 to build software and run IT for Zambian businesses. Again and again we met companies tracking customers in notebooks, spreadsheets and WhatsApp threads, because the tools made for them were priced in dollars and designed for somewhere else.',
    'So we built Zed CRM: a CRM priced in Kwacha, that works on a phone, and keeps each business’s data separate. We run it ourselves, alongside the websites, email and IT we look after for our clients.',
  ],
  teamHeading: 'The team',
}
