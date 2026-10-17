# Copy audit: mecoinnova.com rebuild (branch `feat/3d-rebuild`)

Read-only audit. No code or copy was changed. Strings are verbatim from the prerendered HTML in `dist/` (built from the current working tree), plus client-only states read from source. Link targets are shown as rendered.

**Shorthand used in the Source column**
- `site` = `src/content/site.ts`, `home` = `src/content/home.ts`, `nav` = `src/content/nav.ts`, `products` = `src/content/products.ts`, `pricing` = `src/content/pricing.ts`, `faq` = `src/content/faq.ts`, `services` = `src/content/services.ts`, `work` = `src/content/work.ts`, `team` = `src/content/team.ts`, `seo` = `src/content/seo.ts`
- Component paths are relative to `src/`.
- `WA` = `https://wa.me/260767030735?text=Hi%20Meco%20Innova` (prefilled message: **"Hi Meco Innova"**)
- `SIGNUP` = `https://zedcrms.com/register`

---

## 1. Copy inventory

### 1.0 Global (rendered on every route)

#### Global > Skip link
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Skip link (visible on focus) | Skip to content | `#main` | `components/layout/Layout.tsx` |

#### Global > Nav (desktop)
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Logo link aria-label | Meco Innova — home | `/` | `components/layout/Nav.tsx` |
| Logo wordmark | Meco Innova | — | `components/brand/Logo.tsx` (`Logo`) |
| Logo wordmark dot (gold) | . | — | `components/brand/Logo.tsx` |
| Nav landmark aria-label | Main | — | `components/layout/Nav.tsx` |
| Nav link | Products | `/products/zed-crm` | `nav` |
| Nav link | Services | `/services` | `nav` |
| Nav link | Work | `/work` | `nav` |
| Nav link | About | `/about` | `nav` |
| Nav link | Contact | `/contact` | `nav` |
| Ghost button | Talk on WhatsApp | `WA` (new tab) | `components/layout/Nav.tsx` |
| Primary button | Try Zed CRM | `SIGNUP` (new tab) | `components/layout/Nav.tsx` |
| Menu button aria-label (closed) | Open menu | toggles `#mobile-menu` | `components/layout/Nav.tsx` |
| Menu button aria-label (open) | Close menu | toggles `#mobile-menu` | `components/layout/Nav.tsx` |

#### Global > Mobile menu sheet (client-only; opens under 1024px)
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Nav landmark aria-label | Mobile | — | `components/layout/Nav.tsx` |
| Link | Products | `/products/zed-crm` | `nav` |
| Link | Services | `/services` | `nav` |
| Link | Work | `/work` | `nav` |
| Link | About | `/about` | `nav` |
| Link | Contact | `/contact` | `nav` |
| Primary button | Try Zed CRM | `SIGNUP` | `components/layout/Nav.tsx` |
| Ghost button | Talk on WhatsApp | `WA` | `components/layout/Nav.tsx` |

#### Global > Floating WhatsApp button
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Visible text | *(none; icon only)* | `WA` (new tab) | `components/layout/WhatsAppFab.tsx` |
| aria-label | Chat with Meco Innova on WhatsApp | — | `components/layout/WhatsAppFab.tsx` |
| Prefilled WhatsApp message | Hi Meco Innova | — | `site` (`WHATSAPP_CHAT_URL`) |

#### Global > Footer
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Logo link aria-label | Meco Innova — home | `/` | `components/layout/Footer.tsx` |
| Logo wordmark | Meco Innova. | — | `components/brand/Logo.tsx` |
| Descriptor | A Lusaka software company. We build and run Zed CRM, and manage websites, email and IT for growing Zambian businesses. | — | `site` (`SITE.descriptor`) |
| Column heading | Products | — | `nav` (`FOOTER_LINKS`) |
| Link | Zed CRM | `/products/zed-crm` | `nav` |
| Link | Pricing | `/products/zed-crm#pricing` | `nav` |
| Column heading | Company | — | `nav` |
| Link | Services | `/services` | `nav` |
| Link | Work | `/work` | `nav` |
| Link | About | `/about` | `nav` |
| Link | Contact | `/contact` | `nav` |
| Column heading | Contact | — | `components/layout/Footer.tsx` |
| Link | WhatsApp +260 767 030 735 | `WA` (new tab) | `components/layout/Footer.tsx` + `site` |
| Link | hello@mecoinnova.com | `mailto:hello@mecoinnova.com` | `site` |
| Text | Lusaka, Zambia | — | `site` |
| Copyright (year computed at runtime) | © 2026 Meco Innova Ltd. Lusaka, Zambia. | — | `components/layout/Footer.tsx` + `site` |

#### Global > Head and structured data (same on every route unless noted)
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| og:site_name | Meco Innova | — | `entry-server.tsx` |
| og:image | *(image)* | `https://mecoinnova.com/og-image.png` | `entry-server.tsx`, image from `scripts/generate-assets.mjs` |
| og:image:alt | Meco Innova logo: overlapping red and blue circles | — | `entry-server.tsx` |
| OG image text (rendered into PNG) | Meco Innova. / Software and IT for Zambian businesses / mecoinnova.com · Lusaka, Zambia | — | `scripts/generate-assets.mjs` |
| JSON-LD Organization `name` | Meco Innova Ltd | — | `entry-server.tsx` + `site` |
| JSON-LD Organization `alternateName` | Meco Innova | — | `entry-server.tsx` |
| JSON-LD Organization `url` | https://mecoinnova.com | — | `site` |
| JSON-LD Organization `logo` | https://mecoinnova.com/logo.png | — | `entry-server.tsx` |
| JSON-LD Organization `email` | hello@mecoinnova.com | — | `site` |
| JSON-LD Organization `contactPoint` | customer support · +260767030735 · https://wa.me/260767030735 · areaServed ZM · en | — | `entry-server.tsx` |
| JSON-LD Organization `description` | *(not set)* | — | — |
| JSON-LD LocalBusiness `name` | Meco Innova Ltd | — | `entry-server.tsx` |
| JSON-LD LocalBusiness `url` | https://mecoinnova.com | — | `entry-server.tsx` |
| JSON-LD LocalBusiness `priceRange` | K | — | `entry-server.tsx` |
| JSON-LD LocalBusiness `description` | *(not set)* | — | — |
| JSON-LD SoftwareApplication `name` (on `/` and `/products/zed-crm` only) | Zed CRM | — | `entry-server.tsx` + `site` |
| JSON-LD SoftwareApplication `url` | https://zedcrms.com | — | `site` |
| JSON-LD SoftwareApplication `description` | A Kwacha-priced CRM for Zambian SMEs: leads and pipeline, contacts, quotations, email inside the CRM, click-to-call and WhatsApp. | — | `entry-server.tsx` |
| JSON-LD SoftwareApplication `operatingSystem` | Web, Android, iOS (PWA) | — | `entry-server.tsx` |
| JSON-LD SoftwareApplication `offers` | price "299", priceCurrency "ZMW", category "subscription" | — | `pricing` (Starter) |
| JSON-LD SoftwareApplication `publisher` | → Meco Innova Organization `@id` | — | `entry-server.tsx` |

#### Global > Final CTA band (rendered on `/`, `/products/zed-crm`, `/services`, `/work`, `/about`)
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| H2 | Ready to run your business on better software? | — | `home` (`FINAL_CTA`) |
| Primary button | Start a free Zed CRM trial | `SIGNUP` (new tab) | `home` |
| Ghost button | Talk on WhatsApp | `WA` (new tab) | `home` |

---

### 1.1 Route `/` (Home)

#### / > Head
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| `<title>` / og:title / twitter:title | Meco Innova — Software and IT for Zambian businesses | — | `seo` |
| meta description / og:description / twitter:description | Meco Innova builds Zed CRM, a Kwacha-priced CRM for SMEs, and manages websites, business email and IT for growing companies across Zambia. | — | `seo` |
| canonical / og:url | https://mecoinnova.com/ | — | `seo` |

