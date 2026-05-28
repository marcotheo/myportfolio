"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SectionContainer } from "@/components/shared/section-container"

interface Project {
  title: string
  description: string
  highlights: string[]
  stack: string[]
  github?: string
  demo?: string
  demoLabel?: string
  image: string
}

const projects: Project[] = [
  {
    title: "KardOps ERP",
    description:
      "A backend-focused ERP platform built to streamline inventory operations, invoicing, payment allocation, reporting, and business workflows at scale.",
    highlights: [
      "Advanced payment allocation and deduction processing workflows",
      "Scalable inventory, invoicing, and reporting system architecture",
      "Cloud-backed SaaS infrastructure with secure authentication systems",
    ],
    stack: [
      "React",
      "TypeScript",
      "TRPC",
      "shadcn/ui",
      "PostgreSQL",
      "AWS",
      "Drizzle ORM",
    ],
    demo: "https://dev.kardops.com/sign-in",
    image: "/kardops-screenshot.png",
  },
  {
    title: "AVATheBrand",
    description:
      "Headless e-commerce platform built with Next.js, tRPC, and Supabase, integrating Shopify as the commerce backend to enable custom storefront behavior beyond standard themes.",
    highlights: [
      "Internal admin tooling for site content management",
      "Backend APIs and data workflows for advanced storefront features",
      "Shopify integration for product management and checkout",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "Supabase",
      "Shopify API",
      "shadcn/ui",
    ],
    demo: "https://avathebrand.com",
    demoLabel: "Visit Site",
    image: "/avathebrand-screenshot.png",
  },
  {
    title: "Hydro Resort",
    description:
      "Full-featured booking and payments platform supporting reservations and scheduling for a private resort, with real-time calendar visibility and integrated payment processing.",
    highlights: [
      "Internal admin tooling for booking and reservation management",
      "PayMongo payment gateway integration",
      "Google Calendar API for real-time booking visibility",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "MongoDB",
      "shadcn/ui",
      "PayMongo",
    ],
    demo: "https://www.hydroresortmnl.com/",
    demoLabel: "Visit Site",
    image: "/hydroresort-screenshot.png",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function Projects() {
  return (
    <SectionContainer id="projects" className="bg-neutral-950/50">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-lg text-neutral-400">
            Systems and products focused on scalability, operational workflows,
            and modern application architecture.
          </p>
        </motion.div>

        <div className="space-y-12 lg:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`group grid gap-8 lg:grid-cols-2 lg:gap-12 ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Project Image */}
              <Card
                className={`relative aspect-video overflow-hidden border-white/10 bg-neutral-900/50 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                {project.image.startsWith("/") ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center p-8 text-neutral-600">
                    <div className="text-center">
                      <div className="mb-2 text-sm font-medium">
                        {project.image}
                      </div>
                      <div className="text-xs text-neutral-700">
                        Screenshot placeholder
                      </div>
                    </div>
                  </div>
                )}
              </Card>

              {/* Project Details */}
              <div
                className={`flex flex-col justify-center ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <h3 className="mb-4 text-3xl font-bold tracking-tight">
                  {project.title}
                </h3>

                <p className="mb-6 text-lg leading-relaxed text-neutral-300">
                  {project.description}
                </p>

                <ul className="mb-6 space-y-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-sm text-neutral-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="border-white/10 bg-white/5 font-mono text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.demo && (
                    <Button size="sm" className="gap-2" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {project.demoLabel || "Live Demo"}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  )
}
