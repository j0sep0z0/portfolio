import createMiddleware from 'next-intl/middleware'

import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(cat|en|es|pt)/:path*'],
}