#### / > Hero
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Eyebrow | Meco Innova · Lusaka | — | `home` (`HERO`) |
| H1 | Software built for how Zambian businesses actually work. | — | `home` |
| Sub | Meco Innova builds and runs Zed CRM — a Kwacha-priced CRM for SMEs — and manages websites, email and IT for growing companies across Zambia. | — | `home` |
| Primary CTA (magnetic) | Start a free Zed CRM trial | `SIGNUP` (new tab) | `home` |
| Secondary CTA | Book a call | `/contact` | `home` |
| Trust list aria-label | About us | — | `components/home/Hero.tsx` |
| Trust item | Lusaka-based | — | `site` (`TRUST_LINE`) |
| Trust item | PACRA registered | — | `site` |
| Trust item | Priced in Kwacha | — | `site` |
| 3D scene / poster | *(decorative, aria-hidden; no text)* | — | `components/three/*` |

#### / > Recognition strip
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Section aria-label | Recognition | — | `components/home/Recognition.tsx` |
| Text (with award icon) | Selected winning innovation — FAEO Women in Engineering, UNESCO Africa Engineering Week 2026, Dar es Salaam. | — | `site` (`RECOGNITION`) |

#### / > Products
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Eyebrow | Products | — | `products` (`ZED_INTRO.eyebrow`) |
| H2 | One product we run every day. | — | `components/home/Products.tsx` |
| Card lockup | Zed CRM | — | `components/brand/Logo.tsx` (`ZedLogo`) |
| Card H3 | The CRM for Zambian SMEs, priced in Kwacha. | — | `products` (`ZED_INTRO.tagline`) |
| Card body | Leads, contacts, quotes and email in one place your whole team can use, on a laptop or a phone. | — | `products` |
| Feature list item | Leads & pipeline | — | `products` (`ZED_FEATURES`) |
| Feature list item | Contacts | — | `products` |
| Feature list item | Quotations | — | `products` |
| Feature list item | Email inside the CRM | — | `products` |
| Feature list item | Click-to-call & WhatsApp | — | `products` |
| Feature list item | Works on your phone | — | `products` |
| Feature list item | Your data, kept separate | — | `products` |
| Pricing teaser | Plans from K299/month · 14-day free trial | — | `site` (`PRICING_TEASER`, `ZED_CRM.trialDays`) |
| Button | Start free trial | `SIGNUP` (new tab) | `components/home/Products.tsx` |
| Ghost button | See Zed CRM | `/products/zed-crm` | `components/home/Products.tsx` |
| Screenshot group aria-label | Zed CRM screenshots | — | `components/home/ScreenStack.tsx` |
| Image alt (`/screens/zed-contact.svg`) | Zed CRM contact record with an activity timeline | — | `products` (`ZED_SCREENS`) |
| Image alt (`/screens/zed-pipeline.svg`) | Zed CRM pipeline board with deals grouped by stage | — | `products` |
| Image alt (`/screens/zed-mobile.svg`) | Zed CRM installed as an app on a phone | — | `products` |
| Marketplace badge | Coming soon | — | `site` (`MARKETPLACE.name`) |
| Marketplace H3 | A marketplace that puts Lusaka market stalls online. | — | `site` |
| Marketplace date | Planned for November 2026. | — | `site` |
| Marketplace link | Get notified | `/contact` | `components/home/Products.tsx` |

#### / > Innova Services
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Eyebrow | Innova Services | — | `services` (`SERVICES_INTRO`) |
| H2 | Managed IT for growing companies. | — | `services` |
| Body | We look after the tech your business runs on, so your team can get on with the work. | — | `services` |
| Ghost button | All services | `/services` | `pages/Home.tsx` |
| Card H3 | Websites | — | `services` |
| Card text | Design, build, hosting, maintenance. | — | `services` |
| Card H3 | Business email & domains | — | `services` |
| Card text | Setup and ongoing support. | — | `services` |
| Card H3 | Custom software | — | `services` |
| Card text | Web apps and platforms built to spec. | — | `services` |
| Card H3 | IT management | — | `services` |
| Card text | We run your tech so you don’t have to. | — | `services` |

#### / > Selected work
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Eyebrow | Selected work | — | `work` (`WORK_INTRO`) |
| H2 | Things we build and run. | — | `work` |
| Ghost button | All work | `/work` | `pages/Home.tsx` |
| Card 1 client line | For WeCode Zambia and Global Platform Zambia | — | `work` |
| Card 1 H3 | Youth Candidate Tracker | *(no link)* | `work` |
| Card 1 summary | A civic platform for Zambia’s 2026 elections. Owned by WeCode Zambia and Global Platform Zambia; built and maintained by Meco Innova. | — | `work` |
| Card 1 tags (aria-label "Tags") | Civic tech · Web platform · Maintenance | — | `work` |
| Card 2 client line | Managed IT client | — | `work` |
| Card 2 H3 | Gentleman’s Resources Ltd | *(no link)* | `work` |
| Card 2 summary | Website, business email and IT, run end to end by Meco Innova. | — | `work` |
| Card 2 tags | Website · Email · IT management | — | `work` |
| Card 3 client line | Our own product | — | `work` |
| Card 3 H3 (whole card is a link) | Zed CRM | `/products/zed-crm` | `work` |
| Card 3 summary | A multi-tenant SaaS CRM for Zambian SMEs, with a separate database for every business. | — | `work` |
| Card 3 tags | SaaS · Multi-tenant · PWA | — | `work` |

#### / > Why Meco Innova
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Eyebrow | Why Meco Innova | — | `home` (`WHY`) |
| H2 | Local, built properly, and easy to reach. | — | `home` |
| H3 | Local | — | `home` |
| Body | A Lusaka team, Kwacha pricing, and mobile money on the roadmap. We work the way your customers pay. | — | `home` |
| H3 | Built properly | — | `home` |
| Body | A modern stack, off-server backups and HTTPS everywhere. The boring parts are done right. | — | `home` |
| H3 | Human support | — | `home` |
| Body | Real people on WhatsApp. Message us and someone who knows your setup answers. | — | `home` |

#### / > Final CTA band
See 1.0, "Final CTA band".

---

### 1.2 Route `/products/zed-crm`

#### /products/zed-crm > Head
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| `<title>` / og:title / twitter:title | Zed CRM — The Kwacha-priced CRM for Zambian SMEs \| Meco Innova | — | `seo` |
| meta description / og / twitter | Leads, pipeline, contacts, quotations and email in one CRM. Works on your phone, priced in Kwacha. Start a free 14-day trial. | — | `seo` |
| canonical / og:url | https://mecoinnova.com/products/zed-crm | — | `seo` |
| og:image | Meco Innova OG image (same as every route) | — | `entry-server.tsx` |

#### /products/zed-crm > Page hero
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Eyebrow | Zed CRM | — | `pages/ZedCrm.tsx` |
| H1 | The CRM for Zambian SMEs, priced in Kwacha. | — | `products` (`ZED_INTRO.tagline`) |
| Body | Leads, contacts, quotes and email in one place your whole team can use, on a laptop or a phone. | — | `products` |
| Primary button | Start a free 14-day trial | `SIGNUP` (new tab) | `pages/ZedCrm.tsx` + `site` |
| Ghost button | See pricing | `/products/zed-crm#pricing` | `pages/ZedCrm.tsx` |

#### /products/zed-crm > On any screen
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Lockup | Zed CRM | — | `components/brand/Logo.tsx` (`ZedLogo`) |
| Eyebrow | On any screen | — | `pages/ZedCrm.tsx` |
| H2 | Your whole pipeline, in your pocket. | — | `pages/ZedCrm.tsx` |
| Body | Use Zed CRM in the browser at the office, then install it on your phone as an app for when you are out with customers. | — | `pages/ZedCrm.tsx` |
| Screenshot group + 3 image alts | *(same as Home > Products)* | — | `products` |

