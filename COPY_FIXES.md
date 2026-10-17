# COPY_FIXES.md: brand separation and copy rewrite for mecoinnova.com

> Claude Code: apply this file on branch `feat/3d-rebuild`. It is based on COPY_REPORT.md (flags B1–B14, G1–G30).
> Change copy and brand styling only. Don't restructure anything beyond what's listed. Anything marked **[CONFIRM]** goes into `src/content/*` as a constant with a `// TODO(owner): confirm` comment. Use the value given here and don't make up a better one.
> When you're done, run `npm run build`, then append a "Changes applied" section to COPY_REPORT.md that lists each B/G number and what you did with it.

---

## Confirmed facts (17 Oct 2026). These override anything below.

Source: the live zedcrms.com pricing page and the owner. Put these values in `pricing.ts` / `site.ts` and remove the matching TODOs.

| Item | Value |
|---|---|
| Starter | **K50 / month**: up to 3 users, 500 leads, 200 contacts |
| Growth | **K150 / month**: up to 10 users, 2,000 leads, 5,000 contacts |
| Pro | **K500 / month**: unlimited users, leads and contacts, **priority support** |
| All plans | Email from your own domain, email integration, reporting & dashboard |
| Free trial | **3 months free, no credit card required.** Replace *every* "14-day" / "14 days" (set `trialDays` → `trialLabel: "3 months"`) |
| Payment | **Airtel Money, MTN MoMo, Zamtel Kwacha, or cash** |
| Zed CRM support | **No support@zedcrms.com.** Delete `ZED_CRM.supportEmail` and route product support to WhatsApp (zed prefill) |
| Reply time | **Confirmed: "within one working day"**. Keep it on the contact page |

So: Growth and Pro now show real prices instead of "Talk to us", and their buttons become `Start free trial` → SIGNUP. The JSON-LD offer becomes price "50", ZMW. The price teaser reads `Plans from K50/month · 3 months free`.

---

## 0. The rule this whole file enforces

| | **Meco Innova Ltd** | **Zed CRM** |
|---|---|---|
| What it is | The company (Lusaka software & IT firm) | A product the company makes |
| Lines of business | 1. Zed CRM (product) · 2. Innova Services (managed IT) | n/a |
| Owns | Nav, footer, home hero, /services, /work, /about, /contact, 404, favicon, default OG | /products/zed-crm and any bounded "Zed CRM card" |
| Colours | Meco palette: blue #0075E2, red, purple, gold dot, blue→purple→red gradient | **Zed blue #2563EB only.** Never the Meco gradient or Meco blue |
| Logo | `Logo` (circles + "Meco Innova.") | `ZedLogo`, always with a small "by Meco Innova" endorsement |
| WhatsApp prefill | `Hi Meco Innova` | `Hi, I'd like to know more about Zed CRM` |

Implement it in code:
- Add a `brand` prop (`"meco" | "zed"`) to `Button`, `Card`/edge-glow and the CTA band. `zed` = #2563EB fill/border/glow and no gradient. `meco` = the current styles.
- In `site.ts`, add `WHATSAPP_URLS = { meco, zed, services }` with these prefills: meco `Hi Meco Innova`, zed `Hi, I'd like to know more about Zed CRM`, services `Hi Meco Innova, I need help with my website, email or IT`. Every WhatsApp link picks the URL that matches its context.

---

## 1. Global

**Nav (B3)**
- Links: `Zed CRM` (with a 14px `ZedMark` before it) → `/products/zed-crm` · `Services` · `Work` · `About` · `Contact`. This removes the plural "Products".
- Right side: ghost `WhatsApp` (meco prefill) + primary `Talk to us` → `/contact`. **Take "Try Zed CRM" out of the global nav and the mobile menu.**
- **On `/products/zed-crm` only**, add a sticky product sub-bar under the nav: `ZedLogo` + small muted `by Meco Innova` · anchors `Features` `Pricing` `FAQ` · Zed-blue button `Start free trial` → SIGNUP.

**Footer**
- Descriptor: `Meco Innova Ltd is a Lusaka software company. We make Zed CRM and, through Innova Services, run websites, email and IT for Zambian businesses.`
- Column "Products" → rename to `Zed CRM`, with links `Overview`, `Pricing`, `Sign in / Start trial` → zedcrms.com.
- Add a column `Innova Services` linking to `/services`.

