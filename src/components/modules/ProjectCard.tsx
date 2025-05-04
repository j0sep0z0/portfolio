import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Project {
  title: string
  description: string
  image: string
  technologies?: string[]
  liveLink?: string
  githubLink?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden card-hover h-full flex flex-col">
      <Image
        src={project.image}
        alt={project.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {project.description}
          </p>
          {project.technologies && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          {project.liveLink && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live
              </a>
            </Button>
          )}
          {project.githubLink && (
            <Button variant="outline" size="sm" asChild>
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
  )
}
