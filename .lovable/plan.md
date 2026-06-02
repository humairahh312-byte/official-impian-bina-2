# Impian Bina — Construction Website Plan

A 10-page static marketing site for **Impian Bina**, a Malaysian construction company (Negeri Sembilan & Melaka). Built on the existing React + TanStack Start + Tailwind stack — which gives you everything your original brief asked for (responsive, SEO, semantic HTML, clean URLs, sitemap, a11y, WebP/AVIF) without needing raw HTML/Bootstrap.

## Pages & routes

Each is a separate route file with its own SEO `head()` (title, description, OG tags, canonical).

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Hero, slogan, intro, services preview, certifications strip, featured projects, coverage teaser, CTAs |
| `/about` | About / Company Profile | Background, vision & mission, values, years of experience, team photos |
| `/services` | Services | Residential, Renovation, Commercial, Government, Infrastructure — each with description, image, benefits |
| `/certifications` | Certifications | SSM, CIDB, SPKK, STB — cert images, registration details, explanations |
| `/projects` | Projects / Gallery | Filterable by residential / commercial / government; completed, ongoing, before & after |
| `/videos` | Video Section | YouTube embeds (walkthroughs, drone shots, progress) — `<iframe>`, no hosted video |
| `/process` | Customer Process | 7-step vertical timeline: Consultation → Site Visit → Quotation → Agreement → Construction → Completion → Handover |
| `/coverage` | Coverage Area | Negeri Sembilan + Melaka highlighted; RM250,000 minimum notice for outside |
| `/contact` | Contact | Phone, WhatsApp, email, address, Google Maps embed, inquiry form (frontend-only) |
| `/faq` | FAQ | Accordion; also emits FAQPage JSON-LD schema |

Plus: `/sitemap.xml` server route, `/robots.txt`, custom 404.

## Design direction (locked)

Architectural Brutalism, from the selected prototype:

- **Palette**: background `#f8f7f4`, foreground `#1a1a1a`, primary/rebar `#c2410c`, accent `#262626`
- **Type**: Inter (body + display, black weight for headings, tracking-tighter), JetBrains Mono for tags/numbers
- **Composition**: max-w-7xl, sticky translucent nav, oversized uppercase headings, 1px hairline borders, "01/02/03" mono index labels, hard-edge cards (gap-px grid trick for divider lines), terracotta accent on hover
- **Motion**: subtle `fade-in-up` on hero/section entrance with `ease-out-expo`. Restrained — no parallax, no scroll gimmicks.

Tokens go into `src/styles.css` verbatim (in oklch form), fonts via `<link>` in `__root.tsx`.

## Shared structure

- `src/components/site/Header.tsx` — sticky nav with TanStack `<Link>`s + "Get Quotation" CTA → `/contact`
- `src/components/site/Footer.tsx` — address, contact, legal column, CIDB badge
- `src/components/site/SectionHeader.tsx` — reusable title + mono index label
- `src/components/site/CertStrip.tsx` — used on Home and About
- `src/routes/__root.tsx` — wraps `<Outlet />` in `<Header/> + <main> + <Footer/>`, sets sitewide meta (charset, viewport, og:site_name, Organization JSON-LD), keeps existing 404/error components

## SEO, a11y, performance

- Per-page `head()` with unique title, description, og:title/description/url, canonical (leaf only)
- `Organization` JSON-LD on root; `FAQPage` JSON-LD on `/faq`; `BreadcrumbList` on deep pages
- Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- Clean URLs (`/about`, not `/about.html`) — native to TanStack routing
- `/sitemap.xml` server route listing all 10 routes; `public/robots.txt`
- AI-generated hero/project images saved as `.webp` under `src/assets/`, imported as ES6 modules (Vite hashes + optimizes), with explicit width/height + `loading="lazy"` on below-fold
- WCAG AA: design-token colors (contrast verified), keyboard-focusable nav, alt text on every image, `aria-label` on icon-only buttons, single `<main>` per page

## Image assets (AI-generated, WebP)

Generated once and stored in `src/assets/`:
- Hero concrete texture, hero construction site
- 5 service tiles (residential, renovation, commercial, government, infrastructure)
- 6 project gallery shots + 2 before/after pairs
- About team/site photo
- 4 certification badge mockups (SSM, CIDB, SPKK, STB) — clearly placeholder so you can swap in real scans later
- Coverage map of Negeri Sembilan + Melaka region

## Out of scope (ask if you want these added)

- Real backend form submission (Lovable Cloud + email). Currently the contact form is frontend-only with a "thanks" toast.
- Bahasa Malaysia version / i18n
- CMS for projects/blog
- Live Google Maps API (uses standard `<iframe>` embed URL)

## Build order

1. Design tokens + fonts in `src/styles.css` and `__root.tsx`; shared `Header` + `Footer`
2. Generate image assets in parallel
3. Home page (`/`) — full composition from the prototype
4. About, Services, Certifications, Projects, Videos, Process, Coverage, Contact, FAQ
5. `sitemap.xml` route + `robots.txt`
6. Visual QA pass at desktop + mobile viewports
