import { Award } from 'lucide-react'
import { RECOGNITION } from '../../content/site'
import { ZedMark } from '../brand/Logo'

export function Recognition() {
  return (
    <section aria-label="Recognition" className="border-y border-line bg-white/[0.015]">
      <div className="container-x flex items-start gap-3 py-5 text-[14px] leading-[1.5] text-muted sm:items-center sm:justify-center">
        <span className="mt-0.5 flex shrink-0 items-center gap-1.5 sm:mt-0">
          <Award className="size-4 text-gold" aria-hidden="true" />
          <ZedMark className="size-4" />
        </span>
        <p>{RECOGNITION}</p>
      </div>
    </section>
  )
}
