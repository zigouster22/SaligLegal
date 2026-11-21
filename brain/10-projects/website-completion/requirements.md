---
title: Website completion requirements (first release)
type: note
status: draft
created: 2026-11-21
updated: 2026-11-21
tags: [website, requirements, acceptance-criteria, accessibility, privacy, compliance]
related: [index, existing-site-review, 2026-11-21-website-audience-california-law-firms]
---

# Website completion requirements (first release)

## Summary
Draft requirements for the first public release of the website for California lawyers and law firms that need legal assistants. The scope builds on the existing one-page sample (see [[existing-site-review]]). Part of [[index]]. Follows the approved audience decision [[2026-11-21-website-audience-california-law-firms]].

**Status: draft for Aldred's review. Nothing here is approved.** Items marked "open" depend on proposed decisions in `brain/20-areas/decisions/proposed/`. They are not settled.

## How to read this note
- **Priority.** MUST = needed for first release. SHOULD = strongly wanted; drop only with Aldred's agreement. COULD = include only if time allows.
- **IDs.** Each requirement has an ID (for example `HOME-1`) so tests and reviews can refer to it.
- **"The brand name"** means whichever name Aldred approves. "Salig Legal Operations" or "Salig Legal" is still open.
- **"Approved facts"** means facts Aldred has confirmed and recorded in `brain/30-resources/company/overview.md` or an approved decision.

## 1. Problem statement

California solo and small-firm lawyers lose time to administrative work and routine case preparation. Hiring in-house staff is slow and costly. The business behind the sample offers dedicated remote teams to these firms. The teams cover legal administration and attorney-directed casework support. The workforce is in the Philippines. The sample describes the business as a Philippine corporation plus a U.S. LLC, but this is not yet confirmed.

The existing sample shows the offer well, but it cannot go live yet:
- the inquiry form sends nothing;
- there is no privacy notice, terms, About page or contact details;
- the copy still says "sample";
- some wording about casework needs California legal review.

**Goal of the first release:** a small, accessible, credible multi-page site. It should:
1. explain the offer to California lawyers;
2. make clear that the client firm's attorney stays in charge of all legal work;
3. collect a minimal business inquiry that reliably reaches Salig staff.

**Why it matters to the firm:** the site is the main way to start sales conversations. It is also a compliance risk if its wording suggests that a non-lawyer company provides legal services.

## 2. Users

| User | Who | What they need from the site | Primary or secondary |
|---|---|---|---|
| Managing attorney | Solo or small-firm lawyer in California who decides on hiring support | Understand what the teams do and don't do, how supervision works, how confidentiality is handled, and how to start a conversation | Primary |
| Firm administrator or office manager | Runs operations at a California firm and often does the first research | Compare roles and team sizes, find out how onboarding works, and send an inquiry for the attorney | Primary |
| Salig staff (inquiry handlers) | Salig people who receive and answer inquiries | Get complete, minimal, non-confidential inquiries quickly and reliably, then follow up | Secondary |

Not users of this site: members of the public looking for legal help (see the approved decision). The site should still tell them politely, in one place, that it does not offer legal services to the public (`GLOB-5`).

## 3. Site-wide requirements

| ID | Priority | Requirement |
|---|---|---|
| GLOB-1 | MUST | Every page has the same header (logo, brand name, main navigation) and the same footer (navigation, legal links, scope statement, copyright). |
| GLOB-2 | MUST | Navigation links to Home, About, Services, Team packages, Security and confidentiality, and Contact. The footer also links to Privacy notice and Terms of use. |
| GLOB-3 | MUST | No page contains placeholder wording. Examples: "sample", "demonstration", "must be confirmed with Salig", "not yet specified", "lorem". |
| GLOB-4 | MUST | Every page has a unique `<title>` and meta description. |
| GLOB-5 | MUST | The footer on every page carries the scope statement: the company provides support to law firms under the direction of the client firm's supervising attorney, does not give legal advice, and does not provide legal services to the public. Using the site does not create a lawyer-client relationship. Final wording needs lawyer sign-off (`COMP-3`). |
| GLOB-6 | MUST | A primary "Request a consultation" call to action is reachable from every page. It goes to the Contact page or form. |
| GLOB-7 | SHOULD | The current page is shown in the navigation, visually and with `aria-current="page"`. |

