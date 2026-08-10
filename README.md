# Alkokab Tech Solutions — Website

Corporate website for **ALKOKAB TECH SOLUTIONS**, an IT & Tech enterprise based in Dubai.
Built with [TanStack Start](https://tanstack.com/start) (React + Vite + Nitro) and fully self-hosted.

## Design Spec

A high-performance, polished enterprise web application. Clean, executive, bright and
light-mode dominant with high contrast and pixel-perfect corporate aesthetics — inspired by
the corporate sophistication of Redington Group.

### Brand Palette

- Primary Accent / Luxury Tone: Warm Metallic Gold (`#D4AF37` / `#C5A059`)
- Core Corporate Tone: Deep Royal Blue (`#0A2540` / `#103067`)
- Backgrounds: Pristine White (`#FFFFFF`) and Subtle Cool Grey/Blue tint (`#F8FAFC`)
- Body Text: Charcoal Slate (`#1E293B`)

### Site Sections

1. **Navigation Bar & Hero Section** — Sticky navbar with the Alkokab logo, nav tabs
   ("About Us", "Services", "Solutions", "Cloud", "Brands", "Contact Us"), hover dropdown
   menus with smooth spring animations, and an auto-playing hero carousel (5–6 slides) with
   large "ALKOKAB TECH SOLUTIONS" typography and taglines.
2. **About Us ("Reducing Technology Friction")** — Split layout: team collaboration image
   with scroll-reveal animation, gold/blue "REDUCING TECHNOLOGY FRICTION" badge, company
   overview text and an "Explore More" CTA.
3. **Core Values ("Core of Alkokab")** — Three white circular nodes (Technology, Innovation,
   Partnerships) connected by an S-curved ribbon line, animated via SVG path stroke draw.
4. **Featured Capabilities** — Heptagonal clipped card with VR/tech imagery plus stacked
   feature badges (Cloud, Digital Printing, Solar).
5. **Services Grid** — 6–9 interactive service cards with staggered scroll-reveal and gold
   hover tint with animated arrow.
6. **Brand Mask & Certifications ("What Sets Us Apart")** — Scroll-driven SVG logo mask that
   expands to full width revealing certifications.
7. **Blogs Carousel** — 3D perspective carousel with center-focused active article.
8. **Partner with Us** — Reverse mask transition with "Contact Us" CTA.
9. **Footer** — Corporate footer: Dubai address, quick links, contacts, legal and social links.

### Animation & Technical Notes

- `framer-motion`, Lucide icons and TailwindCSS for transitions.
- Scroll-triggered animations use `once: true` viewport triggers.
- Motion curves: `easeOut` or `cubic-bezier(0.16, 1, 0.3, 1)`.

## Development

Requires Node.js 22.12+ and npm.

```sh
npm install
npm run dev
```

The dev server runs on http://localhost:8080.

## Build

```sh
npm run build
npm run preview
```

Production server output is emitted by Nitro and can be started with:

```sh
npm run build
node .output/server/index.mjs
```
