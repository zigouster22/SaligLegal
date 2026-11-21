---
title: Review of the existing website sample
type: note
status: active
created: 2026-11-21
updated: 2026-11-21
tags: [website, review, accessibility]
related: [index, requirements, 2026-11-21-website-audience-california-law-firms]
---

# Review of the existing website sample

## Summary
Aldred's existing sample (made with ChatGPT/Codex, Oct 2026) is a single, accessible static page for "Salig Legal Operations". It is a good design base but is not ready to publish: the form sends nothing, legal pages are missing and the copy still calls itself a sample. Part of [[index]].

## Where it is
`~/Documents/ChatGPT/Salig Legal/salig-sample/` on Aldred's Mac. Not in any repository: the two git repos in that folder have no commits. Not published (`.openai/hosting.json` points at an OpenAI static host; the notes say publishing was declined).

## What exists

| Area | Finding |
|---|---|
| Stack | One hand-written page, `dist/index.html` (37 KB): inline CSS and vanilla JS, no framework, no build step |
| Assets | `dist/assets/salig-logo.png`, `salig-shield.png` (favicon). Font Bricolage Grotesque from Google Fonts. Headings request "Domaine Display", which is never loaded, so visitors see Georgia |
| Palette | Navy #0A1729, navy 2 #003D66, gold #BF994F, ink #293338, muted #505D66, paper #F7F5F2 |
| Sections | Hero; two roles (Legal Administrative Assistant, Legal Support Specialist); 4-step onboarding; 7 team packages; 5 FAQs; inquiry form; footer |
| Packages | 2 to 6 people, 160 reserved hours per person per month (320 to 960 hrs). Names: Essential Legal Duo (1 admin + 1 casework), Casework Growth Team (1+2), Balanced Legal Support Unit (2+2), High-Volume Legal Operations Pod (1+3), Full-Capacity Legal Support Pod (2+3), Legal Operations Command Team (3+3), Expanded Casework Delivery Pod (2+4) |
| Positioning | "Salig Legal Operations brings together a Philippine corporation and a U.S. LLC to provide remote administrative and casework support for law firms." Repeats that the client firm's supervising attorney directs, reviews and approves all substantive work, and that Salig gives no legal advice to the public |
| Form | Demonstration only: browser validation, sends and stores nothing. Already warns not to include client names or confidential details |
| Accessibility | `ACCESSIBILITY.md` (Oct 4, 2026): WCAG 2.2 AA work, 0 axe-core 4.13 violations across 8 viewport/text states, contrast script and results in `qa/`. Screen-reader, real browser zoom and forced-colours testing not done |

## Gaps and issues
1. The form does not deliver inquiries anywhere.
2. No privacy notice, terms of use, About page, contact details or company registration details.
3. Placeholder language: "this sample", "must be confirmed with Salig", "These terms are not yet specified in this sample".
4. Undefined business terms: pricing, working hours and time zones, holidays, unused capacity, security and confidentiality measures.
5. Heading font not delivered (licence needed or a substitute).
6. No SEO or social metadata beyond a description; no sitemap, robots file, 404 page or analytics.
7. California legal points for a lawyer to confirm: wording around "casework", "drafting" and "routine pleadings" by a non-lawyer company (unauthorized practice, Bus. & Prof. Code 6125), use of job titles near "paralegal" (Bus. & Prof. Code 6450), and what client firms need to meet their supervision (Rule 5.3) and confidentiality (Rule 1.6, Bus. & Prof. Code 6068(e)) duties. Not yet researched; `legal-researcher` to cite sources.
8. Leftover files: `tmp/pdfs` brand-image extracts and `.DS_Store`. The original brand PDF is not in the folder.

## Links
- [[index]]
- [[requirements]]
- [[2026-11-21-website-audience-california-law-firms]]
- Plan doc: https://claude.ai/artifact/42AUepyYnKQw32SmxdWR6z
