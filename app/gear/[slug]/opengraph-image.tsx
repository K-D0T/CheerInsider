import { getArticle, getArticlesBySection } from '@/lib/articles';
import { articleOgImage } from '@/components/seo/ArticleOgImage';

// Written out rather than imported from OG_SIZE: Next reads these exports
// statically, so they have to be literals here.
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'A CheerInsider article card: the headline, section and read time on a dark background';

export const dynamicParams = false;

export function generateStaticParams() {
  return getArticlesBySection('gear').map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle('gear', slug);
  // dynamicParams = false plus generateStaticParams means only the slugs above
  // are routed here; this guard narrows the type rather than handling traffic.
  if (!article) throw new Error(`No gear article for slug: ${slug}`);
  return articleOgImage(article);
}
