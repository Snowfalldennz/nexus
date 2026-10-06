# Nexus Health and Wellness — website

React + TypeScript + Vite. Content comes from the 2026 brochure and business card.

## Run it

```bash
npm install
npm run dev
```

## Build for hosting

```bash
npm run build
```

Hosted on **Vercel**, connected to the GitHub repo: every push to `main` redeploys automatically.
Vercel detects Vite on its own (build `npm run build`, output `dist`).
`vercel.json` makes page links like `/services` work when opened directly or refreshed
(`public/_redirects` does the same job if the site is ever moved to Netlify).

## Where to edit

- **Phone numbers, address, email, service text:** `src/data/site.ts` (everything is in one place)
- **Pages:** `src/pages/`
- **Colours and fonts:** top of `src/index.css`
- **Photos and logo:** `src/assets/`