**Acceptance criteria**
- **GLOB-1/2.** Given any page, when it loads, then the header and footer match every other page, and every navigation link resolves without a 404.
- **GLOB-3.** Given the built site, when its text is searched (case-insensitive) for "sample", "demonstration", "must be confirmed", "not yet specified" and "lorem", then there are 0 matches in visible text, alt text and metadata.
- **GLOB-4.** Given all pages, when their titles and meta descriptions are listed, then none are empty and no two are the same.
- **GLOB-5.** Given any page, when the footer is read, then the approved scope statement appears word for word.

## 4. User stories by page

### 4.1 Home (MUST)

**Story HOME-A.** As a managing attorney, I want to understand within a few seconds what is offered and to whom, so that I can decide whether to read on.

| ID | Priority | Acceptance criteria (Given / When / Then) |
|---|---|---|
| HOME-1 | MUST | Given a first-time visitor on a 1280px or 375px screen, when the page loads, then the hero shows without scrolling: who the service is for (law firms), what it is (remote administrative and attorney-directed casework support), and a "Request a consultation" button. |
| HOME-2 | MUST | Given the Home page, when the visitor reads the two-roles summary, then each role links to its section on the Services page. |
| HOME-3 | MUST | Given the Home page, when the visitor reads the supervision panel, then it states that the client firm's supervising attorney directs, reviews and approves substantive work. |
| HOME-4 | SHOULD | Given the Home page, when the visitor reaches the packages teaser, then it shows the range (2 to 6 people, 160 reserved hours per person per month) and links to Team packages. |
| HOME-5 | SHOULD | Given the Home page, when the visitor reaches the "How it works" steps, then the 4 onboarding steps are shown as the actual process, not as a "proposed approach for this sample". This is open until Aldred confirms the process. |
| HOME-6 | COULD | Given the Home page, when the visitor reaches the FAQ, then at least the "who directs the legal work" and "what to include in an inquiry" answers are shown, or linked. |

### 4.2 About (MUST)

**Story ABOUT-A.** As a managing attorney, I want to know who is behind the service and where the team works, so that I can judge whether it is a credible business to trust with firm work.

| ID | Priority | Acceptance criteria |
|---|---|---|
| ABOUT-1 | MUST | Given the About page, when it is read, then it names the legal entities behind the service and their roles (U.S. entity and Philippine entity). Only approved facts are used. Open: entity names. |
| ABOUT-2 | MUST | Given the About page, when it is read, then it states that the support team is based in the Philippines and works remotely. |
| ABOUT-3 | MUST | Given the About page, when it is read, then it contains no "best", "leading", "expert", "specialist" or "#1" claims, no client counts, and no testimonials unless Aldred supplies substantiation and the lawyer clears them (`COMP-2`). |
| ABOUT-4 | SHOULD | Given the About page, when it is read, then it explains how the business relates to the Salig Legal law firm, if Aldred decides the site should say so. Open: brand and relationship question. |
| ABOUT-5 | COULD | Given the About page, when it is read, then it describes how team members are recruited, trained and supervised, once Aldred supplies facts. |

### 4.3 Services / Roles (MUST)

**Story SERV-A.** As a firm administrator, I want a clear list of what each role does and does not do, so that I can work out which of our tasks we can delegate.

| ID | Priority | Acceptance criteria |
|---|---|---|
| SERV-1 | MUST | Given the Services page, when it is read, then it describes both roles (Legal Administrative Assistant and the casework role) with their task lists. Role titles still need legal review (`COMP-5`). |
| SERV-2 | MUST | Given the casework role section, when it is read, then every substantive task is described as assigned, directed and reviewed by the client firm's supervising attorney. Examples: research, drafting, pleadings, discovery, subpoenas. |
| SERV-3 | MUST | Given the Services page, when it is read, then it includes a "What we don't do" list: no legal advice; no strategy, settlement or filing decisions; no court appearances; no direct work for members of the public. Final list to be confirmed by the lawyer. |
| SERV-4 | MUST | Given the task lists, when the lawyer reviews them, then any wording the lawyer flags is changed or removed before launch. Examples: "routine pleadings", "drafting", "casework". |
| SERV-5 | SHOULD | Given a role section, when the visitor wants more detail, then expanded task lists are shown with accessible disclosure controls (button with `aria-expanded`), as in the sample. |

