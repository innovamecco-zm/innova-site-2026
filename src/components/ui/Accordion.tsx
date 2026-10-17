import { useId, useState, type ReactElement, type ReactNode } from 'react'
import { Plus } from 'lucide-react'
import type { FaqItem } from '../../content/faq'
import { WHATSAPP_URLS } from '../../content/site'

/** Resolves link keywords used in content files. */
const resolveHref = (href: string) => (href === 'zed-whatsapp' ? WHATSAPP_URLS.zed : href)

/** Renders `text`, turning each key of `links` (first occurrence) into an external link. */
function withLinks(text: string, links?: Record<string, string>): ReactNode {
  if (!links) return text
  let parts: (string | ReactElement)[] = [text]
  for (const [label, href] of Object.entries(links)) {
    parts = parts.flatMap((part, i): (string | ReactElement)[] => {
      if (typeof part !== 'string' || !part.includes(label)) return [part]
      const at = part.indexOf(label)
      return [
        part.slice(0, at),
        <a key={`${label}-${i}`} href={resolveHref(href)} target="_blank" rel="noopener noreferrer" className="link">
          {label}
        </a>,
        part.slice(at + label.length),
      ]
    })
  }
  return parts
}

export function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0)
  const base = useId()

  return (
    <div className="card divide-y divide-line">
      {items.map((item, i) => {
        const isOpen = open === i
        const btnId = `${base}-b${i}`
        const panelId = `${base}-p${i}`
        return (
          <div key={item.q}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[16px] font-medium text-fg transition-colors hover:text-white"
              >
                {item.q}
                <Plus
                  aria-hidden="true"
                  className={`size-5 shrink-0 text-muted transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              {/* `inert` keeps links in collapsed answers out of the tab order. */}
              <div className="overflow-hidden" aria-hidden={!isOpen} inert={!isOpen}>
                <p className="px-6 pb-6 text-[15px] leading-[1.65] text-muted">{withLinks(item.a, item.links)}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
