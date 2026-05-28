import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { Expertise } from "@/components/sections/expertise"
import { Certifications } from "@/components/sections/certifications"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Expertise />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
