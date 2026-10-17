import { ArrowRight } from 'lucide-react'
import { HERO } from '../../content/home'
import { TRUST_LINE } from '../../content/site'
import { ButtonLink } from '../ui/ButtonLink'
import { Magnetic } from '../ui/Magnetic'
import { HeroVisual } from '../three/HeroVisual'

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-20 h-[760px] w-[760px] opacity-30 [background:radial-gradient(closest-side,var(--purple),transparent)]"
      />

      <div className="container-x relative grid items-center gap-8 pb-16 pt-12 sm:pt-16 lg:min-h-[calc(100svh-64px)] lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-16">
        <div className="flex flex-col gap-6">
          <p className="eyebrow">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-gold" />
            {HERO.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="text-[40px] font-semibold leading-[1.04] tracking-[-0.03em] sm:text-[56px] lg:text-[64px]"
          >
            {HERO.headline}
          </h1>
          <p className="max-w-[560px] text-[17px] leading-[1.6] text-muted sm:text-[19px]">{HERO.sub}</p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
            <Magnetic>
              <ButtonLink to="/contact" className="w-full sm:w-auto">
                {HERO.primaryCta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </Magnetic>
            <ButtonLink to="/products/zed-crm" variant="ghost">
              {HERO.secondaryCta}
            </ButtonLink>
          </div>

          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted" aria-label="About us">
            {TRUST_LINE.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1 rounded-full bg-muted/60" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-[420px] sm:max-w-[520px] lg:max-w-none">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
