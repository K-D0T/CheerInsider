import Link from 'next/link';
import { Article, articlePath } from '@/lib/articles';
import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { Gradient } from '@/components/ui/Gradient';
import { Pill } from '@/components/ui/Pill';
import { AdUnit } from '@/components/ui/AdUnit';
import { JsonLd, articleLd, breadcrumbLd } from '@/components/seo/JsonLd';
import { ArticleBlocks } from './ArticleBlocks';
import { renderInline } from './inline';
import { P, tx } from '@/lib/palette';

const SECTION_LABELS: Record<Article['section'], string> = {
  parents: 'Parent Resources',
  gear: 'Gear',
};

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}

export function ArticleLayout({ article }: { article: Article }) {
  const dark = article.kind === 'opinion';
  const sectionLabel = SECTION_LABELS[article.section];
  const sectionHref = `/${article.section}`;

  return (
    <>
      <JsonLd data={articleLd({
        slug: articlePath(article),
        headline: article.title,
        description: article.description,
        datePublished: article.datePublished,
        dateModified: article.dateModified,
      })} />
      <JsonLd data={breadcrumbLd([['Home', '/'], [sectionLabel, sectionHref], [article.title, articlePath(article)]])} />

      {/* Hero */}
      <section style={dark
        ? { padding: '48px 0 0', background: 'var(--p-ink)', color: 'var(--p-cream)', position: 'relative', overflow: 'hidden' }
        : { padding: '48px 0 64px', borderBottom: '1px solid var(--p-line)' }}>
        {dark && (
          <div aria-hidden style={{ position: 'absolute', right: -100, top: -60, fontFamily: P.serif, fontStyle: 'italic', fontSize: 560, color: 'var(--p-hot)', opacity: .08, lineHeight: .8, pointerEvents: 'none' }}>&quot;</div>
        )}
        <Container max={1100} style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 13, color: dark ? 'rgba(250,246,241,.6)' : 'var(--p-muted)', marginBottom: 24 }}>
            <Link href="/">Home</Link><span>›</span><Link href={sectionHref}>{sectionLabel}</Link><span>›</span>
            <span style={{ color: dark ? 'var(--p-cream)' : 'var(--p-ink)' }}>{article.title.length > 40 ? `${article.title.slice(0, 40)}…` : article.title}</span>
          </div>
          {article.pill && (
            <Pill color={dark ? 'var(--p-hot)' : 'var(--p-ink)'} textColor={dark ? '#fff' : 'var(--p-cream)'} style={{ marginBottom: 24 }}>{article.pill}</Pill>
          )}
          {article.heroNumber && (
            <div style={{ fontFamily: 'var(--p-display)', fontWeight: 800, fontSize: 'clamp(120px,14vw,240px)', lineHeight: .85, letterSpacing: '-.05em', color: 'var(--p-hot)', marginBottom: -20 }}>{article.heroNumber}</div>
          )}
          <h1 style={{ fontFamily: 'var(--p-display)', fontWeight: 800, fontSize: article.heroNumber ? 'clamp(40px,5vw,76px)' : 'clamp(48px,6vw,92px)', margin: '0 0 24px', letterSpacing: '-.03em', lineHeight: .95, maxWidth: 1000 }}>
            {renderInline(article.headline, 'accent')}
          </h1>
          <p style={{ fontSize: 21, lineHeight: 1.5, color: dark ? 'rgba(250,246,241,.85)' : 'var(--p-inkSoft)', margin: '0 0 36px', maxWidth: 780, fontWeight: 500 }}>
            {article.sub}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 24, paddingBottom: dark ? 36 : 0, borderTop: dark ? '1px solid rgba(250,246,241,.18)' : '1px solid var(--p-line)', flexWrap: 'wrap' }}>
            <div style={{ width: 44, height: 44, borderRadius: 99, background: 'var(--p-accent)' }} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>By Lauren K.</div>
              <div style={{ fontSize: 12.5, color: dark ? 'rgba(250,246,241,.6)' : 'var(--p-muted)' }}>
                {dark ? "The author's views are her own." : 'Former CCA-certified coach · Cheer mom of two · Tampa, FL'}
              </div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 18, fontSize: 13, color: dark ? 'rgba(250,246,241,.6)' : 'var(--p-muted)', alignItems: 'center' }}>
              <span>
                {formatDate(article.datePublished)}
                {article.dateModified && ` · Updated ${formatDate(article.dateModified)}`}
              </span>
              <span>·</span><span>{article.readTime} read</span>
            </div>
          </div>
        </Container>
        {!dark && article.heroCaption && (
          <Container max={1100} style={{ marginTop: 48 }}>
            <Gradient variant={article.gradient} caption={article.heroCaption} ratio="21/9" dark />
          </Container>
        )}
      </section>

      {/* Body */}
      <section style={{ padding: '72px 0' }}>
        {article.kind === 'opinion' ? (
          <Container max={780}>
            <article style={{ fontSize: 19, lineHeight: 1.7, color: 'var(--p-ink)' }}>
              <ArticleBlocks blocks={article.blocks} />
            </article>
          </Container>
        ) : article.kind === 'listicle' || article.kind === 'roundup' ? (
          <Container max={1100}>
            <article style={{ fontSize: 17.5, lineHeight: 1.7, color: 'var(--p-ink)' }}>
              <ArticleBlocks blocks={article.blocks} />
            </article>
          </Container>
        ) : (
          <Container max={1100} className="ci-stack-mobile" style={{ display: 'grid', gridTemplateColumns: article.toc ? '200px 1fr 240px' : '1fr 240px', gap: 48, alignItems: 'start' }}>
            {article.toc && (
              <aside className="ci-static-mobile" style={{ position: 'sticky', top: 96, fontSize: 13 }}>
                <div style={{ ...tx.eyebrow, color: 'var(--p-hot)', marginBottom: 14 }}>In this article</div>
                <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {article.toc.map((s, i) => (
                    <li key={i} style={{ paddingLeft: 14, borderLeft: i === 0 ? '2px solid var(--p-hot)' : '2px solid transparent', color: i === 0 ? 'var(--p-ink)' : 'var(--p-muted)', fontWeight: i === 0 ? 700 : 500 }}>
                      <span style={{ color: 'var(--p-muted)', marginRight: 8, fontFamily: P.serif, fontStyle: 'italic' }}>0{i + 1}</span>{s}
                    </li>
                  ))}
                </ol>
              </aside>
            )}
            <article style={{ fontSize: 17.5, lineHeight: 1.7, color: 'var(--p-ink)', maxWidth: 680 }}>
              <ArticleBlocks blocks={article.blocks} />
            </article>
            <aside className="ci-static-mobile" style={{ position: 'sticky', top: 96, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <AdUnit format="rectangle" />
              {article.related && article.related.length > 0 && (
                <div style={{ padding: '20px 0', borderTop: '1px solid var(--p-line)' }}>
                  <div style={{ ...tx.eyebrow, color: 'var(--p-muted)', marginBottom: 10 }}>Keep reading</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14, fontSize: 14 }}>
                    {article.related.slice(0, 3).map((r, i) => (
                      <li key={i}><Link href={r.href} style={{ fontWeight: 600, lineHeight: 1.3, display: 'block' }}>{r.title}</Link></li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </Container>
        )}
      </section>

      {/* Related */}
      {article.related && article.related.length > 0 && (
        <section style={{ padding: '80px 0', borderTop: '1px solid var(--p-line)' }}>
          <Container max={1100}>
            <SectionHead eyebrow="KEEP READING" right={`All ${sectionLabel}`} title={<>More from the <span style={{ fontFamily: P.serif, fontStyle: 'italic', color: 'var(--p-hot)', fontWeight: 400 }}>inside</span>.</>} />
            <div className="ci-4col" style={{ gap: 18, marginTop: 36 }}>
              {article.related.map((r, i) => (
                <Link key={i} href={r.href} style={{ display: 'flex', flexDirection: 'column', gap: 12, cursor: 'pointer' }}>
                  <Gradient variant={r.g} ratio="4/3" />
                  <div style={{ ...tx.eyebrow, color: 'var(--p-hot)', marginTop: 4 }}>{r.eyebrow}</div>
                  <h4 style={{ fontFamily: 'var(--p-display)', fontWeight: 700, fontSize: 20, lineHeight: 1.1, margin: 0, letterSpacing: '-.02em' }}>{r.title}</h4>
                  <div style={{ fontSize: 12, color: 'var(--p-muted)', marginTop: 'auto' }}>{r.meta}</div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
