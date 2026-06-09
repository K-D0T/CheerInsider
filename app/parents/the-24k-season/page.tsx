import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { Gradient } from '@/components/ui/Gradient';
import { Pill } from '@/components/ui/Pill';
import { AdUnit } from '@/components/ui/AdUnit';
import { EmailForm } from '@/components/ui/EmailForm';
import { JsonLd, articleLd, breadcrumbLd } from '@/components/seo/JsonLd';
import { P, tx } from '@/lib/palette';

export const metadata: Metadata = {
  title: 'The $24,000 Cheer Season: Every Dollar, Tracked',
  description: 'We followed one Level 4 family for a full season and recorded every invoice. Tuition was a third of what they actually paid. Here\'s the full ledger.',
  openGraph: {
    title: 'The $24,000 Cheer Season: Every Dollar, Tracked',
    description: 'One Level 4 family. One full season. $24,180 in receipts — and a breakdown of where every dollar went.',
    type: 'article',
    publishedTime: '2026-04-12T00:00:00Z',
    modifiedTime: '2026-05-08T00:00:00Z',
    authors: ['Lauren K.'],
    tags: ['cheer costs', 'all-star cheerleading', 'cheer budget', 'Level 4 cheer'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The $24,000 Cheer Season: Every Dollar, Tracked',
    description: 'One Level 4 family. One full season. $24,180 in receipts.',
  },
};

const TOC = ['The $24K headline number','Tuition (the obvious one)','Choreography fees','Travel & hotels','Hair, bows, makeup','Hidden "team mom" line items','How to bring it down 30%','The 2026 budget plan'];

const LEDGER = [
  ['Tuition (10 mo × $295)','$2,950','Locked at tryouts'],
  ['Team placement fee','$400','Choreo deposit, not tuition'],
  ['Choreo & music package','$1,250','July invoice — surprise'],
  ['Uniform + warmups','$1,840','Required, gym-supplied'],
  ['Travel (8 comps)','$8,640','Hotels, flights, gas'],
  ['Competition fees','$2,400','Across 8 events'],
  ['Hair, bows, makeup','$1,200','Per-comp recurring'],
  ['Privates (tumbling)','$2,800','Optional, became required'],
  ['Team mom fund','$680','"Optional" gifts and snacks'],
  ['Banquet, photos, video','$2,020','End-of-season'],
];

const RELATED = [
  { eyebrow:'GYM SELECTION', title:'A gym is not a family. Here\'s how to evaluate one.', meta:'9 min', g:'flash' as const, href:'/gym-guide' },
  { eyebrow:'NEGOTIATION',   title:'The exact script for negotiating gym fees (it works).', meta:'7 min', g:'stripes' as const, href:'/parents' },
  { eyebrow:'TRAVEL',        title:'Cheer mom travel hacks: hotel blocks, points, and stacking.', meta:'11 min', g:'halo' as const, href:'/parents' },
  { eyebrow:'COMMUNITY',     title:'When the "team mom" ask crosses the line.', meta:'6 min', g:'pulse' as const, href:'/parents/team-mom-trap' },
];

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={articleLd({
        slug: '/parents/the-24k-season',
        headline: 'The $24,000 Cheer Season: Every Dollar, Tracked',
        description: 'We followed one Level 4 family for a full season and recorded every invoice. Tuition was a third of what they actually paid.',
        datePublished: '2026-04-12',
        dateModified: '2026-05-08',
      })} />
      <JsonLd data={breadcrumbLd([['Home', '/'], ['Parent Resources', '/parents'], ['The $24K Season', '/parents/the-24k-season']])} />
      {/* Hero */}
      <section style={{ padding:'48px 0 64px', borderBottom:'1px solid var(--p-line)' }}>
        <Container max={1100}>
          <div style={{ display:'flex', alignItems:'center', gap:14, fontSize:13, color:'var(--p-muted)', marginBottom:24 }}>
            <Link href="/">Home</Link><span>›</span><Link href="/parents">Parent Resources</Link><span>›</span><span style={{ color:'var(--p-ink)' }}>The $24K Season</span>
          </div>
          <Pill color="var(--p-ink)" textColor="var(--p-cream)" style={{ marginBottom:24 }}>★ COVER STORY · THE COST DEEP DIVE</Pill>
          <h1 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(48px,6vw,92px)', margin:'0 0 24px', letterSpacing:'-.03em', lineHeight:.95, maxWidth:1000 }}>
            We tracked every penny one Level 4 family spent in <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>a single season</span>. The number is going to make you mad.
          </h1>
          <p style={{ fontSize:21, lineHeight:1.5, color:'var(--p-inkSoft)', margin:'0 0 36px', maxWidth:780, fontWeight:500 }}>
            $24,180. That's what the Chen family paid for their daughter Mia's first season on a Level 4 team in 2025. Here's where every dollar went, what was negotiable, and how they're bringing it down 30% in 2026.
          </p>
          <div style={{ display:'flex', alignItems:'center', gap:14, paddingTop:24, borderTop:'1px solid var(--p-line)', flexWrap:'wrap' }}>
            <div style={{ width:44, height:44, borderRadius:99, background:'var(--p-accent)' }}/>
            <div>
              <div style={{ fontSize:14, fontWeight:700 }}>By Lauren K.</div>
              <div style={{ fontSize:12.5, color:'var(--p-muted)' }}>Former CCA-certified coach · Cheer mom of two · Tampa, FL</div>
            </div>
            <div style={{ marginLeft:'auto', display:'flex', gap:18, fontSize:13, color:'var(--p-muted)', alignItems:'center' }}>
              <span>Apr 12, 2026 · Updated May 8</span><span>·</span><span>18 min read</span>
            </div>
          </div>
        </Container>
        <Container max={1100} style={{ marginTop:48 }}>
          <Gradient variant="burst" caption="cover · year of receipts" ratio="21/9" dark/>
        </Container>
      </section>

      {/* Body */}
      <section style={{ padding:'72px 0' }}>
        <Container max={1100} className="ci-stack-mobile" style={{ display:'grid', gridTemplateColumns:'200px 1fr 240px', gap:48, alignItems:'start' }}>
          {/* TOC */}
          <aside className="ci-static-mobile" style={{ position:'sticky', top:96, fontSize:13 }}>
            <div style={{ ...tx.eyebrow, color:'var(--p-hot)', marginBottom:14 }}>In this article</div>
            <ol style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:10 }}>
              {TOC.map((s, i) => (
                <li key={i} style={{ paddingLeft:14, borderLeft: i===0 ? '2px solid var(--p-hot)' : '2px solid transparent', color: i===0 ? 'var(--p-ink)' : 'var(--p-muted)', fontWeight: i===0 ? 700 : 500, cursor:'pointer' }}>
                  <span style={{ color:'var(--p-muted)', marginRight:8, fontFamily:P.serif, fontStyle:'italic' }}>0{i+1}</span>{s}
                </li>
              ))}
            </ol>
          </aside>

          {/* Article body */}
          <article style={{ fontSize:17.5, lineHeight:1.7, color:'var(--p-ink)', maxWidth:680 }}>
            <p style={{ margin:'0 0 24px' }}>
              <span style={{ float:'left', fontFamily:'var(--p-display)', fontWeight:800, fontSize:88, lineHeight:.8, paddingRight:14, paddingTop:6, color:'var(--p-hot)', letterSpacing:'-.04em' }}>L</span>
              ast September, Sarah Chen called me in tears. Her 13-year-old, Mia, had been
              placed on a Level 4 team — exciting news. The placement email also included a
              "season financial summary." Sarah forwarded it to me with the subject line:
              <em> "is this real???"</em>
            </p>
            <p style={{ margin:'0 0 24px' }}>
              It was real. And it was wildly understated. By the time the season ended in May,
              the Chens had paid <strong>$24,180</strong> — almost double what the placement email implied. Here's where it went.
            </p>

            {/* In-article ad — natural break after opener */}
            <AdUnit format="inline" style={{ margin:'32px 0' }}/>

            <h2 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:36, margin:'48px 0 16px', letterSpacing:'-.02em', lineHeight:1.05 }}>
              Tuition: the line item everyone <em style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>thinks</em> is fixed.
            </h2>
            <p style={{ margin:'0 0 24px' }}>
              The Chens paid $295/month, plus a one-time $400 "team placement fee" in May. That puts the tuition line at <strong>$3,540 for the year</strong>. This is the number most gyms quote at tryouts.
            </p>
            <p style={{ margin:'0 0 24px' }}>
              Where this gets interesting: that $400 placement fee isn't tuition. It's a deposit against the gym's <em>choreo and music package</em>, which is invoiced separately in July.
            </p>

            <blockquote style={{ margin:'48px 0', padding:'32px 36px', background:'var(--p-cream)', borderLeft:'4px solid var(--p-hot)' }}>
              <p style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:30, lineHeight:1.15, letterSpacing:'-.02em', margin:0 }}>
                "The tuition number is the smallest honest number you'll see. Plan for it to be
                <span style={{ color:'var(--p-hot)' }}> a third </span>of your real spend."
              </p>
            </blockquote>

            <h2 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:36, margin:'48px 0 16px', letterSpacing:'-.02em', lineHeight:1.05 }}>The 2025 Chen family ledger.</h2>

            <div style={{ border:'1px solid var(--p-ink)', margin:'24px 0', fontSize:14.5 }}>
              <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr', padding:'12px 18px', background:'var(--p-ink)', color:'var(--p-cream)', fontWeight:700, fontSize:12, letterSpacing:'.08em', textTransform:'uppercase' as const }}>
                <span>Line item</span><span>Paid</span><span>Notes</span>
              </div>
              {LEDGER.map(([k,v,n], i) => (
                <div key={i} style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr', padding:'10px 18px', borderTop:'1px solid var(--p-line)', fontVariantNumeric:'tabular-nums' as const }}>
                  <span>{k}</span><span style={{ fontWeight:700 }}>{v}</span><span style={{ color:'var(--p-muted)' }}>{n}</span>
                </div>
              ))}
              <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr', padding:'14px 18px', background:'var(--p-hot)', color:'#fff', fontWeight:800 }}>
                <span>TOTAL · Level 4 · 2025 season</span><span>$24,180</span><span>Plus team mom hours</span>
              </div>
            </div>

            <p style={{ margin:'0 0 24px' }}>
              Of these ten line items, only the first two were quoted at tryouts. The rest arrived as invoices over the following 11 months.
            </p>

            <h3 style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:24, margin:'40px 0 12px', letterSpacing:'-.02em' }}>What "optional" really means</h3>
            <ul style={{ paddingLeft:22, margin:'0 0 24px', display:'flex', flexDirection:'column', gap:8 }}>
              <li><strong>"Optional team privates":</strong> required if you want competition time.</li>
              <li><strong>"Optional banquet":</strong> kids whose families skip get visibly excluded.</li>
              <li><strong>"Optional photo package":</strong> coach posts these on Instagram. Kid notices.</li>
              <li><strong>"Optional team mom fund":</strong> social pressure does the rest.</li>
            </ul>
          </article>

          {/* Right rail */}
          <aside className="ci-static-mobile" style={{ position:'sticky', top:96, display:'flex', flexDirection:'column', gap:20 }}>
            <AdUnit format="rectangle"/>
            <div style={{ background:'var(--p-ink)', color:'var(--p-cream)', padding:24 }}>
              <div style={{ ...tx.eyebrow, color:'var(--p-accent)', marginBottom:14 }}>Get the spreadsheet</div>
              <p style={{ fontSize:14, lineHeight:1.45, margin:'0 0 14px', color:'rgba(250,246,241,.85)' }}>The Chens' full XLSX — your fields, your math.</p>
              <span style={{ display:'block', width:'100%', background:'var(--p-hot)', color:'#fff', padding:'10px 14px', fontSize:13, fontWeight:700, borderRadius:99, cursor:'pointer', textAlign:'center' }}>Download .xlsx →</span>
            </div>
            <div style={{ padding:'20px 0', borderTop:'1px solid var(--p-line)' }}>
              <div style={{ ...tx.eyebrow, color:'var(--p-muted)', marginBottom:10 }}>Series · The Cost Deep Dive</div>
              <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:14, fontSize:14.5, lineHeight:1.3 }}>
                {[['Part 1','The $24K Level 4 season',true],['Part 2','Where to negotiate the gym',false],['Part 3','When to walk away',false]].map(([p,t,active], i) => (
                  <li key={i} style={{ opacity: active ? 1 : .6 }}>
                    <div style={{ fontSize:11, color:'var(--p-hot)', letterSpacing:'.1em', textTransform:'uppercase' as const, fontWeight:700 }}>{p}</div>
                    <div style={{ fontWeight: active ? 700 : 500, marginTop:3 }}>{t}</div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      {/* Email callout */}
      <section style={{ background:'var(--p-hot)', color:'#fff', padding:'64px 0' }}>
        <Container max={1100} className="ci-stack-mobile" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'center' }}>
          <div>
            <div style={{ ...tx.eyebrow, marginBottom:18, opacity:.85 }}>Save this article</div>
            <h2 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(36px,4.6vw,64px)', margin:'0 0 18px', letterSpacing:'-.025em', lineHeight:.95 }}>
              Want the full <span style={{ fontFamily:P.serif, fontStyle:'italic', fontWeight:400 }}>cost</span> series?
            </h2>
            <p style={{ fontSize:17, lineHeight:1.5, margin:0, maxWidth:480, opacity:.92 }}>
              Three articles, one spreadsheet, one negotiation script. Delivered to your inbox over the next week. Free, no upsell.
            </p>
          </div>
          <EmailForm label="Email address for the cost series" />
        </Container>
      </section>

      {/* Related */}
      <section style={{ padding:'80px 0' }}>
        <Container max={1100}>
          <SectionHead eyebrow="KEEP READING · IF YOU LIKED THIS" right="All Parent Resources" title={<>The cost <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>conversation</span>, continued.</>}/>
          <div className="ci-4col" style={{ gap:18, marginTop:36 }}>
            {RELATED.map((r, i) => (
              <Link key={i} href={r.href} style={{ display:'flex', flexDirection:'column', gap:12, cursor:'pointer' }}>
                <Gradient variant={r.g} ratio="4/3"/>
                <div style={{ ...tx.eyebrow, color:'var(--p-hot)', marginTop:4 }}>{r.eyebrow}</div>
                <h4 style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:20, lineHeight:1.1, margin:0, letterSpacing:'-.02em' }}>{r.title}</h4>
                <div style={{ fontSize:12, color:'var(--p-muted)', marginTop:'auto' }}>{r.meta}</div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
