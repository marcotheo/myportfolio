"use client"

import { motion } from "framer-motion"
import {
  Database,
  Server,
  Cloud,
  Code2,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { SectionContainer } from "@/components/shared/section-container"

interface ExpertiseCategory {
  title: string
  icon: React.ReactNode
  technologies: string[]
}

const expertiseCategories: ExpertiseCategory[] = [
  {
    title: "Backend Systems",
    icon: <Server className="h-6 w-6" />,
    technologies: [
      "Node.js / Express",
      "Python / FastAPI",
      "Go",
      "REST & GraphQL APIs",
      "WebSockets",
      "Microservices",
    ],
  },
  {
    title: "Cloud Infrastructure",
    icon: <Cloud className="h-6 w-6" />,
    technologies: [
      "AWS (EC2, Lambda, S3, RDS)",
      "Google Cloud Platform",
      "Terraform",
      "Docker",
      "Kubernetes",
      "CI/CD Pipelines",
    ],
  },
  {
    title: "Databases & Architecture",
    icon: <Database className="h-6 w-6" />,
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Database Design",
      "Caching Strategies",
      "Data Modeling",
    ],
  },
  {
    title: "Full Stack Development",
    icon: <Code2 className="h-6 w-6" />,
    technologies: [
      "TypeScript",
      "React / Next.js",
      "Tailwind CSS",
      "System Design",
      "API Design",
      "Testing & Quality",
    ],
  },
]

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

export function Expertise() {
  return (
    <SectionContainer id="expertise">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Technical Expertise
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-400">
            Specialized in building scalable backend systems, cloud
            infrastructure, and production-ready applications.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {expertiseCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="group h-full border-white/10 bg-neutral-900/50 p-8 transition-all hover:border-white/20 hover:bg-neutral-900/80">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 text-blue-400 transition-colors group-hover:border-blue-500/50 group-hover:bg-blue-500/10">
                  {category.icon}
                </div>

                <h3 className="mb-4 text-2xl font-bold tracking-tight">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-sm text-neutral-300 transition-colors hover:border-white/10 hover:bg-white/10"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  )
}
