import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Gradient } from '@/components/ui/Gradient';
import { Icon } from '@/components/ui/Icon';
import { P, tx } from '@/lib/palette';

function SpinBadge() {
  const text = ' ★ 41,238 READERS · 4.9 RATING · INSIDER WRITTEN ';
  const r = 70;
  return (
    <div style={{ position:'absolute', top:-44, right:-44, zIndex:3, width:170, height:170, pointerEvents:'none', animation:'spin-badge 16s linear infinite' }}>
      <svg viewBox="0 0 170 170" width={170} height={170}>
        <defs>
          <path id="circ" d={`M 85 85 m -${r} 0 a ${r} ${r} 0 1 1 ${2*r} 0 a ${r} ${r} 0 1 1 -${2*r} 0`}/>
        </defs>
        <circle cx={85} cy={85} r={82} fill={P.cream} stroke={P.ink} strokeWidth={1}/>
        <circle cx={85} cy={85} r={42} fill={P.hot}/>
        <text fontFamily={P.display} fontWeight={800} fontSize={11} letterSpacing={2} fill={P.ink}>
          <textPath href="#circ">{text + text}</textPath>
        </text>
        <text x={85} y={92} fontFamily={P.serif} fontStyle="italic" fontSize={42} fill="#fff" textAnchor="middle">★</text>
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section style={{ padding:'56px 0 24px', position:'relative', overflow:'hidden' }}>
      <div aria-hidden style={{ position:'absolute', right:-40, top:-20, fontFamily:P.serif, fontStyle:'italic', fontSize:380, color:'var(--p-hot)', opacity:.06, lineHeight:.8, pointerEvents:'none', userSelect:'none' }}>insider</div>

      <Container>
      <div className="ci-hero-grid" style={{ gap:48 }}>
        <div>
          <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:28 }}>
            <span style={{ display:'inline-block', width:36, height:1, background:'var(--p-ink)' }}/>
            <span style={{ ...tx.eyebrow }}>The insider's all-star cheer guide · Est. 2025</span>
          </div>
          <h1 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(56px, 7.2vw, 116px)', margin:'0 0 28px', letterSpacing:'-.025em', lineHeight:.92 }}>
            What no one<br/>
            tells you about <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>all-star cheer</span><br/>
            <span style={{ color:'var(--p-muted)' }}>from someone who's </span>
            <span style={{ textDecoration:'underline', textDecorationColor:'var(--p-accent)', textDecorationThickness:5, textUnderlineOffset:8 }}>actually been there.</span>
          </h1>
          <p style={{ fontSize:19, lineHeight:1.45, maxWidth:580, color:'var(--p-inkSoft)', margin:'0 0 32px', textWrap:'pretty' as never }}>
            Honest costs. Real gym selection criteria. The gear that's worth it (and the gear that absolutely isn't). Written by a coach who's been on the mat — not the federation, not the gym marketing team, not a fan blog.
          </p>
          <div style={{ display:'flex', gap:14, alignItems:'center', flexWrap:'wrap' }}>
            <Link href="/parents" style={{ background:'var(--p-hot)', color:'#fff', border:'none', cursor:'pointer', padding:'18px 26px', fontSize:15, fontWeight:700, letterSpacing:'.01em', borderRadius:99, display:'inline-flex', alignItems:'center', gap:10, boxShadow:'0 12px 32px -8px rgba(255,45,126,.5)', fontFamily:'inherit' }}>
              Start with the basics <Icon.arrow/>
            </Link>
            <Link href="/cost-calculator" style={{ background:'transparent', color:'var(--p-ink)', border:'1px solid var(--p-ink)', padding:'17px 24px', fontSize:15, fontWeight:700, cursor:'pointer', borderRadius:99, display:'inline-flex', alignItems:'center', gap:10, fontFamily:'inherit' }}>
              I want the cost breakdown
            </Link>
          </div>
        </div>

        <div style={{ position:'relative' }}>
          <div style={{ position:'absolute', inset:'-20px -28px 28px 28px', background:'var(--p-accent)', borderRadius:'var(--p-radius)', zIndex:0 }}/>
          <Gradient variant="burst" caption="hero · spotlight" ratio="4/5" style={{ position:'relative', zIndex:1 }} dark/>
          <SpinBadge/>
          <div style={{ position:'absolute', bottom:-24, left:-24, zIndex:2, background:'var(--p-ink)', color:'var(--p-cream)', padding:'16px 20px', maxWidth:260 }}>
            <div style={{ ...tx.eyebrow, color:'var(--p-accent)', marginBottom:6 }}>Issue 15 · This Week</div>
            <div style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:22, lineHeight:1.05 }}>
              Worlds is over. <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>Now what?</span>
            </div>
          </div>
        </div>
      </div></Container>

      <Container style={{ marginTop:80, borderTop:'1px solid var(--p-ink)', borderBottom:'1px solid var(--p-ink)' }}>
        <div className="ci-stats">
        {[['131','guides published'],['18 yrs','on the mat'],['4.9 ★','reader rating'],['42K','on the email list']].map(([n,l], i) => (
          <div key={i} style={{ padding:'20px 24px', borderRight: i<3 ? '1px solid var(--p-line)' : 'none' }}>
            <div style={{ fontFamily:'var(--p-display)', fontSize:38, fontWeight:800, lineHeight:1, letterSpacing:'-.02em' }}>{n}</div>
            <div style={{ fontSize:12, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--p-muted)', marginTop:8 }}>{l}</div>
          </div>
        ))}
        </div>
      </Container>
    </section>
  );
}
