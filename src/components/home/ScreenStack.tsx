import { useRef } from 'react'
import { m, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { ZED_SCREENS, type Screen } from '../../content/products'

interface LayerProps {
  screen: Screen
  y: MotionValue<number>
  /** Positioning for the static wrapper. */
  place: string
  /** Depth (translateZ) in px; applied only on fine-pointer devices. */
  z: number
  frame: string
  dim?: boolean
}

function Layer({ screen, y, place, z, frame, dim }: LayerProps) {
  return (
    <div className={`absolute ${place}`} style={{ ['--z' as string]: `${z}px` }}>
      <m.figure style={{ y }} className={`overflow-hidden border border-line-strong bg-elev ${frame}`}>
        <img
          src={screen.src}
          alt={screen.alt}
          width={screen.width}
          height={screen.height}
          loading="lazy"
          decoding="async"
          className={`block h-auto w-full ${dim ? 'opacity-70' : ''}`}
        />
      </m.figure>
    </div>
  )
}

/**
 * Layered product screenshots: desktop screens stacked in depth, the phone in front.
 * Each layer drifts at a different rate on scroll (parallax); static under reduced motion.
 */
export function ScreenStack() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const back = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [24, -24])
  const front = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [48, -48])
  const phone = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [88, -56])

  const [main, second, mobile] = ZED_SCREENS

  return (
    <div ref={ref} role="group" aria-label="Zed CRM screenshots" className="depth-scene relative mx-auto aspect-[16/11] w-full max-w-[640px]">
      <div className="depth-stage absolute inset-0">
        <Layer
          screen={second}
          y={back}
          dim
          place="left-[2%] top-[2%] w-[76%]"
          z={-40}
          frame="rounded-[12px] shadow-[0_32px_64px_-24px_rgba(0,0,0,0.8)]"
        />
        <Layer
          screen={main}
          y={front}
          place="left-[16%] top-[16%] w-[80%]"
          z={20}
          frame="rounded-[12px] shadow-[0_40px_80px_-24px_rgba(0,0,0,0.9)]"
        />
        <Layer
          screen={mobile}
          y={phone}
          place="bottom-[-6%] right-0 w-[24%]"
          z={80}
          frame="rounded-[18px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.95)]"
        />
      </div>
    </div>
  )
}