### 4.4 Team packages (MUST)

**Story PKG-A.** As a managing attorney, I want to compare team sizes and role mixes, so that I can pick a starting point before the consultation.

| ID | Priority | Acceptance criteria |
|---|---|---|
| PKG-1 | MUST | Given the Team packages page, when it loads, then all 7 configurations are shown with admin count, casework count and monthly hours. Hours must equal people × 160. |
| PKG-2 | MUST | Given the comparison table, when it is used on a 320px-wide screen, then it can be scrolled with the keyboard, has a caption, and uses header cells correctly, as in the sample. |
| PKG-3 | MUST | Given the packages page, when pricing is mentioned, then it matches Aldred's decision on pricing display. Until that is decided: "Pricing is discussed in your consultation." |
| PKG-4 | MUST | Given the packages page, when reserved capacity is explained, then the working hours, time zones, holidays and unused-capacity terms shown are approved facts. If they are not yet supplied, the page says they are agreed in the proposal. It must not say "not yet specified". |
| PKG-5 | SHOULD | Given a package row, when the visitor selects its "Next step" link, then they reach the inquiry form with that package preselected in "Team you're interested in". |
| PKG-6 | COULD | Given the packages page, when it loads, then a starting-point filter is available ("Balanced support" or "More casework"), as in the sample, and works without a mouse. |

### 4.5 Security and confidentiality (MUST)

**Story SEC-A.** As a managing attorney, I want to know how client confidences and firm systems are protected, so that I can meet my own supervision and confidentiality duties before I delegate work.

| ID | Priority | Acceptance criteria |
|---|---|---|
| SEC-1 | MUST | Given the page, when it is read, then it lists only security and confidentiality measures that Aldred has confirmed are actually in place. Examples: confidentiality agreements, access controls, device policies, training, use of the client firm's systems. Open: Aldred to supply the list. |
| SEC-2 | MUST | Given the page, when it is read, then it states that the client firm controls which systems and access the team uses, and keeps responsibility for supervision. |
| SEC-3 | MUST | Given the page, when it is read, then it makes no absolute claims ("fully secure", "guaranteed", "compliant with all rules"). It names no certification the company does not hold. |
| SEC-4 | SHOULD | Given the page, when it is read, then it lists topics firms may want to cover before onboarding (supervision, confidentiality, data location, conflicts). It says these are matters for the firm's own judgment, not legal advice. Wording depends on `legal-researcher` findings (`COMP-6`). |
| SEC-5 | COULD | Given the page, when it is read, then it offers to share a security summary or sample confidentiality agreement on request. |

### 4.6 Contact and inquiry form (MUST)

**Story CON-A.** As a firm administrator, I want to send a short inquiry and know it has arrived, so that I can arrange a consultation without phoning.

**Story CON-B.** As a Salig staff member, I want every inquiry delivered to a monitored place with the fields I need and no confidential client data, so that I can respond quickly and safely.

| ID | Priority | Acceptance criteria |
|---|---|---|
| CON-1 | MUST | Given a visitor completes all required fields, when they submit, then the inquiry is delivered to the agreed Salig destination within 5 minutes, and the visitor sees a confirmation on screen that is announced to screen readers. The delivery method is open (hosting and form decision). |
| CON-2 | MUST | Given a required field is empty or the email is invalid, when the visitor submits, then nothing is sent, an error summary receives focus, each error is linked to its field, and the fields have `aria-invalid` and descriptive error text. |
| CON-3 | MUST | Given the form, when it loads, then the fields are limited to: full name, work email, law firm name, team of interest (optional), anticipated start (optional), and "What support would help?" (free text, with a character limit). No phone, address or file upload unless Aldred approves. |
| CON-4 | MUST | Given the form, when it loads, then a warning next to the free-text field says not to include client names, confidential case details or case documents. |
| CON-5 | MUST | Given the form, when it loads, then a short notice near the submit button links to the Privacy notice and says how the data will be used. |
| CON-6 | MUST | Given a delivery failure (network or service error), when the visitor submits, then they see a clear error with another way to get in touch (email address), and their entries are kept on the page. |
| CON-7 | MUST | Given automated spam, when bots submit the form, then a spam control that needs no user effort (honeypot field, rate limit or service filter) blocks most of it. Any CAPTCHA used must meet WCAG 2.2 Accessible Authentication (3.3.8). |
| CON-8 | MUST | Given the Contact page, when it is read, then it shows at least one direct contact method (business email) and the business location. These are approved facts. Open: contact details. |
| CON-9 | SHOULD | Given a submitted inquiry, when it is received, then Salig staff get a copy in a single inbox or tool, and the visitor gets an automatic acknowledgment email. The automatic email depends on the hosting/form decision. |
| CON-10 | SHOULD | Given a submission, when it is stored by any service, then the place of storage and retention period are known and stated in the Privacy notice. |

