import type { MetadataRoute } from 'next';
import { getAllArticles, articlePath } from '@/lib/articles';

const BASE = 'https://cheer-insider.com';

// Static pages get fixed entries; article entries are generated from
// content/articles so new articles appear automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/parents`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/gear`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/gym-guide`, lastModified: new Date('2026-04-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/cost-calculator`, lastModified: new Date('2026-04-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/about`, lastModified: new Date('2026-01-01'), changeFrequency: 'yearly', priority: 0.5 },
  ];

  const articles: MetadataRoute.Sitemap = getAllArticles().map((a) => ({
    url: `${BASE}${articlePath(a)}`,
    lastModified: new Date(a.dateModified ?? a.datePublished),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...articles];
}
