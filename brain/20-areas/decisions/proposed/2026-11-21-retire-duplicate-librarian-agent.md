---
title: Retire the duplicate librarian agent
type: decision
status: proposed
proposed_by: Claude
proposed_on: 2026-11-21
approved_by:
approved_on:
approval_record:
supersedes: []
related: []
---

# Decision: retire the duplicate `librarian` agent

## Context
See the decision log rules in `brain/20-areas/decisions/README.md`.

`.claude/agents/librarian.md` (created first) and `.claude/agents/knowledge-librarian.md` (added at Aldred's request) cover the same job. Both were kept because Aldred asked to preserve existing files.

## Options
1. Keep both. No change, but two agents can be picked for the same task.
2. Move `librarian.md` to `brain/40-archive/` as a reference and use only `knowledge-librarian`.

## Recommendation
Option 2, so there is one clear owner of `brain/` structure.

## Needed from Aldred
Approve or reject archiving `librarian.md`.

## Outcome
