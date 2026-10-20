# mecoinnova.com

Marketing site for Meco Innova Ltd (Lusaka). React 19 + Vite + Tailwind v4, TypeScript, prerendered to static HTML per route.

## Commands

```bash
npm install
npm run dev        # local dev server
npm run build      # type-check, client build, SSR build, prerender every route
npm run preview    # serve dist/ (note: vite preview falls back to / for unknown paths; real hosts serve /route/index.html)
npm run assets     # regenerate favicon, OG image, WhatsApp QR and missing placeholders into public/
npm run lint
```

## Environment

Copy `.env.example` to `.env` and set:

| Variable | Purpose |
| --- | --- |
| `VITE_CONTACT_ENDPOINT` | Google Apps Script web-app URL that receives the contact form (form-encoded POST). |

## Editing content

All copy lives in typed files under `src/content/` — edit there, not in components:

- `site.ts` — company details, WhatsApp links, email, Zed CRM URLs and trial length, payment methods, marketplace placeholder, recognition line
- `home.ts` — hero, two lines of business, "why us", CTA bands
- `products.ts` — Zed CRM features and screenshot paths
- `pricing.ts` — Starter / Growth / Pro. The "from K…" price in the hero, home teaser and meta description is read from the first plan
- `faq.ts`, `services.ts`, `work.ts`, `team.ts`, `nav.ts`
- `seo.ts` — per-route `<title>` and meta description (also drives `sitemap.xml`)

## How it fits together

- **Prerendering** — `scripts/prerender.mjs` renders each route from `src/entry-server.tsx` into `dist/<route>/index.html` (+ `<route>.html`), injects per-route meta, Open Graph/Twitter tags and JSON-LD (Organization, LocalBusiness, SoftwareApplication), inlines the CSS, and writes `sitemap.xml`, `robots.txt` and `404.html`.
- **Hydration** — the app bundle starts after first paint and hydrates in a transition; each page section is its own Suspense boundary so hydration is split into small tasks.
- **3D hero** — `src/components/three/`. A static SVG poster renders first; the React Three Fiber scene is lazy-loaded after the page is idle, only on capable devices (more than 4 cores, no Save-Data, not 2G/3G, no reduced motion, WebGL available), and pauses when off-screen. Add `?3d=1` / `?3d=0` to any URL to force the scene or the poster for testing.
- **Motion** — Framer Motion (`LazyMotion` + `m`) for scroll reveals, `MotionConfig reducedMotion="user"`; Lenis smooth scroll on mouse/trackpad devices only.

## Hosting (cPanel)

The site is static: `dist/` is everything. `public/.htaccess` (copied into `dist/` on build) handles clean URLs, the 404 page, old-URL redirects, HTTPS, caching and compression on Apache.

Deploys use cPanel **Git™ Version Control** with `.cpanel.yml`, which copies `dist/` into `~/public_html`. cPanel can't run the build, so `dist/` is committed:

1. `npm run build`
2. Commit (including `dist/`) and push to the repo cPanel tracks.
3. cPanel → Git Version Control → Manage → **Pull or Deploy** → *Update from Remote*, then *Deploy HEAD Commit*.

Set `VITE_CONTACT_ENDPOINT` in `.env` before building, or the contact form can't send.
