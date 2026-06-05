import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { Gradient } from '@/components/ui/Gradient';
import { Pill } from '@/components/ui/Pill';
import { P, tx } from '@/lib/palette';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gear Roundups — Tested on the Mat',
  description: 'Cheer shoes, bags, practice wear, and bows — tested on the mat by athletes and coaches. No sponsored money. Honest verdicts. Some links earn a small commission.',
  openGraph: {
    title: 'Gear Roundups: Tested on the Mat | CheerInsider',
    description: 'Every product we recommend was tested by athletes and coaches at Levels 2–5. No brand deals, no sponsored money — just honest gear reviews.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gear Roundups | CheerInsider',
    description: 'Cheer shoes, bags, and practice wear tested on the mat. Honest rankings, no sponsored money.',
  },
};

const ROUNDUPS = [
  {
    eyebrow: 'CHEER SHOES · 2026',
    title: 'The only cheer shoes worth your money in 2026',
    sub: '14 pairs tested. 6 months. Four picks, two to avoid.',
    meta: 'Lauren K. · 12 min · Updated May 2026',
    pill: '★ MOST READ',
    g: 'halo' as const,
    href: '/gear/cheer-shoes-2026',
  },
  {
    eyebrow: 'GYM BAGS · 2026',
    title: 'The best cheer bags that actually survive a full season',
    sub: 'Tested across Level 2–5 athletes. Ranked by durability, fit, and mat-friendliness.',
    meta: 'Lauren K. · 8 min · May 2026',
    pill: '★ NEW',
    g: 'stripes' as const,
    href: '/gear/cheer-shoes-2026',
  },
  {
    eyebrow: 'PRACTICE WEAR · 2026',
    title: 'Practice shorts that don\'t roll up — a definitive ranking',
    sub: 'Seven brands, one tumbling track, a very opinionated coach.',
    meta: 'Lauren K. · 6 min · Apr 2026',
    pill: null,
    g: 'field' as const,
    href: '/gear/cheer-shoes-2026',
  },
  {
    eyebrow: 'BOWS · 2026',
    title: 'The cheer bow brands worth buying (and two to skip entirely)',
    sub: 'Price, hold-strength, and whether they survive a full comp day.',
    meta: 'Lauren K. · 7 min · Mar 2026',
    pill: null,
    g: 'burst' as const,
    href: '/gear/cheer-shoes-2026',
  },
];

export default function GearIndexPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding:'48px 0 64px', borderBottom:'1px solid var(--p-line)' }}>
        <Container>
          <div style={{ display:'flex', alignItems:'center', gap:14, fontSize:13, color:'var(--p-muted)', marginBottom:24 }}>
            <Link href="/">Home</Link><span>›</span><span style={{ color:'var(--p-ink)' }}>Gear Roundups</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:64, alignItems:'end' }}>
            <div>
              <Pill style={{ marginBottom:24 }}>★ THE GEAR PILLAR · TESTED ON THE MAT</Pill>
              <h1 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(60px,7.6vw,124px)', margin:'0 0 24px', letterSpacing:'-.03em', lineHeight:.92 }}>
                The honest <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>gear</span> guide.
              </h1>
              <p style={{ fontSize:19, lineHeight:1.5, color:'var(--p-inkSoft)', margin:0, maxWidth:620 }}>
                Every product we recommend was tested on the mat — by athletes, by coaches, and by parents who have paid full price for the wrong thing once too often. We never take sponsored money. Some links earn a small commission.
              </p>
            </div>
            <Gradient variant="halo" ratio="4/5" caption="gear pillar"/>
          </div>
        </Container>
      </section>

      {/* Roundups grid */}
      <section style={{ padding:'64px 0 96px' }}>
        <Container>
          <SectionHead eyebrow="ALL ROUNDUPS · BY CATEGORY" title={<>Everything we've <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>tested</span>.</>}/>

          {/* Lead roundup — full width */}
          <Link href={ROUNDUPS[0].href} style={{ display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:48, padding:'48px 0', borderBottom:'1px solid var(--p-line)', alignItems:'center', cursor:'pointer' }}>
            <Gradient variant={ROUNDUPS[0].g} ratio="16/10" caption="shoes · top-down" dark/>
            <div>
              <Pill style={{ marginBottom:14 }}>{ROUNDUPS[0].pill}</Pill>
              <div style={{ ...tx.eyebrow, color:'var(--p-hot)', marginBottom:12 }}>{ROUNDUPS[0].eyebrow}</div>
              <h2 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:48, margin:'0 0 14px', letterSpacing:'-.025em', lineHeight:.98 }}>{ROUNDUPS[0].title}</h2>
              <p style={{ fontSize:17, lineHeight:1.5, color:'var(--p-inkSoft)', margin:'0 0 18px', maxWidth:520 }}>{ROUNDUPS[0].sub}</p>
              <div style={{ fontSize:13, color:'var(--p-muted)' }}>{ROUNDUPS[0].meta}</div>
            </div>
          </Link>

          {/* Remaining roundups */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'32px 24px', marginTop:48 }}>
            {ROUNDUPS.slice(1).map((r, i) => (
              <Link key={i} href={r.href} style={{ display:'flex', flexDirection:'column', gap:14, cursor:'pointer' }}>
                <Gradient variant={r.g} ratio="4/3"/>
                <div style={{ ...tx.eyebrow, color:'var(--p-hot)' }}>{r.eyebrow}</div>
                <h3 style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:24, margin:0, letterSpacing:'-.02em', lineHeight:1.1 }}>{r.title}</h3>
                <p style={{ fontSize:14, lineHeight:1.45, color:'var(--p-inkSoft)', margin:0 }}>{r.sub}</p>
                <div style={{ fontSize:13, color:'var(--p-muted)', marginTop:'auto' }}>{r.meta}</div>
              </Link>
            ))}
          </div>

          {/* Affiliate notice */}
          <div style={{ marginTop:64, padding:'24px 32px', background:'var(--p-cream)', borderLeft:'4px solid var(--p-hot)', fontSize:14, lineHeight:1.6, color:'var(--p-inkSoft)' }}>
            <strong style={{ color:'var(--p-ink)' }}>On affiliate links:</strong> Some links on this page earn us a small commission if you buy through them — at no extra cost to you. We only list products we'd actually recommend to a friend. Our verdicts are never influenced by commissions. Products we rate "Skip" sometimes earn more than ones we rate "Buy." That's the point.
          </div>
        </Container>
      </section>
    </>
  );
}
