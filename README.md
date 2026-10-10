# Tanya & Michel Tailoring and Alterations: website demo

Demo website for Tanya & Michel Tailoring and Alterations, 17822 Davenport Rd, Dallas, TX 75252.

- Single static page: `index.html`, with no images yet (illustrated hero)
- English / Spanish clothing-tag toggle (`?lang=es`), sewing-button light / dark toggle
- Facts from Google and Nextdoor listings. Hours and prices still to confirm with the owner.

## Run locally

```
python -m http.server 5530
```

Then open http://localhost:5530

## Stack
- **Next.js** (static export) + **TypeScript** + **Tailwind CSS v4**
- **Magic UI** (Marquee, MagicCard, BorderBeam), **Motion**, **GSAP**, **Lenis** smooth scroll, **Phosphor** icons
- Strings live in `src/content/strings.json` (English plus each translation); the page is `src/app/page.tsx`

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
```
Pushing to `main` builds and deploys to GitHub Pages (`.github/workflows/pages.yml`).
