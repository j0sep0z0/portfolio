import type { Metadata } from 'next'

import { gruppo, montserrat } from './fonts/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jose Pozo',
  description: 'Portfolio of Jose Pozo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${montserrat.className} antialiased m-2`}>
        {children}
      </body>
    </html>
  )
}