#### /products/zed-crm > Features
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Eyebrow | Features | — | `pages/ZedCrm.tsx` |
| H2 | What is inside. | — | `pages/ZedCrm.tsx` |
| H3 | Leads & pipeline | — | `products` |
| Body | Track every lead from first contact to won, on a pipeline your team can read at a glance. | — | `products` |
| H3 | Contacts | — | `products` |
| Body | People and organisations in one place, with the full history of every conversation. | — | `products` |
| H3 | Quotations | — | `products` |
| Body | Build and send quotes in Kwacha straight from the deal you are working on. | — | `products` |
| H3 | Email inside the CRM | — | `products` |
| Body | Each business gets its own inbox in Zed CRM, so emails sit next to the customer they belong to. | — | `products` |
| H3 | Click-to-call & WhatsApp | — | `products` |
| Body | Call or message a customer from their record in one tap. | — | `products` |
| H3 | Works on your phone | — | `products` |
| Body | Install Zed CRM as an app (PWA) on Android or iPhone. No app store needed. | — | `products` |
| H3 | Your data, kept separate | — | `products` |
| Body | Every business runs on its own separate database. Your records never share a table with anyone else’s. | — | `products` |

#### /products/zed-crm > Pricing (`#pricing`)
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Eyebrow | Pricing | — | `pages/ZedCrm.tsx` |
| H2 | Priced in Kwacha. Every plan starts free. | — | `pages/ZedCrm.tsx` |
| Body | 14-day free trial on every plan. Prices per business, per month. | — | `pages/ZedCrm.tsx` + `site` |
| Starter H3 | Starter | — | `pricing` |
| Starter price | K299 /month | — | `pricing` |
| Starter blurb | For small teams getting started with a CRM. | — | `pricing` |
| Starter features | Up to 3 users · Up to 500 leads · Up to 200 contacts · Email inside the CRM · Basic reporting | — | `pricing` |
| Starter button | Start free trial | `SIGNUP` (new tab) | `pages/ZedCrm.tsx` |
| Growth H3 | Growth | — | `pricing` |
| Growth badge | Most popular | — | `pages/ZedCrm.tsx` (shown when `highlighted`) |
| Growth price | Talk to us | — | `pages/ZedCrm.tsx` (`price: null`) |
| Growth blurb | For growing teams that need more room and integrations. | — | `pricing` |
| Growth features | Up to 10 users · Up to 2,000 leads · Up to 5,000 contacts · WhatsApp integration · Advanced reporting · Custom fields | — | `pricing` |
| Growth button | Ask on WhatsApp | `WA` (new tab) | `pages/ZedCrm.tsx` |
| Pro H3 | Pro | — | `pricing` |
| Pro price | Talk to us | — | `pages/ZedCrm.tsx` |
| Pro blurb | No limits, with priority support. | — | `pricing` |
| Pro features | Unlimited users, leads and contacts · Click-to-call · Custom dashboards · Industry modules · Dedicated support | — | `pricing` |
| Pro button | Ask on WhatsApp | `WA` (new tab) | `pages/ZedCrm.tsx` |

#### /products/zed-crm > FAQ
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Eyebrow | FAQ | — | `pages/ZedCrm.tsx` |
| H2 | Questions we get asked. | — | `pages/ZedCrm.tsx` |
| Q | Is there a free trial? | accordion | `faq` |
| A | Yes. Every plan starts with a 14-day free trial. Sign up at zedcrms.com. | *(plain text, not a link)* | `faq` |
| Q | Why is it priced in Kwacha? | accordion | `faq` |
| A | Because that is what you earn in. You do not lose money to exchange rates or card fees on a dollar subscription. | — | `faq` |
| Q | Can I use it on my phone? | accordion | `faq` |
| A | Yes. Zed CRM installs as an app (a PWA) on Android and iPhone, straight from the browser. | — | `faq` |
| Q | Where is my data kept? | accordion | `faq` |
| A | Each business has its own separate database, with off-server backups. Your data is never mixed with another company’s. | — | `faq` |
| Q | Can you help us move from spreadsheets? | accordion | `faq` |
| A | Yes. Talk to us on WhatsApp and we will help you bring your existing contacts and leads across. | *(plain text, not a link)* | `faq` |

#### /products/zed-crm > Final CTA band
See 1.0.

---

### 1.3 Route `/services`

#### /services > Head
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| `<title>` / og / twitter | Websites, business email and managed IT in Lusaka \| Meco Innova | — | `seo` |
| meta description / og / twitter | Innova Services: websites, business email and domains, custom software and IT management for growing companies in Zambia. | — | `seo` |
| canonical / og:url | https://mecoinnova.com/services | — | `seo` |

#### /services > Page hero
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Eyebrow | Innova Services | — | `services` |
| H1 | Managed IT for growing companies. | — | `services` |
| Body | We look after the tech your business runs on, so your team can get on with the work. | — | `services` |
| Primary button | Book a call | `/contact` | `pages/Services.tsx` |

#### /services > Services list
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| H2 (screen-reader only) | Our services | — | `pages/Services.tsx` |
| H3 | Websites | — | `services` |
| Summary | Design, build, hosting, maintenance. | — | `services` |
| Detail | Fast, clear websites that work on any phone. We host them, keep them updated, and fix problems early. | — | `services` |
| H3 | Business email & domains | — | `services` |
| Summary | Setup and ongoing support. | — | `services` |
| Detail | Email on your own domain, set up so it lands in inboxes, with someone to call when a password or device goes wrong. | — | `services` |
| H3 | Custom software | — | `services` |
| Summary | Web apps and platforms built to spec. | — | `services` |
| Detail | When off-the-shelf does not fit, we build the system you need and keep running it after launch. | — | `services` |
| H3 | IT management | — | `services` |
| Summary | We run your tech so you don’t have to. | — | `services` |
| Detail | Accounts, devices, backups and security, handled by one team that knows your setup. | — | `services` |

#### /services > How we work
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Eyebrow | How we work | — | `pages/Services.tsx` |
| H2 | Four steps, no surprises. | — | `pages/Services.tsx` |
| Step 01 H3 | Talk | — | `services` (`PROCESS`) |
| Step 01 body | A short call or WhatsApp chat about what you need and what you already have. | — | `services` |
| Step 02 H3 | Plan | — | `services` |
| Step 02 body | A written scope with a Kwacha price and a timeline. | — | `services` |
| Step 03 H3 | Build | — | `services` |
| Step 03 body | We set up, build or migrate, and keep you updated as we go. | — | `services` |
| Step 04 H3 | Run | — | `services` |
| Step 04 body | We stay on to host, maintain and support it. Real people, on WhatsApp. | — | `services` |

#### /services > Final CTA band
See 1.0. The primary CTA here is "Start a free Zed CRM trial" (see brand flag B1).

---

### 1.4 Route `/work`

#### /work > Head
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| `<title>` / og / twitter | Selected work \| Meco Innova | — | `seo` |
| meta description / og / twitter | Case studies from Meco Innova: a civic platform for the 2026 elections, managed IT for Zambian companies, and Zed CRM. | — | `seo` |
| canonical / og:url | https://mecoinnova.com/work | — | `seo` |

#### /work > Page hero
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Eyebrow | Selected work | — | `work` |
| H1 | Things we build and run. | — | `work` |
| Body | A civic platform, a managed IT client, and the CRM we run ourselves. | — | `pages/Work.tsx` |

#### /work > Case studies
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| H2 (screen-reader only) | Case studies | — | `pages/Work.tsx` |
| Cards 1–3 | *(identical to Home > Selected work, all 3 cards)* | same | `work` |

#### /work > Final CTA band
See 1.0.

---

