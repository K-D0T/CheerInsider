import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { Gradient } from '@/components/ui/Gradient';
import { Pill } from '@/components/ui/Pill';
import { Icon } from '@/components/ui/Icon';
import { AdUnit } from '@/components/ui/AdUnit';
import { P, tx } from '@/lib/palette';

export const metadata = { title: 'The Only Cheer Shoes Worth Your Money in 2026' };

type GV = 'halo' | 'stripes' | 'field' | 'glow' | 'pulse' | 'block';

const AT_A_GLANCE: { rank: string; name: string; score: string; price: string; verdict: string; g: GV; img: string | null }[] = [
  { rank:'BEST OVERALL', name:'Nfinity Vengeance', score:'9.4', price:'$110', verdict:'Buy', g:'halo',
    img:'https://www.nfinity.com/cdn/shop/files/Untitled_design_98.png?crop=center&height=260&v=1776804596&width=260' },
  { rank:'BEST BUDGET',  name:'Chassé Apex',       score:'8.1', price:'$60',  verdict:'Buy', g:'stripes',
    img:'https://www.omnicheer.com/cdn/shop/files/S1702_BLK_016_WEB_1.jpg?v=1774724518&width=260' },
  { rank:'BEST FLYERS',  name:'Nfinity Flyte',     score:'8.5', price:'$95',  verdict:'Buy', g:'field',
    img:'https://www.nfinity.com/cdn/shop/files/nfinity-flyte-cheer-shoes-nfinity-cheer-shoes-4771095.png?crop=center&height=260&v=1775141837&width=260' },
  { rank:'BEST BASES',   name:'Nfinity Titan',     score:'8.7', price:'$125', verdict:'Buy', g:'glow',
    img:'https://cdn11.bigcommerce.com/s-tn8o8k48s5/images/stencil/400x400/products/27976/67330/titan-shoes-nfinityinsiders-998826_1800x1800__87814.1718818692.jpg?c=1' },
  { rank:'AVOID', name:'(redacted) Pro', score:'4.2', price:'$140', verdict:'Skip', g:'pulse', img:null },
  { rank:'AVOID', name:'Sparkle Step X', score:'3.8', price:'$95',  verdict:'Skip', g:'block', img:null },
];

const REVIEWS: {
  rank: string; score: string; name: string; price: string; blurb: string;
  pros: string[]; cons: string[]; stars: number; g: 'halo'|'stripes'|'field';
  img: string; buyAmazon: string; buyDirect: string;
}[] = [
  {
    rank:'01 · BEST OVERALL', score:'9.4', name:'Nfinity Vengeance', price:'$110',
    blurb:'Still the gold standard. The Vengeance does everything well: the heel locks, the upper holds shape through a hot August tryout, and they look right on the mat.',
    pros:['Locked-in fit','Holds shape full season','Universally accepted by gyms'],
    cons:['Premium price','Narrow toe-box for wide feet'],
    stars:5, g:'halo',
    img:'https://www.nfinity.com/cdn/shop/files/Untitled_design_98.png?crop=center&height=800&v=1776804596&width=800',
    buyAmazon:'https://www.amazon.com/s?k=Nfinity+Vengeance+cheer+shoe',
    buyDirect:'https://www.nfinity.com/products/nfinity-vengeance-cheer-shoes',
  },
  {
    rank:'02 · BEST BUDGET', score:'8.1', name:'Chassé Apex', price:'$60',
    blurb:"Better than it has any right to be at this price. We tested four pairs across two athletes and watched zero structural failures across a full Level 2 season.",
    pros:['Half the price of the field','Comfortable out of the box','Wide-foot friendly'],
    cons:['Heavier','Upper softens by month 4'],
    stars:4, g:'stripes',
    img:'https://www.omnicheer.com/cdn/shop/files/S1702_BLK_016_WEB_1.jpg?v=1774724518&width=800',
    buyAmazon:'https://www.amazon.com/s?k=Chasse+Apex+cheer+shoe',
    buyDirect:'https://www.omnicheer.com/shop/cheerleading-shoes/chasse-apex_s1702',
  },
  {
    rank:'03 · BEST FOR FLYERS', score:'8.5', name:'Nfinity Flyte', price:'$95',
    blurb:"A slimmer toe-box and a paper-thin sole — flyers will feel their base's hands and bases will feel where the flyer's weight actually is.",
    pros:['Sole feedback for flyers','Lightest in the test','Lock-tight heel cup'],
    cons:['Tight fit — size up half','Not for bases'],
    stars:4, g:'field',
    img:'https://www.nfinity.com/cdn/shop/files/nfinity-flyte-cheer-shoes-nfinity-cheer-shoes-4771095.png?crop=center&height=800&v=1775141837&width=800',
    buyAmazon:'https://www.amazon.com/s?k=Nfinity+Flyte+cheer+shoe',
    buyDirect:'https://www.nfinity.com/products/flyte-by-nfinity-athletics-premier-cheerleading-performance-shoes-nfinity-athletics',
  },
];

