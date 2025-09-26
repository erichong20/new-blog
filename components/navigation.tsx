"use client"

import { useState, useEffect } from "react"

const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative text-sm font-mono tracking-wider transition-all duration-300 hover:text-accent ${
              activeSection === item.id ? "text-accent" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`h-px transition-all duration-300 ${
                  activeSection === item.id ? "w-12 bg-accent" : "w-8 bg-muted-foreground"
                }`}
              />
              <span>{item.label}</span>
            </div>
          </button>
        ))}
      </div>
    </nav>
  )
}
