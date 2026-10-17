import { ButtonLink } from '../components/ui/ButtonLink'
import { HeroPoster } from '../components/three/HeroPoster'

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0" />
      <div className="container-x relative flex min-h-[calc(100svh-64px)] flex-col items-center justify-center gap-8 py-16 text-center">
        <HeroPoster className="w-full max-w-[320px]" />
        <div className="flex flex-col items-center gap-4">
          <p className="eyebrow">Error 404</p>
          <h1 className="text-[40px] font-semibold leading-[1.05] sm:text-[56px]">This page doesn’t exist.</h1>
          <p className="max-w-[480px] text-[17px] leading-[1.6] text-muted">The link may be old, or the address mistyped.</p>
        </div>
        <ButtonLink to="/">Back to home</ButtonLink>
      </div>
    </section>
  )
}
