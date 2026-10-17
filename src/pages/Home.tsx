import { Island } from '../components/ui/Island'
import { Hero } from '../components/home/Hero'
import { TwoLines } from '../components/home/TwoLines'
import { Recognition } from '../components/home/Recognition'
import { Products } from '../components/home/Products'
import { ServicesGrid } from '../components/home/ServicesGrid'
import { ComingNext } from '../components/home/ComingNext'
import { WorkGrid } from '../components/home/WorkGrid'
import { Why } from '../components/home/Why'
import { FinalCta } from '../components/home/FinalCta'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Reveal } from '../lib/motion'
import { SERVICES_INTRO } from '../content/services'
import { WORK_INTRO } from '../content/work'

export default function Home() {
  return (
    <>
      <Island>
        <Hero />
      </Island>
      <Island>
        <TwoLines />
      </Island>
      <Island>
        <Recognition />
      </Island>
      <Island>
        <Products />
      </Island>

      <Island>
        <section className="cv-auto border-t border-line py-24 sm:py-32" aria-labelledby="services-heading">
          <div className="container-x flex flex-col gap-12">
            <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeader
                eyebrow={SERVICES_INTRO.eyebrow}
                heading={<span id="services-heading">{SERVICES_INTRO.heading}</span>}
                body={SERVICES_INTRO.body}
              />
              <ButtonLink to="/services" variant="ghost" size="sm" className="self-start md:self-auto">
                All services
              </ButtonLink>
            </Reveal>
            <ServicesGrid />
          </div>
        </section>
      </Island>

      <Island>
        <ComingNext />
      </Island>

      <Island>
        <section className="cv-auto border-t border-line py-24 sm:py-32" aria-labelledby="work-heading">
          <div className="container-x flex flex-col gap-12">
            <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeader eyebrow={WORK_INTRO.eyebrow} heading={<span id="work-heading">{WORK_INTRO.heading}</span>} />
              <ButtonLink to="/work" variant="ghost" size="sm" className="self-start md:self-auto">
                All work
              </ButtonLink>
            </Reveal>
            <WorkGrid />
          </div>
        </section>
      </Island>

      <Island>
        <div className="cv-auto border-t border-line">
          <Why />
        </div>
      </Island>
      <Island>
        <FinalCta variant="company" />
      </Island>
    </>
  )
}
