import { ArrowRight } from 'lucide-react'
import { TWO_LINES } from '../../content/home'
import { Reveal, RevealItem } from '../../lib/motion'
import { LogoMark, ZedLogo } from '../brand/Logo'
import { ButtonLink } from '../ui/ButtonLink'

/** The company's two lines of business, side by side: Zed CRM (product) and Innova Services (managed IT). */
export function TwoLines() {
  const { zed, services } = TWO_LINES
  return (
    <section aria-labelledby="two-lines-heading" className="pb-16 sm:pb-24">
      <h2 id="two-lines-heading" className="sr-only">
        What we do
      </h2>
      <Reveal as="ul" className="container-x grid gap-4 md:grid-cols-2">
        <RevealItem as="li" className="h-full">
          <div className="card edge-zed zed-scope flex h-full flex-col gap-4 p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h3>
                <ZedLogo />
              </h3>
              <span className="rounded-full border border-zed/40 px-3 py-1 text-[12px] text-fg/80">{zed.label}</span>
            </div>
            <p className="text-[16px] leading-[1.6] text-fg/85">{zed.body}</p>
            <div className="mt-auto pt-2">
              <ButtonLink to="/products/zed-crm" brand="zed" size="sm">
                {zed.cta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </RevealItem>
        <RevealItem as="li" className="h-full">
          <div className="card edge-glow flex h-full flex-col gap-4 p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h3 className="inline-flex items-center gap-2 text-[16px] font-semibold tracking-[-0.02em]">
                <LogoMark className="h-5 w-auto" />
                {services.title}
              </h3>
              <span className="rounded-full border border-line px-3 py-1 text-[12px] text-fg/80">{services.label}</span>
            </div>
            <p className="text-[16px] leading-[1.6] text-fg/85">{services.body}</p>
            <div className="mt-auto pt-2">
              <ButtonLink to="/services" size="sm">
                {services.cta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </RevealItem>
      </Reveal>
    </section>
  )
}
