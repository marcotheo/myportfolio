"use client"

import { motion } from "framer-motion"
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
  image: string
}

const projects: Project[] = [
  {
    title: "[PROJECT_NAME_1]",
    description:
      "[PROJECT_DESCRIPTION_1] — A scalable SaaS platform built with microservices architecture, handling real-time processing and high-throughput workloads.",
    highlights: [
      "Microservices architecture with event-driven communication",
      "Kubernetes orchestration with auto-scaling",
      "PostgreSQL with read replicas and caching layer",
    ],
    stack: ["Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS"],
    github: "[GITHUB_PROJECT_1_URL]",
    demo: "[DEMO_PROJECT_1_URL]",
    image: "[PROJECT_1_SCREENSHOT]",
  },
  {
    title: "[PROJECT_NAME_2]",
    description:
      "[PROJECT_DESCRIPTION_2] — Cloud-native infrastructure automation platform with infrastructure-as-code and CI/CD pipelines.",
    highlights: [
      "Automated infrastructure provisioning with Terraform",
      "Multi-cloud deployment orchestration",
      "Real-time monitoring and alerting system",
    ],
    stack: ["Python", "Terraform", "GCP", "Prometheus", "Grafana", "GitHub Actions"],
    github: "[GITHUB_PROJECT_2_URL]",
    image: "[PROJECT_2_SCREENSHOT]",
  },
  {
    title: "[PROJECT_NAME_3]",
    description:
      "[PROJECT_DESCRIPTION_3] — Distributed data processing pipeline handling millions of events per day with fault tolerance and observability.",
    highlights: [
      "Apache Kafka for event streaming",
      "Distributed processing with worker pools",
      "Full observability with OpenTelemetry",
    ],
    stack: ["Go", "Kafka", "MongoDB", "Docker", "Datadog", "AWS Lambda"],
    github: "[GITHUB_PROJECT_3_URL]",
    image: "[PROJECT_3_SCREENSHOT]",
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
            Production-ready systems built with scalability, reliability, and
            engineering excellence in mind.
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
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" className="gap-2" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
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
