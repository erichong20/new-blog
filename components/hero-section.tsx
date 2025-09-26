"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Name and Title */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-balance leading-tight">Your Name</h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground font-mono mt-4">Developer</h2>
            </div>

            {/* Navigation Links */}
            <div
              className={`space-y-4 transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {[
                { id: "about", label: "ABOUT" },
                { id: "experience", label: "EXPERIENCE" },
                { id: "projects", label: "PROJECTS" },
                { id: "contact", label: "CONTACT" },
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-px w-8 bg-muted-foreground group-hover:w-12 group-hover:bg-accent transition-all duration-300" />
                  <span className="font-mono text-sm tracking-wider">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div
              className={`flex gap-4 transition-all duration-1000 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <Button variant="ghost" size="icon" className="hover:text-accent hover:bg-accent/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent hover:bg-accent/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent hover:bg-accent/10">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Column - Minimal Description */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-lg text-pretty leading-relaxed">
              Building digital experiences with modern web technologies.
            </p>

            <p className="text-lg text-pretty leading-relaxed text-muted-foreground">
              Focused on clean code, performance, and user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
