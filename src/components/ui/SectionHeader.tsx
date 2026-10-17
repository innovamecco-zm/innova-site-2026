import type { ReactNode } from 'react'
import { RevealItem } from '../../lib/motion'
import type { Brand } from './ButtonLink'

interface SectionHeaderProps {
  eyebrow?: string
  heading: ReactNode
  body?: ReactNode
  /** Heading level. Pages use h1 for their top header. */
  level?: 1 | 2
  align?: 'left' | 'center'
  /** `zed` uses a Zed-blue eyebrow rule instead of the Meco gradient. */
  brand?: Brand
}

export function SectionHeader({ eyebrow, heading, body, level = 2, align = 'left', brand = 'meco' }: SectionHeaderProps) {
  const H = level === 1 ? 'h1' : 'h2'
  const center = align === 'center' ? 'mx-auto text-center items-center' : ''
  return (
    <div className={`flex max-w-[720px] flex-col gap-4 ${center}`}>
      {eyebrow && (
        <RevealItem>
          <p className="eyebrow">
            <span
              aria-hidden="true"
              className={`h-px w-6 ${brand === 'zed' ? 'bg-zed' : 'bg-[image:var(--brand-gradient)]'}`}
            />
            {eyebrow}
          </p>
        </RevealItem>
      )}
      <RevealItem>
        <H
          className={
            level === 1
              ? 'text-[40px] font-semibold leading-[1.05] sm:text-[56px]'
              : 'text-[32px] font-semibold leading-[1.1] sm:text-[44px]'
          }
        >
          {heading}
        </H>
      </RevealItem>
      {body && (
        <RevealItem>
          <p className="text-[17px] leading-[1.6] text-muted sm:text-[18px]">{body}</p>
        </RevealItem>
      )}
    </div>
  )
}
