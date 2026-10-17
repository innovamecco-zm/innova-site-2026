import { Suspense, type ReactNode } from 'react'

/**
 * A Suspense boundary around a page section. Nothing here suspends; the boundary lets React
 * hydrate and commit each section separately (selective hydration) instead of the whole page
 * in one long main-thread task.
 */
export function Island({ children }: { children: ReactNode }) {
  return <Suspense fallback={null}>{children}</Suspense>
}
