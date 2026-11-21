---
title: Website tech approach
type: decision
status: approved
proposed_by: Claude
proposed_on: 2026-11-21
approved_by: Aldred
approved_on: 2026-11-21
approval_record: Aldred chose "Yes, use all three" on a decision card in the website thread, 2026-11-21 01:36 UTC (https://claude.ai/code/project/chan_01HJshpb8VmLjSBQTmDSG9d3?thread=cmsg_01HJshpb8VmLjSBQTmDSG9d3WYVButHkLtvfab4FPxazDN)
supersedes: []
related: [website-completion, existing-site-review]
---

# Decision: website tech approach

## Context
Today the site is one hand-written HTML page with inline CSS and JS and no build step. The first release needs about nine pages sharing a header, footer and styles. See [[existing-site-review]] and [[website-completion]].

## Options
1. Plain static HTML, copying the header and footer into each page. No tooling, but every shared change is made nine times and is easy to get wrong.
2. A static site generator (for example Astro or Eleventy). Shared layouts and components, still outputs plain HTML with no server; adds Node tooling.
3. A CMS or site builder (for example WordPress or Webflow). Non-developers can edit, but adds hosting cost, plugins to maintain, and makes it harder to keep the current accessibility work.

## Recommendation
Option 2 with Astro (the stable 5.x line). Astro outputs plain static HTML by default, supports shared layouts and components, and has no client-side JavaScript unless a page asks for it. It keeps the existing design and accessibility work while removing duplication.

## Needed from Aldred
Approve option 2 with Astro, or choose another option.

## Outcome
Approved by Aldred on 2026-11-21: option 2, a static site built with Astro (5.x line).
