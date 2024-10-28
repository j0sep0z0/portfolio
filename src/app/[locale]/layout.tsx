import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'

import '@/app/globals.css'
import { routing } from '@/i18n/routing'

import { montserrat } from '../fonts/fonts'

export const metadata: Metadata = {
  title: 'Jose Pozo',
  description: 'Portfolio of Jose Pozo',
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Verificar si el `locale` es válido
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Cargar los mensajes de traducción
  const messages = await getMessages({ locale })

  return (
    <html lang={locale}>
      <body className={`${montserrat.className} antialiased m-2`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
