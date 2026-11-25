import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Pill } from '@/components/ui/Pill';
import { CostCalculator } from '@/components/ui/CostCalculator';
import { P, tx } from '@/lib/palette';
import { canonical } from '@/lib/canonical';

export const metadata: Metadata = {
  alternates: canonical('/cost-calculator'),
  title: 'All-Star Cheer Season Cost Calculator',
  description: 'Estimate what a full all-star cheer season will cost your family. Adjust level, team type, competitions, travel, and privates to see a realistic season total.',
  openGraph: {
    title: 'Cheer Season Cost Calculator | CheerInsider',
    description: 'Move the dials. Tuition, choreo, travel, comp fees, hair, privates — see a realistic estimate for your situation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cheer Season Cost Calculator | CheerInsider',
    description: 'Adjust for your level, team type, and travel to see what an all-star season actually costs.',
  },
};

const heading = { fontFamily: 'var(--p-display)', fontWeight: 700, fontSize: 26, letterSpacing: '-.02em', margin: '36px 0 12px' } as const;
const body = { fontSize: 16.5, lineHeight: 1.65, color: 'var(--p-inkSoft)', margin: '0 0 16px', maxWidth: 760 } as const;

export default function CostCalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding:'48px 0 64px', borderBottom:'1px solid var(--p-line)' }}>
        <Container>
          <div style={{ display:'flex', alignItems:'center', gap:14, fontSize:13, color:'var(--p-muted)', marginBottom:24 }}>
            <Link href="/">Home</Link><span>›</span><Link href="/parents">Parents</Link><span>›</span><span style={{ color:'var(--p-ink)' }}>Cost Calculator</span>
          </div>
          <Pill style={{ marginBottom:24 }}>★ INTERACTIVE TOOL</Pill>
          <h1 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(56px,7.2vw,120px)', margin:'0 0 24px', letterSpacing:'-.03em', lineHeight:.92 }}>
            What's an all-star season <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>actually</span> going to cost you?
          </h1>
          <p style={{ fontSize:19, lineHeight:1.5, color:'var(--p-inkSoft)', margin:0, maxWidth:760 }}>
            Move the dials for your level, team type, competition count, and travel pattern. The estimate updates as you go, itemized by category — including the lines gyms don't quote at tryouts.
          </p>
        </Container>
      </section>

      {/* Calculator */}
      <section style={{ padding:'64px 0', background:'var(--p-paper)' }}>
        <CostCalculator />
      </section>

      {/* Methodology + explainer */}
      <section style={{ padding:'72px 0 96px' }}>
        <Container max={900}>
          <div style={{ ...tx.eyebrow, color:'var(--p-hotDeep)', marginBottom:16 }}>How this estimate is built</div>
          <h2 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(32px,4vw,52px)', margin:'0 0 24px', letterSpacing:'-.025em', lineHeight:.95 }}>
            Where these numbers <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>come from</span>.
          </h2>

          <p style={body}>
            Every line uses a figure inside the ranges published by the cost guides listed under Sources below: one independent price-research site, a cheer music company and two all-star gyms. Those guides put most all-star families at about <strong>$4,000 to $8,000</strong> a season, and elite Worlds-bound traveling teams above <strong>$10,000 to $12,000</strong>. None of them is a formal survey, and your gym&rsquo;s actual pricing will differ, sometimes substantially. Use the output to ask better questions at your gym meeting, not as a number to budget against precisely.
          </p>

          <h3 style={heading}>What each input changes</h3>
          <p style={body}>
            <strong>Level</strong> primarily drives tuition. Higher levels train more hours per week, and tuition scales with mat time. It has less effect on the rest of the budget than most parents expect — a Level 2 family attending five destination competitions will spend more overall than a Level 5 family attending two local ones.
          </p>
          <p style={body}>
            <strong>Competition count</strong> matters because each event carries both an entry fee billed by the gym (modeled at $125, inside the $50 to $200 per event the guides report) and, for away events, a travel cost.
          </p>
          <p style={body}>
            <strong>Travel pattern</strong> distinguishes driving to local and regional events from flying to national ones. It is the input that moves the total most: the guides put a season of travel at $300 to $3,000, and $3,000 or more for a Worlds or Summit week alone.
          </p>
          <p style={body}>
            <strong>Privates</strong> are modeled as a $1,000 season total, inside the $500 to $1,500 range one guide reports (about $40 to $80 a lesson). If your athlete takes privates only to fix a specific named skill and then stops, your real cost will be lower.
          </p>

          <h3 style={heading}>What the estimate does not include</h3>
          <ul style={{ ...body, paddingLeft: 22 }}>
            <li style={{ marginBottom: 8 }}>Spectator admission for family members, charged per person at many events and rarely included in anything you have already paid</li>
            <li style={{ marginBottom: 8 }}>Hair, bows, makeup, team fund and banquet costs, which none of the guides puts a number on</li>
            <li style={{ marginBottom: 8 }}>Lost work income for competition weekends</li>
            <li style={{ marginBottom: 8 }}>Mid-season replacement of shoes or practice wear</li>
            <li style={{ marginBottom: 8 }}>Injury-related costs: physical therapy, bracing, or a season cut short with no refund</li>
            <li style={{ marginBottom: 8 }}>Sibling costs if you have more than one athlete in the program</li>
          </ul>

          <h3 style={heading}>The questions to bring to your gym</h3>
          <p style={body}>
            An estimate is only useful if you check it against your actual gym. Ask for last season&rsquo;s real figures rather than this season&rsquo;s projections: what a family on this team spent in total including travel, what choreography cost per athlete, which competitions are genuinely required versus encouraged, and whether the placement fee is credited against a later invoice. A gym that answers those without hesitation has thought about your budget.
          </p>
          <p style={body}>
            For the full line-by-line breakdown of where the money goes across a season, read <Link href="/parents/all-star-cheer-season-cost" style={{ textDecoration:'underline', color:'var(--p-ink)' }}>What an All-Star Cheer Season Really Costs</Link>.
          </p>

          <div style={{ marginTop:40, padding:'20px 26px', background:'var(--p-cream)', borderLeft:'4px solid var(--p-hot)', fontSize:14.5, lineHeight:1.6, color:'var(--p-inkSoft)' }}>
            <strong style={{ color:'var(--p-ink)' }}>A note on accuracy:</strong> Figures here are points inside published national ranges, not your gym&rsquo;s prices. Nothing on this page is financial advice. Confirm every number with your own gym before committing to a season.
          </div>

          <h3 style={heading}>Sources</h3>
          <ul style={{ ...body, paddingLeft: 22, fontSize: 14.5 }}>
            <li style={{ marginBottom: 6 }}><a href="https://www.thepricer.org/competitive-cheerleading-cost/" style={{ textDecoration:'underline' }}>How Much Does Competitive Cheerleading Cost?</a> ThePricer, independent price research (updated August 18, 2026)</li>
            <li style={{ marginBottom: 6 }}><a href="https://www.limelightcheermusic.com/blogs/news/how-much-is-competitive-cheer" style={{ textDecoration:'underline' }}>How Much Does Competitive Cheer Cost?</a> Limelight Music Productions, a cheer music company (May 2026)</li>
            <li style={{ marginBottom: 6 }}><a href="https://www.stingrayallstarsftl.com/guides/all-star-cheer-cost" style={{ textDecoration:'underline' }}>How Much Does All-Star Cheer Cost? (2026 Guide)</a> Stingray Allstars Fort Lauderdale, an all-star gym (July 10, 2026)</li>
            <li style={{ marginBottom: 6 }}><a href="https://www.calicoastelite.com/post/how-much-does-all-star-cheer-cost" style={{ textDecoration:'underline' }}>How Much Does All Star Cheer Cost?</a> Cali Coast Elite, an all-star gym (July 2026)</li>
          </ul>
        </Container>
      </section>
    </>
  );
}
