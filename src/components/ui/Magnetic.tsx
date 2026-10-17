import { useRef, type ReactNode, type PointerEvent } from 'react'
import { isFinePointer, prefersReducedMotion } from '../../lib/device'

/** Subtle magnetic pull toward the pointer. Used only on the primary hero CTA. */
export function Magnetic({ children, strength = 0.25 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null)

  const onMove = (e: PointerEvent<HTMLSpanElement>) => {
    const el = ref.current
    if (!el || e.pointerType !== 'mouse' || !isFinePointer() || prefersReducedMotion()) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - (r.left + r.width / 2)) * strength
    const y = (e.clientY - (r.top + r.height / 2)) * strength
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate3d(0,0,0)'
  }

  return (
    <span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="inline-flex transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
    >
      {children}
    </span>
  )
}
