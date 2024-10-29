import { getRequestConfig } from 'next-intl/server'

import { Locale } from './routing'
import { routing } from './routing'

// Define un tipo para los locales permitidos
// type Locale = 'cat' | 'en' | 'es' | 'fr' | 'pt'

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
