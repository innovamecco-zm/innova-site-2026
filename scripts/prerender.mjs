// Prerenders every route to static HTML so crawlers (and first paint) get real content.
// Runs after `vite build` (client) and `vite build --ssr src/entry-server.tsx --outDir dist-ssr`.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js')

const { render, head, ROUTES, REDIRECTS, SITE } = await import(pathToFileURL(ssrEntry).href)
// Inline the (single, ~8 KB gzipped) stylesheet so first paint doesn't wait on another request.
const template = fs
  .readFileSync(path.join(dist, 'index.html'), 'utf8')
  .replace(/<link rel="stylesheet" crossorigin href="\/(assets\/[^"]+\.css)">/, (_, href) => {
    const css = fs.readFileSync(path.join(dist, href), 'utf8')
    return `<style>${css}</style>`
  })
  // Paint first, hydrate after: start the app bundle after the first frame (timer fallback
  // for background tabs, where rAF doesn't fire). The prerendered HTML is complete without it.
  .replace(/<script type="module" crossorigin src="(\/assets\/[^"]+\.js)"><\/script>/, (_, src) =>
    [
      `<link rel="modulepreload" crossorigin href="${src}" fetchpriority="low" />`,
      `<script type="module">let s=0;const go=()=>{if(!s){s=1;import("${src}")}};requestAnimationFrame(()=>setTimeout(go,0));setTimeout(go,1500)</script>`,
    ].join('\n    '),
  )
const manifest = JSON.parse(fs.readFileSync(path.join(dist, '.vite', 'manifest.json'), 'utf8'))

// Route -> page module, for <link rel="modulepreload"> of the chunk hydration will need.
const PAGE_SRC = {
  '/': 'src/pages/Home.tsx',
  '/products/zed-crm': 'src/pages/ZedCrm.tsx',
  '/services': 'src/pages/Services.tsx',
  '/work': 'src/pages/Work.tsx',
  '/about': 'src/pages/About.tsx',
  '/contact': 'src/pages/Contact.tsx',
  '/404': 'src/pages/NotFound.tsx',
}
const preloads = (routePath) => {
  const seen = new Set()
  const walk = (key) => {
    const entry = manifest[key]
    if (!entry || seen.has(entry.file)) return
    seen.add(entry.file)
    for (const dep of entry.imports ?? []) walk(dep)
  }
  walk(PAGE_SRC[routePath])
  // Low priority: fetched in parallel, but never competes with first paint.
  return [...seen].map((f) => `<link rel="modulepreload" crossorigin href="/${f}" fetchpriority="low" />`).join('\n    ')
}

// data-path tells the client which route this HTML was rendered for (see entry-client.tsx).
const page = async (url, routePath = url) =>
  template
    .replace('<!--app-head-->', `${head(routePath)}\n    ${preloads(routePath)}`)
    .replace('<div id="root">', `<div id="root" data-path="${routePath}">`)
    .replace('<!--app-html-->', await render(url))

for (const route of ROUTES) {
  if (route.path === '/404') {
    fs.writeFileSync(path.join(dist, '404.html'), await page('/404-not-found', '/404'))
    console.log('prerendered  /404 -> 404.html')
    continue
  }
  const html = await page(route.path)
  const outDir = path.join(dist, route.path)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), html)
  // Also write /route.html so hosts that resolve clean URLs by extension serve it too.
  if (route.path !== '/') fs.writeFileSync(path.join(dist, `${route.path}.html`), html)
  console.log(`prerendered  ${route.path}`)
}

// Old-site URLs: tiny meta-refresh + JS redirect pages (works on any static host).
for (const [from, to] of Object.entries(REDIRECTS)) {
  const html = `<!doctype html>
<html lang="en-ZM">
  <head>
    <meta charset="UTF-8" />
    <title>Redirecting…</title>
    <meta name="robots" content="noindex" />
    <link rel="canonical" href="${SITE.url}${to}" />
    <meta http-equiv="refresh" content="0; url=${to}" />
    <script>location.replace(${JSON.stringify(to)} + location.search + location.hash)</script>
  </head>
  <body style="background:#0A0B10;color:#F4F5F7;font-family:system-ui,sans-serif">
    <p>This page has moved to <a href="${to}" style="color:#4ea1f5">${SITE.url}${to}</a>.</p>
  </body>
</html>
`
  fs.mkdirSync(path.join(dist, from), { recursive: true })
  fs.writeFileSync(path.join(dist, from, 'index.html'), html)
  fs.writeFileSync(path.join(dist, `${from}.html`), html)
  console.log(`redirect     ${from} -> ${to}`)
}

const today = new Date().toISOString().slice(0, 10)
const urls = ROUTES.filter((r) => r.index)
  .map((r) => `  <url><loc>${SITE.url}${r.path === '/' ? '/' : r.path}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`)
console.log('wrote        sitemap.xml, robots.txt')

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
fs.rmSync(path.join(dist, '.vite'), { recursive: true, force: true })
