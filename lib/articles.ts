import fs from 'fs';
import path from 'path';

// ── Article content model ─────────────────────────────────────────────
// Articles live as JSON files in content/articles/. Inline text supports
// **bold** and *italic* markers (italic renders as the serif accent in
// headings/quotes, plain emphasis in body text).

export type GradientVariant = 'flash' | 'halo' | 'stripes' | 'field' | 'glow' | 'pulse' | 'burst' | 'block';

export type Block =
  | { type: 'p'; text: string; dropcap?: boolean; serif?: boolean }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'quote'; text: string; variant?: 'border' | 'bleed' }
  | { type: 'table'; head: string[]; rows: string[][]; foot?: string[] }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'numbered'; items: { n: string; cat: string; title: string; body: string; read: number }[] }
  | { type: 'responses'; heading: string; items: { name: string; stance: 'agree' | 'disagree'; text: string }[] }
  | { type: 'glance'; heading: string; items: { rank: string; name: string; score: string; price: string; verdict: 'Buy' | 'Skip'; g: GradientVariant; img: string | null }[] }
  | { type: 'review'; heading: string; items: { rank: string; score: string; name: string; price: string; blurb: string; pros: string[]; cons: string[]; stars: number; img: string; buyAmazon: string; buyDirect: string }[] }
  | { type: 'specs'; heading: string; metrics: string[]; products: string[][] }
  | { type: 'note'; title?: string; text: string }
  | { type: 'cta'; eyebrow: string; title: string; body: string; button: string };

export interface RelatedCard {
  eyebrow: string;
  title: string;
  meta: string;
  g: GradientVariant;
  href: string;
}

export interface Article {
  slug: string;
  section: 'parents' | 'gear' | 'guides';
  kind: 'feature' | 'opinion' | 'listicle' | 'roundup';
  title: string;
  description: string;
  ogDescription?: string;
  eyebrow: string;
  pill?: string;
  headline: string;
  heroNumber?: string;
  sub: string;
  datePublished: string;
  dateModified?: string;
  readTime: string;
  tags: string[];
  gradient: GradientVariant;
  heroCaption?: string;
  toc?: string[];
  blocks: Block[];
  related?: RelatedCard[];
  card: { eyebrow: string };
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'articles');

export function getAllArticles(): Article[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.json'));
  const articles = files.map((f) => JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, f), 'utf8')) as Article);
  return articles.sort((a, b) => (b.dateModified ?? b.datePublished).localeCompare(a.dateModified ?? a.datePublished));
}

export function getArticlesBySection(section: Article['section']): Article[] {
  return getAllArticles().filter((a) => a.section === section);
}

export function getArticle(section: Article['section'], slug: string): Article | undefined {
  return getAllArticles().find((a) => a.section === section && a.slug === slug);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}

export function articlePath(a: Article): string {
  return `/${a.section}/${a.slug}`;
}
