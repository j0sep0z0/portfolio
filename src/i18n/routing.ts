import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['cat', 'en', 'es', 'fr', 'pt'],

  // Used when no locale matches
  defaultLocale: 'en',
})

export type Locale = 'cat' | 'en' | 'es' | 'fr' | 'pt'

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)