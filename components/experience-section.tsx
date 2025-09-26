"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2024 — PRESENT",
    title: "Senior Full-Stack Engineer, WebGL Specialist",
    company: "Stellar Labs",
    description:
      "Build and maintain immersive web applications using WebGL, Three.js, and modern frameworks. Lead development of interactive 3D experiences and real-time visualization tools.",
    technologies: ["JavaScript", "TypeScript", "React", "Three.js", "WebGL", "Node.js"],
  },
  {
    period: "2022 — 2024",
    title: "Frontend Engineer",
    company: "Cosmic Digital",
    description:
      "Developed responsive web applications and interactive user interfaces. Collaborated with design teams to create pixel-perfect implementations of complex designs.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    period: "2020 — 2022",
    title: "Full-Stack Developer",
    company: "Nebula Studios",
    description:
      "Built full-stack applications from concept to deployment. Worked on e-commerce platforms, content management systems, and custom web applications.",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
]

export function ExperienceSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="experience" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-3xl lg:text-4xl font-bold mb-16 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-500 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <p className="text-sm font-mono text-muted-foreground tracking-wider">{exp.period}</p>
                  </div>

                  <div className="lg:col-span-3 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-secondary/50 text-secondary-foreground hover:bg-accent/20 hover:text-accent transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
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
