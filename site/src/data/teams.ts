import { site } from './site';

export type Team = { name: string; admin: number; casework: number; tag: string; desc: string; groups: Array<'start' | 'balanced' | 'casework'> };

/** The seven team configurations from the original sample. Hours = people × 160 (requirement PKG-1). */
export const teams: Team[] = [
  { name: 'Essential Legal Duo', admin: 1, casework: 1, tag: 'A smaller starting team', desc: 'Daily administrative coordination with dedicated casework support.', groups: ['start', 'balanced'] },
  { name: 'Casework Growth Team', admin: 1, casework: 2, tag: 'Added casework capacity', desc: 'More research, drafting, and preparation alongside daily administration.', groups: ['start', 'casework'] },
  { name: 'Balanced Legal Support Unit', admin: 2, casework: 2, tag: 'Equal admin and casework', desc: 'An even role mix for busy schedules and ongoing document preparation.', groups: ['start', 'balanced'] },
  { name: 'High-Volume Legal Operations Pod', admin: 1, casework: 3, tag: 'Casework-focused', desc: 'A larger share of your team dedicated to research and case preparation.', groups: ['casework'] },
  { name: 'Full-Capacity Legal Support Pod', admin: 2, casework: 3, tag: 'Broader support', desc: 'Support for multiple active matters and a substantial administrative workload.', groups: [] },
  { name: 'Legal Operations Command Team', admin: 3, casework: 3, tag: 'Expanded, balanced team', desc: 'Equal administrative and casework capacity across a six-person team.', groups: ['balanced'] },
  { name: 'Expanded Casework Delivery Pod', admin: 2, casework: 4, tag: 'Expanded casework team', desc: 'Additional specialists for extensive document and matter-support needs.', groups: ['casework'] },
];

export const people = (t: Team) => t.admin + t.casework;
export const hours = (t: Team) => people(t) * site.hoursPerMember;
export const teamSlug = (t: Team) => t.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
export const filters = [
  { id: 'all', label: 'All teams' },
  { id: 'start', label: 'Starting points' },
  { id: 'balanced', label: 'Balanced support' },
  { id: 'casework', label: 'More casework' },
] as const;
