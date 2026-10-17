import { Island } from '../components/ui/Island'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeader } from '../components/ui/SectionHeader'
import { TiltCard } from '../components/ui/TiltCard'
import { FinalCta } from '../components/home/FinalCta'
import { Reveal, RevealItem } from '../lib/motion'
import { ABOUT, TEAM } from '../content/team'
import { RECOGNITION } from '../content/site'
import { Award } from 'lucide-react'
import { ZedMark } from '../components/brand/Logo'

export default function About() {
  return (
    <>
      <Island>
        <PageHero eyebrow={ABOUT.eyebrow} heading={ABOUT.heading} body={ABOUT.mission} />
      </Island>

      <Island>
        <section className="py-24 sm:py-32" aria-labelledby="story-heading">
          <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <SectionHeader eyebrow={ABOUT.storyHeading} heading={<span id="story-heading">Why we built this.</span>} />
            </Reveal>
            <Reveal className="flex flex-col gap-6">
              {ABOUT.story.map((p) => (
                <RevealItem key={p.slice(0, 24)}>
                  <p className="text-[17px] leading-[1.7] text-fg/85">{p}</p>
                </RevealItem>
              ))}
              <RevealItem className="card flex items-start gap-3 p-5 text-[14px] leading-[1.5] text-muted">
                <span className="mt-0.5 flex shrink-0 items-center gap-1.5">
                  <Award className="size-4 text-gold" aria-hidden="true" />
                  <ZedMark className="size-4" />
                </span>
                <p>{RECOGNITION}</p>
              </RevealItem>
            </Reveal>
          </div>
        </section>
      </Island>

      <Island>
        <section className="cv-auto border-t border-line py-24 sm:py-32" aria-labelledby="team-heading">
          <div className="container-x flex flex-col gap-12">
            <Reveal>
              <SectionHeader eyebrow={ABOUT.teamHeading} heading={<span id="team-heading">Three people, one phone number.</span>} />
            </Reveal>
            <Reveal as="ul" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TEAM.map((m) => (
                <RevealItem as="li" key={m.name}>
                  <TiltCard max={5} className="overflow-hidden">
                    <img
                      src={m.photo}
                      alt={`Portrait of ${m.name}`}
                      width={640}
                      height={640}
                      loading="lazy"
                      decoding="async"
                      className="block aspect-square w-full rounded-t-[11px] border-b border-line object-cover"
                    />
                    <div className="flex flex-col gap-1 p-6">
                      <h3 className="text-[18px] font-semibold">{m.name}</h3>
                      <p className="text-[14px] text-muted">{m.role}</p>
                    </div>
                  </TiltCard>
                </RevealItem>
              ))}
            </Reveal>
          </div>
        </section>
      </Island>

      <Island>
        <FinalCta variant="company" />
      </Island>
    </>
  )
}
