import type { Metadata } from "next"
import { Geist, JetBrains_Mono, Raleway } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

const siteName = "Marco Theo Butalid"
const siteDescription =
  "Full-stack engineer specializing in backend systems, cloud infrastructure, and scalable SaaS applications."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Backend & Full-Stack Engineer`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Marco Theo Butalid",
    "backend engineer",
    "full-stack developer",
    "Node.js",
    "TypeScript",
    "AWS",
    "cloud infrastructure",
    "SaaS",
    "portfolio",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${siteName} | Backend & Full-Stack Engineer`,
    description: siteDescription,
    images: [
      {
        url: "/kardops-screenshot.png",
        width: 1200,
        height: 630,
        alt: "KardOps ERP — featured project screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Backend & Full-Stack Engineer`,
    description: siteDescription,
    images: ["/kardops-screenshot.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const ralewayHeading = Raleway({
  subsets: ["latin"],
  variable: "--font-heading",
})

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, "font-mono", jetbrainsMono.variable, ralewayHeading.variable)}
    >
      <body>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  )
}
