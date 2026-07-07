# Portfolio 1

A dark, single-page developer portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

Sections: hero, statement, about + skills, recommended tracks marquee, projects grid, agency/partner callout, testimonials, and contact.

All imagery under `public/images` (avatars, project mockups, album-art placeholders) is generated locally via `scripts/gen-images.mjs` — no external assets required.

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
