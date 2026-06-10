import { notFound } from 'next/navigation';
import { getArticle, getArticlesBySection } from '@/lib/articles';
import { buildArticleMetadata } from '@/lib/articleMetadata';
import { ArticleLayout } from '@/components/article/ArticleLayout';

export const dynamicParams = false;

export function generateStaticParams() {
  return getArticlesBySection('guides').map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle('guides', slug);
  if (!article) return {};
  return buildArticleMetadata(article);
}

export default async function GuidesArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle('guides', slug);
  if (!article) notFound();
  return <ArticleLayout article={article} />;
}
