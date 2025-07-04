import type { Metadata } from "next"
import { Poppins } from "next/font/google"

import { cn } from "@/lib/utils"

import "./globals.css"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Jose Pozo | Creative Full Stack Developer",
  description:
    "Portfolio of Jose Pozo, a creative Full Stack Developer based in Barcelona",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          poppins.className,
          "min-h-screen bg-background text-foreground antialiased"
        )}
      >
        {children}
      </body>
    </html>
  )
}
