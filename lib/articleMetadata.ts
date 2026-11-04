import type { Metadata } from 'next';
import { Article, articlePath } from './articles';
import { canonical } from './canonical';

export function buildArticleMetadata(article: Article): Metadata {
  return {
    title: article.title,
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
