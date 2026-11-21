# CLAUDE.md: operating rules for the Salig Legal workspace

This repository holds the Salig Legal website and our shared second brain, which lives in [`brain/`](brain/). `brain/` is the only place project knowledge is kept; there is no separate knowledge folder. These rules tell Claude how to capture, file, link and maintain notes, how decisions are recorded, and when to hand work to a specialist agent.

## 0. Roles and decision authority

- **Aldred is the human Product Owner, Product Engineer and Quality Engineer for this project, with final decision authority.** Claude and every agent advise, draft and propose; Aldred decides.
- Agents never approve their own work, never mark a decision `approved`, and never merge, publish or deploy without Aldred's explicit go-ahead.
- Where agents disagree, or an agent's advice conflicts with these rules, record both views as a proposed decision (section 5a) and ask Aldred.
- Current phase: workspace setup and discovery only. Do not start building the product (application code, site scaffolding, dependencies) until Aldred approves a decision to start.

## 0a. Before you start any task

Every agent, and Claude in the main session, must first:

1. Read [`brain/README.md`](brain/README.md).
2. Read `brain/20-areas/decisions/approved/` so work follows what Aldred has already decided, and skim `proposed/` so nothing is re-proposed.
3. Search `brain/` (Grep/Glob) for notes on the task's topic and read the relevant ones, including the project `index.md` if the task belongs to a project.
4. If notes conflict with each other or with an approved decision, stop and raise it rather than guessing.

## 1. Workspace map

```
brain/
  00-inbox/        capture first, file later
  10-projects/     goal + end date (one folder per project, each with index.md)
  20-areas/        ongoing responsibilities (brand voice, SEO, compliance, site ops)
    decisions/
      proposed/    decisions awaiting Aldred (anyone may add)
      approved/    decisions Aldred has approved (only on Aldred's say-so)
  30-resources/    reference: legal-sources, practice-areas, competitors, style
  40-archive/      finished or superseded material, never deleted
  _templates/      note.md, project.md, research.md, page-draft.md, decision.md
.claude/agents/    the specialist agents (section 6)
```

## 2. Capture

- When the user shares something without saying where it goes, save it to `brain/00-inbox/` as `YYYY-MM-DD-short-slug.md`. Capture fast; filing comes later.
- Start every new note from the matching template in `brain/_templates/` and fill in the frontmatter.
- One idea per note. If a note covers two topics, split it.

## 3. Filing

Decide where a note belongs by asking, in order:

1. Does it serve a project with a goal and a deadline? Put it in `10-projects/<project>/`.
2. Does it support an ongoing responsibility? Put it in `20-areas/<area>/`.
3. Is it reference material useful beyond any one project? Put it in `30-resources/<topic>/`.
4. Is it finished, inactive or superseded? Put it in `40-archive/`, keeping its original path under the archive.

Rules:
- File names are lowercase kebab-case, `.md`, no spaces. Dated notes start with `YYYY-MM-DD-`.
- Move notes with `git mv` so history follows them, and fix any links that pointed at the old path.
- Do not create new top-level folders in `brain/`. New subfolders inside a PARA folder are fine.
- Never delete a note. Archive it, or mark it `status: superseded` with a link to its replacement.

## 4. Linking

- Link related notes with wiki-style `[[note-slug]]` links in the body and list them in the `related:` frontmatter field.
- Every note links to at least one other note or to its project `index.md`. An unlinked note is an orphan, and the librarian fixes orphans.
- Every project `index.md` links to all of its notes.
- When a note is superseded, link old to new and new to old.

## 5. Maintenance

- Update the `updated:` date whenever a note's content changes.
- Inbox triage: empty `00-inbox/` at least weekly, or whenever asked to "triage" or "tidy up".
- Legal freshness: any note in `30-resources/legal-sources/` (or any page draft citing law) with `last_verified` older than 12 months is flagged `status: review`.
- When a project ships, set its `index.md` to `status: done` and move the folder to `40-archive/10-projects/`.
- Keep READMEs in each PARA folder accurate when the structure changes.

## 5a. Decisions: proposed vs approved

