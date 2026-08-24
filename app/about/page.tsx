import { Container } from '@/components/ui/Container';
import { Gradient } from '@/components/ui/Gradient';
import { Pill } from '@/components/ui/Pill';
import { Icon } from '@/components/ui/Icon';
import { getAllArticles } from '@/lib/articles';
import { P, tx } from '@/lib/palette';

export const metadata = {
  title: 'About CheerInsider — Independent All-Star Cheer Coverage for Parents',
  description: 'What CheerInsider is, how our AI-assisted editorial process works, and the standards behind every article we publish for cheer parents.',
  openGraph: {
    title: 'About CheerInsider',
    description: 'Independent, parent-first coverage of competitive all-star cheerleading — and full transparency about how it gets made.',
    type: 'website',
  },
};

export default function AboutPage() {
  const articleCount = getAllArticles().length;

  return (
    <>
      {/* Hero */}
      <section style={{ padding:'56px 0 80px', borderBottom:'1px solid var(--p-line)' }}>
        <Container>
          <div className="ci-stack-mobile" style={{ display:'grid', gridTemplateColumns:'1.3fr 1fr', gap:64, alignItems:'end' }}>
            <div>
              <Pill style={{ marginBottom:24 }}>★ ABOUT THE SITE</Pill>
              <h1 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(56px,7vw,116px)', margin:'0 0 28px', letterSpacing:'-.03em', lineHeight:.92 }}>
                The cheer site that's on <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>your</span> side of the check.
              </h1>
              <p style={{ fontSize:21, lineHeight:1.5, color:'var(--p-inkSoft)', margin:'0 0 24px', maxWidth:640 }}>
                CheerInsider is an independent editorial site about competitive all-star cheerleading,
                written for the parents paying for it. Real cost breakdowns, honest gym-selection
                criteria, plain-English explanations of how the sport actually works.
              </p>
              <p style={{ fontSize:17, lineHeight:1.55, color:'var(--p-inkSoft)', margin:'0 0 32px', maxWidth:600 }}>
                No federation talking points. No gym marketing. No spirit-shop fluff.
              </p>
              <div style={{ display:'flex', gap:14 }}>
                <a href="/cost-calculator" style={{ background:'var(--p-hot)', color:'#fff', border:'none', padding:'16px 24px', fontSize:15, fontWeight:700, borderRadius:99, fontFamily:'inherit', cursor:'pointer', display:'inline-flex', alignItems:'center', gap:8 }}>Try the Cost Calculator <Icon.arrow/></a>
                <a href="mailto:lauren@cheer-insider.com" style={{ background:'transparent', color:'var(--p-ink)', border:'1px solid var(--p-ink)', padding:'15px 22px', fontSize:15, fontWeight:700, borderRadius:99, fontFamily:'inherit', cursor:'pointer' }}>Contact us →</a>
              </div>
            </div>
            <div style={{ position:'relative' }}>
              <Gradient variant="halo" ratio="3/4" caption="cheerinsider · est. 2025"/>
              <div style={{ position:'absolute', bottom:-24, right:-24, padding:'14px 18px', background:'var(--p-ink)', color:'var(--p-cream)', maxWidth:240 }}>
                <div style={{ ...tx.eyebrow, color:'var(--p-accent)', marginBottom:4 }}>Publishing</div>
                <div style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:18, lineHeight:1.1 }}>
                  Independent &amp; <span style={{ color:'var(--p-hot)' }}>never sponsored</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What we cover */}
      <section style={{ padding:'64px 0', background:'var(--p-paper)', borderBottom:'1px solid var(--p-line)' }}>
        <Container>
          <div style={{ ...tx.eyebrow, color:'var(--p-hot)', marginBottom:32 }}>The site today</div>
          <div className="ci-stats" style={{ gap:0, borderTop:'2px solid var(--p-ink)', borderBottom:'2px solid var(--p-ink)' }}>
            {([[String(articleCount),'articles','published and counting'],['3','pillars','parents · guides · gear'],['0','paywalls','everything is free to read'],['0','sponsored posts','and it stays that way']] as const).map(([n,l,sub], i) => (
              <div key={i} style={{ padding:'32px 24px', borderRight: i<3 ? '1px solid var(--p-line)' : 'none' }}>
                <div style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:64, lineHeight:1, letterSpacing:'-.04em', color:'var(--p-hot)' }}>{n}</div>
                <div style={{ fontSize:14, fontWeight:700, marginTop:12 }}>{l}</div>
                <div style={{ fontSize:12, color:'var(--p-muted)', marginTop:4 }}>{sub}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* AI Disclosure */}
      <section style={{ padding:'96px 0' }}>
        <Container max={900}>
          <div style={{ ...tx.eyebrow, color:'var(--p-hot)', marginBottom:18 }}>How this site works</div>
          <h2 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(32px,4vw,52px)', margin:'0 0 24px', letterSpacing:'-.025em', lineHeight:.95 }}>
            AI-assisted. <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>Editorially driven.</span>
          </h2>
          <p style={{ fontSize:17, lineHeight:1.6, color:'var(--p-inkSoft)', margin:'0 0 18px', maxWidth:740 }}>
            CheerInsider articles are written with AI assistance using the editorial voice and perspective built into this site.
            <strong> &ldquo;Lauren K.&rdquo; is an editorial persona</strong> — a composite of the cheer parent and coach experience — not a specific individual.
          </p>
          <p style={{ fontSize:17, lineHeight:1.6, color:'var(--p-inkSoft)', margin:'0 0 18px', maxWidth:740 }}>
            Cost figures, scenarios, and workload examples in our articles are <strong>illustrative</strong> — based on patterns and ranges consistently reported across the cheer community, not derived from formal surveys or original data collection. Where we cite third-party research or sourced news, we link to the source.
          </p>
          <p style={{ fontSize:17, lineHeight:1.6, color:'var(--p-inkSoft)', margin:0, maxWidth:740 }}>
            Our weekly news coverage starts from live web research of the past week's actual cheer news — competition results, rule changes, safety stories — and every specific fact in those articles comes from that sourced research. The AI helps us write clearly and consistently; the perspective is real.
          </p>
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
                ['Sponsored content is labeled in the headline.','If a brand paid us, the headline says so. We haven\'t taken sponsored money — ever.'],
                ['No affiliate link can change a verdict.','We only recommend products we\'d buy ourselves.'],
                ['Illustrative numbers are labeled as illustrative.','Composite scenarios and cost ranges are disclosed in the article. We don\'t dress up estimates as research.'],
                ['News claims get sourced.','Weekly news articles are built from live, sourced research. If we can\'t source it, we don\'t print it.'],
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
          <div style={{ ...tx.eyebrow, color:'var(--p-hot)', marginBottom:18, textAlign:'center' }}>Talk to us</div>
          <h2 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(40px,5vw,72px)', margin:'0 0 24px', textAlign:'center', letterSpacing:'-.025em', lineHeight:.95 }}>
            Got a tip, a question, or a <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>story</span>?
          </h2>
          <p style={{ fontSize:17, lineHeight:1.5, color:'var(--p-inkSoft)', margin:'0 auto 32px', maxWidth:600, textAlign:'center' }}>
            Reader stories are how this site stays useful. If something happened at your gym
            that other parents should hear about, email us. We never share names without permission.
          </p>
          <div style={{ display:'flex', justifyContent:'center', gap:14, flexWrap:'wrap' }}>
            <a href="mailto:lauren@cheer-insider.com" style={{ background:'var(--p-ink)', color:'var(--p-cream)', border:'none', padding:'16px 24px', fontSize:15, fontWeight:700, borderRadius:99, display:'inline-flex', alignItems:'center', gap:8 }}>lauren@cheer-insider.com <Icon.arrowUp/></a>
            <a href="mailto:lauren@cheer-insider.com?subject=Anonymous%20tip" style={{ background:'transparent', color:'var(--p-ink)', border:'1px solid var(--p-ink)', padding:'15px 22px', fontSize:15, fontWeight:700, borderRadius:99, cursor:'pointer' }}>Send a tip anonymously →</a>
          </div>
        </Container>
      </section>
    </>
  );
}
