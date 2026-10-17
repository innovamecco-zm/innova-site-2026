import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { HeroPoster } from './HeroPoster'
import { canRender3D } from '../../lib/device'

const HeroScene = lazy(() => import('./HeroScene'))

/**
 * Poster first; the WebGL scene is fetched only after the page is idle and only on capable
 * devices. The canvas pauses (frameloop "never") while the hero is off-screen.
 */
export function HeroVisual() {
  const wrap = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [ready, setReady] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (!canRender3D()) return
    let idle = 0
    let timer = 0
    const start = () => {
      const ric = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1))
      idle = ric(() => setEnabled(true), { timeout: 2500 }) as number
    }
    // Wait for load + a beat so the 3D chunk never competes with first paint.
    const onLoad = () => {
      timer = window.setTimeout(start, 1200)
    }
    if (document.readyState === 'complete') onLoad()
    else window.addEventListener('load', onLoad, { once: true })
    return () => {
      window.removeEventListener('load', onLoad)
      window.clearTimeout(timer)
      window.cancelIdleCallback?.(idle)
    }
  }, [])

  useEffect(() => {
    const el = wrap.current
    if (!el || !enabled) return
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: '100px' })
    io.observe(el)
    return () => io.disconnect()
  }, [enabled])

  return (
    <div ref={wrap} className="relative aspect-square w-full" aria-hidden="true">
      <HeroPoster
        className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${ready ? 'opacity-0' : 'opacity-100'}`}
      />
      {enabled && (
        <Suspense fallback={null}>
          <div className={`absolute inset-0 transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}>
            <HeroScene active={visible} onReady={() => setReady(true)} />
          </div>
        </Suspense>
      )}
    </div>
  )
}
