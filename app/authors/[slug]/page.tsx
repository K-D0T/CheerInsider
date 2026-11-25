import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { JsonLd, personLd } from '@/components/seo/JsonLd';
import { AUTHORS, getAuthor, authorPath } from '@/lib/authors';
import { getAllArticles, articlePath } from '@/lib/articles';
import { canonical } from '@/lib/canonical';
import { P, tx } from '@/lib/palette';

export const dynamicParams = false;

export function generateStaticParams() {
  return AUTHORS.map((a) => ({ slug: a.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return {};
  return {
    title: author.name,
    alternates: canonical(authorPath(author)),
    description: `${author.name} writes for CheerInsider. ${author.credentials.join('. ')}.`,
    openGraph: { title: `${author.name} | CheerInsider`, type: 'profile' },
  };
}

const body = { fontSize: 17, lineHeight: 1.6, color: 'var(--p-inkSoft)', margin: '0 0 16px', maxWidth: 740 } as const;

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();
  const articles = getAllArticles().filter((a) => a.author === author.id);

  return (
    <section style={{ padding: '48px 0 96px' }}>
      <JsonLd data={personLd({ name: author.name, path: authorPath(author), jobs: author.credentials })} />
      <Container max={900}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 13, color: 'var(--p-muted)', marginBottom: 24 }}>
          <Link href="/">Home</Link><span>›</span><Link href="/about">About</Link><span>›</span>
          <span style={{ color: 'var(--p-ink)' }}>{author.name}</span>
        </div>
        <div style={{ ...tx.eyebrow, color: 'var(--p-hotDeep)', marginBottom: 14 }}>Author</div>
        <h1 style={{ fontFamily: 'var(--p-display)', fontWeight: 800, fontSize: 'clamp(44px,5.6vw,80px)', margin: '0 0 28px', letterSpacing: '-.03em', lineHeight: .95 }}>
          {author.name}
        </h1>

        <h2 style={{ fontFamily: 'var(--p-display)', fontWeight: 700, fontSize: 28, letterSpacing: '-.02em', margin: '40px 0 12px' }}>
          Cheer <span style={{ fontFamily: P.serif, fontStyle: 'italic', color: 'var(--p-hot)', fontWeight: 400 }}>background</span>
        </h2>
        <ul style={{ ...body, paddingLeft: 22 }}>
          {author.credentials.map((c) => <li key={c} style={{ marginBottom: 6 }}>{c}</li>)}
        </ul>

        {articles.length > 0 && (
          <>
            <h2 style={{ fontFamily: 'var(--p-display)', fontWeight: 700, fontSize: 28, letterSpacing: '-.02em', margin: '40px 0 12px' }}>
              Guides by {author.name}
            </h2>
            <ul style={{ ...body, paddingLeft: 22 }}>
              {articles.map((a) => (
                <li key={a.slug} style={{ marginBottom: 8 }}>
                  <Link href={articlePath(a)} style={{ fontWeight: 600, textDecoration: 'underline' }}>{a.title}</Link>
                </li>
              ))}
            </ul>
          </>
        )}

        <p style={{ ...body, fontSize: 14, color: 'var(--p-muted)', marginTop: 40 }}>
          These guides are drafted with AI assistance from {author.name}&rsquo;s first-hand input, then reviewed.
          See <Link href="/disclosures" style={{ textDecoration: 'underline' }}>how CheerInsider works</Link>.
        </p>
      </Container>
    </section>
  );
}
