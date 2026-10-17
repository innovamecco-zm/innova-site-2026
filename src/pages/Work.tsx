import { Island } from '../components/ui/Island'
import { PageHero } from '../components/ui/PageHero'
import { WorkGrid } from '../components/home/WorkGrid'
import { FinalCta } from '../components/home/FinalCta'
import { WORK_INTRO } from '../content/work'

export default function Work() {
  return (
    <>
      <Island>
        <PageHero
          eyebrow={WORK_INTRO.eyebrow}
          heading={WORK_INTRO.heading}
          body={WORK_INTRO.body}
        />
      </Island>
      <Island>
        <section className="py-24 sm:py-32" aria-labelledby="case-studies-heading">
          <div className="container-x">
            <h2 id="case-studies-heading" className="sr-only">
              Case studies
            </h2>
            <WorkGrid />
          </div>
        </section>
      </Island>
      <Island>
        <FinalCta variant="company" />
      </Island>
    </>
  )
}
