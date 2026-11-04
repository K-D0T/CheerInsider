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
  | { type: 'glance'; heading: string; items: { rank: string; name: string; score?: string; price: string; verdict: 'Buy' | 'Skip'; g: GradientVariant; img: string | null }[] }
  | { type: 'review'; heading: string; items: { rank: string; score?: string; name: string; price: string; blurb: string; pros: string[]; cons: string[]; stars: number; img: string; buyAmazon: string; buyDirect: string }[] }
  | { type: 'specs'; heading: string; metrics: string[]; products: string[][] }
  | { type: 'note'; title?: string; text: string }
  | { type: 'sources'; heading?: string; items: { title: string; publication: string; url?: string }[] };

// The shape the related-article cards render from.
export interface RelatedCard {
  eyebrow: string;
  title: string;
  meta: string;
  g: GradientVariant;
  href: string;
}

// The shape authored in JSON: a choice of destinations, not a copy of their
// text. Cards used to carry a hand-written title, and every one of them had
// drifted out of sync with the article it pointed at, so an article card now
// states only its href and reads the rest from the live article. A
// destination that isn't an article (a tool or landing page) has no article to
// read, so it carries its own title.
export interface RelatedLink {
  href: string;
  title?: string;
  eyebrow?: string;
  meta?: string;
  g?: GradientVariant;
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
  related?: RelatedLink[];
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

// Stable anchor id for an h2/TOC entry. Strips inline markers so the id
// derived from a heading matches the one derived from its TOC label.
export function headingId(text: string): string {
  return text
    .replace(/[*_]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// ── Related articles ──────────────────────────────────────────────────
// Tag words common enough across the corpus to carry no signal; without
// these every article looks related to every other one.
const TAG_STOPWORDS = new Set(['cheer', 'all', 'star', 'guide', 'guides', 'season', 'parent', 'parents']);

function tagWords(tags: string[]): Set<string> {
  const out = new Set<string>();
  for (const tag of tags) {
    for (const word of tag.toLowerCase().split(/[^a-z0-9]+/)) {
      if (word.length >= 3 && !TAG_STOPWORDS.has(word)) out.add(word);
    }
  }
  return out;
}

// How close two articles are. A whole shared tag is worth far more than a
// shared word inside two different tags, and sharing a section is a nudge
// rather than a requirement - a parents piece on costs should still be able
// to point at the guide that explains the levels.
function relatedness(a: Article, b: Article): number {
  const aTags = new Set(a.tags.map((t) => t.toLowerCase()));
  const exact = b.tags.filter((t) => aTags.has(t.toLowerCase())).length;
  const aWords = tagWords(a.tags);
  let shared = 0;
  for (const word of tagWords(b.tags)) if (aWords.has(word)) shared += 1;
  return exact * 4 + shared + (a.section === b.section ? 1 : 0);
}

export function toRelatedCard(a: Article): RelatedCard {
  return { eyebrow: a.card.eyebrow, title: a.title, meta: a.readTime, g: a.gradient, href: articlePath(a) };
}

// Every article's derived picks at once. Computed as a whole because the
// orphan pass below has to see the entire graph: an article that nothing links
// to cannot be reached by following links, which is the problem this is here
// to solve.
function derivedRelated(all: Article[], limit: number): Map<string, Article[]> {
  // Full preference order per article, best first, with a deterministic
  // tiebreak so the same content always produces the same pages.
  const ranked = new Map<string, Article[]>(all.map((a) => [a.slug, all
    .filter((b) => b.slug !== a.slug)
    .map((b) => ({ b, score: relatedness(a, b) }))
    .sort((x, y) =>
      y.score - x.score
      || (y.b.dateModified ?? y.b.datePublished).localeCompare(x.b.dateModified ?? x.b.datePublished)
      || x.b.slug.localeCompare(y.b.slug))
    .map(({ b }) => b)]));

  const picks = new Map<string, Article[]>(
    [...ranked].map(([slug, order]) => [slug, order.slice(0, limit)]));

  const inbound = new Map<string, number>(all.map((a) => [a.slug, 0]));
  for (const chosen of picks.values()) {
    for (const b of chosen) inbound.set(b.slug, (inbound.get(b.slug) ?? 0) + 1);
  }

  // Give each unlinked article a place on the neighbour it scores highest
  // against, in place of that neighbour's weakest pick. Hosts with a curated
  // list are left alone, and a pick is only displaced if it has another link
  // coming in, so the rescue can't create a new orphan. Slug order keeps the
  // outcome stable.
  for (const a of [...all].sort((x, y) => x.slug.localeCompare(y.slug))) {
    if ((inbound.get(a.slug) ?? 0) > 0) continue;
    const host = (ranked.get(a.slug) ?? []).find((h) => {
      const chosen = picks.get(h.slug);
      if (!chosen || h.related?.length) return false;
      if (chosen.some((c) => c.slug === a.slug)) return false;
      const weakest = chosen[chosen.length - 1];
      return weakest !== undefined && (inbound.get(weakest.slug) ?? 0) > 1;
    });
    if (!host) continue;
    const chosen = picks.get(host.slug)!;
    const weakest = chosen[chosen.length - 1];
    picks.set(host.slug, [...chosen.slice(0, -1), a]);
    inbound.set(weakest.slug, (inbound.get(weakest.slug) ?? 1) - 1);
    inbound.set(a.slug, 1);
  }

  return picks;
}

// Where to go next from an article. An explicit `related` list in the JSON
// wins; otherwise the cards are derived from tag overlap, so a new article is
// linked from its neighbours as soon as it lands and no card can go stale.
export function getRelated(article: Article, limit = 3): RelatedCard[] {
  const all = getAllArticles();

  if (article.related?.length) {
    const byPath = new Map(all.map((a) => [articlePath(a), a]));
    return article.related.map((link) => {
      const target = byPath.get(link.href);
      if (!target) {
        return {
          href: link.href,
          title: link.title ?? link.href,
          eyebrow: link.eyebrow ?? 'ON CHEERINSIDER',
          meta: link.meta ?? '',
          g: link.g ?? article.gradient,
        };
      }
      const card = toRelatedCard(target);
      return {
        href: card.href,
        title: link.title ?? card.title,
        eyebrow: link.eyebrow ?? card.eyebrow,
        meta: link.meta ?? card.meta,
        g: link.g ?? card.g,
      };
    });
  }

  return (derivedRelated(all, limit).get(article.slug) ?? []).map(toRelatedCard);
}
