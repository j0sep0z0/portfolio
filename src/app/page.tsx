"use client"

import SpaceBackground from "@/components/layout/SpaceBackground"
import About from "@/components/modules/About"
import Contact from "@/components/modules/Contact"
import Experience from "@/components/modules/Experience"
import Hero from "@/components/modules/Hero"
import Projects from "@/components/modules/Projects"
import Skills from "@/components/modules/Skills"

export default function Home() {
  return (
    <>
      <SpaceBackground />
      <main className="min-h-screen ">
        <div className="container mx-auto px-4 py-8 space-y-20">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  )
}
