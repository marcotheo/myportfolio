# Customization Guide

This portfolio is fully configured. Edit section components directly — there are no `[PLACEHOLDER]` tokens left in the app code.

## Quick Reference

| What | Where |
|------|-------|
| Name / nav links | `components/sections/navbar.tsx` |
| Headline / intro / CV button | `components/sections/hero.tsx` |
| Featured projects | `components/sections/projects.tsx` |
| Technical skills | `components/sections/expertise.tsx` |
| Contact / location | `components/sections/contact.tsx` |
| Footer links | `components/sections/footer.tsx` |
| SEO metadata | `app/layout.tsx` |
| Theme colors | `app/globals.css` |
| CV file | `public/Marco_Butalid_CV.pdf` |
| Project screenshots | `public/*.png` |

## Production Checklist

1. Set `NEXT_PUBLIC_SITE_URL` in `.env.local` (and in your host's env vars)
2. Replace `public/Marco_Butalid_CV.pdf` when your resume changes
3. Update the hero availability badge if your job search status changes
4. Optionally add a dedicated `public/og-image.png` and point Open Graph to it in `app/layout.tsx`

See `README.md` for full project documentation.
