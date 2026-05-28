# Marco Theo Butalid — Portfolio

A premium portfolio landing page for a backend-focused full-stack engineer. Built with Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Live Stack

- **Next.js 16** — App Router
- **TypeScript**
- **Tailwind CSS 4**
- **shadcn/ui**
- **Framer Motion**
- **Lucide React**

## Project Structure

```
myportfolio/
├── app/
│   ├── page.tsx              # Homepage composition
│   ├── layout.tsx            # Root layout, fonts, metadata
│   └── globals.css           # Theme tokens and base styles
├── components/
│   ├── sections/             # Page sections
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── projects.tsx
│   │   ├── expertise.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   ├── shared/
│   │   └── section-container.tsx
│   ├── ui/                   # shadcn/ui primitives
│   └── theme-provider.tsx
├── public/
│   ├── Marco_Butalid_CV.pdf
│   ├── kardops-screenshot.png
│   ├── avathebrand-screenshot.png
│   └── hydroresort-screenshot.png
└── lib/
    └── utils.ts
```

## Getting Started

```bash
# Install dependencies
npm install
# or
pnpm install

# Development
npm run dev

# Type check
npm run typecheck

# Lint
npm run lint

# Format
npm run format

# Production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) locally.

## Site Content

Content is defined directly in section components — there are no remaining `[PLACEHOLDER]` tokens in the app code.

| Section | File | What to edit |
|---------|------|--------------|
| Navbar | `components/sections/navbar.tsx` | Name, nav links |
| Hero | `components/sections/hero.tsx` | Headline, intro, CTAs, availability badge |
| Projects | `components/sections/projects.tsx` | Project cards, screenshots, demo links |
| Expertise | `components/sections/expertise.tsx` | Skill categories and technologies |
| Contact | `components/sections/contact.tsx` | Email, social links, location |
| Footer | `components/sections/footer.tsx` | Copyright and footer links |

### Featured Projects

1. **KardOps ERP** — Backend ERP platform (Live Demo → `https://dev.kardops.com/sign-in`)
2. **AVATheBrand** — Headless Shopify e-commerce (Visit Site → `https://avathebrand.com`)
3. **Hydro Resort** — Booking & payments platform (Visit Site → `https://www.hydroresortmnl.com/`)

Project screenshots live in `public/` and are rendered with the Next.js `Image` component.

### CV Download

The hero **Download CV** button serves `public/Marco_Butalid_CV.pdf`. Replace that file to update the downloadable resume.

## Metadata & SEO

Site metadata is configured in `app/layout.tsx`:

- Page title and description
- Open Graph tags
- Twitter card tags

For production deployments, set the public site URL:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This ensures social preview URLs resolve correctly.

## Customization

### Projects

Edit the `projects` array in `components/sections/projects.tsx`:

```typescript
{
  title: "Project Name",
  description: "Architecture-focused project summary...",
  highlights: ["Highlight 1", "Highlight 2", "Highlight 3"],
  stack: ["Next.js", "TypeScript", "AWS"],
  demo: "https://example.com",
  demoLabel: "Visit Site", // optional — defaults to "Live Demo"
  image: "/your-screenshot.png", // place file in public/
}
```

Add screenshots to `public/` (16:9 aspect ratio recommended).

### Expertise

Edit `expertiseCategories` in `components/sections/expertise.tsx`.

### Theme

Dark mode is the default (`ThemeProvider defaultTheme="dark"`). Press `d` to toggle light/dark mode. Theme tokens are in `app/globals.css`.

## Deployment

### Vercel (recommended)

```bash
vercel
```

Set `NEXT_PUBLIC_SITE_URL` in your Vercel project environment variables after deploying.

### Manual

```bash
npm run build
npm start
```

## Features

- Fixed navbar with smooth scroll and backdrop blur
- Hero with staggered Framer Motion reveals
- Alternating featured project layouts
- Categorized technical expertise grid
- Contact CTA and minimal footer
- Fully responsive, mobile-first layout
- Semantic HTML and accessible interactive elements