### 1.5 Route `/about`

#### /about > Head
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| `<title>` / og / twitter | About Meco Innova — Lusaka software company | — | `seo` |
| meta description / og / twitter | Meet the Lusaka team behind Zed CRM and Innova Services, and why we build software priced in Kwacha. | — | `seo` |
| canonical / og:url | https://mecoinnova.com/about | — | `seo` |

#### /about > Page hero
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Eyebrow | About | — | `team` (`ABOUT`) |
| H1 | A Lusaka software company. | — | `team` |
| Body (mission) | Our mission is to give Zambian businesses software and IT that fit how they work: priced in Kwacha, supported by people they can reach, and built to last. | — | `team` |

#### /about > Our story
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Eyebrow | Our story | — | `team` |
| H2 | Why we built this. | — | `pages/About.tsx` |
| Paragraph 1 | Meco Innova started in Lusaka building websites and running IT for local companies. We kept meeting businesses that tracked customers in notebooks, spreadsheets and WhatsApp threads, because the tools made for them were priced in dollars and designed for somewhere else. | — | `team` |
| Paragraph 2 | So we built Zed CRM: a CRM priced in Kwacha, that works on a phone, and keeps each business’s data in its own database. We run it ourselves, alongside the managed IT work the company started with. | — | `team` |
| Recognition card | Selected winning innovation — FAEO Women in Engineering, UNESCO Africa Engineering Week 2026, Dar es Salaam. | — | `site` (`RECOGNITION`) |

#### /about > The team
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Eyebrow | The team | — | `team` |
| H2 | Three people, one phone number. | — | `pages/About.tsx` |
| Image alt | Portrait of Daliso Banda | `/team/daliso-banda.svg` | `pages/About.tsx` + `team` |
| H3 | Daliso Banda | — | `team` |
| Role | Founder — Operations & Development | — | `team` |
| Image alt | Portrait of Memory Mupotola | `/team/memory-mupotola.svg` | `pages/About.tsx` + `team` |
| H3 | Memory Mupotola | — | `team` |
| Role | Co-founder — Marketing | — | `team` |
| Image alt | Portrait of Chimwemwe Banda | `/team/chimwemwe-banda.svg` | `pages/About.tsx` + `team` |
| H3 | Chimwemwe Banda | — | `team` |
| Role | Client Success & Support | — | `team` |
| Placeholder image text (inside SVGs) | DB / MM / CB · PHOTO PLACEHOLDER | — | `scripts/generate-assets.mjs` |

#### /about > Final CTA band
See 1.0.

---

### 1.6 Route `/contact`

#### /contact > Head
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| `<title>` / og / twitter | Contact Meco Innova — WhatsApp +260 767 030 735 | — | `seo` |
| meta description / og / twitter | Talk to Meco Innova about Zed CRM, websites, email or IT. Message us on WhatsApp or send the form. | — | `seo` |
| canonical / og:url | https://mecoinnova.com/contact | — | `seo` |

#### /contact > Page hero
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Eyebrow | Contact | — | `pages/Contact.tsx` |
| H1 | Tell us what you need. | — | `pages/Contact.tsx` |
| Body | Send the form and we will reply within one working day. For anything quick, WhatsApp is faster. | — | `pages/Contact.tsx` |

#### /contact > Form
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| H2 | Send us a message | — | `pages/Contact.tsx` |
| Label | Name | required | `pages/Contact.tsx` |
| Label | Business (optional) | — | `pages/Contact.tsx` |
| Label | Email | required | `pages/Contact.tsx` |
| Label | Phone (optional) | — | `pages/Contact.tsx` |
| Placeholder (Phone) | +260 | — | `pages/Contact.tsx` |
| Label | What do you need? | required | `pages/Contact.tsx` |
| Select option (disabled default) | Choose one | — | `pages/Contact.tsx` |
| Select options | Zed CRM · A website · Business email & domains · Custom software · IT management · Marketplace updates · Something else | — | `pages/Contact.tsx` (`NEEDS`) |
| Label | Message | required | `pages/Contact.tsx` |
| Honeypot label (off-screen, aria-hidden) | Leave this empty | — | `pages/Contact.tsx` |
| Privacy note | We only use your details to reply to you. | — | `pages/Contact.tsx` |
| Submit button | Send message | POST → `VITE_CONTACT_ENDPOINT` | `pages/Contact.tsx` |
| Submit button (sending, client-only) | Sending… | — | `pages/Contact.tsx` |
| Success H2 (client-only) | Thanks — message received. | — | `pages/Contact.tsx` |
| Success body (client-only) | We will get back to you within one working day. | — | `pages/Contact.tsx` |
| Success link button (client-only) | Send another message | resets form | `pages/Contact.tsx` |
| Error alert (client-only) | Something went wrong sending your message. Please try again, or message us on WhatsApp. | "WhatsApp" → `WA` | `pages/Contact.tsx` |

#### /contact > WhatsApp card
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| H2 | Talk on WhatsApp | — | `pages/Contact.tsx` |
| Body | Scan with your phone, or tap the button. | — | `pages/Contact.tsx` |
| QR image alt | QR code that opens a WhatsApp chat with Meco Innova on +260 767 030 735 | QR encodes `https://wa.me/260767030735` (no prefilled text) | `pages/Contact.tsx`, `public/whatsapp-qr.svg` |
| Number | +260 767 030 735 | — | `site` |
| Primary button | Open WhatsApp | `WA` (new tab) | `pages/Contact.tsx` |
| Line + link | Or email hello@mecoinnova.com | `mailto:hello@mecoinnova.com` | `pages/Contact.tsx` + `site` |

*(No Final CTA band on `/contact`.)*

---

### 1.7 Route 404 (`/404.html`, any unknown path)

#### 404 > Head
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| `<title>` / og / twitter | Page not found \| Meco Innova | — | `seo` |
| meta description / og / twitter | This page does not exist. Head back to the Meco Innova home page. | — | `seo` |
| meta robots | noindex | — | `entry-server.tsx` |
| canonical / og:url | https://mecoinnova.com/404 | — | `seo` |

#### 404 > Body
| Element | Text (verbatim) | Link/target | Source file |
|---|---|---|---|
| Poster | *(Meco Innova circles; aria-hidden)* | — | `components/three/HeroPoster.tsx` |
| Eyebrow | Error 404 | — | `pages/NotFound.tsx` |
| H1 | This page doesn’t exist. | — | `pages/NotFound.tsx` |
| Body | The link may be old, or the address mistyped. | — | `pages/NotFound.tsx` |
| Button | Back to home | `/` | `pages/NotFound.tsx` |

*(No Final CTA band on 404.)*

### 1.8 Other routes and non-page text
- No other routes. `/get-started` and `/compliance` from the old site were removed, so they now return the 404 page. There are no redirects.
- `robots.txt`: `User-agent: * / Allow: / / Sitemap: https://mecoinnova.com/sitemap.xml` (`scripts/prerender.mjs`).
- `sitemap.xml` lists: `/`, `/products/zed-crm`, `/services`, `/work`, `/about`, `/contact` (`seo`, `index: true`).
- Placeholder screenshot SVG text: "Zed CRM", "Leads", "PLACEHOLDER SCREENSHOT", "PLACEHOLDER" (`scripts/generate-assets.mjs`, written to `public/screens/`).
- Defined but never rendered: `ZED_CRM.supportEmail` = `support@zedcrms.com` (`site`); `ZED_INTRO.heading` = `Zed CRM` (`products`).

---

## 2. Brand map (Meco Innova vs Zed CRM)

