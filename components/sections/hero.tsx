"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export function Hero() {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen">
      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-32 md:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            Building scalable systems
            <br />
            <span className="bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              from backend to cloud
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-8 max-w-2xl text-lg leading-relaxed text-neutral-300 md:text-xl"
          >
            Full-stack engineer specializing in backend systems, cloud
            infrastructure, and scalable SaaS applications.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={() => handleScroll("#projects")}
              className="group gap-2"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="gap-2"
            >
              <a href="/Marco_Butalid_CV.pdf" download>
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleScroll("#contact")}
              className="gap-2"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="ghost"
              asChild
              className="gap-2"
            >
              <a
                href="https://github.com/marcotheo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
