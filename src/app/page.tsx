import { About } from "@/components/modules/About"
import { Contact } from "@/components/modules/Contact"
import { Experience } from "@/components/modules/Experience"
import { Hero } from "@/components/modules/Hero"
import { Projects } from "@/components/modules/Projects"
import { Skills } from "@/components/modules/Skills"
import { ThemeToggle } from "@/components/modules/ThemeToogle"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ThemeToggle className="fixed top-4 right-4 z-50" />
      <div className="container mx-auto px-4 py-8 space-y-20">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
