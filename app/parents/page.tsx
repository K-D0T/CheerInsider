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
  description: 'Costs, gym selection, competition logistics, and the social politics no one warns you about. 38 guides for cheer parents — from a coach and cheer mom of two.',
  openGraph: {
    title: 'Parent Resources | CheerInsider',
    description: 'Everything a cheer parent needs to know — costs, gym selection, competition logistics, and how to advocate for your kid without being That Mom. 38 guides from the inside.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parent Resources | CheerInsider',
    description: 'Costs, gym selection, competition logistics, and more. 38 guides for cheer parents — from a coach and cheer mom of two.',
  },
};

const FILTERS = ['All 38','Cost & Money','Gym Selection','Tryouts','Competition','Travel','Mental Load','Recruiting'];

const LEAD = {
  eyebrow:'COST DEEP DIVE · MOST READ',
  title:'The $24,000 cheer season: every dollar, tracked.',
  sub:'Tuition was a third of what this Level 4 family actually paid. We followed their invoices for a full season.',
  meta:'Lauren K. · 11 min · May 2026',
  g:'flash' as const,
  href:'/parents/the-24k-season',
};

export default function ParentsPage() {
  // Article grid is driven by content/articles — add a JSON file there and
  // it appears here, in the sitemap, and at its own URL automatically.
  const ITEMS = getArticlesBySection('parents').map((a) => ({
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
              <Pill style={{ marginBottom:24 }}>★ THE PARENT PILLAR · 38 GUIDES</Pill>
              <h1 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(60px,7.6vw,124px)', margin:'0 0 24px', letterSpacing:'-.03em', lineHeight:.92 }}>
                For the <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>cheer mom</span> who'd rather know.
              </h1>
              <p style={{ fontSize:19, lineHeight:1.5, color:'var(--p-inkSoft)', margin:'0 0 24px', maxWidth:620 }}>
                Costs, gym selection, competition logistics, the social politics no one warns you about, and how to advocate for your kid without being That Mom. 38 guides, all from the inside.
              </p>
            </div>
            <Gradient variant="flash" ratio="4/5" caption="parent pillar"/>
          </div>
        </Container>
      </section>

      {/* Filters */}
      <section style={{ padding:'24px 0', borderBottom:'1px solid var(--p-line)', background:'var(--p-paper)', position:'sticky', top:0, zIndex:30 }}>
        <Container style={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:24 }}>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {FILTERS.map((f, i) => (
              <span key={i} style={{
                background: i===0 ? 'var(--p-ink)' : 'transparent',
                color: i===0 ? 'var(--p-cream)' : 'var(--p-ink)',
                border:'1px solid var(--p-ink)', padding:'8px 14px',
                borderRadius:99, fontSize:13, fontWeight:600,
                display:'inline-block',
              }}>{f}</span>
            ))}
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:14, fontSize:13 }}>
            <span style={{ color:'var(--p-muted)' }}>Sort:</span>
            <span style={{ fontWeight:700, fontSize:13 }}>Most-read ▾</span>
          </div>
        </Container>
      </section>

      {/* Grid */}
      <section style={{ padding:'56px 0 96px' }}>
        <Container>
          {/* Lead */}
          <Link href={LEAD.href} className="ci-article-lead" style={{ gap:48, padding:'32px 0', borderBottom:'1px solid var(--p-line)', marginBottom:32, cursor:'pointer', alignItems:'center' }}>
            <Gradient variant={LEAD.g} ratio="16/10" caption="cover story"/>
            <div>
              <Pill style={{ marginBottom:14 }}>★ COVER · MOST READ THIS WEEK</Pill>
              <div style={{ ...tx.eyebrow, color:'var(--p-hot)', marginBottom:12 }}>{LEAD.eyebrow}</div>
              <h2 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:48, margin:'0 0 14px', letterSpacing:'-.025em', lineHeight:.98 }}>{LEAD.title}</h2>
              <p style={{ fontSize:17, lineHeight:1.5, color:'var(--p-inkSoft)', margin:'0 0 18px', maxWidth:520 }}>{LEAD.sub}</p>
              <div style={{ fontSize:13, color:'var(--p-muted)' }}>{LEAD.meta}</div>
            </div>
          </Link>

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
