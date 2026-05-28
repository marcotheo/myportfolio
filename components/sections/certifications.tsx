"use client"

import { motion } from "framer-motion"
import { Award, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"
import { SectionContainer } from "@/components/shared/section-container"

interface Certification {
  title: string
  issuer: string
  code: string
  issued: string
  expires: string
  status: "active" | "expired"
}

const certifications: Certification[] = [
  {
    title: "AWS Certified Developer Associate",
    issuer: "Amazon Web Services",
    code: "DVA-C02",
    issued: "March 2025",
    expires: "March 2028",
    status: "active",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    code: "CLF-C01",
    issued: "June 2020",
    expires: "June 2023",
    status: "expired",
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

export function Certifications() {
  return (
    <SectionContainer id="certifications" className="bg-neutral-950/50">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Certifications
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-400">
            AWS certifications demonstrating cloud infrastructure and
            development expertise.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <motion.div key={cert.code} variants={itemVariants}>
              <Card className="group h-full border-white/10 bg-neutral-900/50 p-8 transition-all hover:border-white/20 hover:bg-neutral-900/80">
                <div className="mb-4 flex items-start justify-between">
                  <div className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 text-blue-400 transition-colors group-hover:border-blue-500/50 group-hover:bg-blue-500/10">
                    <Award className="h-6 w-6" />
                  </div>
                  {cert.status === "active" && (
                    <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                      Active
                    </span>
                  )}
                </div>

                <h3 className="mb-2 text-xl font-bold tracking-tight">
                  {cert.title}
                </h3>

                <p className="mb-4 text-sm text-neutral-400">
                  {cert.issuer} • {cert.code}
                </p>

                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {cert.issued} – {cert.expires}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  )
}