**Final CTA band (B1, B2, G2):** split it into three variants and delete the shared "Ready to run your business on better software?"
| Variant | Used on | H2 | Body | Primary | Secondary |
|---|---|---|---|---|---|
| `company` | `/`, `/work`, `/about` | Tell us what you're working on. | Whether it's Zed CRM or your website and email, start with a message. | `Talk to us` → /contact (meco) | `WhatsApp us` (meco prefill) |
| `services` | `/services` | Need a website, email or IT sorted? | Tell us what you have now and what you need. We'll come back with a written scope and a price in Kwacha. | `Get a quote` → /contact?need=services (meco) | `WhatsApp us` (services prefill) |
| `zed` | `/products/zed-crm` | Try Zed CRM free for 3 months. | No card needed. Sign up, add your team, and pay by mobile money only when you're ready. | `Start free trial` → SIGNUP (zed) | `Ask about Zed CRM` (zed prefill) |

**"Book a call"** (home hero, /services hero): there's no booking flow behind it, so relabel it `Talk to us`.

---

## 2. Home `/`

**Hero (B4, G1)**
- Eyebrow: `Meco Innova Ltd · Lusaka, Zambia`
- H1: `We make Zed CRM, and we run websites, email and IT for Zambian companies.`
- Sub: `Meco Innova is a Lusaka software company with two lines of work: Zed CRM, our own CRM priced in Kwacha, and Innova Services, where we set up and look after your website, business email and IT.`
- Primary (magnetic, meco): `Talk to us` → /contact · Secondary ghost: `See Zed CRM` → /products/zed-crm
- Trust line: unchanged.

**NEW: "Two lines" section, directly under the hero.** Two equal cards side by side (stacked on mobile). This is the clearest way to show the split.
- Card A (brand `zed`, ZedLogo, Zed-blue edge): label `Product` · H3 `Zed CRM` · `For your sales team. Track leads, send quotes in Kwacha, and email or WhatsApp customers from their record.` · button `Explore Zed CRM` → /products/zed-crm
- Card B (brand `meco`, Meco gradient edge): label `Managed IT` · H3 `Innova Services` · `For your office. Your website, email on your own domain, devices, accounts and backups, looked after by one team.` · button `See services` → /services

**Recognition strip (B11, G29).** Zed CRM is what won, per the FAEO letter of 24 Aug 2026:
`Zed CRM was selected as a winning innovation by the FAEO Women in Engineering Committee and exhibited at the 12th UNESCO Africa Engineering Week, Dar es Salaam, September 2026.`
Give the strip a small `ZedMark` next to the award icon.

**Products section → rename to "Zed CRM" (B9, B10, G23)**
- Eyebrow: `Our product` · H2: `Zed CRM` (ZedLogo, not plain text). Delete "One product we run every day."
- Body: `Leads, contacts, quotes and customer emails on one record, on a laptop at the office or a phone on the road.`
- Card: brand `zed` only. **Remove `edge-glow` (the Meco gradient)** and keep only the Zed-blue glow.
- Pricing teaser: **read it from `pricing.ts`.** Delete the hardcoded `PRICING_TEASER` string and derive `Plans from K{PLANS[0].price}/month · {trialDays}-day free trial`.
- **Move the marketplace card out of this section** (see the next block).

**NEW: "Coming next" strip (B10).** Small, meco-branded, placed after Services:
- Badge `Coming next from Meco Innova` · H3 `A marketplace that puts Lusaka market stalls online.` · `Buyers find a trader's stall, see what's in stock, and order on WhatsApp.` · `Planned for November 2026.` · link `Get launch updates` → `/contact?need=marketplace`. The contact form must preselect "Marketplace updates" when it reads `?need=`.

**Services section:** use the copy from §4 (same source).

**Work section:** heading `Client work`, with the two client cards only (see §5).

