import { HeartHandshake, MapPin, ShieldCheck } from 'lucide-react'
import { WHY } from '../../content/home'
import { Reveal, RevealItem } from '../../lib/motion'
import { SectionHeader } from '../ui/SectionHeader'

const ICONS = [MapPin, ShieldCheck, HeartHandshake]

export function Why() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="why-heading">
      <div className="container-x flex flex-col gap-12">
        <Reveal>
          <SectionHeader eyebrow={WHY.eyebrow} heading={<span id="why-heading">{WHY.heading}</span>} />
        </Reveal>
        <Reveal as="ul" className="grid gap-px overflow-hidden rounded-[12px] border border-line bg-line md:grid-cols-3">
          {WHY.points.map((p, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <RevealItem as="li" key={p.title} className="flex flex-col gap-4 bg-bg p-6 sm:p-8">
                <Icon className="size-5 text-gold" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="text-[20px] font-semibold">{p.title}</h3>
                <p className="text-[15px] leading-[1.6] text-muted">{p.body}</p>
              </RevealItem>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
