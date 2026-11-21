/**
 * Site-wide facts. Anything Aldred has not yet confirmed is `null` and renders as a
 * visible "To be confirmed" marker (see components/Tbc.astro). `npm run check:launch`
 * fails while any marker remains, so nothing unconfirmed can go live unnoticed.
 * Source of truth for confirmed facts: brain/30-resources/company/overview.md.
 */
export const site = {
  // Brand name: proposed decision brain/20-areas/decisions/proposed/2026-11-21-website-brand-name.md
  brand: 'Salig Legal Operations',
  shortBrand: 'Salig',
  tagline: 'Remote legal administrative and attorney-directed casework support for California law firms.',
  // Wording from the original site sample; entity names still to be confirmed by Aldred.
  entitiesSummary: 'a Philippine corporation and a U.S. LLC',
  usEntityName: null as string | null,
  phEntityName: null as string | null,
  contactEmail: null as string | null,
  businessLocation: null as string | null,
  // Absolute site URL (e.g. https://example.com). Set via SITE_URL at build time once the domain is decided.
  url: process.env.SITE_URL || null,
  privacyEffectiveDate: null as string | null,
  termsEffectiveDate: null as string | null,
  hoursPerMember: 160,
};

/** One consistent supervision and scope statement (requirements COMP-3; wording needs lawyer sign-off). */
export const scopeStatement =
  'Salig Legal Operations provides remote administrative and casework support to law firms. All substantive work is directed, reviewed and approved by the client firm’s supervising attorney. We do not give legal advice and do not provide legal services to the public. Using this site does not create a lawyer-client relationship.';
