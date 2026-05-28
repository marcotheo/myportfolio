# Portfolio Placeholders Reference

This file contains all placeholders used throughout the portfolio that need to be replaced with your actual information.

## Quick Find & Replace Guide

Use your editor's find-and-replace feature to update all instances at once:

### Personal Information

| Placeholder | Description | Used In |
|------------|-------------|---------|
| `[FULL_NAME]` | Your full name | navbar.tsx, footer.tsx |
| `[SHORT_INTRO]` | Brief intro (1-2 sentences) | hero.tsx |
| `[LOCATION]` | Your location (city, country) | contact.tsx |
| `[EMAIL_ADDRESS]` | Your email | hero.tsx, contact.tsx, footer.tsx |
| `[GITHUB_URL]` | GitHub profile URL | hero.tsx, contact.tsx, footer.tsx |
| `[LINKEDIN_URL]` | LinkedIn profile URL | contact.tsx, footer.tsx |

### Project 1

| Placeholder | Description |
|------------|-------------|
| `[PROJECT_NAME_1]` | First project title |
| `[PROJECT_DESCRIPTION_1]` | First project description |
| `[PROJECT_1_SCREENSHOT]` | Path to screenshot (e.g., `/screenshots/project1.png`) |
| `[GITHUB_PROJECT_1_URL]` | GitHub repo URL |
| `[DEMO_PROJECT_1_URL]` | Live demo URL |

### Project 2

| Placeholder | Description |
|------------|-------------|
| `[PROJECT_NAME_2]` | Second project title |
| `[PROJECT_DESCRIPTION_2]` | Second project description |
| `[PROJECT_2_SCREENSHOT]` | Path to screenshot |
| `[GITHUB_PROJECT_2_URL]` | GitHub repo URL |

### Project 3

| Placeholder | Description |
|------------|-------------|
| `[PROJECT_NAME_3]` | Third project title |
| `[PROJECT_DESCRIPTION_3]` | Third project description |
| `[PROJECT_3_SCREENSHOT]` | Path to screenshot |
| `[GITHUB_PROJECT_3_URL]` | GitHub repo URL |

## Customization Steps

### 1. Personal Information

```bash
# Find and replace in the entire project
[FULL_NAME] → John Doe
[SHORT_INTRO] → Passionate about building scalable backend systems
[LOCATION] → San Francisco, CA
[EMAIL_ADDRESS] → john@example.com
[GITHUB_URL] → https://github.com/johndoe
[LINKEDIN_URL] → https://linkedin.com/in/johndoe
```

### 2. Projects

Edit `components/sections/projects.tsx` directly to customize:

- Project titles and descriptions
- Technical highlights
- Technology stack
- Links (GitHub, demo)
- Screenshots

**Tip:** Add actual screenshots to `public/screenshots/` directory and reference them as `/screenshots/project1.png`

### 3. Technical Expertise

Edit `components/sections/expertise.tsx` to update:

- Skill categories
- Technologies within each category
- Category icons (from lucide-react)

### 4. Hero Section

Edit `components/sections/hero.tsx` to customize:

- Main headline text
- Supporting description
- CTA button text and actions
- Availability badge

## Screenshot Guidelines

For best results with project screenshots:

- **Aspect Ratio:** 16:9 (e.g., 1920x1080, 1600x900)
- **Format:** PNG or WebP
- **Location:** `public/screenshots/`
- **Naming:** Use descriptive names (e.g., `ecommerce-dashboard.png`)
- **Optimization:** Compress images before adding

## Adding/Removing Projects

To add a new project, copy an existing project object in `components/sections/projects.tsx`:

```typescript
{
  title: "New Project",
  description: "Description with architecture details...",
  highlights: [
    "Technical achievement 1",
    "Technical achievement 2",
    "Technical achievement 3",
  ],
  stack: ["Tech1", "Tech2", "Tech3"],
  github: "https://github.com/...",
  demo: "https://...", // Optional
  image: "/screenshots/new-project.png",
}
```

To remove a project, simply delete its object from the array.

## Color Customization

The portfolio uses a dark theme. To adjust colors:

1. Open `app/globals.css`
2. Modify values in the `.dark` section
3. Use Tailwind color utilities in components

## Icons

The portfolio uses [Lucide React](https://lucide.dev/) for icons. To change icons:

1. Browse available icons at https://lucide.dev/icons
2. Import the icon in your component
3. Replace the existing icon component

Example:
```tsx
import { Rocket } from "lucide-react"

<Rocket className="h-6 w-6" />
```

## Common Customizations

### Change the Headline

Edit `components/sections/hero.tsx`, line ~60:

```tsx
<motion.h1>
  Your Custom Headline
  <br />
  <span className="bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
    With a gradient accent
  </span>
</motion.h1>
```

### Update Navigation Links

Edit `components/sections/navbar.tsx`, line ~8:

```typescript
const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
  // Add new items here
]
```

### Modify Expertise Categories

Edit `components/sections/expertise.tsx`, line ~14-58 to add/remove/modify categories.

## Need Help?

- Check the component files - they include inline examples
- Refer to the main README.md for architecture details
- All components are TypeScript - your editor will help catch errors
