"use client"

import { useEffect, useState } from "react"
import { Mail, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div
              className={`space-y-8 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">I am Alex Chen</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From building my first interactive website in a college dorm room to leading development of
                  cutting-edge WebGL applications, I'm on a mission to make web experiences more immersive, performant,
                  and accessible for everyone.
                </p>
              </div>

              <p className="text-lg text-muted-foreground">
                Read my <span className="text-accent hover:underline cursor-pointer">story</span>.
              </p>
            </div>

            {/* Right Column */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h3 className="text-2xl font-semibold">Contact</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-4">Email</h4>
                  <a href="mailto:alex@alexchen.dev" className="text-accent hover:underline flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    alex@alexchen.dev
                  </a>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-4">Social Media</h4>
                  <div className="space-y-3">
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-accent flex items-center gap-2 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      GitHub: @alexchen
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-accent flex items-center gap-2 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn: Alex Chen
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
