'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { AboutMe } from '@/components/modules/AboutMe'
import { Experience } from '@/components/modules/Experience'
import { Projects } from '@/components/modules/Projects'
import { Footer } from '@/components/ui/Footer'
import { Header } from '@/components/ui/Header'

export default function Home() {
  const [isImageExpanded, setIsImageExpanded] = useState(false)

  const resetImageSize = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName !== 'IMG' && isImageExpanded) {
      setIsImageExpanded(false)
    }
  }

  return (
    <>
      <div onClick={resetImageSize}>
        <Header />
        <main>
          <Experience />
          <Projects
            setIsImageExpanded={setIsImageExpanded}
            isImageExpanded={isImageExpanded}
          />
          <AboutMe />
        </main>
        <Footer />
      </div>
    </>
  )
}
