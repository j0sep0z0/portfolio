"use client"

import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"

const skills = {
  frontend: [
    "React",
    "Next.js",
    "Expo",
    "JavaScript",
    "TypeScript",
    "Redux Toolkit",
    "Zustand",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Axios",
    "Vite",
    "Figma",
  ],
  backend: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
  testing: ["Jest", "Mocha", "Chai.js"],
  tools: ["Git", "GitHub", "VS Code", "npm"],
}

export default function Skills() {
  return (
    <section id="skills" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 capitalize">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-sm font-medium bg-secondary text-secondary-foreground rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
