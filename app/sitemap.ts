import type { MetadataRoute } from 'next';
import { getAllArticles, articlePath, type Article } from '@/lib/articles';

const BASE = 'https://cheer-insider.com';

// Fallback for an index page whose section is empty, so lastmod is never
// an invalid date.
const SITE_LAUNCH = '2026-07-15';

// The newest content date in a set. Index pages take their lastmod from the
// articles they list, so it moves when the content moves — using new Date()
// here would stamp every page as modified on every deploy, which teaches
// Google to ignore the field.
function newest(articles: Article[]): Date {
  const stamps = articles.map((a) => a.dateModified ?? a.datePublished).sort();
  return new Date(stamps[stamps.length - 1] ?? SITE_LAUNCH);
}

// Static pages get fixed entries; article entries are generated from
// content/articles so new articles appear automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  const all = getAllArticles();
  const inSection = (s: Article['section']) => all.filter((a) => a.section === s);

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: newest(all), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/parents`, lastModified: newest(inSection('parents')), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/gear`, lastModified: newest(inSection('gear')), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/guides`, lastModified: newest(inSection('guides')), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/gym-guide`, lastModified: new Date('2026-04-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/cost-calculator`, lastModified: new Date('2026-04-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/about`, lastModified: new Date('2026-07-15'), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE}/contact`, lastModified: new Date('2026-11-03'), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/disclosures`, lastModified: new Date('2026-11-03'), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/privacy`, lastModified: new Date('2026-11-03'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: new Date('2026-11-03'), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const articles: MetadataRoute.Sitemap = all.map((a) => ({
    url: `${BASE}${articlePath(a)}`,
    lastModified: new Date(a.dateModified ?? a.datePublished),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...articles];
}