const ROWS = ['Weight (oz)','Sole feedback','Heel lock','Toe-box','Best for'];
const COLS = [
  ['Nfinity Vengeance','7.2','medium','★★★★★','medium','everyone'],
  ['Chassé Apex','7.9','low','★★★★','medium','budget / wide'],
  ['Nfinity Flyte','6.4','high','★★★★','tight','flyers'],
  ['Nfinity Titan','8.1','low','★★★★★','wide','bases'],
];

export default function GearRoundupPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding:'48px 0 56px', borderBottom:'1px solid var(--p-line)' }}>
        <Container>
          <div style={{ display:'flex', alignItems:'center', gap:14, fontSize:13, color:'var(--p-muted)', marginBottom:24 }}>
            <Link href="/">Home</Link><span>›</span>
            <Link href="/gear">Gear</Link><span>›</span>
            <span style={{ color:'var(--p-ink)' }}>Cheer Shoes 2026</span>
          </div>
          <div className="ci-2col" style={{ gap:64 }}>
            <div>
              <Pill style={{ marginBottom:24 }}>★ TESTED · 14 PAIRS · 6 MONTHS</Pill>
              <h1 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(60px,7.6vw,124px)', margin:'0 0 24px', letterSpacing:'-.03em', lineHeight:.92 }}>
                The only <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>cheer shoes</span> worth your money in 2026.
              </h1>
              <p style={{ fontSize:19, lineHeight:1.5, color:'var(--p-inkSoft)', margin:'0 0 32px', maxWidth:600 }}>
                14 pairs. 6 months. Tested on Level 2, 4 and 5 athletes from ages 9 to 17. Here are the four worth your money — and the two that are flat-out scams.
              </p>
              <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
                <a href="#picks" style={{ background:'var(--p-ink)', color:'var(--p-cream)', padding:'16px 24px', fontSize:15, fontWeight:700, borderRadius:99, display:'inline-flex', alignItems:'center', gap:8 }}>Jump to picks <Icon.arrow/></a>
                <span style={{ padding:'15px 22px', fontSize:15, fontWeight:700, color:'var(--p-ink)', border:'1px solid var(--p-ink)', borderRadius:99, cursor:'pointer' }}>How we test ↗</span>
              </div>
            </div>
            <Gradient variant="halo" ratio="4/5" caption="hero · four shoes, top-down"/>
          </div>
        </Container>
      </section>

      {/* At a glance */}
      <section id="picks" style={{ padding:'72px 0', background:'var(--p-paper)' }}>
        <Container>
          <SectionHead eyebrow="THE PICKS · AT A GLANCE" title={<>Six shoes, <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>two</span> categories.</>}/>
          <div className="ci-3col" style={{ gap:18, marginTop:36 }}>
            {AT_A_GLANCE.map((p, i) => (
              <div key={i} style={{ display:'grid', gridTemplateColumns:'130px 1fr', background:'var(--p-cream)', border:'1px solid var(--p-line)' }}>
                {p.img ? (
                  <img src={p.img} alt={p.name} style={{ width:130, height:130, objectFit:'contain', background:'#fff', padding:10 }}/>
                ) : (
                  <Gradient variant={p.g} ratio="1/1"/>
                )}
                <div style={{ padding:'18px 20px', display:'flex', flexDirection:'column', gap:6 }}>
                  <Pill color={p.verdict==='Buy'?'var(--p-hot)':'var(--p-ink)'} style={{ alignSelf:'start', fontSize:10, padding:'3px 8px' }}>{p.rank}</Pill>
                  <div style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:20, letterSpacing:'-.02em', lineHeight:1.05 }}>{p.name}</div>
                  <div style={{ display:'flex', alignItems:'baseline', gap:10, marginTop:'auto' }}>
                    <span style={{ fontFamily:'var(--p-display)', fontSize:30, fontWeight:800, color: p.verdict==='Buy' ? 'var(--p-hot)' : 'var(--p-muted)' }}>{p.score}</span>
                    <span style={{ fontSize:11, color:'var(--p-muted)' }}>/ 10</span>
                    <span style={{ marginLeft:'auto', fontFamily:'var(--p-display)', fontWeight:800, fontSize:18 }}>{p.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leaderboard */}
      <div style={{ padding:'20px 0', background:'var(--p-cream)' }}>
        <Container style={{ display:'flex', justifyContent:'center' }}>
          <AdUnit format="leaderboard"/>
        </Container>
      </div>

      {/* Deep reviews */}
      <section style={{ padding:'80px 0', borderTop:'1px solid var(--p-line)', borderBottom:'1px solid var(--p-line)' }}>
        <Container max={1100}>
          <SectionHead eyebrow="DEEP REVIEWS" title={<>The <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>three</span> you should actually buy.</>}/>
          <div style={{ display:'flex', flexDirection:'column', gap:48, marginTop:48 }}>
            {REVIEWS.map((r, i) => (
              <article key={i} className="ci-featured-grid" style={{ gap:48, padding:'32px 0', borderBottom:'1px solid var(--p-line)' }}>
                <img src={r.img} alt={r.name} style={{ width:'100%', aspectRatio:'4/5', objectFit:'contain', background:'#f8f8f8', padding:32 }}/>
                <div>
                  <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:20, marginBottom:16 }}>
                    <div style={{ ...tx.eyebrow, color:'var(--p-hot)' }}>{r.rank}</div>
                    <div style={{ fontFamily:'var(--p-display)', fontSize:64, fontWeight:800, color:'var(--p-hot)', letterSpacing:'-.04em', lineHeight:1 }}>{r.score}<span style={{ fontSize:18, color:'var(--p-muted)', fontWeight:500 }}>/10</span></div>
                  </div>
                  <h3 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:42, margin:'0 0 6px', letterSpacing:'-.025em', lineHeight:1 }}>{r.name}</h3>
                  <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:18 }}>
                    <span style={{ display:'inline-flex', gap:2, color:'var(--p-hot)' }}>
                      {[1,2,3,4,5].map(s => <Icon.star key={s} style={{ opacity: s<=r.stars ? 1 : .2 }}/>)}
                    </span>
                    <span style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:24 }}>{r.price}</span>
                  </div>
                  <p style={{ fontSize:16, lineHeight:1.55, margin:'0 0 20px', color:'var(--p-inkSoft)' }}>{r.blurb}</p>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
                    <div>
                      <div style={{ ...tx.eyebrow, color:'var(--p-hot)', marginBottom:8 }}>What we loved</div>
                      <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:6, fontSize:14 }}>
                        {r.pros.map((p, j) => <li key={j} style={{ display:'flex', alignItems:'center', gap:8 }}><Icon.check style={{ color:'var(--p-hot)' }}/> {p}</li>)}
                      </ul>
                    </div>
                    <div>
                      <div style={{ ...tx.eyebrow, color:'var(--p-muted)', marginBottom:8 }}>Trade-offs</div>
                      <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:6, fontSize:14 }}>
                        {r.cons.map((c, j) => <li key={j} style={{ display:'flex', alignItems:'center', gap:8, color:'var(--p-muted)' }}><span style={{ display:'inline-block', width:12, height:2, background:'var(--p-muted)' }}/> {c}</li>)}
                      </ul>
                    </div>
                  </div>
                  <div style={{ display:'flex', gap:10, marginTop:24, flexWrap:'wrap' }}>
                    <a href={r.buyAmazon} target="_blank" rel="noopener noreferrer nofollow"
                      style={{ background:'var(--p-hot)', color:'#fff', padding:'12px 18px', fontSize:13.5, fontWeight:700, borderRadius:99, display:'inline-flex', alignItems:'center', gap:8 }}>
                      Buy on Amazon <Icon.arrowUp/>
                    </a>
                    <a href={r.buyDirect} target="_blank" rel="noopener noreferrer nofollow"
                      style={{ background:'transparent', color:'var(--p-ink)', border:'1px solid var(--p-ink)', padding:'11px 16px', fontSize:13.5, fontWeight:700, borderRadius:99, display:'inline-flex', alignItems:'center', gap:8 }}>
                      Buy direct ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison table */}
      <section style={{ padding:'80px 0' }}>
        <Container max={1100}>
          <SectionHead eyebrow="HEAD-TO-HEAD · ALL FOUR PICKS" title={<>The <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>spec sheet</span>.</>}/>
          <div style={{ marginTop:36, border:'1px solid var(--p-ink)', overflow:'auto' }}>
            <div style={{ display:'grid', gridTemplateColumns:'1.4fr repeat(4, 1fr)', background:'var(--p-ink)', color:'var(--p-cream)', fontSize:12, letterSpacing:'.08em', textTransform:'uppercase' as const, fontWeight:700, minWidth:560 }}>
              <span style={{ padding:'14px 18px' }}>Metric</span>
              {COLS.map((c, i) => <span key={i} style={{ padding:'14px 18px', borderLeft:'1px solid rgba(255,255,255,.15)' }}>{c[0]}</span>)}
            </div>
            {ROWS.map((r, ri) => (
              <div key={ri} style={{ display:'grid', gridTemplateColumns:'1.4fr repeat(4, 1fr)', borderTop:'1px solid var(--p-line)', fontSize:14, background: ri%2===0 ? 'var(--p-cream)' : 'var(--p-paper)', minWidth:560 }}>
                <span style={{ padding:'14px 18px', fontWeight:700 }}>{r}</span>
                {COLS.map((c, i) => <span key={i} style={{ padding:'14px 18px', borderLeft:'1px solid var(--p-line)', fontVariantNumeric:'tabular-nums' as const }}>{c[ri+1]}</span>)}
              </div>
            ))}
          </div>
          <div style={{ marginTop:24, fontSize:12.5, color:'var(--p-muted)', maxWidth:760 }}>
            <strong>Affiliate disclosure.</strong> Some links in this article are affiliate links — we may earn a small commission if you buy through them. We only recommend gear we'd buy ourselves.
          </div>
        </Container>
      </section>
    </>
  );
}
