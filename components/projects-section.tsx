"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    category: "Building",
    title: "Quantum",
    description: "Implementing immersive 3D interfaces and interactions using WebGL and Three.js.",
    technologies: ["Three.js", "WebGL", "React", "TypeScript"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    category: "Projects",
    title: "Stellar UI",
    description: "Composable component library for building modern space-themed applications.",
    technologies: ["React", "Storybook", "Tailwind CSS", "TypeScript"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    category: "Writing",
    title: "WebGL Fundamentals",
    description: "Comprehensive guide to WebGL programming in 50 interactive lessons.",
    technologies: ["WebGL", "JavaScript", "GLSL", "Canvas API"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    category: "Projects",
    title: "Cosmos Editor",
    description: "Real-time collaborative code editor with live preview and WebGL integration.",
    technologies: ["Monaco Editor", "WebSockets", "Node.js", "React"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    category: "Writing",
    title: "Modern Web Architecture",
    description: "Deep dive into building scalable web applications with modern frameworks.",
    technologies: ["Next.js", "Architecture", "Performance", "Best Practices"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    category: "Projects",
    title: "Nebula Themes",
    description: "Perfect dark mode themes for modern development environments.",
    technologies: ["CSS", "Design Systems", "VS Code", "Theming"],
    links: {
      github: "#",
      live: "#",
    },
  },
]

export function ProjectsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-3xl lg:text-4xl font-bold mb-16 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-500 group ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-mono text-muted-foreground tracking-wider mb-2">{project.category}</p>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-secondary/50 text-secondary-foreground hover:bg-accent/20 hover:text-accent transition-colors text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="ghost" size="sm" className="hover:text-accent hover:bg-accent/10 p-2">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:text-accent hover:bg-accent/10 p-2">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
