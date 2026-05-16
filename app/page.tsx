import { Hero } from '@/components/home/Hero';
import { Marquee } from '@/components/layout/Marquee';
import { AudienceRouter } from '@/components/home/AudienceRouter';
import { Featured } from '@/components/home/Featured';
import { Testimonials } from '@/components/home/Testimonials';
import { LeadMagnet } from '@/components/home/LeadMagnet';
import { Pillars } from '@/components/home/Pillars';
import { GearRail } from '@/components/home/GearRail';
import { AdUnit } from '@/components/ui/AdUnit';
import { Container } from '@/components/ui/Container';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <AudienceRouter />
      <Featured />

      {/* Leaderboard between featured articles and testimonials */}
      <div style={{ borderTop:'1px solid var(--p-line)', borderBottom:'1px solid var(--p-line)', padding:'20px 0', background:'var(--p-paper)' }}>
        <Container style={{ display:'flex', justifyContent:'center' }}>
          <AdUnit format="leaderboard"/>
        </Container>
      </div>

      <Testimonials />
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
