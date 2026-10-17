import { Island } from '../components/ui/Island'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ButtonLink } from '../components/ui/ButtonLink'
import { ServicesGrid } from '../components/home/ServicesGrid'
import { FinalCta } from '../components/home/FinalCta'
import { Reveal, RevealItem } from '../lib/motion'
import { PROCESS, PROCESS_HEADING, SERVICES_INTRO } from '../content/services'

export default function Services() {
  return (
    <>
      <Island>
        <PageHero eyebrow={SERVICES_INTRO.eyebrow} heading={SERVICES_INTRO.heading} body={SERVICES_INTRO.body}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/contact?need=services">Talk to us</ButtonLink>
          </div>
        </PageHero>
      </Island>

      <Island>
        <section className="py-24 sm:py-32" aria-labelledby="services-list-heading">
          <div className="container-x">
            <h2 id="services-list-heading" className="sr-only">
              Our services
            </h2>
            <ServicesGrid detailed />
          </div>
        </section>
      </Island>

      <Island>
        <section className="cv-auto border-t border-line py-24 sm:py-32" aria-labelledby="process-heading">
          <div className="container-x flex flex-col gap-12">
            <Reveal>
              <SectionHeader eyebrow="How we work" heading={<span id="process-heading">{PROCESS_HEADING}</span>} />
            </Reveal>
            <Reveal as="ol" className="relative grid gap-8 md:grid-cols-4 md:gap-6">
              <span
                aria-hidden="true"
                className="absolute left-[19px] top-2 bottom-2 w-px bg-line md:left-0 md:right-0 md:top-[19px] md:bottom-auto md:h-px md:w-auto"
              />
              {PROCESS.map((p) => (
                <RevealItem as="li" key={p.step} className="relative flex gap-5 md:flex-col md:gap-6">
                  <span className="relative z-10 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-line-strong bg-bg font-mono text-[13px] text-gold">
                    {p.step}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[18px] font-semibold">{p.title}</h3>
                    <p className="text-[15px] leading-[1.6] text-muted">{p.body}</p>
                  </div>
                </RevealItem>
              ))}
            </Reveal>
          </div>
        </section>
      </Island>

      <Island>
        <FinalCta variant="services" />
      </Island>
    </>
  )
}
