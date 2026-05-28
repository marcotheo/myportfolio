"use client"

import { motion } from "framer-motion"
import { Mail, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/shared/section-container"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export function Contact() {
  return (
    <SectionContainer id="contact" className="bg-neutral-950/50">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="mb-6 text-4xl font-bold tracking-tight md:text-5xl"
        >
          Let&apos;s Build Something
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mb-12 text-lg text-neutral-300 md:text-xl"
        >
          I&apos;m always interested in hearing about new opportunities,
          challenging projects, and collaborative ventures.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mb-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Button size="lg" className="group gap-2" asChild>
            <a href="mailto:marcotheobutalid@gmail.com">
              <Mail className="h-5 w-5" />
              Send Email
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a
              href="https://www.linkedin.com/in/marcobutalid/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-5 w-5" />
              LinkedIn
            </a>
          </Button>

          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="https://github.com/marcotheo" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5" />
              GitHub
            </a>
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="border-t border-white/10 pt-8"
        >
          <p className="text-sm text-neutral-500">
            Based in Philippines • Available for remote opportunities
          </p>
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}