**Why section (B13, G13–G15)**
- Eyebrow `Why Meco Innova` · H2: `Small, local, and on WhatsApp.`
- `Local`: `We're a Lusaka team. We price in Kwacha and you can pay by Airtel Money, MTN MoMo or Zamtel Kwacha, with no dollar card needed.` (Replace "mobile money on the roadmap". It's live now.)
- `Built properly`: `Off-server backups and HTTPS on everything we host, as standard, not as an extra.`
- `Human support`: `Message us on WhatsApp and you reach the people who built your system, not a call centre.`

---

## 3. Zed CRM `/products/zed-crm` (B5–B8, G21–G27, G30)

**Make the whole page brand `zed`.** Replace the PageHero gradient glow with a Zed-blue glow and make every button on the page Zed blue. Nav and footer stay Meco.

- Hero: `ZedLogo` (large) above the H1, then a muted line `by Meco Innova Ltd, Lusaka`.
  - H1 stays: `The CRM for Zambian SMEs, priced in Kwacha.`
  - Body: `Leads, contacts, quotes and customer emails on one record, on a laptop at the office or a phone on the road.`
  - Buttons: `Start your 3 months free` (zed) · `See pricing`
  - Small line under the buttons: `No credit card. Pay by mobile money when you're ready.`
  - Under the buttons, an award badge: `Winning innovation · FAEO Women in Engineering · UNESCO Africa Engineering Week 2026`
- On any screen: H2 `Install it on your phone. No app store.` · body `Use Zed CRM in the browser at your desk, then add it to your phone's home screen for when you're out seeing customers.`
- Features: H2 `What you get.` · Leads & pipeline body: `See every lead by stage, from first call to won or lost, and who on your team owns it.` The other feature bodies stay.
- Pricing:
  - **Delete the "Most popular" badge** (G25) and the `highlighted` flag.
  - Subhead: `Every plan is free for the first 3 months, with no credit card. Prices are per business, per month, in Kwacha. Pay by Airtel Money, MTN MoMo, Zamtel Kwacha or cash.`
  - Prices and limits: use the confirmed table at the top of this file.
  - Starter blurb `For a small team running its first CRM.` · Growth `For teams with more people and more leads.` · Pro `For larger teams that want no caps and priority support.` On Pro, replace "Dedicated support" with "Priority support" so the two match (G26). Only list features that are on the live zedcrms.com page; drop "Industry modules", "Custom dashboards", "Custom fields" and "Advanced reporting" unless they appear there.
  - Every plan button: `Start free trial` → SIGNUP (zed). Under the table, add a small line: `Questions about a plan? Ask on WhatsApp`, using the **zed** prefill (B5).
- FAQ: H2 `Common questions.`
  - Make `zedcrms.com` a real link.
  - Change the spreadsheets answer to: `Yes. Message the Zed CRM team on WhatsApp and we'll help you bring your existing contacts and leads across.` with "WhatsApp" linked to the zed URL (B6).
  - Change the trial answer to: `Yes. Every plan is free for the first 3 months, and you don't need a credit card. Sign up at zedcrms.com.`
  - Add a Q: `How do I pay?` → `In Kwacha, by Airtel Money, MTN MoMo, Zamtel Kwacha, or cash.`
  - Add a line under the FAQ: `Already using Zed CRM? Message support on WhatsApp.` (zed prefill). **Don't show any support@zedcrms.com address. That inbox doesn't work.**
- Head (B7): generate a **Zed OG image** (`/og-zed-crm.png`, 1200×630: ZedLogo, `The CRM for Zambian SMEs, priced in Kwacha.`, small `by Meco Innova`, Zed blue on dark) and use it on this route only. Title stays as it is.
- CTA band: the `zed` variant.

---

## 4. Services `/services` (B12, G3–G12)

Keep the name "Innova Services", but always introduce it as Meco Innova's line so it doesn't read as a third company. Every button on this page is brand `meco`.

- Eyebrow `Innova Services` · H1/H2: `Your website, email and IT, looked after.`
- Body: `Innova Services is Meco Innova's managed IT line. We set things up, host them and fix them when they break, and you deal with the same small Lusaka team every time.`
- Cards (summary → detail):
  - **Websites**: `Built, hosted and kept up to date.` → `Sites that load fast on mobile data, hosted by us, and updated when you message us. No freelancer to chase.`
  - **Business email & domains**: `Email on your own domain.` → `We register or move your domain, set up email so it reaches inboxes instead of spam, and add staff or reset passwords when you need it.`
  - **Custom software**: `Systems built for one job, and kept running.` → `Like the Youth Candidate Tracker we built and maintain for WeCode Zambia: when off-the-shelf software doesn't fit, we build it, host it and look after it after launch.`
  - **IT management**: `Accounts, devices and backups, handled.` → `We keep track of who has access to what, keep your backups off-site, and are a WhatsApp message away when something stops working.`
- How we work: H2 `How a job runs.`
  - Talk: `Tell us what you have and what's not working, on a call or on WhatsApp.`
  - Plan: `You get a written scope, a price in Kwacha and a date.`
  - Build: `We set it up or build it, and send you progress as we go.`
  - Run: `We stay on to host, maintain and support it.`
- CTA band: the `services` variant.

---

## 5. Work `/work` (B14, G18–G20)

- **Remove the Zed CRM card from Work.** It's a product, not client work, and it already has its own section and page.
- H1 / home H2: `Client work.` · body: `A civic platform for Zambia's 2026 elections, and the website, email and IT for a Lusaka procurement firm.`
- Youth Candidate Tracker (the site is live; figures read from it on 17 Oct 2026):
  - Client line: `For WeCode Zambia and Global Platform Zambia`
  - Summary: `A non-partisan directory of young candidates, aged 18 to 35, standing in Zambia's 2026 General Election. Voters can search by name and filter by party, position, province, district, constituency and ward, then open each candidate's profile. Owned by WeCode Zambia and Global Platform Zambia; built and maintained by Meco Innova.`
  - Stat row (3 small figures): `222 candidates` · `84 constituencies` · `10 provinces`, with a muted caption `As of October 2026`. Keep these in `work.ts` so they can be updated.
  - Tags: `Civic tech · Search & filters · Election results`
  - Link: `Visit site` → `https://youthcandidates-zm.org` (new tab).
- Gentleman's Resources: client line `Managed IT client · Procurement` · summary `Gentleman's Resources is a Lusaka procurement firm. We run its website and business email and look after its IT.`
- CTA band: the `company` variant.

---

## 6. About `/about` (G16, G17)

- H1: `Three people in Lusaka, building software for Zambian businesses.`
- Mission: `We make software and IT that Zambian businesses can afford, pay for in Kwacha, and get help with from someone they can actually reach.`
- Story: **[CONFIRM]**. Keep the current two paragraphs and the TODO. The owner will supply the year founded and how it started.
- Recognition card: use the new wording from §2 with the ZedMark.
- Team H2 `Three people, one phone number.` stays.
- CTA band: the `company` variant.

---

## 7. Contact `/contact` (G28)

- Body: keep `Send the form and we will reply within one working day. For anything quick, WhatsApp is faster.` (confirmed)
- Success: `Thanks, we've got your message.` / `We'll reply within one working day.`
- Select: group the options with `<optgroup>`:
  - `Zed CRM`: Zed CRM (trial, pricing or support)
  - `Innova Services`: A website · Business email & domains · Custom software · IT management
  - `Other`: Marketplace updates · Something else
- Support `?need=zed|services|marketplace` to preselect an option.
- Email shown: `hello@mecoinnova.com` **[CONFIRM the inbox exists]**. If it isn't confirmed, set it as a constant with a TODO.

---

## 8. Technical clean-up from the report

- Add a `description` to JSON-LD Organization and LocalBusiness: `Lusaka software company. Makes Zed CRM and provides managed websites, business email and IT through Innova Services.` Remove `priceRange: "K"`.
- 404: remove the canonical tag.
- Add redirects for old routes: `/get-started` → `/products/zed-crm`, `/compliance` → `/about`. Use prerendered meta-refresh + JS redirect pages, or hosting redirect rules if the host supports them.
- Delete the unused `ZED_INTRO.heading` constant and `ZED_CRM.supportEmail`.
- Grep the whole repo for `14-day`, `14 day`, `trialDays`, `299` and `support@zedcrms` and fix every hit, including the meta descriptions in `seo.ts`.
