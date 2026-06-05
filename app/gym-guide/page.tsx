import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Pill } from '@/components/ui/Pill';
import { GymChecklist } from '@/components/ui/GymChecklist';
import { P } from '@/lib/palette';

export const metadata: Metadata = {
  title: 'Gym Selection Checklist: How to Tell if a Gym Is Actually Good',
  description: 'Ten questions to ask before signing with any all-star gym. Covers season costs in writing, competition fees, refund policy, private lessons pressure, and safety credentials.',
  openGraph: {
    title: 'Gym Selection Checklist | CheerInsider',
    description: 'Ten questions to ask before you sign. Print this. Take it to your gym tour. If a gym can\'t answer 8 of 10, walk away.',
    type: 'article',
    authors: ['Lauren K.'],
    tags: ['gym selection', 'all-star cheer', 'cheer gym', 'cheer mom guide'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gym Selection Checklist | CheerInsider',
    description: '10 questions every cheer parent should ask before signing. If a gym can\'t answer 8, walk.',
  },
};

export default function GymGuidePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding:'48px 0 56px', borderBottom:'1px solid var(--p-line)' }}>
        <Container>
          <div style={{ display:'flex', alignItems:'center', gap:14, fontSize:13, color:'var(--p-muted)', marginBottom:24 }}>
            <Link href="/">Home</Link><span>›</span><Link href="/parents">Parents</Link><span>›</span><span style={{ color:'var(--p-ink)' }}>Gym Selection Checklist</span>
          </div>
          <Pill style={{ marginBottom:24 }}>★ THE GYM SELECTION SERIES · PART 2 OF 4</Pill>
          <h1 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(56px,7.2vw,120px)', margin:'0 0 24px', letterSpacing:'-.03em', lineHeight:.92 }}>
            How to tell if a gym is <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>actually</span> good, or just loud on Instagram.
          </h1>
          <p style={{ fontSize:19, lineHeight:1.5, color:'var(--p-inkSoft)', margin:0, maxWidth:760 }}>
            Ten questions to ask before you sign. Print this. Take it to your gym tour. Tick them off as you go.
          </p>
        </Container>
      </section>

      {/* Checklist */}
      <section style={{ padding:'80px 0' }}>
        <GymChecklist />
      </section>
    </>
  );
}