- Every decision that changes scope, design, technology, content policy or process is written as its own note from `brain/_templates/decision.md`.
- New decisions go in `brain/20-areas/decisions/proposed/` with `status: proposed`. Any agent may propose one; it must state the options, a recommendation, and what is needed from Aldred.
- A decision moves to `brain/20-areas/decisions/approved/` (with `git mv`), and its status becomes `approved` with `approved_by: Aldred` and the date, **only when Aldred has explicitly approved it** in conversation or in writing. Record where the approval was given.
- Rejected or replaced decisions get `status: rejected` or `status: superseded` and move to `brain/40-archive/20-areas/decisions/`, linked to any replacement.
- Never describe a proposed decision as agreed, and never act on one as if it were approved.

## 6. Specialist agents

Hand work to the agent whose job it is. Each lives in `.claude/agents/`. All agents follow sections 0 and 0a first.

### Product delivery agents

| Agent | Use it for | Writes to | Must not |
|---|---|---|---|
| `product-analyst` | Turning goals into problem statements, user needs, requirements, acceptance criteria and proposed decisions | `brain/10-projects/`, `brain/20-areas/decisions/proposed/` | Write application code or approve decisions |
| `product-engineer` | Technical design and, once Aldred approves building, implementing changes against approved requirements | Application code (after approval), design notes in `brain/` | Start building before an approved decision; mark its own work verified |
| `quality-engineer` | Independently reviewing and testing implementation against acceptance criteria and reporting evidence | Nothing: it returns a report, which `knowledge-librarian` files | Change application code, tests or config, or "fix" what it finds |
| `knowledge-librarian` | Keeping `brain/` organised: triage, filing, linking, indexes, filing agent reports, and moving decisions only as Aldred directs | Anywhere in `brain/`, structure only | Rewrite note substance or approve decisions |

### Website content agents

| Agent | Use it for | Writes to |
|---|---|---|
| `legal-researcher` | Finding and summarising law, regulations, bar/regulator guidance and competitor examples, with citations | `30-resources/`, project notes (from `research.md`) |
| `content-writer` | Drafting and editing website copy, page structure, meta descriptions, FAQs in plain English and on-brand | `10-projects/<project>/` (from `page-draft.md`) |
| `librarian` | Earlier version of `knowledge-librarian`, kept for now. Prefer `knowledge-librarian`. | Anywhere in `brain/`, structure only |
| `legal-compliance-reviewer` | Checking drafts before publishing for legal-advertising rules, required disclaimers, unsupported claims and accuracy | Review notes and the draft's `reviewed_by` field |

Typical build pipeline (once building is approved): `product-analyst` → Aldred approves requirements → `product-engineer` → `quality-engineer` independent review → Aldred accepts → `knowledge-librarian` files the outcome.

Typical page pipeline: `legal-researcher` → `content-writer` → `legal-compliance-reviewer` → Aldred and a qualified lawyer sign off → publish → `knowledge-librarian` files and links the result.

## 7. Legal content rules

- This is marketing and general information, not legal advice. Every page that discusses law carries a general-information disclaimer and says no lawyer-client relationship is formed by using the site.
- No guarantees of outcomes, no "best"/"expert"/"specialist" claims unless the firm can substantiate them under the applicable rules, and no testimonials or case results without the required wording.
- Every statement of law has a source and the jurisdiction it applies to. If unsure, say so in the note and flag it for a lawyer.
- Nothing is published without a `legal-compliance-reviewer` pass and, ultimately, sign-off from a qualified lawyer at the firm. Claude never marks a page `approved` on its own.

## 8. Confidentiality

- Never store client names, matter details, personal data or privileged communications anywhere in this repository. It is for website work and the second brain only.
- If the user pastes something that looks confidential, do not save it. Ask, or save an anonymised version.
- No secrets, API keys or credentials in notes.

## 9. Working style

- Prefer editing an existing note to creating a near-duplicate. Search `brain/` first.
- When filing or reorganising more than a handful of notes, summarise what moved where.
- Keep commits small and descriptive, e.g. `brain: triage inbox (5 notes filed)`.
