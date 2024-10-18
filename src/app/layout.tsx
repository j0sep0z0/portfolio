import type { Metadata } from 'next'

import { gruppo } from './fonts/fonts'
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
      <body className={`${gruppo.className} antialiased text-gray-800 m-1`}>
        {children}
      </body>
    </html>
  )
}