### 4.7 Privacy notice (MUST)

**Story PRIV-A.** As a visitor, I want to know what happens to the details I submit, so that I can decide whether to use the form.

| ID | Priority | Acceptance criteria |
|---|---|---|
| PRIV-1 | MUST | Given the Privacy notice, when it is read, then it states who controls the data (approved entity name), what is collected (form fields, plus any cookies or analytics), why, who receives it (including form or hosting providers), how long it is kept, and how to contact the company about it. |
| PRIV-2 | MUST | Given the site uses analytics or non-essential cookies, when a visitor arrives, then the notice describes them. If consent or opt-out is required, it is offered before they are set. Whether this is needed is open (lawyer). |
| PRIV-3 | MUST | Given the notice, when it is reviewed, then a qualified lawyer has confirmed whether CCPA/CPRA (and any other privacy law) applies and that the notice meets it. This is a question for the lawyer. This note does not assume it applies or does not apply. |
| PRIV-4 | MUST | Given the notice, when it is read, then it shows an "effective" or "last updated" date. |

### 4.8 Terms of use (MUST)

**Story TERMS-A.** As the business, we want clear site terms, so that visitors understand the site is general information and not legal advice or an offer of legal services.

| ID | Priority | Acceptance criteria |
|---|---|---|
| TERMS-1 | MUST | Given the Terms of use, when they are read, then they state: the site is general business information; it is not legal advice; no lawyer-client relationship is formed; service terms are set only in a signed agreement; plus ownership of content and the governing law. Governing law is open (lawyer). |
| TERMS-2 | MUST | Given the Terms of use, when they are reviewed, then a qualified lawyer has approved them before launch. |

### 4.9 404 page (MUST)

| ID | Priority | Acceptance criteria |
|---|---|---|
| 404-1 | MUST | Given a visitor requests a URL that does not exist, when the server responds, then it returns HTTP status 404 and a branded page with the standard header and footer, a plain explanation, and links to Home and Contact. |

## 5. Non-functional requirements

### 5.1 Accessibility (MUST)

| ID | Requirement | How it is tested |
|---|---|---|
| A11Y-1 | Every page meets WCAG 2.2 Level AA. | axe-core reports 0 violations on every page at 1280px, 768px and 320px, and at 200% text size. |
| A11Y-2 | Screen-reader checks, which the sample still owes. | Manual pass with VoiceOver (Safari, macOS and iOS) and NVDA (Firefox or Chrome, Windows). Covers navigation, disclosures, the packages table, form errors and the confirmation. Results are recorded by `quality-engineer`. |
| A11Y-3 | Real browser zoom to 400% (reflow at 320 CSS px) and Windows forced-colours mode work. | Manual check with no loss of content or function. |
| A11Y-4 | Keep the sample's accessibility features: skip link, visible focus, keyboard-only use, `prefers-reduced-motion` respected, colour contrast at or above AA. | Keyboard walk-through of every page; the contrast script from the sample's `qa/` re-run. |
| A11Y-5 | An accessibility statement exists, either as a page or a footer link. | Present and dated. SHOULD. |

### 5.2 Performance (MUST)

| ID | Budget (mobile, simulated 4G, Lighthouse) |
|---|---|
| PERF-1 | Largest Contentful Paint 2.5 s or less; Cumulative Layout Shift 0.1 or less; Interaction to Next Paint 200 ms or less |
| PERF-2 | Lighthouse Performance score 90 or above on every page |
| PERF-3 | Each page's total transfer is 500 KB or less on first load, including fonts and images. Logo and images are compressed and sized for display. |
| PERF-4 | The site works and reads correctly with JavaScript turned off. Only the form's enhanced validation and the package filter may degrade. The form must still submit, or show an email alternative. |

