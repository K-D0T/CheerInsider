import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { Gradient } from '@/components/ui/Gradient';
import { Pill } from '@/components/ui/Pill';
import { AdUnit } from '@/components/ui/AdUnit';
import { getArticlesBySection, articlePath } from '@/lib/articles';
import { P, tx } from '@/lib/palette';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Parent Resources — Costs, Gym Selection, Competition Guides',
  description: 'Costs, gym selection, competition logistics, and the social politics no one warns you about. Honest guides for cheer parents — from the inside.',
  openGraph: {
    title: 'Parent Resources | CheerInsider',
    description: 'Everything a cheer parent needs to know — costs, gym selection, competition logistics, and how to advocate for your kid without being That Mom. All from the inside.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parent Resources | CheerInsider',
    description: 'Costs, gym selection, competition logistics, and more. Honest guides for cheer parents — from the inside.',
  },
};

const LEAD_SLUG = 'the-24k-season';

export default function ParentsPage() {
  // Article grid is driven by content/articles — add a JSON file there and
  // it appears here, in the sitemap, and at its own URL automatically.
  const all = getArticlesBySection('parents');
  const leadArticle = all.find((a) => a.slug === LEAD_SLUG) ?? all[0];

  const LEAD = leadArticle && {
    eyebrow: leadArticle.card.eyebrow,
    title: leadArticle.title,
    sub: leadArticle.description,
    meta: `Lauren K. · ${leadArticle.readTime}`,
    g: leadArticle.gradient,
    href: articlePath(leadArticle),
  };

  const ITEMS = all
    .filter((a) => a.slug !== leadArticle?.slug)
    .map((a) => ({
      eyebrow: a.card.eyebrow,
      title: a.title,
      meta: a.readTime,
      g: a.gradient,
      href: articlePath(a),
    }));

  return (
    <>
      {/* Hero */}
      <section style={{ padding:'48px 0 56px', borderBottom:'1px solid var(--p-line)' }}>
        <Container>
          <div style={{ display:'flex', alignItems:'center', gap:14, fontSize:13, color:'var(--p-muted)', marginBottom:24 }}>
            <Link href="/">Home</Link><span>›</span><span style={{ color:'var(--p-ink)' }}>Parent Resources</span>
          </div>
          <div className="ci-2col" style={{ gap:64 }}>
            <div>
              <Pill style={{ marginBottom:24 }}>★ THE PARENT PILLAR · {all.length} GUIDES</Pill>
              <h1 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(60px,7.6vw,124px)', margin:'0 0 24px', letterSpacing:'-.03em', lineHeight:.92 }}>
                For the <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>cheer mom</span> who'd rather know.
              </h1>
              <p style={{ fontSize:19, lineHeight:1.5, color:'var(--p-inkSoft)', margin:'0 0 24px', maxWidth:620 }}>
                Costs, gym selection, competition logistics, the social politics no one warns you about, and how to advocate for your kid without being That Mom. All from the inside.
              </p>
            </div>
            <Gradient variant="flash" ratio="4/5" caption="parent pillar"/>
          </div>
        </Container>
      </section>

      {/* Grid */}
      <section style={{ padding:'56px 0 96px' }}>
        <Container>
          {/* Lead */}
          {LEAD && <Link href={LEAD.href} className="ci-article-lead" style={{ gap:48, padding:'32px 0', borderBottom:'1px solid var(--p-line)', marginBottom:32, cursor:'pointer', alignItems:'center' }}>
            <Gradient variant={LEAD.g} ratio="16/10" caption="cover story"/>
            <div>
              <Pill style={{ marginBottom:14 }}>★ COVER · MOST READ THIS WEEK</Pill>
              <div style={{ ...tx.eyebrow, color:'var(--p-hot)', marginBottom:12 }}>{LEAD.eyebrow}</div>
              <h2 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:48, margin:'0 0 14px', letterSpacing:'-.025em', lineHeight:.98 }}>{LEAD.title}</h2>
              <p style={{ fontSize:17, lineHeight:1.5, color:'var(--p-inkSoft)', margin:'0 0 18px', maxWidth:520 }}>{LEAD.sub}</p>
              <div style={{ fontSize:13, color:'var(--p-muted)' }}>{LEAD.meta}</div>
            </div>
          </Link>}

          {/* Leaderboard between lead story and article grid */}
          <AdUnit format="leaderboard" style={{ margin:'32px 0' }}/>

          <div className="ci-3col" style={{ gap:'32px 24px' }}>
            {ITEMS.map((it, i) => (
              <Link key={i} href={it.href} style={{ display:'flex', flexDirection:'column', gap:14, cursor:'pointer' }}>
                <Gradient variant={it.g} ratio="4/3"/>
                <div style={{ ...tx.eyebrow, color:'var(--p-hot)' }}>{it.eyebrow}</div>
                <h3 style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:24, margin:0, letterSpacing:'-.02em', lineHeight:1.1 }}>{it.title}</h3>
                <div style={{ fontSize:13, color:'var(--p-muted)', marginTop:'auto' }}>{it.meta}</div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
        </Container>
      </section>
    </>
  );
}
