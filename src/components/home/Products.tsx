import { Check } from 'lucide-react'
import { ZED_FEATURES, ZED_INTRO } from '../../content/products'
import { CURRENCY, PLANS } from '../../content/pricing'
import { ZED_CRM } from '../../content/site'
import { Reveal, RevealItem } from '../../lib/motion'
import { ZedLogo } from '../brand/Logo'
import { ButtonLink } from '../ui/ButtonLink'
import { SectionHeader } from '../ui/SectionHeader'
import { ScreenStack } from './ScreenStack'

/** Price teaser derived from pricing.ts so it can't drift from the pricing table. */
const TEASER = `Plans from ${CURRENCY}${PLANS[0].price}/month · ${ZED_CRM.trialLabel} free`

/** Home: the Zed CRM section. Brand `zed` only — Zed blue, no Meco gradient. */
export function Products() {
  return (
    <section id="products" className="zed-scope py-24 sm:py-32" aria-labelledby="products-heading">
      <div className="container-x flex flex-col gap-12">
        <Reveal>
          <SectionHeader
            brand="zed"
            eyebrow={ZED_INTRO.eyebrow}
            heading={
              <span id="products-heading" className="inline-flex">
                <ZedLogo size="lg" />
              </span>
            }
          />
        </Reveal>

        <Reveal className="card edge-zed overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] opacity-30 [background:radial-gradient(closest-side,var(--zed-blue),transparent)]"
          />
          <div className="relative grid gap-12 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:p-12">
            <div className="flex flex-col gap-6">
              <RevealItem>
                <h3 className="text-[28px] font-semibold leading-[1.15] sm:text-[36px]">{ZED_INTRO.tagline}</h3>
              </RevealItem>
              <RevealItem>
                <p className="text-[16px] leading-[1.6] text-muted">{ZED_INTRO.body}</p>
              </RevealItem>
              <RevealItem as="ul" className="grid gap-3 sm:grid-cols-2">
                {ZED_FEATURES.map((f) => (
                  <li key={f.title} className="flex items-start gap-2.5 text-[14px] leading-[1.5] text-fg/90">
                    <Check className="mt-0.5 size-4 shrink-0 text-zed" aria-hidden="true" />
                    {f.title}
                  </li>
                ))}
              </RevealItem>
              <RevealItem className="flex flex-col gap-4 border-t border-line pt-6 xl:flex-row xl:items-center xl:justify-between">
                <p className="text-[15px] font-medium">{TEASER}</p>
                <div className="flex flex-wrap gap-3">
                  <ButtonLink to={ZED_CRM.signupUrl} size="sm" brand="zed">
                    Start free trial
                  </ButtonLink>
                  <ButtonLink to="/products/zed-crm" variant="ghost" size="sm" brand="zed">
                    See Zed CRM
                  </ButtonLink>
                </div>
              </RevealItem>
            </div>
            <RevealItem>
              <ScreenStack />
            </RevealItem>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
