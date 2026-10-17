import { Island } from '../components/ui/Island'
import { ArrowRight, Award, Check } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { ButtonLink } from '../components/ui/ButtonLink'
import { SectionHeader } from '../components/ui/SectionHeader'
import { TiltCard } from '../components/ui/TiltCard'
import { Accordion } from '../components/ui/Accordion'
import { ScreenStack } from '../components/home/ScreenStack'
import { FinalCta } from '../components/home/FinalCta'
import { ZedSubBar } from '../components/layout/ZedSubBar'
import { ZedLogo } from '../components/brand/Logo'
import { Reveal, RevealItem } from '../lib/motion'
import { ZED_FEATURES, ZED_INTRO, ZED_SCREENS_COPY } from '../content/products'
import { CURRENCY, PLANS } from '../content/pricing'
import { ZED_FAQ } from '../content/faq'
import { PAYMENT_METHODS, RECOGNITION_BADGE, WHATSAPP_URLS, ZED_CRM } from '../content/site'

/** Whole page is brand `zed`: Zed-blue glows and buttons. Nav and footer stay Meco. */
export default function ZedCrm() {
  return (
    <div className="zed-scope">
      <ZedSubBar />

      <Island>
        <PageHero
          brand="zed"
          top={
            <div className="flex flex-col gap-3">
              <ZedLogo size="lg" endorsed={false} />
              <p className="text-[14px] text-muted">{ZED_INTRO.byline}</p>
            </div>
          }
          heading={ZED_INTRO.tagline}
          body={ZED_INTRO.body}
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink to={ZED_CRM.signupUrl} brand="zed">
                Start your {ZED_CRM.trialLabel} free
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to="#pricing" variant="ghost" brand="zed">
                See pricing
              </ButtonLink>
            </div>
            <p className="text-[14px] text-muted">{ZED_INTRO.noCard}</p>
            <p className="inline-flex items-start gap-2 self-start rounded-full border border-zed/40 px-4 py-2 text-[13px] leading-[1.4] text-fg/85">
              <Award className="mt-px size-4 shrink-0 text-zed" aria-hidden="true" />
              {RECOGNITION_BADGE}
            </p>
          </div>
        </PageHero>
      </Island>

      <Island>
        <section className="py-24 sm:py-32" aria-labelledby="screens-heading">
          <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
            <Reveal className="flex flex-col gap-6">
              <RevealItem>
                <ZedLogo />
              </RevealItem>
              <SectionHeader
                brand="zed"
                eyebrow={ZED_SCREENS_COPY.eyebrow}
                heading={<span id="screens-heading">{ZED_SCREENS_COPY.heading}</span>}
                body={ZED_SCREENS_COPY.body}
              />
            </Reveal>
            <ScreenStack />
          </div>
        </section>
      </Island>

      <Island>
        <section id="features" className="cv-auto scroll-mt-32 border-t border-line py-24 sm:py-32" aria-labelledby="features-heading">
          <div className="container-x flex flex-col gap-12">
            <Reveal>
              <SectionHeader brand="zed" eyebrow="Features" heading={<span id="features-heading">What you get.</span>} />
            </Reveal>
            <Reveal as="ul" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ZED_FEATURES.map((f) => (
                <RevealItem as="li" key={f.title}>
                  <TiltCard brand="zed" className="flex flex-col gap-4 p-6">
                    <span className="inline-flex size-10 items-center justify-center rounded-[10px] border border-zed/30 bg-zed/10">
                      <f.icon className="size-5 text-zed" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h3 className="text-[18px] font-semibold">{f.title}</h3>
                    <p className="text-[15px] leading-[1.6] text-muted">{f.body}</p>
                  </TiltCard>
                </RevealItem>
              ))}
            </Reveal>
          </div>
        </section>
      </Island>

      <Island>
        <section id="pricing" className="cv-auto scroll-mt-32 border-t border-line py-24 sm:py-32" aria-labelledby="pricing-heading">
          <div className="container-x flex flex-col gap-12">
            <Reveal>
              <SectionHeader
                brand="zed"
                eyebrow="Pricing"
                heading={<span id="pricing-heading">Priced in Kwacha. Every plan starts free.</span>}
                body={`Every plan is free for the first ${ZED_CRM.trialLabel}, with no credit card. Prices are per business, per month, in Kwacha. Pay by ${PAYMENT_METHODS}.`}
              />
            </Reveal>
            <Reveal as="ul" className="grid gap-4 lg:grid-cols-3">
              {PLANS.map((p) => (
                <RevealItem as="li" key={p.name} className="h-full">
                  <div className="card flex h-full flex-col gap-6 p-6 sm:p-8">
                    <h3 className="text-[18px] font-semibold">{p.name}</h3>
                    <p className="flex items-baseline gap-1">
                      <span className="text-[40px] font-semibold tracking-[-0.03em]">
                        {CURRENCY}
                        {p.price.toLocaleString('en-ZM')}
                      </span>
                      <span className="text-[14px] text-muted">/month</span>
                    </p>
                    <p className="text-[15px] leading-[1.6] text-muted">{p.blurb}</p>
                    <ul className="flex flex-col gap-3 border-t border-line pt-6">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-[14px] leading-[1.5] text-fg/90">
                          <Check className="mt-0.5 size-4 shrink-0 text-zed" aria-hidden="true" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-2">
                      <ButtonLink to={ZED_CRM.signupUrl} brand="zed" className="w-full">
                        Start free trial
                      </ButtonLink>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </Reveal>
            <p className="text-[15px] text-muted">
              Questions about a plan?{' '}
              <a href={WHATSAPP_URLS.zed} target="_blank" rel="noopener noreferrer" className="link">
                Ask on WhatsApp
              </a>
            </p>
          </div>
        </section>
      </Island>

      <Island>
        <section id="faq" className="cv-auto scroll-mt-32 border-t border-line py-24 sm:py-32" aria-labelledby="faq-heading">
          <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <SectionHeader brand="zed" eyebrow="FAQ" heading={<span id="faq-heading">Common questions.</span>} />
            </Reveal>
            <div className="flex flex-col gap-6">
              <Accordion items={ZED_FAQ} />
              <p className="text-[15px] text-muted">
                Already using Zed CRM?{' '}
                <a href={WHATSAPP_URLS.zedSupport} target="_blank" rel="noopener noreferrer" className="link">
                  Message support on WhatsApp.
                </a>
              </p>
            </div>
          </div>
        </section>
      </Island>

      <Island>
        <FinalCta variant="zed" />
      </Island>
    </div>
  )
}
