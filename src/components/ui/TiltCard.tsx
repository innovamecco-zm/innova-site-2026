import { useRef, type ReactNode, type PointerEvent } from 'react'
import { isFinePointer, prefersReducedMotion } from '../../lib/device'
import type { Brand } from './ButtonLink'

interface TiltCardProps {
  children: ReactNode
  className?: string
  /** Max tilt in degrees (capped at 8). */
  max?: number
  as?: 'div' | 'article' | 'li'
  /** `zed` = Zed-blue hover edge; `meco` = neutral. */
  brand?: Brand
}

/**
 * CSS-3D perspective tilt with a soft specular highlight that follows the pointer.
 * Desktop (fine pointer) only; static under reduced motion.
 */
export function TiltCard({ children, className = '', max = 6, as: Tag = 'div', brand = 'meco' }: TiltCardProps) {
  const ref = useRef<HTMLElement | null>(null)
  const frame = useRef(0)
  const limit = Math.min(max, 8)

  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current
    if (!el || e.pointerType !== 'mouse' || !isFinePointer() || prefersReducedMotion()) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty('--rx', `${(0.5 - py) * limit * 2}deg`)
      el.style.setProperty('--ry', `${(px - 0.5) * limit * 2}deg`)
      el.style.setProperty('--mx', `${px * 100}%`)
      el.style.setProperty('--my', `${py * 100}%`)
      el.style.setProperty('--glare', '1')
    })
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    cancelAnimationFrame(frame.current)
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
    el.style.setProperty('--glare', '0')
  }

  return (
    <div className="tilt-scene h-full">
      <Tag
        ref={ref as never}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className={`card tilt-card group h-full transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${brand === 'zed' ? 'zed-scope hover:border-zed/60' : 'hover:border-line-strong'} hover:shadow-[0_24px_48px_-16px_rgba(0,0,0,0.7)] ${className}`}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-[var(--glare,0)] transition-opacity duration-300 [background:radial-gradient(400px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,0.06),transparent_40%)]"
        />
        {children}
      </Tag>
    </div>
  )
}
