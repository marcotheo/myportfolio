# Portfolio Landing Page

A premium, modern portfolio landing page built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Tech Stack

- **Next.js 16** - App Router
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **shadcn/ui** - Premium UI components
- **Framer Motion** - Smooth animations
- **Lucide React** - Icon library

## Project Structure

```
myportfolio/
├── app/
│   ├── page.tsx              # Main landing page
│   ├── layout.tsx            # Root layout with theme provider
│   └── globals.css           # Global styles and theme
├── components/
│   ├── sections/             # Page sections
│   │   ├── navbar.tsx        # Fixed navigation bar
│   │   ├── hero.tsx          # Hero section with CTA
│   │   ├── projects.tsx      # Featured projects showcase
│   │   ├── expertise.tsx     # Technical skills grid
│   │   ├── contact.tsx       # Contact CTA section
│   │   └── footer.tsx        # Footer
│   ├── shared/               # Reusable components
│   │   └── section-container.tsx
│   ├── ui/                   # shadcn/ui components
│   └── theme-provider.tsx    # Theme management
└── lib/
    └── utils.ts              # Utility functions
```

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Type check
npm run typecheck

# Lint
npm run lint

# Format code
npm run format
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Customizing Your Portfolio

The portfolio uses structured placeholders for all personal information. Search and replace these placeholders with your actual information:

### Personal Information

- `[FULL_NAME]` - Your full name
- `[SHORT_INTRO]` - Brief introduction (1-2 sentences)
- `[LOCATION]` - Your location
- `[EMAIL_ADDRESS]` - Your email address
- `[GITHUB_URL]` - Your GitHub profile URL
- `[LINKEDIN_URL]` - Your LinkedIn profile URL

### Projects

Each project has the following placeholders:

- `[PROJECT_NAME_1/2/3]` - Project title
- `[PROJECT_DESCRIPTION_1/2/3]` - Detailed project description
- `[PROJECT_1/2/3_SCREENSHOT]` - Path to project screenshot
- `[GITHUB_PROJECT_1/2/3_URL]` - GitHub repository URL
- `[DEMO_PROJECT_1/2/3_URL]` - Live demo URL

#### How to Update Projects

Edit `/components/sections/projects.tsx`:

```typescript
const projects: Project[] = [
  {
    title: "Your Project Name",
    description: "Detailed description of your project...",
    highlights: [
      "Key feature or architecture decision 1",
      "Key feature or architecture decision 2",
      "Key feature or architecture decision 3",
    ],
    stack: ["Node.js", "PostgreSQL", "Docker", "AWS"],
    github: "https://github.com/yourusername/project",
    demo: "https://yourproject.com", // Optional
    image: "/screenshots/project1.png", // Place in public/screenshots/
  },
  // Add more projects...
]
```

### Technical Expertise

Edit `/components/sections/expertise.tsx` to customize your skills:

```typescript
const expertiseCategories: ExpertiseCategory[] = [
  {
    title: "Your Category",
    icon: <YourIcon className="h-6 w-6" />,
    technologies: [
      "Technology 1",
      "Technology 2",
      // Add up to 6 technologies per category
    ],
  },
  // Add more categories...
]
```

### Adding Project Screenshots

1. Create a `public/screenshots/` directory
2. Add your project screenshots (recommended: 1920x1080 or 16:9 aspect ratio)
3. Update the `image` field in your projects with the path: `/screenshots/your-image.png`

## Features

### Design Philosophy

- **Modern & Minimal** - Clean, professional aesthetic
- **Engineering-Focused** - Emphasizes technical capability
- **Dark Theme** - Premium dark mode by default
- **Subtle Animations** - Polished but performant motion
- **Fully Responsive** - Mobile-first design

### Sections

1. **Navbar** - Fixed navigation with smooth scroll
2. **Hero** - Compelling headline with CTAs
3. **Projects** - Showcase of featured work with alternating layouts
4. **Expertise** - Technical skills organized by category
5. **Contact** - Clear call-to-action for getting in touch
6. **Footer** - Minimal footer with links

### Animations

- Fade-up reveals on scroll (IntersectionObserver)
- Smooth hover interactions
- Premium easing curves (cubic-bezier)
- Optimized for performance

### Accessibility

- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- Focus states on interactive elements

## Customization Tips

### Changing Colors

The portfolio uses Tailwind CSS with custom color variables defined in `app/globals.css`. To customize:

1. Modify CSS variables in the `.dark` class
2. Use Tailwind's color utilities in components
3. Maintain consistent color usage across sections

### Adding More Sections

1. Create a new component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Use `<SectionContainer>` for consistent spacing
4. Add Framer Motion animations for scroll reveals

Example:

```tsx
"use client"

import { motion } from "framer-motion"
import { SectionContainer } from "@/components/shared/section-container"

export function NewSection() {
  return (
    <SectionContainer id="new-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Your content */}
      </motion.div>
    </SectionContainer>
  )
}
```

### Modifying Typography

The project uses custom Google Fonts configured in `app/layout.tsx`:

- **Geist** - Main sans-serif font
- **JetBrains Mono** - Monospace font
- **Raleway** - Heading font

To change fonts, update the imports in `app/layout.tsx`.

## Performance

- **Next.js App Router** - Server-side rendering
- **Optimized Images** - Use Next.js `<Image>` component for screenshots
- **Code Splitting** - Automatic by Next.js
- **Minimal JavaScript** - Animations only where needed

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build for Production

```bash
npm run build
npm start
```

## License

Feel free to use this template for your own portfolio. No attribution required.

## Support

For issues or questions about the codebase structure, refer to the component documentation within each file.
