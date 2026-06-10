import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { Gradient } from '@/components/ui/Gradient';
import { Pill } from '@/components/ui/Pill';
import { getArticlesBySection, articlePath } from '@/lib/articles';
import { P, tx } from '@/lib/palette';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Educational Guides — All-Star Cheer Explained Honestly',
  description: 'All-star cheer levels, scoring, skill progressions, and terminology explained without federation jargon. Guides for parents, athletes, and coaches.',
  openGraph: {
    title: 'Educational Guides | CheerInsider',
    description: 'Levels 1–7, scoring panels, legal skills by level, competition types, and a full cheer glossary — everything the federations assume you already know.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Educational Guides | CheerInsider',
    description: 'Guides on cheer levels, scoring, skills, and terminology. Zero jargon. All honest.',
  },
};

export default function GuidesPage() {
  const GUIDES = getArticlesBySection('guides').map((a) => ({
    eyebrow: a.card.eyebrow,
    title: a.title,
    meta: a.readTime,
    g: a.gradient,
    href: articlePath(a),
  }));

  return (
    <>
      <section style={{ padding:'48px 0 56px', borderBottom:'1px solid var(--p-line)' }}>
        <Container>
          <div style={{ display:'flex', alignItems:'center', gap:14, fontSize:13, color:'var(--p-muted)', marginBottom:24 }}>
            <Link href="/">Home</Link><span>›</span><span style={{ color:'var(--p-ink)' }}>Educational Guides</span>
          </div>
          <div className="ci-stack-mobile" style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:64, alignItems:'end' }}>
            <div>
              <Pill style={{ marginBottom:24 }}>★ THE EDUCATION PILLAR · {GUIDES.length} GUIDES</Pill>
              <h1 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(60px,7.6vw,124px)', margin:'0 0 24px', letterSpacing:'-.03em', lineHeight:.92 }}>
                The rules of <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>the sport</span>, explained honestly.
              </h1>
              <p style={{ fontSize:19, lineHeight:1.5, color:'var(--p-inkSoft)', margin:0, maxWidth:620 }}>
                Levels, scoring, skill progressions, terminology — all the stuff the federations assume you already know. Zero jargon.
              </p>
            </div>
            <Gradient variant="burst" ratio="4/5" caption="education pillar"/>
          </div>
        </Container>
      </section>

      <section style={{ padding:'64px 0 96px' }}>
        <Container>
          <SectionHead eyebrow="ALL GUIDES" title={<>Start <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>here</span>.</>}/>
          <div className="ci-3col" style={{ gap:'32px 24px', marginTop:48 }}>
            {GUIDES.map((g, i) => (
              <Link key={i} href={g.href} style={{ display:'flex', flexDirection:'column', gap:14 }}>
                <Gradient variant={g.g} ratio="4/3"/>
                <div style={{ ...tx.eyebrow, color:'var(--p-hot)' }}>{g.eyebrow}</div>
                <h3 style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:24, margin:0, letterSpacing:'-.02em', lineHeight:1.1 }}>{g.title}</h3>
                <div style={{ fontSize:13, color:'var(--p-muted)', marginTop:'auto' }}>{g.meta}</div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
