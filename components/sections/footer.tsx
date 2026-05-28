export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-neutral-500">
            © {currentYear} Marco Theo Butalid. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/marcotheo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/marcobutalid/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:marcotheobutalid@gmail.com"
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-200"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
