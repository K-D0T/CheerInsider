// Renders schema.org structured data. Per the Next.js JSON-LD guide, a native
// <script> tag (not next/script) is correct for non-executable structured data.
// The replace() escapes "<" to prevent XSS via injected closing tags.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}

const BASE = 'https://cheer-insider.com';

export const ORG_ID = `${BASE}/#organization`;

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'CheerInsider',
    url: BASE,
    founder: { '@type': 'Person', name: 'Lauren K.', url: `${BASE}/about` },
    description:
      'Honest, independent coverage of competitive all-star cheerleading — real costs, gym guides, gear reviews, and competition coverage.',
  };
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CheerInsider',
    url: BASE,
    publisher: { '@id': ORG_ID },
  };
}

export function articleLd({ slug, headline, description, datePublished, dateModified }: {
  slug: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    mainEntityOfPage: `${BASE}${slug}`,
    author: { '@type': 'Person', name: 'Lauren K.', url: `${BASE}/about` },
    publisher: { '@id': ORG_ID },
  };
}

export function breadcrumbLd(crumbs: [name: string, path: string][]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: `${BASE}${path}`,
    })),
  };
}
