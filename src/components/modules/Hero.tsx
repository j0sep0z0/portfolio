"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row  items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-0 md:mr-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-4">
              Jose Pozo
            </h1>
            <h2 className="text-4xl md:text-2xl text-muted-foreground mb-4">
              Creative Full Stack Developer
            </h2>
            <p className="text-2xl text-muted-foreground mb-6 max-w-md">
              Transforming ideas into unique digital experiences through
              creativity, design, and innovative development.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://github.com/j0sep0z0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/j0sep0z0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="mailto:josepozovilalta@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            <Image
              src="/josepozo.jpg"
              alt="Jose Pozo"
              fill
              sizes="(max-width: 768px) 256px, 320px" // Define tamaños responsivos
              className="object-cover rounded-full border-2 border-[hsl(var(--card-foreground))] shadow-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
