import { motion } from "framer-motion"

import ProjectCard from "./ProjectCard"

const projects: Project[] = [
  {
    title: "Rkive AI",
    description:
      "An innovative mobile and web app that automates social media content creation with AI-powered editing workflows, enabling users to produce posts featuring eye-catching videos and images in seconds.",
    image: "/proweb.jpg?height=200&width=300",
    technologies: [
      "Expo",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "Axios",
      "Tailwind CSS",
    ],
    liveLink: "https://rkiveai.com/",
    // githubLink: "#",
  },
  {
    title: "Reffindr",
    description:
      "An intuitive platform matching outgoing and incoming tenants, featuring real-time updates and secure transaction flows for seamless rentals.",
    image: "/rffindr.png",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Redux Toolkit",
      "Axios",
      "Tailwind CSS",
      "Vite",
    ],
    //liveLink: "#",
    githubLink: "https://github.com/IgrowkerTraining/i004-reffindr-back-nodejs",
  },
  {
    title: "GoPass",
    description:
      "A robust ticket authentication app for Argentine football, employing QR verification and blockchain to eliminate fraud.",
    image: "/goPass.png",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Axios",
      "Tailwind CSS",
      "Vite",
    ],
    //liveLink: "#",
    githubLink: "https://github.com/IgrowkerTraining/i003-gopass-front",
  },
]

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  liveLink?: string
  githubLink?: string
}

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
