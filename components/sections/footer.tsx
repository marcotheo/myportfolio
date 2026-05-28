export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-neutral-500">
            © {currentYear} [FULL_NAME]. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="[GITHUB_URL]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-200"
            >
              GitHub
            </a>
            <a
              href="[LINKEDIN_URL]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:[EMAIL_ADDRESS]"
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
