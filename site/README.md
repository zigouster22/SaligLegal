# Salig Legal Operations website

Static marketing site for remote legal administrative and attorney-directed casework support, aimed at California lawyers and law firms. Built with [Astro](https://astro.build) 5.x; the output in `dist/` is plain HTML and CSS with a little progressive-enhancement JavaScript.

Ported from Aldred's one-page sample (`~/Documents/ChatGPT/Salig Legal/salig-sample/`, audited to WCAG 2.2 AA in Oct 2026), keeping its design, palette, logo and accessibility behaviour. Requirements and decisions live in [`../brain/10-projects/website-completion/`](../brain/10-projects/website-completion/index.md).

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies (Node 20+) |
| `npm run dev` | Local dev server at http://localhost:4321 |
| `npm run build` | Build the static site into `dist/` |
| `npm run test:a11y` | axe-core audit of every page at 1280px and 320px, plus form-error, filter and mobile-menu states. Needs a Playwright Chromium (`npx playwright install chromium`, or `CHROMIUM_PATH=...`) |
| `npm run check:launch` | Launch gate: fails while any "To be confirmed" fact, draft banner, placeholder wording, missing canonical URL or missing form endpoint remains |

## Pages

Home, Our support (`/services/`), Team packages, Security, About, Contact (inquiry form), Privacy notice, Terms of use, and a 404 page.

## Configuration (build-time environment variables)

| Variable | Purpose |
|---|---|
| `SITE_URL` | Absolute site URL, e.g. `https://example.com`. Enables canonical and Open Graph URLs. Set once the domain is decided. |
| `PUBLIC_FORM_ENDPOINT` | URL of the form-delivery service that receives the inquiry form as a POST. Without it, the form validates but does not send. |

## Facts still to confirm

Unconfirmed facts are `null` in `src/data/site.ts` and render as visible "To be confirmed" markers. Pages whose copy still needs lawyer review show a "Draft for review" banner. Both block `npm run check:launch`.

Nothing is published without a `legal-compliance-reviewer` pass and sign-off from Aldred and a qualified lawyer (see `../CLAUDE.md` section 7).

## Accessibility notes

- axe reports colour-contrast items as "incomplete" on gradient backgrounds and inside the horizontally scrolling table at 320px. The colours are unchanged from the sample, whose gradient contrast was verified separately (`qa/contrast-results.json` in the original folder: gold text at least 4.85:1).
- Still owed before a conformance claim: VoiceOver and NVDA passes, real 200%/400% browser zoom, and forced-colours mode.
