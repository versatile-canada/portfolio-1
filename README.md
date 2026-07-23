# Versatile

A premium, dark black-and-gold landing page for Versatile — a web design and development agency
building high-converting websites for blue-collar trades and white-collar firms. Built with
Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

Sections: glassmorphic nav, cinematic mouse-tracking hero, trusted-by marquee, statement, services
grid, horizontal scroll-jacking process timeline, case studies, pricing, testimonials, and contact.

All imagery under `public/images` (avatars, case-study mockups, decor icons) is generated locally
via `scripts/gen-images.mjs` — no external assets required.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Regenerating placeholder art

```bash
node scripts/gen-images.mjs
```
