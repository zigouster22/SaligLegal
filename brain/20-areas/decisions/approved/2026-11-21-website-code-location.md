---
title: Where the website code lives
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

# Decision: where the website code lives

## Context
The sample is in `~/Documents/ChatGPT/Salig Legal/salig-sample/` on Aldred's Mac, in git repos with no commits, so it has no history or backup. The SaligLegal repository holds `brain/` and is meant to hold the website too (CLAUDE.md intro). See [[existing-site-review]] and [[website-completion]].

## Options
1. Move the site into the SaligLegal repo under `site/`. One history for code, requirements and decisions; agents and reviews work on it directly; GitHub backup.
2. A separate new repository for the site. Clean separation, but decisions and code live apart.
3. Keep it in the Documents folder. No change, but no history, review or backup.

## Recommendation
Option 1. Copy only `dist/` (and the `qa/` audit scripts if wanted), not `tmp/`, `.DS_Store` or the empty git folders. The Documents copy stays untouched as the original.

## Needed from Aldred
Approve moving the website into the SaligLegal repo under `site/`, or pick another option. This is the start of building (CLAUDE.md section 0), so it waits until requirements are approved.

## Outcome
Approved by Aldred on 2026-11-21: option 1, the website lives in the SaligLegal repo under `site/`. The Documents folder copy stays untouched as the original.
