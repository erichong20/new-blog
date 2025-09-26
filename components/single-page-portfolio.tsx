"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FolderOpen, FileText } from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function SinglePagePortfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="fixed top-8 left-8 z-10">
        <Button
          variant="ghost"
          size="sm"
          className="hover:text-green-400 hover:bg-green-400/10 text-green-500 font-mono"
        >
          <FolderOpen className="h-4 w-4 mr-2" />
          Projects
        </Button>
      </div>

      <div className="fixed top-8 right-8 z-10">
        <Button
          variant="ghost"
          size="sm"
          className="hover:text-green-400 hover:bg-green-400/10 text-green-500 font-mono"
        >
          <FileText className="h-4 w-4 mr-2" />
          Posts
        </Button>
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <div className="text-center space-y-8">
          {/* Main Content */}
          <div
            className={`transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-6xl lg:text-8xl font-bold text-balance leading-tight mb-6">
              Eric Hong
            </h1>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 left-8 flex flex-col gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="hover:text-green-400 hover:bg-green-400/10 text-green-500"
          asChild
        >
          <a
            href="https://github.com/erichong20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
          </a>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hover:text-green-400 hover:bg-green-400/10 text-green-500"
          asChild
        >
          <a href="mailto:erichong@gmail.com">
            <Mail className="h-5 w-5" />
          </a>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hover:text-green-400 hover:bg-green-400/10 text-green-500"
          asChild
        >
          <a
            href="https://www.linkedin.com/in/eric-hong-mit/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hover:text-green-400 hover:bg-green-400/10 text-green-500"
          asChild
        >
          <a
            href="https://x.com/ericxhong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  );
}
