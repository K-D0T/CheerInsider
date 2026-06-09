import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { Gradient } from '@/components/ui/Gradient';
import { Pill } from '@/components/ui/Pill';
import { Icon } from '@/components/ui/Icon';
import { P, tx } from '@/lib/palette';

export const metadata = {
  title: 'About Lauren K. — Former Coach, Cheer Mom, and the Voice Behind CheerInsider',
  description: 'CCA-certified coach, former Level 6 athlete, and cheer mom of two. Lauren started CheerInsider to answer the questions nobody else would — honestly.',
  openGraph: {
    title: 'About Lauren K. | CheerInsider',
    description: 'The story behind CheerInsider: 18 years on the mat, two daughters in all-star, and a mission to give cheer parents real information.',
    type: 'profile',
  },
};

const MILESTONES = [
  { year:'2007', title:'First all-star tryout', body:'Made a Level 1 youth team at age 9. Cost: $1,800 for the season. (Yes, even then.)' },
  { year:'2013', title:'Level 6 athlete', body:'Worlds bid, Senior Open 5. Started coaching tumbling on the side at 15.' },
  { year:'2014', title:'CCA certification', body:'First coaching gig with a Tiny Novice team. Realized how little public info exists.' },
  { year:'2019', title:'First Worlds as a coach', body:'Senior Small Coed 5, top 10. Started writing my private gym-mom email guide that would later become this site.' },
  { year:'2024', title:'CheerInsider launches', body:'After ten thousand DM\'d cost questions. Three articles to start. Today: 127.' },
  { year:'2026', title:'You\'re here', body:'41K cheer moms on the list. Two daughters on Level 2 and Level 4 teams. Still on the mat.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding:'56px 0 80px', borderBottom:'1px solid var(--p-line)' }}>
        <Container>
          <div className="ci-stack-mobile" style={{ display:'grid', gridTemplateColumns:'1.3fr 1fr', gap:64, alignItems:'end' }}>
            <div>
              <Pill style={{ marginBottom:24 }}>★ ABOUT THE INSIDER</Pill>
              <h1 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(64px,8vw,132px)', margin:'0 0 28px', letterSpacing:'-.03em', lineHeight:.92 }}>
                Hi, I'm <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>Lauren</span>.<br/>
                I've been on the mat for 18 years.
              </h1>
              <p style={{ fontSize:21, lineHeight:1.5, color:'var(--p-inkSoft)', margin:'0 0 24px', maxWidth:640 }}>
                CCA-certified coach. Former Level 6 athlete. Cheer mom of two (Level 2 + Level 4).
                I started CheerInsider because every time a new mom DM'd me asking what something
                <em> really</em> costs, I realized the answer wasn't anywhere online — except in our
                gym moms' group chat at 11pm.
              </p>
              <p style={{ fontSize:17, lineHeight:1.55, color:'var(--p-inkSoft)', margin:'0 0 32px', maxWidth:600 }}>
                Now it's here. No federation talking points. No gym marketing. No "spirit-shop"
                fluff. Just what I'd tell my own sister.
              </p>
              <div style={{ display:'flex', gap:14 }}>
                <span style={{ background:'var(--p-hot)', color:'#fff', border:'none', padding:'16px 24px', fontSize:15, fontWeight:700, borderRadius:99, fontFamily:'inherit', cursor:'pointer', display:'inline-flex', alignItems:'center', gap:8 }}>Get my Survival Guide <Icon.arrow/></span>
                <span style={{ background:'transparent', color:'var(--p-ink)', border:'1px solid var(--p-ink)', padding:'15px 22px', fontSize:15, fontWeight:700, borderRadius:99, fontFamily:'inherit', cursor:'pointer' }}>Email Lauren →</span>
              </div>
            </div>
            <div style={{ position:'relative' }}>
              <Gradient variant="halo" ratio="3/4" caption="portrait · author"/>
              <div style={{ position:'absolute', bottom:-24, right:-24, padding:'14px 18px', background:'var(--p-ink)', color:'var(--p-cream)', maxWidth:240 }}>
                <div style={{ ...tx.eyebrow, color:'var(--p-accent)', marginBottom:4 }}>Currently</div>
                <div style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:18, lineHeight:1.1 }}>
                  Coaching at <span style={{ color:'var(--p-hot)' }}>Cheer Tampa Elite</span> · Tampa, FL
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Creds */}
      <section style={{ padding:'64px 0', background:'var(--p-paper)', borderBottom:'1px solid var(--p-line)' }}>
        <Container>
          <div style={{ ...tx.eyebrow, color:'var(--p-hot)', marginBottom:32 }}>The receipts</div>
          <div className="ci-stats" style={{ gap:0, borderTop:'2px solid var(--p-ink)', borderBottom:'2px solid var(--p-ink)' }}>
            {([['18','seasons','as athlete + coach + mom'],['CCA','certified','since 2014'],['2x','Worlds','as a coach (2019, 2023)'],['41K','readers','on the email list']] as const).map(([n,l,sub], i) => (
              <div key={i} style={{ padding:'32px 24px', borderRight: i<3 ? '1px solid var(--p-line)' : 'none' }}>
                <div style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:64, lineHeight:1, letterSpacing:'-.04em', color:'var(--p-hot)' }}>{n}</div>
                <div style={{ fontSize:14, fontWeight:700, marginTop:12 }}>{l}</div>
                <div style={{ fontSize:12, color:'var(--p-muted)', marginTop:4 }}>{sub}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section style={{ padding:'96px 0' }}>
        <Container>
          <SectionHead eyebrow="THE TIMELINE" title={<>How we got <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>here</span>.</>}/>
          <div style={{ marginTop:48, display:'flex', flexDirection:'column' }}>
            {MILESTONES.map((m, i) => (
              <div key={i} className="ci-timeline-row" style={{ display:'grid', gridTemplateColumns:'140px 60px 1fr', gap:32, padding:'28px 0', borderTop:'1px solid var(--p-line)', borderBottom: i===MILESTONES.length-1 ? '1px solid var(--p-line)' : 'none', alignItems:'start' }}>
                <div style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:42, color:'var(--p-hot)', letterSpacing:'-.03em', lineHeight:1 }}>{m.year}</div>
                <div className="ci-timeline-dot" style={{ position:'relative', display:'flex', justifyContent:'center' }}>
                  <span style={{ width:14, height:14, borderRadius:99, background:'var(--p-ink)', marginTop:14, display:'inline-block' }}/>
                </div>
                <div>
                  <h3 style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:24, margin:'0 0 8px', letterSpacing:'-.02em', lineHeight:1.1 }}>{m.title}</h3>
                  <p style={{ fontSize:15.5, lineHeight:1.5, color:'var(--p-inkSoft)', margin:0, maxWidth:620 }}>{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Standards */}
      <section style={{ padding:'96px 0', background:'var(--p-ink)', color:'var(--p-cream)' }}>
        <Container>
          <div className="ci-stack-mobile" style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:64 }}>
            <div>
              <div style={{ ...tx.eyebrow, color:'var(--p-accent)', marginBottom:18 }}>Editorial standards</div>
              <h2 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(36px,4.4vw,64px)', margin:0, letterSpacing:'-.025em', lineHeight:.95 }}>
                Five rules we <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>never</span> break.
              </h2>
            </div>
            <ol style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:24 }}>
              {[
                ['Sponsored content is labeled in the headline.','If a brand paid us, the headline says so. We haven\'t taken sponsored money yet.'],
                ['No affiliate link can change a verdict.','We only recommend products we\'d buy ourselves.'],
                ['Anonymized sources, on request.','Some moms and coaches can\'t go on the record without gym fallout. We protect them.'],
                ['Federation-adjacent claims get sourced.','If we can\'t cite it, we don\'t print it.'],
                ['Corrections live forever.','When we get something wrong, we update with a dated note. We don\'t silently edit.'],
              ].map(([t,b], i) => (
                <li key={i} style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:20, alignItems:'start' }}>
                  <span style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:48, color:'var(--p-accent)', letterSpacing:'-.04em', lineHeight:.85 }}>0{i+1}</span>
                  <div>
                    <h3 style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:22, margin:'0 0 6px', letterSpacing:'-.01em' }}>{t}</h3>
                    <p style={{ fontSize:14.5, lineHeight:1.55, color:'rgba(250,246,241,.78)', margin:0 }}>{b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section style={{ padding:'80px 0' }}>
        <Container max={900}>
          <div style={{ ...tx.eyebrow, color:'var(--p-hot)', marginBottom:18, textAlign:'center' }}>Talk to me</div>
          <h2 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(40px,5vw,72px)', margin:'0 0 24px', textAlign:'center', letterSpacing:'-.025em', lineHeight:.95 }}>
            Got a tip, a question, or a <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>story</span>?
          </h2>
          <p style={{ fontSize:17, lineHeight:1.5, color:'var(--p-inkSoft)', margin:'0 auto 32px', maxWidth:600, textAlign:'center' }}>
            Anonymized stories are how this site stays useful. If something happened at your gym
            that other moms should hear about, email me. I never share names without permission.
          </p>
          <div style={{ display:'flex', justifyContent:'center', gap:14, flexWrap:'wrap' }}>
            <a href="mailto:lauren@cheer-insider.com" style={{ background:'var(--p-ink)', color:'var(--p-cream)', border:'none', padding:'16px 24px', fontSize:15, fontWeight:700, borderRadius:99, display:'inline-flex', alignItems:'center', gap:8 }}>lauren@cheer-insider.com <Icon.arrowUp/></a>
            <span style={{ background:'transparent', color:'var(--p-ink)', border:'1px solid var(--p-ink)', padding:'15px 22px', fontSize:15, fontWeight:700, borderRadius:99, cursor:'pointer' }}>Send a tip anonymously →</span>
          </div>
        </Container>
      </section>
    </>
  );
}
