# Marcos Mena Cruz — Personal Website

A multi-page personal site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, metrics, about, featured projects & blog |
| `/resume` | Web-formatted resume + PDF download |
| `/projects` | Special projects index |
| `/projects/[slug]` | Long-form project case studies |
| `/blog` | Thought leadership posts |
| `/blog/[slug]` | Individual blog articles |

## Local development

Requires **Node.js 22.12+**.

```bash
cd marcos-mena-site
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Framework preset: **Astro** (auto-detected).
4. Deploy. Optional: add a custom domain in project settings.

## Updating content

| What to change | Where |
|----------------|--------|
| Site copy, metrics, nav | `src/data/site.ts` |
| Resume bullets | `src/data/resume.ts` |
| Resume PDF | Replace `public/resume.pdf` (export from Word) |
| Project case studies | `src/content/projects/*.md` |
| Blog posts | `src/content/blog/*.md` |
| Headshot | Replace `public/images/avatar-placeholder.svg` or add `public/images/headshot.jpg` and update `Hero.astro` |
| LinkedIn URL | `src/data/site.ts` → `linkedin` |

### New blog post

Create `src/content/blog/your-slug.md`:

```yaml
---
title: "Your Title"
description: "Short excerpt for listings and SEO"
pubDate: 2026-05-19
tags: ["AI", "GTM"]
draft: false
---

Your content here...
```

### New project

Create `src/content/projects/your-slug.md` with frontmatter: `title`, `description`, `summary`, `tags`, `outcome`, `order`.

## Design

- **Fonts:** Fraunces (headings), DM Sans (body), JetBrains Mono (code)
- **Colors:** Off-white background, navy text, teal accent (`src/styles/global.css`)
