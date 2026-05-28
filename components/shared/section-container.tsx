import { cn } from "@/lib/utils"

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionContainer({
  children,
  className,
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto w-full max-w-7xl px-6 py-24 md:px-8 lg:py-32",
        className
      )}
    >
      {children}
    </section>
  )
}
