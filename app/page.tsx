import { Hero } from '@/components/home/Hero';
import { Marquee } from '@/components/layout/Marquee';
import { AudienceRouter } from '@/components/home/AudienceRouter';
import { Featured } from '@/components/home/Featured';
import { LeadMagnet } from '@/components/home/LeadMagnet';
import { Pillars } from '@/components/home/Pillars';
import { GearRail } from '@/components/home/GearRail';
import { AdUnit } from '@/components/ui/AdUnit';
import { Container } from '@/components/ui/Container';
import { canonical } from '@/lib/canonical';

import type { Metadata } from 'next';

// Set here rather than as the layout's title.default, which stays
// 'CheerInsider' as the fallback for any route that sets no title of its own.
// A plain string, so the layout's '%s | CheerInsider' template completes it;
// the description still comes from the layout default.
export const metadata: Metadata = {
  title: 'Honest All-Star Cheer Coverage for Parents',
  alternates: canonical('/'),
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <AudienceRouter />
      <Featured />

      {/* Leaderboard between featured articles and lead magnet */}
      <div style={{ borderTop:'1px solid var(--p-line)', borderBottom:'1px solid var(--p-line)', padding:'20px 0', background:'var(--p-paper)' }}>
        <Container style={{ display:'flex', justifyContent:'center' }}>
          <AdUnit format="leaderboard"/>
        </Container>
      </div>

      <LeadMagnet />
      <Pillars />

      {/* Leaderboard above gear rail */}
      <div style={{ padding:'20px 0', background:'var(--p-paper)' }}>
        <Container style={{ display:'flex', justifyContent:'center' }}>
          <AdUnit format="leaderboard"/>
        </Container>
      </div>

      <GearRail />
    </>
  );
}
