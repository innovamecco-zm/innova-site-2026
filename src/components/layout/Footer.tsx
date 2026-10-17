import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'
import { FOOTER_LINKS } from '../../content/nav'
import { SITE, WHATSAPP_URLS } from '../../content/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <Link to="/" aria-label="Meco Innova — home" className="self-start rounded-md">
            <Logo />
          </Link>
          <p className="max-w-[320px] text-[14px] leading-[1.6] text-muted">{SITE.descriptor}</p>
        </div>

        {FOOTER_LINKS.map((col) => (
          <nav key={col.heading} aria-label={`${col.heading} links`}>
            <h2 className="mb-4 text-[13px] font-medium uppercase tracking-[0.04em] text-muted">{col.heading}</h2>
            <ul className="flex flex-col gap-3">
              {col.links.map((l) => (
                <li key={l.to}>
                  {l.to.startsWith('http') ? (
                    <a href={l.to} target="_blank" rel="noopener noreferrer" className="text-[14px] text-fg/90 transition-colors hover:text-white">
                      {l.label}
                    </a>
                  ) : (
                    <Link to={l.to} className="text-[14px] text-fg/90 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="mb-4 text-[13px] font-medium uppercase tracking-[0.04em] text-muted">Contact</h2>
          <ul className="flex flex-col gap-3 text-[14px]">
            <li>
              <a href={WHATSAPP_URLS.meco} target="_blank" rel="noopener noreferrer" className="text-fg/90 hover:text-white">
                WhatsApp {SITE.whatsappNumber}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="text-fg/90 hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li className="text-muted">
              {SITE.city}, {SITE.country}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex h-16 items-center text-[13px] text-muted">
          <p>
            © {year} {SITE.legalName}. {SITE.city}, {SITE.country}.
          </p>
        </div>
      </div>
    </footer>
  )
}
