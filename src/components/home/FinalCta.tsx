import { ArrowRight } from 'lucide-react'
import { CTA_BANDS, type CtaVariant } from '../../content/home'
import { WHATSAPP_URLS } from '../../content/site'
import { Reveal, RevealItem } from '../../lib/motion'
import { ButtonLink } from '../ui/ButtonLink'
import { WhatsAppIcon } from '../layout/WhatsAppFab'

/** WhatsApp prefill per band: the Zed band asks about Zed CRM, the services band about IT. */
const WHATSAPP: Record<CtaVariant, string> = {
  company: WHATSAPP_URLS.meco,
  services: WHATSAPP_URLS.services,
  zed: WHATSAPP_URLS.zed,
}

/** Closing CTA band. `company` and `services` use Meco styling; `zed` uses Zed blue only. */
export function FinalCta({ variant }: { variant: CtaVariant }) {
  const band = CTA_BANDS[variant]
  const zed = variant === 'zed'
  const brand = zed ? 'zed' : 'meco'

  return (
    <section className="cv-auto pb-24 sm:pb-32" aria-labelledby="final-cta-heading">
      <div className="container-x">
        <Reveal className={`card overflow-hidden px-6 py-16 text-center sm:px-12 sm:py-20 ${zed ? 'edge-zed' : 'edge-glow'}`}>
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-0 -bottom-48 mx-auto h-96 max-w-[900px] opacity-35 ${
              zed
                ? '[background:radial-gradient(closest-side,var(--zed-blue),transparent)]'
                : '[background:radial-gradient(closest-side,var(--purple),color-mix(in_srgb,var(--blue)_40%,transparent)_55%,transparent)]'
            }`}
          />
          <div className="relative flex flex-col items-center gap-6">
            <RevealItem>
              <h2 id="final-cta-heading" className="max-w-[720px] text-[32px] font-semibold leading-[1.1] sm:text-[48px]">
                {band.heading}
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="max-w-[560px] text-[17px] leading-[1.6] text-muted">{band.body}</p>
            </RevealItem>
            <RevealItem className="flex w-full flex-col justify-center gap-3 pt-2 sm:w-auto sm:flex-row">
              <ButtonLink to={band.primaryTo} brand={brand}>
                {band.primary}
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to={WHATSAPP[variant]} variant="ghost" brand={brand}>
                <WhatsAppIcon className="size-4" />
                {band.secondary}
              </ButtonLink>
            </RevealItem>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
