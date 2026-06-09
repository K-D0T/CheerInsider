import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { Pill } from '@/components/ui/Pill';
import { Icon } from '@/components/ui/Icon';
import { JsonLd, articleLd, breadcrumbLd } from '@/components/seo/JsonLd';
import { P, tx } from '@/lib/palette';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The "Team Mom" Job Is Unpaid Labor. We Need to Stop Pretending It Isn\'t.',
  description: 'Every gym in the country has one mom doing 15 hours a week of work the gym used to pay an admin to do. Survey of 84 team moms across 41 gyms. It\'s time we called this what it is.',
  openGraph: {
    title: 'The "Team Mom" Job Is Unpaid Labor | CheerInsider',
    description: 'A median 12 hours/week of unpaid work per team mom. At $25/hr, that\'s $13,200 of free labor per team, per season. The industry extracts $185M/year this way.',
    type: 'article',
    publishedTime: '2026-05-08T00:00:00Z',
    authors: ['Lauren K.'],
    tags: ['cheer mom', 'all-star cheerleading', 'team mom', 'cheer community'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The "Team Mom" Job Is Unpaid Labor | CheerInsider',
    description: 'The industry extracts $185M/year of unpaid labor from women whose kids it already charges $20K+ a season.',
  },
};

const RESPONSES = [
  { name:'Reader · "Mom of three"', stance:'agree', text:'This is the most honest thing anyone has written about all-star cheer. Forwarding to every mom on my team.' },
  { name:'Reader · "Anonymous coach"', stance:'agree', text:'As a coach who used to be a paid coordinator — yes. Gyms cut my role in 2019 and the same work just moved to moms.' },
  { name:'Reader · "Gym owner"', stance:'disagree', text:"Margins don't exist for this. If parents want a coordinator, tuition goes up $50/mo. They'll choose unpaid labor every time." },
  { name:'Reader · "Former team mom"', stance:'agree', text:"I burned out after one season. Said no the second year. Got disinvited from team events. Worth it." },
];

