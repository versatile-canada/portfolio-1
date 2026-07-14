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

## AI image/video generation (Masonry)

This repo has the [Masonry CLI](https://masonry.so/cli) as a dev dependency, plus its Claude Code skills (`.claude/skills/masonry*`) so Claude Code can generate or edit imagery on request.

```bash
npx masonry login                       # one-time browser auth
npx masonry image "your prompt" --aspect 16:9
```

Run `npx masonry --help` for the full command list (video, canvas, jobs, models, history).
