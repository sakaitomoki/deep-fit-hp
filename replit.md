# DEEP.FIT Website

A gym website for DEEP.FIT — a kickboxing and circuit fitness gym near JR Amagasaki station in Hyogo, Japan.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm --filter @workspace/deepfit-website run dev` — run the frontend Vite dev server
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS v4 + Framer Motion + Wouter
- Backend: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod, drizzle-zod
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)
- Forms: react-hook-form + @hookform/resolvers
- SEO: react-helmet-async

## Where things live

- `artifacts/deepfit-website/` — React + Vite frontend (previewPath: `/`)
- `artifacts/api-server/` — Express API backend (previewPath: `/api`)
- `lib/db/` — Drizzle schema (`contactInquiries` table)
- `lib/db/schema.ts` — source of truth for DB schema
- `artifacts/deepfit-website/src/lib/gymConfig.ts` — all gym-specific data (hours, pricing, contact, SNS URLs)
- `artifacts/deepfit-website/src/index.css` — full DEEP.FIT theme variables + BEM component classes
- `artifacts/deepfit-website/public/` — all static assets (images, videos, favicons)

## Architecture decisions

- Wouter used instead of React Router (lightweight SPA routing, matches original)
- Hero section uses dual-slot video crossfade pattern for smooth clip transitions
- All BEM CSS classes (hero-v2, opening-offer-section, etc.) ported directly from migration backup
- Fonts loaded via Google Fonts in index.html: Noto Sans JP (body) + Oswald (headings/watermarks)
- Contact form POSTs to `/api/contact` and stores submissions in PostgreSQL via Drizzle

## Product

- **Home**: hero video crossfade, opening offer campaign, gym identity cards, FAQ, Instagram section, testimonials, class overview, LINE CTA, final trial CTA
- **About**: gym values, mission, timeline, access info
- **Instructors**: instructor profiles with photos and credentials
- **Schedule / Classes**: class type cards, weekly schedule table (color-coded), pricing tables for all membership tiers
- **Contact**: contact info + inquiry form (name, email, phone, type, message) wired to PostgreSQL

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Hero video requires actual MP4 files in `public/video/` — they render black in static screenshots
- Framer Motion `ease` bezier arrays must be typed as `[number, number, number, number]` (not `number[]`)
- `zod` must be in api-server's own `dependencies` (not just inherited via @workspace/db)
- `pnpm run typecheck:libs` must pass before leaf package typechecks run

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- Migration backup source at `.migration-backup/` for reference