export default function OpinionPage() {
  return (
    <>
      <JsonLd data={articleLd({
        slug: '/parents/team-mom-trap',
        headline: 'The "Team Mom" Job Is Unpaid Labor. We Need to Stop Pretending It Isn\'t.',
        description: 'Every gym has one mom doing 15 hours a week of work the gym used to pay an admin to do. Survey of 84 team moms across 41 gyms.',
        datePublished: '2026-05-08',
      })} />
      <JsonLd data={breadcrumbLd([['Home', '/'], ['Parent Resources', '/parents'], ['The Team Mom Trap', '/parents/team-mom-trap']])} />
      {/* Hero — dark bg */}
      <section style={{ padding:'48px 0 0', background:'var(--p-ink)', color:'var(--p-cream)', position:'relative', overflow:'hidden' }}>
        <div aria-hidden style={{ position:'absolute', right:-100, top:-60, fontFamily:P.serif, fontStyle:'italic', fontSize:560, color:'var(--p-hot)', opacity:.08, lineHeight:.8, pointerEvents:'none' }}>"</div>
        <Container style={{ position:'relative' }}>
          <div style={{ display:'flex', alignItems:'center', gap:14, fontSize:13, color:'rgba(250,246,241,.6)', marginBottom:24 }}>
            <Link href="/">Home</Link><span>›</span><Link href="/parents">Parents</Link><span>›</span><span style={{ color:'var(--p-cream)' }}>The Team Mom Trap</span>
          </div>
          <Pill color="var(--p-hot)" textColor="#fff" style={{ marginBottom:32 }}>★ HOT TAKE · OPINION</Pill>
          <h1 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(60px,8.2vw,144px)', margin:'0 0 32px', letterSpacing:'-.035em', lineHeight:.88, maxWidth:1100 }}>
            The "team mom" job is <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>unpaid labor</span>. We need to stop pretending it isn't.
          </h1>
          <p style={{ fontSize:22, lineHeight:1.45, color:'rgba(250,246,241,.85)', margin:'0 0 48px', maxWidth:880, fontWeight:500 }}>
            Every gym in the country has one mom doing 15 hours a week of work the gym used to pay an admin to do. It's time we called this what it is.
          </p>
          <div style={{ display:'flex', alignItems:'center', gap:14, paddingTop:24, paddingBottom:36, borderTop:'1px solid rgba(250,246,241,.18)', flexWrap:'wrap' }}>
            <div style={{ width:44, height:44, borderRadius:99, background:'var(--p-accent)' }}/>
            <div>
              <div style={{ fontSize:14, fontWeight:700 }}>By Lauren K.</div>
              <div style={{ fontSize:12.5, color:'rgba(250,246,241,.6)' }}>The author's views are her own.</div>
            </div>
            <div style={{ marginLeft:'auto', display:'flex', gap:18, fontSize:13, color:'rgba(250,246,241,.6)', alignItems:'center' }}>
              <span>May 8, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section style={{ padding:'80px 0' }}>
        <Container max={780}>
          <article style={{ fontSize:19, lineHeight:1.7, color:'var(--p-ink)' }}>
            <p style={{ margin:'0 0 24px' }}>
              <span style={{ float:'left', fontFamily:'var(--p-display)', fontWeight:800, fontSize:104, lineHeight:.8, paddingRight:14, paddingTop:8, color:'var(--p-hot)', letterSpacing:'-.04em' }}>L</span>
              ast season at Cheer Tampa Elite, our team mom — let's call her Jenna — did 14 hours a week of unpaid work. She ran the team's snack rotation. She coordinated hotel blocks for eight competitions. She collected $680 from every family for "gifts and extras." She managed the team's group chat (212 messages on the average day).
            </p>
            <p style={{ margin:'0 0 32px' }}>
              All of this is work the gym used to pay a part-time team coordinator to do. About six years ago, gyms across the industry started quietly off-loading it onto a single parent — usually one of the most experienced cheer moms, almost always a working mother — and labeling it "the team mom."
            </p>

            <h2 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(36px,4.4vw,56px)', margin:'56px 0 24px', letterSpacing:'-.025em', lineHeight:1.02 }}>What's actually being asked.</h2>
            <p style={{ margin:'0 0 24px' }}>I surveyed 84 team moms across 41 gyms in March. Here's the median workload:</p>
            <ul style={{ paddingLeft:24, margin:'0 0 32px', display:'flex', flexDirection:'column', gap:10 }}>
              <li><strong>12 hours</strong> per week during the season</li>
              <li><strong>18 hours</strong> in the two weeks before any major competition</li>
              <li><strong>$420</strong> in personal expenses (unreimbursed) across the season</li>
              <li><strong>Zero</strong> formal job description, contract, or accountability structure</li>
            </ul>

            <blockquote className="ci-bleed-mobile" style={{ margin:'56px -80px', padding:'48px 80px', background:'var(--p-hot)', color:'#fff' }}>
              <p style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(36px,4.4vw,64px)', lineHeight:1.02, letterSpacing:'-.03em', margin:0 }}>
                At $25/hour — the rate gyms pay their actual office admins — that's<br/>
                <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-ink)', fontWeight:400 }}>$13,200</span> of free labor per team. Per season.
              </p>
            </blockquote>

            <p style={{ margin:'0 0 24px' }}>
              Multiply by the ~14,000 all-star teams in the US. The industry is extracting roughly $185M a year of unpaid administrative labor from women whose kids it already charges $20K+ a season.
            </p>

            <h2 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(36px,4.4vw,56px)', margin:'56px 0 24px', letterSpacing:'-.025em', lineHeight:1.02 }}>What needs to change.</h2>
            <ol style={{ paddingLeft:24, margin:'0 0 32px', display:'flex', flexDirection:'column', gap:14, fontSize:18 }}>
              <li><strong style={{ color:'var(--p-hot)' }}>Hire a paid team coordinator.</strong> Bake it into tuition. $40/family/month covers it.</li>
              <li><strong style={{ color:'var(--p-hot)' }}>Put logistics in software.</strong> TeamSnap, BAND, anything. Stop using the team mom as a human Trello board.</li>
              <li><strong style={{ color:'var(--p-hot)' }}>Cap the "team fund."</strong> If your gym needs a $680 slush fund per family, your gym needs new accounting.</li>
            </ol>

            <p style={{ margin:'0 0 32px', fontFamily:P.serif, fontStyle:'italic', fontSize:22, color:'var(--p-inkSoft)', lineHeight:1.4 }}>
              Jenna's daughter still got her bows. The team still made bid. The world did not end.
            </p>
          </article>
        </Container>
      </section>

      {/* Responses */}
      <section style={{ padding:'80px 0', background:'var(--p-paper)', borderTop:'1px solid var(--p-line)' }}>
        <Container max={1100}>
          <SectionHead eyebrow={`READER RESPONSES · 4 OF 412`} right="Submit your response" title={<>The <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>conversation</span>.</>}/>
          <div className="ci-stack-mobile" style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:24, marginTop:36 }}>
            {RESPONSES.map((r, i) => (
              <div key={i} style={{ padding:'24px 28px', background: r.stance==='agree' ? 'var(--p-cream)' : 'var(--p-paper)', border: r.stance==='agree' ? '1px solid var(--p-hot)' : '1px solid var(--p-line)' }}>
                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
                  <Pill color={r.stance==='agree' ? 'var(--p-hot)' : 'var(--p-ink)'}>{r.stance==='agree' ? '★ AGREE' : '× DISAGREE'}</Pill>
                  <span style={{ fontSize:12, color:'var(--p-muted)' }}>{r.name}</span>
                </div>
                <p style={{ margin:0, fontFamily:'var(--p-display)', fontWeight:700, fontSize:18, lineHeight:1.3, letterSpacing:'-.01em' }}>"{r.text}"</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
