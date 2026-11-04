// Single source of truth for the facts the legal and contact pages state.
// Changing an address or a date here updates every page that cites it.
export const SITE = {
  name: 'CheerInsider',
  url: 'https://cheer-insider.com',
  contactEmail: 'info@kdotholdings.com',
  legalEntity: 'Kdot Holdings LLC',
  governingLaw: 'the State of Arkansas',
  effectiveDate: 'November 3, 2026',
} as const;
