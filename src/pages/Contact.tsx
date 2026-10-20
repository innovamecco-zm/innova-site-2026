import { Island } from '../components/ui/Island'
import { useCallback, useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CheckCircle2, AlertCircle, ChevronDown, Loader2 } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { ButtonLink } from '../components/ui/ButtonLink'
import { WhatsAppIcon } from '../components/layout/WhatsAppFab'
import { CONTACT_ENDPOINT, SITE, WHATSAPP_URLS } from '../content/site'

const NEED_GROUPS: { label: string; options: string[] }[] = [
  { label: 'Zed CRM', options: ['Zed CRM (trial, pricing or support)'] },
  { label: 'Services', options: ['A website', 'Business email & domains', 'Custom software', 'IT management'] },
  { label: 'Other', options: ['Marketplace updates', 'Something else'] },
]

/** ?need= values that preselect an option (services opens on the first Services option). */
const NEED_PRESETS: Record<string, string> = {
  zed: 'Zed CRM (trial, pricing or support)',
  services: 'A website',
  marketplace: 'Marketplace updates',
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

function Field({ id, label, children, optional }: { id: string; label: string; children: React.ReactNode; optional?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[14px] font-medium text-fg/90">
        {label}
        {optional && <span className="font-normal text-muted"> (optional)</span>}
      </label>
      {children}
    </div>
  )
}

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [params] = useSearchParams()
  const preset = NEED_PRESETS[params.get('need') ?? '']

  // Preselect once the <select> itself hydrates (it sits in its own Suspense boundary), so the
  // prerendered HTML (no query string) still matches. Also re-applies when the form remounts.
  const needRef = useCallback(
    (el: HTMLSelectElement | null) => {
      if (el && preset) el.value = preset
    },
    [preset],
  )

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot: real people never see or fill this field.
    if (data.get('company_website')) {
      setStatus('sent')
      return
    }
    if (!CONTACT_ENDPOINT) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      const body = new URLSearchParams()
      data.forEach((v, k) => k !== 'company_website' && body.append(k, String(v)))
      body.append('source', 'mecoinnova.com')
      body.append('submitted_at', new Date().toISOString())
      // Apps Script web apps don't return CORS headers; no-cors sends the request and
      // gives an opaque response. A network failure still throws and shows the error state.
      await fetch(CONTACT_ENDPOINT, { method: 'POST', mode: 'no-cors', body })
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Island>
        <PageHero
          eyebrow="Contact"
          heading="Tell us what you need."
          body="Send the form and we’ll reply within one working day. For anything quick, WhatsApp is faster."
        />
      </Island>

      <Island>
        <section className="py-24 sm:py-32">
          <div className="container-x grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div className="card p-6 sm:p-10">
              {status === 'sent' ? (
                <div role="status" className="flex flex-col items-start gap-4 py-8">
                  <CheckCircle2 className="size-8 text-blue-text" aria-hidden="true" />
                  <h2 className="text-[24px] font-semibold">Thanks, we’ve got your message.</h2>
                  <p className="text-[16px] leading-[1.6] text-muted">We’ll reply within one working day.</p>
                  <button type="button" onClick={() => setStatus('idle')} className="link text-[15px] font-medium">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="relative flex flex-col gap-6">
                  <h2 className="text-[24px] font-semibold">Send us a message</h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field id="name" label="Name">
                      <input id="name" name="name" required autoComplete="name" className="field" />
                    </Field>
                    <Field id="business" label="Business" optional>
                      <input id="business" name="business" autoComplete="organization" className="field" />
                    </Field>
                    <Field id="email" label="Email">
                      <input id="email" name="email" type="email" required autoComplete="email" className="field" />
                    </Field>
                    <Field id="phone" label="Phone" optional>
                      <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+260" className="field" />
                    </Field>
                  </div>
                  <Field id="need" label="What do you need?">
                    <div className="relative">
                      <select ref={needRef} id="need" name="need" required defaultValue="" className="field appearance-none pr-10">
                        <option value="" disabled>
                          Choose one
                        </option>
                        {NEED_GROUPS.map((g) => (
                          <optgroup key={g.label} label={g.label} className="bg-elev">
                            {g.options.map((n) => (
                              <option key={n} value={n} className="bg-elev">
                                {n}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden="true" />
                    </div>
                    {/* Shown via CSS :has() only while the Zed CRM option is selected (no state, hydration-safe). */}
                    <p className="zed-support-hint zed-scope text-[14px] text-muted">
                      Already using Zed CRM?{' '}
                      <a href={WHATSAPP_URLS.zedSupport} target="_blank" rel="noopener noreferrer" className="link">
                        Message support on WhatsApp.
                      </a>
                    </p>
                  </Field>
                  <Field id="message" label="Message">
                    <textarea id="message" name="message" required rows={5} className="field" />
                  </Field>

                  {/* Honeypot — hidden from people and assistive tech. */}
                  <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                    <label htmlFor="company_website">Leave this empty</label>
                    <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  {status === 'error' && (
                    <p role="alert" className="flex items-start gap-2 rounded-[12px] border border-red/40 bg-red/10 p-4 text-[14px] leading-[1.5] text-fg">
                      <AlertCircle className="mt-0.5 size-4 shrink-0 text-red" aria-hidden="true" />
                      <span>
                        Something went wrong sending your message. Please try again, or message us on{' '}
                        <a href={WHATSAPP_URLS.meco} target="_blank" rel="noopener noreferrer" className="underline">
                          WhatsApp
                        </a>
                        .
                      </span>
                    </p>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[13px] text-muted">We only use your details to reply to you.</p>
                    <button type="submit" disabled={status === 'sending'} className="btn btn-primary disabled:opacity-70">
                      {status === 'sending' && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
                      {status === 'sending' ? 'Sending…' : 'Send message'}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <aside className="card edge-glow flex flex-col gap-6 p-6 sm:p-10" aria-labelledby="wa-heading">
              <div className="flex flex-col gap-2">
                <h2 id="wa-heading" className="flex items-center gap-2 text-[20px] font-semibold">
                  <WhatsAppIcon className="size-5 text-[#3ccf7a]" />
                  Talk on WhatsApp
                </h2>
                <p className="text-[15px] leading-[1.6] text-muted">Scan with your phone, or tap the button.</p>
              </div>
              <img
                src="/whatsapp-qr.svg"
                alt={`QR code that opens a WhatsApp chat with Meco Innova on ${SITE.whatsappNumber}`}
                width={240}
                height={240}
                loading="lazy"
                className="w-full max-w-[240px] rounded-[12px] bg-white p-3"
              />
              <p className="text-[18px] font-semibold tracking-[-0.01em]">{SITE.whatsappNumber}</p>
              <ButtonLink to={WHATSAPP_URLS.meco}>Open WhatsApp</ButtonLink>
              <p className="text-[14px] text-muted">
                Or email{' '}
                <a href={`mailto:${SITE.email}`} className="link">
                  {SITE.email}
                </a>
              </p>
            </aside>
          </div>
        </section>
      </Island>
    </>
  )
}
