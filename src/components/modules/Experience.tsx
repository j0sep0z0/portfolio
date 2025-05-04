"use client"

import { motion } from "framer-motion"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { computeDuration, formatDate } from "@/lib/dateHelper"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Rkive AI",
    companyUrl: "https://rkiveai.com/",
    start: "2025-05-01",
    // no end = ongoing
    description:
      "Developing and maintaining Rkive AI’s mobile and web applications that automate multimedia content creation and management for social media. Responsible for designing robust front-end and back-end architectures, integrating AI-driven editing engines, and ensuring scalable deployments.",
    technologies: [
      "Expo",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "Axios",
      "Tailwind CSS",
      "AWS",
      "Docker",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Igrowker | Junior IT Training",
    companyUrl: "https://igrowker.com",
    start: "2024-11-01",
    end: "2024-12-01",
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
      "Vite",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Front End Developer",
    company: "Igrowker | Junior IT Training",
    companyUrl: "https://igrowker.com",
    start: "2024-09-01",
    end: "2024-11-01",
    description:
      "As a member of the GoPass team, I contributed to developing a secure platform designed to combat the growing issue of illegal ticket resale in Argentine football, ensuring the authenticity of each ticket through innovative solutions and robust front-end architectures.",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Axios",
      "Tailwind CSS",
      "Vite",
      "Git",
      "GitHub",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => {
            const dateRange = `${formatDate(exp.start)} – ${exp.end ? formatDate(exp.end) : "Present"}`
            const duration = computeDuration(exp.start, exp.end)
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden card-hover">
                  <CardHeader>
                    <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-xl font-semibold">{exp.title}</span>
                      <div className="flex flex-col items-end">
                        <span className="text-sm text-muted-foreground">
                          {dateRange}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {duration}
                        </span>
                      </div>
                    </CardTitle>
                    <p className="text-muted-foreground">
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-primary"
                      >
                        {exp.company}
                      </a>
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
