# CLAUDE.md: operating rules for the Salig Legal workspace

This repository holds the Salig Legal website and its second brain, a knowledge workspace in [`brain/`](brain/). These rules tell Claude how to capture, file, link and maintain notes, and when to hand work to a specialist agent.

## 1. Workspace map

```
brain/
  00-inbox/        capture first, file later
  10-projects/     goal + end date (one folder per project, each with index.md)
  20-areas/        ongoing responsibilities (brand voice, SEO, compliance, site ops)
  30-resources/    reference: legal-sources, practice-areas, competitors, style
  40-archive/      finished or superseded material, never deleted
  _templates/      note.md, project.md, research.md, page-draft.md
.claude/agents/    the four specialist agents (section 6)
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

## 6. Specialist agents

Hand work to the agent whose job it is. Each lives in `.claude/agents/`.

| Agent | Use it for | Writes to |
|---|---|---|
| `legal-researcher` | Finding and summarising law, regulations, bar/regulator guidance and competitor examples, with citations | `30-resources/`, project notes (from `research.md`) |
| `content-writer` | Drafting and editing website copy, page structure, meta descriptions, FAQs in plain English and on-brand | `10-projects/<project>/` (from `page-draft.md`) |
| `librarian` | Inbox triage, filing, linking, fixing orphans, archiving, keeping indexes and READMEs current | Anywhere in `brain/`, structure only |
| `legal-compliance-reviewer` | Checking drafts before publishing for legal-advertising rules, required disclaimers, unsupported claims and accuracy | Review notes and the draft's `reviewed_by` field |

Typical page pipeline: `legal-researcher` → `content-writer` → `legal-compliance-reviewer` → publish → `librarian` files and links the result.

## 7. Legal content rules

- This is marketing and general information, not legal advice. Every page that discusses law carries a general-information disclaimer and says no lawyer-client relationship is formed by using the site.
- No guarantees of outcomes, no "best"/"expert"/"specialist" claims unless the firm can substantiate them under the applicable rules, and no testimonials or case results without the required wording.
- Every statement of law has a source and the jurisdiction it applies to. If unsure, say so in the note and flag it for a lawyer.
- Nothing is published without a `legal-compliance-reviewer` pass and, ultimately, sign-off from a qualified lawyer at the firm. Claude never marks a page `approved` on its own.

## 8. Confidentiality

- Never store client names, matter details, personal data or privileged communications anywhere in this repository. It is for website and knowledge work only.
- If the user pastes something that looks confidential, do not save it. Ask, or save an anonymised version.
- No secrets, API keys or credentials in notes.

## 9. Working style

- Prefer editing an existing note to creating a near-duplicate. Search `brain/` first.
- When filing or reorganising more than a handful of notes, summarise what moved where.
- Keep commits small and descriptive, e.g. `brain: triage inbox (5 notes filed)`.
