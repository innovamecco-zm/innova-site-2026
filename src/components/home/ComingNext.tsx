import { ArrowRight, Store } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MARKETPLACE } from '../../content/site'
import { Reveal, RevealItem } from '../../lib/motion'

/** Small Meco-branded strip for the upcoming marketplace (not part of Zed CRM). */
export function ComingNext() {
  return (
    <section aria-labelledby="coming-next-heading" className="pb-24 sm:pb-32">
      <Reveal className="container-x">
        <RevealItem className="card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-[10px] border border-line bg-white/[0.03]">
              <Store className="size-5 text-gold" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.04em] text-gold">{MARKETPLACE.badge}</p>
              <h3 id="coming-next-heading" className="mt-1 text-[18px] font-semibold">
                {MARKETPLACE.pitch}
              </h3>
              <p className="mt-1 text-[15px] leading-[1.6] text-fg/85">{MARKETPLACE.body}</p>
              <p className="mt-1 text-[14px] text-muted">{MARKETPLACE.launch}</p>
            </div>
          </div>
          <Link to="/contact?need=marketplace" className="link inline-flex shrink-0 items-center gap-1.5 text-[14px] font-medium">
            {MARKETPLACE.cta} <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </RevealItem>
      </Reveal>
    </section>
  )
}
