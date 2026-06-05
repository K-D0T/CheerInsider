import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Pill } from '@/components/ui/Pill';
import { CostCalculator } from '@/components/ui/CostCalculator';
import { P } from '@/lib/palette';

export const metadata: Metadata = {
  title: 'All-Star Cheer Season Cost Calculator — Real Numbers, Your Details',
  description: 'Interactive cheer cost calculator using real data from 142 reader budgets. Adjust level, team type, competitions, and travel to see your estimated season total.',
  openGraph: {
    title: 'Cheer Season Cost Calculator | CheerInsider',
    description: 'Move the dials. Get a real estimate. Built from 142 cheer-mom budgets — tuition, choreo, travel, comp fees, hair, privates, and more.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cheer Season Cost Calculator | CheerInsider',
    description: 'Real numbers from 142 cheer-mom budgets. Adjust for your level, team type, and travel to see what you\'ll actually spend.',
  },
};

export default function CostCalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding:'48px 0 64px', borderBottom:'1px solid var(--p-line)' }}>
        <Container>
          <div style={{ display:'flex', alignItems:'center', gap:14, fontSize:13, color:'var(--p-muted)', marginBottom:24 }}>
            <Link href="/">Home</Link><span>›</span><Link href="/parents">Parents</Link><span>›</span><span style={{ color:'var(--p-ink)' }}>Cost Calculator</span>
          </div>
          <Pill style={{ marginBottom:24 }}>★ INTERACTIVE · UPDATED MAY 2026</Pill>
          <h1 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(56px,7.2vw,120px)', margin:'0 0 24px', letterSpacing:'-.03em', lineHeight:.92 }}>
            What's an all-star season <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>actually</span> going to cost you?
          </h1>
          <p style={{ fontSize:19, lineHeight:1.5, color:'var(--p-inkSoft)', margin:0, maxWidth:760 }}>
            Move the dials. We use real numbers, sourced from 142 cheer-mom budgets submitted by readers in 2025.
          </p>
        </Container>
      </section>

      {/* Calculator */}
      <section style={{ padding:'64px 0', background:'var(--p-paper)' }}>
        <CostCalculator />
      </section>
    </>
  );
}