### 5.3 Privacy (MUST)

| ID | Requirement |
|---|---|
| PRIV-NF-1 | Data minimisation: collect only the fields in `CON-3`. No hidden tracking fields. |
| PRIV-NF-2 | No third-party trackers, advertising pixels or session recording in the first release. Any analytics must be privacy-friendly and covered by the Privacy notice. Whether to use analytics at all is open (COULD). |
| PRIV-NF-3 | Third-party font loading is either self-hosted, or disclosed in the Privacy notice. The sample loads Google Fonts, which sends visitor IP addresses to Google. Recommendation: self-host. |
| PRIV-NF-4 | Inquiry data is sent over HTTPS only and stored only where the Privacy notice says. |

### 5.4 Security (MUST)

| ID | Requirement |
|---|---|
| SECR-1 | HTTPS on every page, with HTTP redirected to HTTPS and HSTS enabled. |
| SECR-2 | Security headers set: Content-Security-Policy, X-Content-Type-Options, Referrer-Policy, frame-ancestors or X-Frame-Options. |
| SECR-3 | No secrets, API keys or credentials in the repository or the page source. Form service keys are kept in hosting settings. |
| SECR-4 | Form input is validated on the server (or by the form service) as well as in the browser. Length limits are applied and output is escaped in notification emails. |
| SECR-5 | Dependencies (if any) have no known high or critical vulnerabilities at launch. |

### 5.5 SEO and social metadata

| ID | Priority | Requirement |
|---|---|---|
| SEO-1 | MUST | Unique title and meta description per page (`GLOB-4`); one `<h1>` per page; logical heading order. |
| SEO-2 | MUST | `sitemap.xml`, `robots.txt` and a canonical URL on every page. The domain is open. |
| SEO-3 | SHOULD | Open Graph and Twitter card tags (title, description, image) on every page, with a branded share image. |
| SEO-4 | SHOULD | `Organization` structured data (JSON-LD) using approved facts only. |
| SEO-5 | COULD | Content targets search terms California firms use, for example "remote legal assistant for law firms California". This must not make claims barred by `COMP-2`. |

### 5.6 Brand (MUST)

| ID | Requirement |
|---|---|
| BRAND-1 | Keep the existing palette: navy #0A1729, navy 2 #003D66, gold #BF994F, ink #293338, muted #505D66, paper #F7F5F2. Any new colour pairs must pass AA contrast. |
| BRAND-2 | Keep the existing logo (`salig-logo.png`) and shield favicon (`salig-shield.png`). Supply SVG or high-resolution versions if available. |
| BRAND-3 | Fix the heading font: either license and load "Domaine Display", or choose a substitute. The choice is Aldred's. Until then, headings must not depend on a font that never loads. |
| BRAND-4 | Use the approved brand name the same way throughout. The name is open. |

## 6. Content and compliance requirements

These items are not statements of law. Each needs `legal-researcher` findings with citations, and sign-off from a qualified lawyer, before launch. This note does not treat any of them as settled.

| ID | Priority | Requirement |
|---|---|---|
| COMP-1 | MUST | Remove all "sample" and placeholder wording (`GLOB-3`). |
| COMP-2 | MUST | No "best", "expert", "specialist", "leading", "top" or guaranteed-result claims, no testimonials, and no client or result statistics, unless Aldred supplies substantiation and the lawyer approves the wording. |
| COMP-3 | MUST | One consistent supervision and scope statement is used on every page where services are described, and in the footer. It must cover: the client firm's supervising attorney directs, reviews and approves substantive work; the company does not give legal advice; the company does not offer legal services to the public. The wording must be approved by the lawyer. |
| COMP-4 | MUST | **Unauthorized practice (Cal. Bus. & Prof. Code § 6125).** `legal-researcher` to research whether and how a non-lawyer support company may describe "casework", "drafting", "research", "routine pleadings" and "subpoenas" for California firms. Services copy (`SERV-2` to `SERV-4`) is final only after lawyer review. |
| COMP-5 | MUST | **Job titles (Cal. Bus. & Prof. Code § 6450 and following).** Research whether "Legal Support Specialist", "Legal Administrative Assistant" or any "paralegal" wording raises title or qualification issues, and whether "Specialist" conflicts with `COMP-2`. Titles are final only after lawyer review. |
| COMP-6 | MUST | **Client firms' duties: supervision (Cal. Rules of Prof. Conduct, rule 5.3) and confidentiality (rule 1.6; Bus. & Prof. Code § 6068(e)).** Research what the site may say about helping firms meet these duties, including any California State Bar guidance on outsourcing, including offshore outsourcing. The site must not say the service makes a firm "compliant". |
| COMP-7 | MUST | **Applicable advertising rules.** The approved decision says attorney-advertising rules for the firm's own services do not apply to this site unless Aldred decides otherwise. The lawyer must confirm this, given that Salig Legal is also described as a California law firm (see `brain/30-resources/company/overview.md`). |
| COMP-8 | MUST | Every page goes through a `legal-compliance-reviewer` pass, then sign-off by Aldred and a qualified lawyer, before publishing (CLAUDE.md section 7). |
| COMP-9 | SHOULD | Copy is plain English, in short sentences, written for lawyers and firm staff as buyers. Grade 10 reading level or lower where possible. |

