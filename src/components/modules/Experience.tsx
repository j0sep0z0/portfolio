"use client"

import { motion } from "framer-motion"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Full Stack Web Developer",
    company: "Igrowker | Junior IT Training",
    date: "Nov 2024 - Dec 2024",
    description:
      "At Reffindr, a revolutionary renting platform, I played a key role in developing both front-end and back-end features. The project focused on connecting outgoing and incoming tenants, simplifying the rental process while reducing costs and enhancing efficiency.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Redux Toolkit",
      "Axios",
      "Tailwind CSS",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Front End Developer",
    company: "Igrowker | Junior IT Training",
    date: "Sep 2024 - Nov 2024",
    description:
      "As a member of the GoPass team, I contributed to developing a secure platform designed to combat the growing issue of illegal ticket resale in Argentine football, ensuring the authenticity of each ticket through innovative solutions and robust front-end architectures.",
    technologies: ["React", "TypeScript", "Redux Toolkit", "Axios", "Tailwind CSS", "Git", "GitHub"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden card-hover">
                <CardHeader>
                  <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-xl font-semibold">{experience.title}</span>
                    <span className="text-sm text-muted-foreground">{experience.date}</span>
                  </CardTitle>
                  <p className="text-muted-foreground">{experience.company}</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{experience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tech}
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
