import { m, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

export const EASE = [0.22, 1, 0.36, 1] as const

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

type Tag = 'div' | 'section' | 'ul' | 'ol' | 'li' | 'header'

interface RevealProps {
  children: ReactNode
  className?: string
  as?: Tag
  id?: string
}

/**
 * Staggered fade + 16px rise, once, when scrolled into view. Children should be <RevealItem>.
 * Reduced motion is handled globally by <MotionConfig reducedMotion="user"> (movement is dropped).
 */
export function Reveal({ children, className, as = 'div', id }: RevealProps) {
  const Comp = m[as]
  return (
    <Comp
      id={id}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
    >
      {children}
    </Comp>
  )
}

export function RevealItem({ children, className, as = 'div' }: Omit<RevealProps, 'id'>) {
  const Comp = m[as]
  return (
    <Comp className={className} variants={item}>
      {children}
    </Comp>
  )
}
