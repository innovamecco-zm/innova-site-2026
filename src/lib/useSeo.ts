import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getRouteMeta } from '../content/seo'
import { SITE } from '../content/site'

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector)
  if (el) el.setAttribute(attr, value)
}

/**
 * Keeps <title>, description, canonical and OG/Twitter tags in sync on client-side navigation.
 * The initial tags for each route are written into the static HTML by scripts/prerender.mjs.
 */
export function useSeo(notFound: boolean) {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = getRouteMeta(notFound ? '/404' : pathname)
    const url = SITE.url + (meta.path === '/' ? '/' : meta.path)
    document.title = meta.title
    setMeta('meta[name="description"]', 'content', meta.description)
    setMeta('link[rel="canonical"]', 'href', url)
    setMeta('meta[property="og:title"]', 'content', meta.title)
    setMeta('meta[property="og:description"]', 'content', meta.description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[name="twitter:title"]', 'content', meta.title)
    setMeta('meta[name="twitter:description"]', 'content', meta.description)
    const og = `${SITE.url}${meta.ogImage ?? '/og-image.png'}`
    setMeta('meta[property="og:image"]', 'content', og)
    setMeta('meta[name="twitter:image"]', 'content', og)
  }, [pathname, notFound])
}
