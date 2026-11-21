---
title: Retire the duplicate librarian agent
type: decision
status: approved
proposed_by: Claude
proposed_on: 2026-11-21
approved_by: Aldred
approved_on: 2026-11-21
approval_record: Aldred's message in the setup thread, 2026-11-21 01:15 UTC (https://claude.ai/code/project/chan_01HJshpb8VmLjSBQTmDSG9d3?thread=cmsg_01HJshpb8VmLjSBQTmDSG9d3R5BVXY7BfahAEFnYKMQAGJ)
supersedes: []
related: [knowledge-librarian]
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
Approved by Aldred on 2026-11-21: option 2, with the instruction to preserve the old definition outside the active agent directory so it is no longer loaded.

- `.claude/agents/librarian.md` was moved with `git mv` to `brain/40-archive/agents/librarian.md`. Claude Code only loads agents from `.claude/agents/`, so it is no longer active.
- `knowledge-librarian` is the only librarian agent. CLAUDE.md section 6 no longer lists `librarian`.
