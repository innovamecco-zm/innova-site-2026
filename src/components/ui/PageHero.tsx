import type { ReactNode } from 'react'
import { SectionHeader } from './SectionHeader'
import type { Brand } from './ButtonLink'

interface PageHeroProps {
  eyebrow?: string
  heading: ReactNode
  body?: ReactNode
  /** Rendered above the heading (e.g. a product lockup). */
  top?: ReactNode
  /** `zed` swaps the Meco gradient glow for a Zed-blue one. */
  brand?: Brand
  children?: ReactNode
}

/** Top header for inner pages: h1 + intro, over a faint grid and glow. */
export function PageHero({ eyebrow, heading, body, top, brand = 'meco', children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-64 left-1/2 h-[520px] w-[960px] -translate-x-1/2 ${
          brand === 'zed'
            ? 'opacity-30 [background:radial-gradient(closest-side,var(--zed-blue),transparent)]'
            : 'opacity-25 [background:radial-gradient(closest-side,var(--purple),color-mix(in_srgb,var(--blue)_40%,transparent)_55%,transparent)]'
        }`}
      />
      <div className="container-x relative flex flex-col gap-8 pb-16 pt-16 sm:pb-24 sm:pt-24">
        {top}
        <SectionHeader level={1} eyebrow={eyebrow} heading={heading} body={body} brand={brand} />
        {children}
      </div>
    </section>
  )
}
