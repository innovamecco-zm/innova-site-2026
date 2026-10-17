export interface FaqItem {
  q: string
  a: string
  /** Substrings of `a` to render as links: { text: href }. A value of 'zed-whatsapp' uses the Zed CRM WhatsApp link. */
  links?: Record<string, string>
}

export const ZED_FAQ: FaqItem[] = [
  {
    q: 'Is there a free trial?',
    a: 'Yes. Every plan is free for the first 3 months, and you don’t need a credit card. Sign up at zedcrms.com.',
    links: { 'zedcrms.com': 'https://zedcrms.com/register' },
  },
  {
    q: 'How do I pay?',
    a: 'In Kwacha, by Airtel Money, MTN MoMo, Zamtel Kwacha, or cash.',
  },
  {
    q: 'Why is it priced in Kwacha?',
    a: 'Because that is what you earn in. You do not lose money to exchange rates or card fees on a dollar subscription.',
  },
  {
    q: 'Can I use it on my phone?',
    a: 'Yes. Zed CRM installs as an app (a PWA) on Android and iPhone, straight from the browser.',
  },
  {
    q: 'Where is my data kept?',
    a: 'Each business has its own separate database, with off-server backups. Your data is never mixed with another company’s.',
  },
  {
    q: 'Can you help us move from spreadsheets?',
    a: 'Yes. Message the Zed CRM team on WhatsApp and we’ll help you bring your existing contacts and leads across.',
    links: { WhatsApp: 'zed-whatsapp' },
  },
]