### 2.1 Where "Meco Innova" appears
| Route | Section | Text / usage | File |
|---|---|---|---|
| All | Nav logo | `Logo` lockup "Meco Innova." + aria-label "Meco Innova — home" | `components/layout/Nav.tsx`, `components/brand/Logo.tsx` |
| All | Footer logo, descriptor, copyright | "Meco Innova." / descriptor / "© 2026 Meco Innova Ltd. Lusaka, Zambia." | `components/layout/Footer.tsx`, `site` |
| All | Floating WhatsApp button | aria-label "Chat with Meco Innova on WhatsApp"; prefilled "Hi Meco Innova" | `components/layout/WhatsAppFab.tsx`, `site` |
| All | `<title>` suffix and og:site_name | "… \| Meco Innova" / "Meco Innova" | `seo`, `entry-server.tsx` |
| All | OG image | Meco circles + "Meco Innova." | `public/og-image.png` |
| All | Favicon / apple-touch-icon / logo.png | Meco circles mark | `public/favicon.svg`, `public/apple-touch-icon.png`, `public/logo.png` |
| All | JSON-LD Organization, LocalBusiness | "Meco Innova Ltd" / "Meco Innova" | `entry-server.tsx` |
| All (nav, menu, CTA band, pricing) | Every WhatsApp CTA | Prefilled "Hi Meco Innova" | `site` |
| / | Hero eyebrow | "Meco Innova · Lusaka" | `home` |
| / | Hero sub | "Meco Innova builds and runs Zed CRM — …" | `home` |
| / | Hero visual | 3D or poster of the Meco circles (red/blue/purple) | `components/three/*` |
| / | Work cards 1 & 2 | "built and maintained by Meco Innova", "run end to end by Meco Innova" | `work` |
| / | Why section | "Why Meco Innova" | `home` |
| /work | Same work cards | as above | `work` |
| /about | Story | "Meco Innova started in Lusaka …" | `team` |
| /contact | QR alt, meta | "…chat with Meco Innova…", "Contact Meco Innova — …" | `pages/Contact.tsx`, `seo` |
| 404 | Poster + meta | Meco circles; "…the Meco Innova home page." | `pages/NotFound.tsx`, `seo` |
| /services, /about (meta) | "Innova Services" (sub-brand) | eyebrow and meta descriptions | `services`, `seo` |

