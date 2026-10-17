import { ArrowUpRight } from 'lucide-react'
import { CASE_STUDIES, type CaseStudy } from '../../content/work'
import { Reveal, RevealItem } from '../../lib/motion'
import { TiltCard } from '../ui/TiltCard'

const ACCENT: Record<CaseStudy['accent'], string> = {
  red: 'var(--red)',
  blue: 'var(--blue)',
}

/** Abstract, on-brand card art (no stock imagery). */
function CardArt({ study }: { study: CaseStudy }) {
  const c = ACCENT[study.accent]
  return (
    <div aria-hidden="true" className="relative h-40 overflow-hidden rounded-t-[11px] border-b border-line bg-[#0d0f16]">
      <div className="grid-bg absolute inset-0 opacity-70" />
      <div
        className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 opacity-50"
        style={{ background: `radial-gradient(closest-side, ${c}, transparent)` }}
      />
      <div className="absolute inset-0 flex items-center justify-center tilt-pop [--pop:30px]">
        <span
          className="size-14 rounded-full border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
          style={{ background: `radial-gradient(circle at 35% 30%, #fff8, ${c} 45%, #000 120%)` }}
        />
      </div>
    </div>
  )
}

/** Client case studies (home and /work). */
export function WorkGrid() {
  return (
    <Reveal as="ul" className="grid gap-4 md:grid-cols-2">
      {CASE_STUDIES.map((s) => (
        <RevealItem as="li" key={s.slug}>
          <TiltCard as="article" max={5} className="flex flex-col">
            <CardArt study={s} />
            <div className="flex flex-1 flex-col gap-3 p-6">
              <p className="text-[13px] text-muted">{s.client}</p>
              <h3 className="text-[20px] font-semibold leading-[1.25]">{s.title}</h3>
              <p className="text-[15px] leading-[1.6] text-muted">{s.summary}</p>
              {s.stats && (
                <div className="pt-1">
                  <ul className="grid grid-cols-3 gap-2" aria-label="Key figures">
                    {s.stats.items.map((stat) => {
                      const [num, ...rest] = stat.split(' ')
                      return (
                        <li key={stat} className="rounded-[10px] border border-line px-3 py-2">
                          <span className="block text-[18px] font-semibold leading-tight">{num}</span>
                          <span className="block text-[12px] text-muted">{rest.join(' ')}</span>
                        </li>
                      )
                    })}
                  </ul>
                  <p className="mt-2 text-[12px] text-muted">{s.stats.caption}</p>
                </div>
              )}
              <ul className="mt-auto flex flex-wrap gap-2 pt-3" aria-label="Tags">
                {s.tags.map((t) => (
                  <li key={t} className="rounded-full border border-line px-3 py-1 text-[12px] text-fg/80">
                    {t}
                  </li>
                ))}
              </ul>
              {s.href && (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link inline-flex items-center gap-1 self-start pt-1 text-[14px] font-medium"
                >
                  Visit site <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only">: {s.title} (opens in a new tab)</span>
                </a>
              )}
            </div>
          </TiltCard>
        </RevealItem>
      ))}
    </Reveal>
  )
}
