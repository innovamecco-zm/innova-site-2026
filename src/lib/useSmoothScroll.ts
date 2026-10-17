import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import type Lenis from 'lenis'
import { isFinePointer, prefersReducedMotion } from './device'

let lenis: Lenis | null = null

/**
 * Lenis smooth scrolling for mouse/trackpad users (off under reduced motion; touch devices keep
 * native scrolling, which Lenis would not smooth anyway), plus scroll restoration on route change.
 */
export function useSmoothScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (prefersReducedMotion() || !isFinePointer()) return
    let raf = 0
    let cancelled = false
    import('lenis').then(({ default: LenisCtor }) => {
      if (cancelled) return
      lenis = new LenisCtor({ lerp: 0.12, anchors: { offset: -80 } })
      const loop = (time: number) => {
        lenis?.raf(time)
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
    })
    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      lenis?.destroy()
      lenis = null
    }
  }, [])

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        // Native scrolling resolves content-visibility placeholders correctly; Lenis syncs to it.
        el.scrollIntoView({ block: 'start' })
        return
      }
    }
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname, hash])
}