### 2.2 Where "Zed CRM" appears
| Route | Section | Text / usage | File |
|---|---|---|---|
| All | Nav primary button | "Try Zed CRM" → zedcrms.com/register | `components/layout/Nav.tsx` |
| All | Mobile menu | "Try Zed CRM" | `components/layout/Nav.tsx` |
| All | Footer | "Zed CRM" link; descriptor "We build and run Zed CRM" | `nav`, `site` |
| /, /products/zed-crm, /services, /work, /about | Final CTA band | "Start a free Zed CRM trial" | `home` |
| /, /products/zed-crm | JSON-LD SoftwareApplication | name "Zed CRM", url zedcrms.com, publisher → Meco Innova | `entry-server.tsx` |
| / | Hero sub + primary CTA | "…runs Zed CRM — a Kwacha-priced CRM…" / "Start a free Zed CRM trial" | `home` |
| / | Products card | `ZedLogo` lockup (#2563EB square + "Zed CRM"), tagline, features, screenshots alts, "See Zed CRM" | `components/home/Products.tsx`, `products` |
| / , /work | Work card 3 | `ZedMark` (#2563EB) + "Zed CRM" / "Our own product" | `components/home/WorkGrid.tsx`, `work` |
| /products/zed-crm | Whole page | eyebrow, `ZedLogo` in "On any screen", features, FAQ, title | `pages/ZedCrm.tsx` |
| /about | Story, meta | "So we built Zed CRM…", "team behind Zed CRM" | `team`, `seo` |
| /contact | Meta, select option | "Talk to Meco Innova about Zed CRM…"; option "Zed CRM" | `seo`, `pages/Contact.tsx` |

### 2.3 Which logo renders where
| Location | Component / asset | Brand |
|---|---|---|
| Nav (all routes) | `Logo` (`LogoMark` circles + "Meco Innova." wordmark) | Meco Innova |
| Footer (all routes) | `Logo` | Meco Innova |
| Home hero | No logo component; the 3D scene / `HeroPoster` is the Meco circles reinterpreted | Meco Innova |
| Home Products card | `ZedLogo` (`ZedMark` + "Zed CRM") | Zed CRM |
| Work card 3 (home, /work) | `ZedMark` only | Zed CRM |
| Product page `/products/zed-crm` | Nav/footer `Logo` (Meco); `ZedLogo` once, in the "On any screen" section; **no Zed logo in the page hero** | Mixed |
| 404 | `HeroPoster` (Meco circles) | Meco Innova |
| Favicon / apple-touch-icon | Meco circles mark on dark square | Meco Innova |
| OG image (all routes, including the Zed CRM page) | Meco circles + "Meco Innova." | Meco Innova |

### 2.4 Brand-blur issues
| # | Route > Section | What is blurred | File |
|---|---|---|---|
| B1 | /services > Final CTA band | On the managed-IT page the closing primary CTA is "Start a free Zed CRM trial" → zedcrms.com, under "Ready to run your business on better software?". A visitor shopping for IT management is sent to the product signup. | `home` (`FINAL_CTA`), used in `pages/Services.tsx` |
| B2 | /about, /work > Final CTA band | The same product CTA closes the company pages. The About page (about Meco Innova Ltd) ends by selling Zed CRM, with no company-level "talk to us" as the primary action. | `home`, `pages/About.tsx`, `pages/Work.tsx` |
| B3 | All > Nav | The company site's single primary nav button is "Try Zed CRM" on every page, including /services and /contact. The company's main action reads as "the CRM". | `components/layout/Nav.tsx` |
| B4 | / > Hero | The H1 is company-level ("Software built for how Zambian businesses actually work.") but the primary, magnetic CTA is product-level ("Start a free Zed CRM trial"). There is no company-level primary action ("Book a call" is secondary). | `home`, `components/home/Hero.tsx` |
| B5 | /products/zed-crm > Pricing (Growth, Pro) | Product-plan buttons "Ask on WhatsApp" open a chat prefilled "Hi Meco Innova". The label is about Zed CRM pricing but the message addresses the company. | `pages/ZedCrm.tsx`, `site` |
| B6 | /products/zed-crm > FAQ | "Talk to us on WhatsApp and we will help you…": "us" is not identified (Zed CRM support or Meco Innova). `support@zedcrms.com` exists in config but is never shown, so it is unclear who supports the product. | `faq`, `site` |
| B7 | /products/zed-crm > Head | og:image (Meco circles + "Meco Innova."), og:site_name "Meco Innova" and the favicon are all company-brand. When the Zed CRM page is shared, the preview shows only the Meco Innova logo. | `entry-server.tsx`, `public/og-image.png` |
| B8 | /products/zed-crm > Page hero | The hero has no Zed CRM logo. It uses the Meco brand gradient glow (purple/blue) and the Meco blue (#0075E2) for the primary button. Zed blue (#2563EB) appears only in the `ZedLogo` lower on the page. Above the fold it is visually a Meco Innova page. | `components/ui/PageHero.tsx`, `src/index.css` (`.btn-primary`) |
| B9 | / > Products card, /products/zed-crm > Pricing (Growth) | Zed CRM cards are framed with `edge-glow`, the Meco Innova logo gradient (blue → purple → red). The Home Products card also has a Zed-blue (#2563EB) glow, so both brands' colours sit in one element. | `components/home/Products.tsx`, `pages/ZedCrm.tsx`, `src/index.css` |
| B10 | / > Products | Eyebrow "Products" (plural, company-level) over H2 "One product we run every day." The marketplace "Coming soon" card sits in the same section. It is unclear whether the marketplace is part of Zed CRM or a separate Meco Innova product. | `products`, `components/home/Products.tsx`, `site` |
| B11 | / > Recognition strip; /about > Story | "Selected winning innovation — FAEO Women in Engineering…" doesn't say *what* was selected (Meco Innova, Zed CRM, the marketplace, or a person). | `site` (`RECOGNITION`) |
| B12 | /services (eyebrow, meta), /about (meta) | "Innova Services" is a third name. With "Meco Innova" and "Zed CRM" it can read as a separate company ("Innova") rather than a service line of Meco Innova Ltd. | `services`, `seo` |
| B13 | / > Why Meco Innova > Local | "mobile money on the roadmap": a company-level section states what is most likely a Zed CRM product roadmap item, without saying which. | `home` |
| B14 | / > Work, /work | Zed CRM is listed as a "case study" ("Our own product") alongside client work, which partly mixes product and agency portfolio. Low severity; it's labelled. | `work` |

---

## 3. Generic copy flags

| # | Route > Section | Text (verbatim) | Reason flagged |
|---|---|---|---|
| G1 | / > Hero H1 (also /…title partly) | Software built for how Zambian businesses actually work. | Template pattern "Software built for how [X] actually work(s)"; no specific claim. Supplied by the brief. |
| G2 | All (5 routes) > Final CTA H2 | Ready to run your business on better software? | Interchangeable SaaS/agency CTA; "better" without a comparison. Supplied by the brief. |
| G3 | / > Services H2; /services H1 | Managed IT for growing companies. | Generic category label; "growing companies" also appears in 5 other strings (hero sub, home meta, services meta, footer descriptor, pricing Growth blurb). |
| G4 | / > Services body; /services body | We look after the tech your business runs on, so your team can get on with the work. | Could appear on any MSP site; no specifics (response times, scope, price). |
| G5 | / , /services > IT management summary | We run your tech so you don’t have to. | Cliché "so you don't have to". Supplied by the brief. |
| G6 | / , /services > Business email summary | Setup and ongoing support. | Vague; no detail on what is supported. |
| G7 | / , /services > Custom software summary | Web apps and platforms built to spec. | Generic agency line. |
| G8 | /services > Websites detail | Fast, clear websites that work on any phone. We host them, keep them updated, and fix problems early. | Generic agency promise; "fix problems early" is unmeasured. |
| G9 | /services > Custom software detail | When off-the-shelf does not fit, we build the system you need and keep running it after launch. | Generic agency line. |
| G10 | /services > IT management detail | Accounts, devices, backups and security, handled by one team that knows your setup. | Generic MSP line; no specifics. |
| G11 | /services > How we work H2 | Four steps, no surprises. | Cliché ("no surprises"). |
| G12 | /services > Process steps 01, 03 | A short call or WhatsApp chat about what you need and what you already have. / We set up, build or migrate, and keep you updated as we go. | Standard process filler; describes any agency. |
| G13 | / > Why > Built properly | A modern stack, off-server backups and HTTPS everywhere. The boring parts are done right. | "modern stack" is unspecified; "done right" is unsupported. |
| G14 | / > Why > Human support | Real people on WhatsApp. Message us and someone who knows your setup answers. | Claim without specifics (hours, response time). |
| G15 | / > Why H2 | Local, built properly, and easy to reach. | Mild; summarises the points without adding anything. |
| G16 | /about > Mission | Our mission is to give Zambian businesses software and IT that fit how they work: priced in Kwacha, supported by people they can reach, and built to last. | "Our mission is to…" template; "built to last" cliché. |
| G17 | /about > Story (both paragraphs) | Meco Innova started in Lusaka building websites… / So we built Zed CRM… | Origin story written as a placeholder (marked TODO in `team.ts`). It makes factual claims about the company's history that the owner hasn't confirmed. |
| G18 | / > Work H2; /work H1 | Things we build and run. | Vague portfolio heading. |
| G19 | /work > hero body | A civic platform, a managed IT client, and the CRM we run ourselves. | Restates the three cards; no outcome or specifics. |
| G20 | / > Work card 2 | Website, business email and IT, run end to end by Meco Innova. | No outcome, scope or duration; "end to end" is filler. |
| G21 | /products/zed-crm > On any screen H2 | Your whole pipeline, in your pocket. | Common SaaS cliché. |
| G22 | /products/zed-crm > Features | Track every lead from first contact to won, on a pipeline your team can read at a glance. | "at a glance" cliché. |
| G23 | / > Products body; /products/zed-crm hero body | Leads, contacts, quotes and email in one place your whole team can use, on a laptop or a phone. | "in one place" generic SaaS phrasing. |
| G24 | /products/zed-crm > Features H2 | What is inside. | Generic section label. |
| G25 | /products/zed-crm > Pricing (Growth) | Most popular | **Invented claim**: no usage data backs it, and the plan has no price shown. |
| G26 | /products/zed-crm > Pricing blurbs | For small teams getting started with a CRM. / For growing teams that need more room and integrations. / No limits, with priority support. | Generic tier blurbs. "priority support" contradicts the Pro feature "Dedicated support". |
| G27 | /products/zed-crm > Pricing features | Up to 3 users / 500 leads / 200 contacts; Up to 10 users / 2,000 leads / 5,000 contacts; Unlimited… | Numbers taken from the CRM codebase `PlanSeeder`, not confirmed for marketing. Treat as unverified. |
| G28 | /contact > hero body; success body | …we will reply within one working day. / We will get back to you within one working day. | Service-level promise not confirmed by the owner. |
| G29 | / > Recognition; /about | Selected winning innovation — … | Vague about what won (see B11). "innovation" is on the buzzword list, though here it's part of the award wording. |
| G30 | /products/zed-crm > FAQ H2 | Questions we get asked. | Generic, low severity. |

**Buzzword scan.** None of seamless, cutting-edge, innovative, solutions, empower, leverage, next-level, robust, world-class, transform or unlock appear in rendered copy. "innovation" appears once (the recognition line, G29).

**Invented numbers or testimonials.** No testimonials or customer counts. The only unbacked claims are "Most popular" (G25), the plan limits (G27) and the reply-time promise (G28).

---

## 4. Placeholders and gaps

### 4.1 Unfilled placeholders
| Item | What's shown now | Defined in |
|---|---|---|
| Product screenshots (3) | Generated wireframe SVGs with "PLACEHOLDER SCREENSHOT" / "PLACEHOLDER" text: `/screens/zed-pipeline.svg`, `/screens/zed-contact.svg`, `/screens/zed-mobile.svg` | `products` (`ZED_SCREENS`), files from `scripts/generate-assets.mjs` |
| Team photos (3) | Initials on a gradient with "PHOTO PLACEHOLDER": `/team/daliso-banda.svg`, `/team/memory-mupotola.svg`, `/team/chimwemwe-banda.svg` | `team` |
| Company email | `hello@mecoinnova.com` (assumed address, marked TODO) in footer, contact page and JSON-LD | `site` (`SITE.email`) |
| Contact form endpoint | Not set, so the form shows the error state on submit | `.env` → `VITE_CONTACT_ENDPOINT` (template in `.env.example`) |
| Marketplace name | "Coming soon" (badge in place of a name) | `site` (`MARKETPLACE.name`) |
| About story | Draft paragraphs, marked TODO | `team` (`ABOUT.story`) |
| OG image | Rendered with a fallback system font (Segoe UI/Arial), not Geist; needs a visual check | `public/og-image.png`, `scripts/generate-assets.mjs` |

### 4.2 Prices currently shown
| Price | Where shown | Defined in |
|---|---|---|
| K299/month (Starter) | /products/zed-crm pricing table | `pricing` (`PLANS[0].price`) |
| "Plans from K299/month" | Home > Products card | `site` (`PRICING_TEASER`). This is a **separate hardcoded string**, so it can drift from `pricing.ts`. |
| 299 ZMW | JSON-LD SoftwareApplication offer (`/`, `/products/zed-crm`) | derived from `pricing` |
| Growth: "Talk to us" | Pricing table | `pricing` (`price: null`, TODO) |
| Pro: "Talk to us" | Pricing table | `pricing` (`price: null`, TODO) |
| Note | The CRM codebase `PlanSeeder` lists 50 / 150 / 500 (currency unstated, likely USD for Stripe), which conflicts with K299 | `meco-crm-platform/database/seeders/PlanSeeder.php` (outside this repo) |

### 4.3 Gaps
- **Work case studies are thin.** Youth Candidate Tracker and Gentleman's Resources have no links, images, outcomes or detail pages. `/work` repeats the home grid word for word; the only addition is a one-line intro.
- **"Book a call"** (home hero, /services hero) goes to the contact form; there's no call-booking flow or calendar link, so the label over-promises.
- **"Get notified"** (marketplace) goes to the general contact form. "Marketplace updates" exists as a select option but isn't preselected.
- **No Zed CRM support channel** is shown on the product page (`support@zedcrms.com` is unused).
- **FAQ "Sign up at zedcrms.com"** is plain text, not a link.
- **JSON-LD** Organization and LocalBusiness have no `description`; LocalBusiness `priceRange` is just "K"; there's no street address (city only).
- **Social links:** none on the site (the old site had placeholders, now removed).
- **404 canonical** points to `https://mecoinnova.com/404`, a URL that isn't a real page.
- **Removed routes** `/get-started` and `/compliance` now 404 with no redirect.

### 4.4 Duplicated copy
| Text | Appears in |
|---|---|
| Final CTA band (heading + both buttons) | /, /products/zed-crm, /services, /work, /about (5×, identical) |
| "The CRM for Zambian SMEs, priced in Kwacha." + its body line | Home Products card (H3 + body) and /products/zed-crm hero (H1 + body) |
| Services intro (heading + body) and 4 card summaries | Home and /services |
| All 3 case-study cards | Home and /work |
| Recognition line | Home strip and /about story |
| "Talk on WhatsApp" | Nav, mobile menu, Final CTA band, contact card H2 (4 places on most pages) |
| 14-day free trial | Home Products teaser, product hero button, pricing subhead, FAQ answer, product meta description |
| "growing companies / Zambian businesses / teams" | Hero sub, home meta, services H1/meta, footer descriptor, Growth blurb |

---

## 5. Summary

**Counts**
- Total user-facing strings inventoried: **299 inventory rows** (≈ 330 strings, since some rows group list items such as tags, select options and plan features). This covers visible text, labels, alt text, aria-labels, placeholders, head/meta values and JSON-LD text fields. Global elements (nav, footer, CTA band, head boilerplate) are listed once, not per route.
- Strings flagged as generic or unbacked: **30 flags (G1–G30) covering 37 strings**.
- Brand-blur issues: **14 (B1–B14)**.

**10 worst offenders**
1. **B1:** /services ends with "Start a free Zed CRM trial". The managed-IT page's closing CTA sells the product, not the service.
2. **G25:** "Most popular" on the Growth plan, an invented claim on a plan with no price.
3. **B3 + B4:** the company site's primary action everywhere (nav "Try Zed CRM", hero primary CTA) is the product, with no company-level primary action.
4. **B7 + B8:** the Zed CRM product page is visually and socially a Meco Innova page: Meco OG image and favicon, Meco gradient and Meco-blue CTA in the hero, and no Zed logo above the fold.
5. **G17:** the About "Our story" paragraphs are draft history the owner hasn't confirmed.
6. **B11 / G29:** "Selected winning innovation — …" never says what was selected.
7. **G2:** "Ready to run your business on better software?", generic and repeated on 5 pages.
8. **B5 + B6:** Zed CRM pricing and FAQ route to a WhatsApp chat prefilled "Hi Meco Innova", and "us" is never identified; the Zed support email is unused.
9. **G3 / G4:** "Managed IT for growing companies." / "We look after the tech your business runs on…", interchangeable MSP copy used as both the home section and the /services H1.
10. **G27 + 4.2:** plan limits copied from the CRM seed data, and K299 hardcoded in two places (`pricing.ts` and `PRICING_TEASER`) that can drift apart.

---

## Changes applied (COPY_FIXES.md, 17 Oct 2026)

Applied on `feat/3d-rebuild`. `npm run build`, `tsc` and `eslint` all pass. Every route was checked in the browser. There are no console or hydration errors, no horizontal overflow from 360 to 1440px, and Lighthouse Accessibility, Best Practices and SEO score 100 on `/`, `/products/zed-crm`, `/services`, `/work` and `/contact`. Nothing is committed. Sections 1–5 above describe the site *before* these changes.

### Confirmed facts
- **Prices:** Starter K50, Growth K150, Pro K500 (`pricing.ts`). Growth and Pro now show prices, and every plan button is `Start free trial` → zedcrms.com/register. JSON-LD offer price is `"50"` ZMW.
- **Plan features:** limits plus "Email from your own domain", "Email integration" and "Reporting & dashboard"; Pro adds "Priority support". These match the live zedcrms.com pricing page, which I read on 17 Oct. "Industry modules", "Custom dashboards", "Custom fields", "Advanced reporting", "WhatsApp integration" and "Click-to-call" were dropped from plans because they don't appear there.
- **Trial:** `trialDays` became `trialLabel: "3 months"`. Every "14-day" is gone, including the Zed CRM meta description. The home teaser is derived from `pricing.ts`: `Plans from K50/month · 3 months free`.
- **Payment:** `PAYMENT_METHODS` = "Airtel Money, MTN MoMo, Zamtel Kwacha or cash" (`site.ts`). It's used in the pricing subhead, the "How do I pay?" FAQ and the Why > Local point.
- **Support:** `ZED_CRM.supportEmail` was deleted. Product support routes to WhatsApp with the Zed prefill. No support@zedcrms.com appears anywhere.
- **Reply time:** "within one working day" is kept, as confirmed.

### Brand system (§0)
- **WhatsApp prefills:** `WHATSAPP_URLS = { meco, zed, services }` in `site.ts`, with the three specified prefills. Every WhatsApp link picks its context. The floating button is route-aware: Zed prefill on `/products/zed-crm`, services prefill on `/services`, Meco elsewhere.
- **`brand` prop (`'meco' | 'zed'`)** added to `ButtonLink`, `TiltCard`, `SectionHeader` (eyebrow rule), `PageHero` (glow), and to the CTA band via `variant`.
  - New CSS: `.btn-zed` (Zed-blue fill, border and glow) and `.edge-zed` (Zed-blue edge, replacing the Meco gradient `edge-glow` on Zed surfaces).
  - New CSS: `.zed-scope` (Zed-blue focus rings, and AA-safe Zed-blue links at #7ea6f8, because #2563EB on the dark background is about 3.6:1 for small text).
- **`ZedLogo`:** now has `size` and `endorsed` props. It shows a small muted "by Meco Innova" by default. The Zed page hero uses the specified `by Meco Innova Ltd, Lusaka` line instead.
- **Zed OG image:** new `public/og-zed-crm.png`, generated by `scripts/generate-assets.mjs`, used on `/products/zed-crm` only via `ogImage` in `seo.ts`.

### Brand-blur issues
| # | What was done |
|---|---|
| B1 | `/services` now ends with the `services` band: "Need a website, email or IT sorted?" · `Get a quote` → `/contact?need=services` · `WhatsApp us` (services prefill). |
| B2 | `/`, `/work` and `/about` end with the `company` band: "Tell us what you’re working on." · `Talk to us` → /contact · `WhatsApp us` (Meco prefill). |
| B3 | Nav: `Zed CRM` (14px ZedMark) · Services · Work · About · Contact. Right side: ghost `WhatsApp` + primary `Talk to us` → /contact. "Try Zed CRM" is removed from the nav and mobile menu. `/products/zed-crm` has a sticky sub-bar: ZedLogo + "by Meco Innova" · Features / Pricing / FAQ anchors (from 768px up) · Zed-blue `Start free trial`. |
| B4 | Home hero is company-level: new eyebrow, H1 and sub. Primary (magnetic, Meco) is `Talk to us` → /contact; secondary is `See Zed CRM`. |
| B5 | Pricing buttons are all `Start free trial` → SIGNUP (Zed). Below the table: "Questions about a plan? Ask on WhatsApp" with the Zed prefill. |
| B6 | Spreadsheet FAQ says "Message the Zed CRM team on WhatsApp…", with "WhatsApp" linked to the Zed URL. Added "Already using Zed CRM? Message support on WhatsApp." The support email constant is deleted. |
| B7 | `/products/zed-crm` uses `/og-zed-crm.png` with Zed-specific `og:image:alt`. The title is unchanged. |
| B8 | Whole page is brand `zed`: Zed-blue hero glow, large ZedLogo + byline above the H1, Zed-blue buttons, eyebrows and icons. Nav and footer stay Meco. |
| B9 | `edge-glow` (Meco gradient) is removed from every Zed surface: the home Zed section uses `edge-zed`, the Zed CTA band uses `edge-zed`, and the pricing `highlighted` flag is gone. |
| B10 | Home "Products" section is now eyebrow `Our product` + H2 `ZedLogo`; "One product we run every day." is deleted. The marketplace moved to a new Meco-branded "Coming next from Meco Innova" strip after Services, with a body line and `Get launch updates` → `/contact?need=marketplace`. |
| B11 | Recognition reworded to name Zed CRM: "Zed CRM was selected as a winning innovation by the FAEO Women in Engineering Committee…". It has a ZedMark beside the award icon on home and About, and a short badge in the Zed hero. |
| B12 | Innova Services is introduced as Meco Innova’s line in the services body ("Innova Services is Meco Innova’s managed IT line…"), the home hero sub, the footer descriptor, and a new footer column `Innova Services`. |
| B13 | Why > Local: mobile money is stated as live, listing Airtel Money, MTN MoMo and Zamtel Kwacha. |
| B14 | Zed CRM card removed from Work (home and /work). |

### Generic-copy flags
| # | What was done |
|---|---|
| G1 | H1 → "We make Zed CRM, and we run websites, email and IT for Zambian companies." |
| G2 | Shared band deleted; replaced by three variants (see B1, B2 and the `zed` band). |
| G3 | Services heading → "Your website, email and IT, looked after." The "growing companies" wording is removed from the hero sub, footer descriptor and Growth blurb. **Not changed:** the `/` and `/services` meta descriptions still say "growing companies", because COPY_FIXES gives no replacement for them. |
| G4 | Services body replaced (see B12). |
| G5–G7 | Card summaries replaced: "Accounts, devices and backups, handled." / "Email on your own domain." / "Systems built for one job, and kept running." (Websites: "Built, hosted and kept up to date.") |
| G8–G10 | Card details replaced with the §4 copy (the custom-software detail cites the Youth Candidate Tracker). |
| G11 | → "How a job runs." |
| G12 | Talk, Plan, Build and Run steps replaced with the §4 copy. |
| G13–G15 | Why H2 → "Small, local, and on WhatsApp."; all three points replaced. |
| G16 | Mission replaced; About H1 → "Three people in Lusaka, building software for Zambian businesses." |
| G17 | **[CONFIRM]** Story kept as-is, with `// TODO(owner): confirm — owner to supply the year founded and how it started` in `team.ts`. |
| G18 | → "Client work." (home H2 and /work H1). |
| G19 | /work body → "A civic platform for Zambia’s 2026 elections, and the website, email and IT for a Lusaka procurement firm." |
| G20 | Gentleman’s Resources: client line "Managed IT client · Procurement" and the new summary. The Youth Candidate Tracker card now has the full summary, a stat row (222 candidates · 84 constituencies · 10 provinces, "As of October 2026", stored in `work.ts`), new tags, and `Visit site` → https://youthcandidates-zm.org. |
| G21 | → "Install it on your phone. No app store." + new body. |
| G22 | Leads & pipeline body → "See every lead by stage, from first call to won or lost, and who on your team owns it." |
| G23 | Body → "Leads, contacts, quotes and customer emails on one record, on a laptop at the office or a phone on the road." (home Zed section and Zed hero, one source). |
| G24 | → "What you get." |
| G25 | "Most popular" badge and the `highlighted` flag removed. |
| G26 | Blurbs replaced; Pro says "priority support" in both its blurb and its feature list. |
| G27 | Limits confirmed against the live pricing page (see Confirmed facts). |
| G28 | Confirmed by the owner and kept. Success copy → "Thanks, we’ve got your message." / "We’ll reply within one working day." |
| G29 | Reworded (B11). "innovation" remains only as part of the award’s own wording. |
| G30 | → "Common questions." |

### Other changes from COPY_FIXES
- **"Book a call"** is relabelled `Talk to us` (home hero and /services hero; the /services one links to `/contact?need=services`).
- **Contact select** is grouped with `<optgroup>`: Zed CRM / Innova Services / Other.
  - `?need=zed|services|marketplace` preselects an option.
  - **My choice:** `services` preselects "A website", the first option in the Innova Services group, because the file doesn’t say which one.
- **Footer:**
  - New descriptor.
  - Columns are `Zed CRM` (Overview · Pricing · Sign in / Start trial → zedcrms.com), `Innova Services` and `Company` (Work · About · Contact).
  - **My choice:** the Innova Services column has one link labelled "Overview" → /services, because the file doesn’t specify a label.
- **FAQ:**
  - Trial answer updated, and `zedcrms.com` is now a real link.
  - Added "How do I pay?".
  - Collapsed answers are `inert`, so their links stay out of the tab order.
- **Home "Two lines" section** added under the hero: a Zed card (ZedLogo, Zed edge, `Explore Zed CRM`) and an Innova Services card (Meco mark, Meco gradient edge, `See services`).
- **Home Zed section:** **my choice:** I removed the second ZedLogo inside the card, because the section H2 is now the ZedLogo directly above it.

### Technical clean-up (§8)
- JSON-LD Organization and LocalBusiness now have `description`: "Lusaka software company. Makes Zed CRM and provides managed websites, business email and IT through Innova Services." `priceRange` is removed.
- 404: canonical removed (and `og:url` with it).
- Redirects: `/get-started` → `/products/zed-crm` and `/compliance` → `/about`, as prerendered meta-refresh + JS pages with `noindex` and a canonical to the target. Verified in the browser.
- Deleted `ZED_INTRO.heading`, `ZED_CRM.supportEmail`, `PRICING_TEASER`, `FINAL_CTA` and `WHATSAPP_CHAT_URL`.
- Repo grep for `14-day`, `14 day`, `trialDays`, `299` and `support@zedcrms` returns no hits in `src/`, `scripts/` or the built HTML.
- **Bug found and fixed while verifying:** `?need=` preselect initially didn’t apply on prerendered pages. The `<select>` hydrates in its own Suspense boundary after the page effect has already run, so it now uses a callback ref.

### Where the live zedcrms.com differs from COPY_FIXES (left as the file specifies)
- The live footer still lists **support@zedcrms.com**. COPY_FIXES says that inbox doesn’t work, so the address isn’t shown on mecoinnova.com, but zedcrms.com itself should be updated.
- The live page says **"MTN Money"**; COPY_FIXES and this site say **"MTN MoMo"**.
- The live pricing page still shows a "MOST POPULAR" badge on Growth; this site doesn’t, per G25.

### Still open
- **[CONFIRM]** About story (G17) and the `hello@mecoinnova.com` inbox (`site.ts`, TODO(owner)).
- Placeholder screenshots (`/public/screens/`) and team photos (`/public/team/`).
- `VITE_CONTACT_ENDPOINT` is not set, so the form shows its error state until it is.
- The `/` and `/services` meta descriptions still contain "growing companies" (G3 note above).