## 7. Out of scope for the first release

- Client portal, log-in or document exchange.
- Online payment, quotes or pricing calculators.
- Internal tools for Salig staff or the Philippine workforce (a separate future project).
- Jurisdictions other than California, and Philippine-law content.
- Content offering legal services to the public, practice-area pages or legal guides.
- Blog, news or resource library.
- Careers or recruitment pages.
- Live chat, chatbots or appointment booking.
- CRM integration beyond delivering the inquiry to the agreed destination.
- Translations or multiple languages.

## 8. Assumptions

1. The site targets California lawyers and firms only (approved decision).
2. The sample's content (roles, 7 packages, 160 hours per person, onboarding steps) reflects the real offer. Aldred to confirm.
3. A static, multi-page site is enough. No accounts or database are needed beyond form delivery.
4. Aldred will supply the missing facts, and a qualified lawyer will review before launch.
5. The sample's accessibility work carries over, and it is re-tested on every new page.

## 9. Risks

| Risk | Effect | Mitigation |
|---|---|---|
| Casework wording read as offering legal services | Unauthorized-practice exposure; client firms lose trust | `COMP-3` to `COMP-6`; lawyer review before launch |
| Inquiries containing confidential client data | Confidentiality breach for client firms | `CON-3`, `CON-4`; minimal fields; no uploads |
| Security page overstates measures | Misleading claims; liability | `SEC-1`, `SEC-3`: only confirmed measures |
| Missing facts delay launch | Placeholders stay, or vague copy | Collect facts early; COULD items can be dropped |
| Unclear relationship between Salig Legal (law firm) and the support company | Confused buyers; possible conflict or advertising-rule issues | Brand and entity decision; `COMP-7` |
| Inquiry form fails without notice | Lost leads | `CON-6`; test deliveries before launch and after any change |

## 10. Open questions for Aldred

1. **Brand name.** Should the site use "Salig Legal Operations" or "Salig Legal"? (Proposed decision pending.)
2. **Entities.** What are the exact legal names of the U.S. LLC and the Philippine corporation, and how do they relate to the Salig Legal law firm? Should the site mention the law firm at all?
3. **Code, tech and hosting.** Where will the code live, will it be plain HTML or a static generator, and which host and form-delivery service will be used? (Proposed decisions pending.)
4. **Pricing.** Should prices be shown, shown as "from" prices, or kept to the consultation?
5. **Working terms.** What are the working hours, time zones, holiday rules and unused-capacity terms that can be published?
6. **Security.** Which security and confidentiality measures are actually in place today?
7. **Contact.** What business email, phone (if any) and address should be published? Where should inquiries be delivered?
8. **Onboarding.** Are the 4 onboarding steps the real process?
9. **Analytics.** Should there be analytics in the first release? If so, which privacy-friendly option?
10. **Heading font.** Should we license Domaine Display or choose a substitute?
11. **Lawyer.** Which qualified lawyer will review the privacy notice, terms and services wording, and when?

## Links
- [[index]]
- [[existing-site-review]]
- [[2026-11-21-website-audience-california-law-firms]]
- Company facts: `brain/30-resources/company/overview.md`
- Proposed decisions: `brain/20-areas/decisions/proposed/`
