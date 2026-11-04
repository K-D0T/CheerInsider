import type { Metadata } from 'next';
import { Article, articlePath } from './articles';
import { canonical } from './canonical';

export function buildArticleMetadata(article: Article): Metadata {
  return {
    // Absolute, so the root layout's '%s | CheerInsider' template doesn't
    // append the brand. With it, every article title ran past the ~60
    // characters Google shows and got cut mid-phrase. og:title still carries
    // the brand, where on a shared card it reads as attribution rather than
    // as clutter.
    title: { absolute: article.title },
    alternates: canonical(articlePath(article)),
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.ogDescription ?? article.description,
      type: 'article',
      publishedTime: `${article.datePublished}T00:00:00Z`,
      ...(article.dateModified && { modifiedTime: `${article.dateModified}T00:00:00Z` }),
      authors: ['CheerInsider Editorial'],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.ogDescription ?? article.description,
    },
  };
}
