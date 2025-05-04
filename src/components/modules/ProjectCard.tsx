"use client"

import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  liveLink?: string
  githubLink?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleImageClick = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Card className="overflow-hidden card-hover h-full flex flex-col">
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover cursor-pointer"
          onClick={handleImageClick}
        />
        <CardHeader>
          <CardTitle className="text-xl">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-between">
          <div>
            <p className="text-lg text-muted-foreground lg:line-clamp-3">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-sm font-medium bg-secondary text-secondary-foreground rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-end space-x-2 mt-8">
            {project.liveLink && (
              <Button variant="outline" size="lg" asChild>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Site
                </a>
              </Button>
            )}
            {project.githubLink && (
              <Button variant="outline" size="lg" asChild>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-white text-4xl"
            >
              &times;
            </button>
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={600}
              className="max-w-full max-h-screen"
            />
          </div>
        </div>
      )}
    </>
  )
}
