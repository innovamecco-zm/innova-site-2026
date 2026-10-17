import { SERVICES } from '../../content/services'
import { Reveal, RevealItem } from '../../lib/motion'
import { TiltCard } from '../ui/TiltCard'

/** 4 service cards with CSS-3D tilt. `detailed` shows the long description (services page). */
export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <Reveal as="ul" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {SERVICES.map((s) => (
        <RevealItem as="li" key={s.title}>
          <TiltCard className="flex flex-col gap-4 p-6">
            <span className="inline-flex size-10 items-center justify-center rounded-[10px] border border-line bg-white/[0.03] tilt-pop">
              <s.icon className="size-5 text-blue-text" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <div className="tilt-pop flex flex-col gap-2 [--pop:16px]">
              <h3 className="text-[18px] font-semibold">{s.title}</h3>
              <p className="text-[15px] leading-[1.55] text-muted">{s.summary}</p>
              {detailed && <p className="pt-2 text-[15px] leading-[1.6] text-fg/85">{s.detail}</p>}
            </div>
          </TiltCard>
        </RevealItem>
      ))}
    </Reveal>
  )
}
