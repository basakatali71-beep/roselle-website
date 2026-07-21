# Roselle — Marketing Website

The official marketing website for **Roselle**, the AI-powered period &
wellness companion for iOS. Built with Next.js 15 (App Router), TypeScript,
Tailwind CSS, and Framer Motion.

## Tech stack

- **Next.js 15** (App Router, React Server Components)
- **TypeScript**
- **Tailwind CSS** (custom design tokens for the Roselle brand)
- **Framer Motion** (scroll and load animations)
- **Lucide React** (icons)

## Pages

| Route      | Description                                   |
| ---------- | ---------------------------------------------- |
| `/`        | Landing page — hero, features, AI assistant, community, premium, FAQ |
| `/privacy` | App Store–compliant Privacy Policy             |
| `/terms`   | App Store–compliant Terms of Use               |
| `/support` | Support page with contact info and FAQ         |

## Getting started

Requires **Node.js 18.18+** (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the site hot-reloads as you edit.

### Production build

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/
    layout.tsx          Root layout (fonts, header, footer, metadata)
    page.tsx            Landing page
    globals.css         Design system (glassmorphism, gradients, utilities)
    sitemap.ts           Auto-generated sitemap.xml
    robots.ts            Auto-generated robots.txt
    privacy/page.tsx     Privacy Policy
    terms/page.tsx       Terms of Use
    support/page.tsx     Support page
  components/
    layout/              Header, Footer
    landing/              Hero, Features, AIAssistant, Community, Premium, FAQ, PhoneMockup
    legal/                Shared layout for Privacy/Terms pages
    support/              Support page FAQ accordion
    ui/                   Button, GlassCard, SectionHeading, GradientBackground
    icons/                RoselleLogo (signature bloom mark)
  lib/
    constants.ts          Site copy, feature list, FAQ content, links
    metadata.ts            SEO metadata helper
public/
  favicon.svg, apple-touch-icon.png, icon-192.png, icon-512.png,
  og-image.png, site.webmanifest
```

## Editing content

Almost all copy (features, FAQ, premium benefits, contact emails, company
info) lives in **`src/lib/constants.ts`** — update it there and it will
propagate across every page that references it.

## Before you launch

1. Update `siteConfig` in `src/lib/constants.ts`:
   - `url` → your production domain
   - `appStoreUrl` → your live App Store listing link
   - `supportEmail`, `contactEmail`, `privacyEmail`
   - `companyName`, `companyAddress`
2. Replace `public/og-image.png` with a final social preview image if desired.
3. Review `/privacy` and `/terms` with legal counsel before publishing —
   the included copy is a strong, App Store–compliant starting point but is
   not a substitute for legal advice specific to your business.

## Deploying to Vercel

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no configuration is required:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build` (default)
   - **Output Directory:** `.next` (default)
4. Click **Deploy**. Your site will be live at `your-project.vercel.app`
   within a couple of minutes.
5. To use a custom domain (e.g. `roselle.app`), go to **Project Settings →
   Domains** and follow the DNS instructions Vercel provides.

Alternatively, deploy straight from your machine with the Vercel CLI:

```bash
npm i -g vercel
vercel
vercel --prod
```

No environment variables are required for this project to build or run.
