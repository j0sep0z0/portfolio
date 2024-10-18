import type { Metadata } from 'next'

// import localFont from 'next/font/local'
import { gruppo } from './fonts/fonts'
import './globals.css'

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// })
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// })

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
    <html lang="en">
      <body className={`${gruppo.className} antialiased`}>{children}</body>
    </html>
  )
}
