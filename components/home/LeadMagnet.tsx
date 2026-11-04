import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { P, tx } from '@/lib/palette';

export function LeadMagnet() {
  return (
    <section style={{ background:'var(--p-ink)', color:'var(--p-cream)', padding:'96px 0', position:'relative', overflow:'hidden' }}>
      <div aria-hidden style={{ position:'absolute', left:-30, bottom:-100, fontFamily:P.display, fontSize:340, fontWeight:800, color:'rgba(255,45,126,.07)', lineHeight:.8, letterSpacing:'-.05em', pointerEvents:'none' }}>FREE</div>
      <Container style={{ position:'relative' }}>
        <div className="ci-lead-grid" style={{ gap:64 }}>
        <div>
          <div style={{ ...tx.eyebrow, color:'var(--p-accent)', marginBottom:24 }}>★ Free tool · Updated for the 2026 season</div>
          <h2 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(44px, 5.6vw, 88px)', margin:'0 0 24px', lineHeight:.95, letterSpacing:'-.03em' }}>
            The Real Cost<br/>
            <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>Calculator</span>.
          </h2>
          <p style={{ fontSize:19, lineHeight:1.5, color:'rgba(250,246,241,.78)', maxWidth:520, margin:'0 0 32px', textWrap:'pretty' as never }}>
            Estimate what a full all-star season will actually cost your family — tuition, fees, uniforms, travel, and the line items gyms don't mention at tryouts. Free, no email required.
          </p>
          <ul className="ci-checklist" style={{ margin:'0 0 36px', gap:'10px 24px', maxWidth:560 }}>
            {['Every major cost category','Level and travel adjustments','The "optional" fees that aren\'t','Monthly cash-flow view','Compare against typical ranges','Based on real cost patterns'].map((b) => (
              <li key={b} style={{ display:'flex', alignItems:'center', gap:10, fontSize:14, fontWeight:500 }}>
                <span style={{ display:'inline-grid', placeItems:'center', width:18, height:18, background:'var(--p-hot)', color:'#fff', borderRadius:99 }}><Icon.check/></span>
                {b}
              </li>
            ))}
          </ul>
          <Link href="/cost-calculator" style={{ background:'var(--p-hot)', color:'#fff', border:'none', cursor:'pointer', padding:'18px 28px', fontSize:15, fontWeight:700, letterSpacing:'.01em', borderRadius:99, display:'inline-flex', alignItems:'center', gap:10, boxShadow:'0 12px 32px -8px rgba(255,45,126,.5)', fontFamily:'inherit' }}>
            Open the calculator <Icon.arrow/>
          </Link>
          <div style={{ fontSize:12, color:'rgba(250,246,241,.5)', marginTop:14 }}>Runs in your browser. We don't collect your numbers.</div>
        </div>
        <div style={{ position:'relative', display:'grid', placeItems:'center' }}>
          <div style={{ position:'relative', transform:'rotate(-4deg)', width:'min(360px, 100%)' }}>
            <div style={{ position:'absolute', inset:'8px -10px -10px 8px', background:'var(--p-accent)', borderRadius:'var(--p-radius)' }}/>
            <div style={{ position:'relative', aspectRatio:'3/4', background:'var(--p-hot)', borderRadius:'var(--p-radius)', padding:32, color:'#fff', display:'flex', flexDirection:'column', justifyContent:'space-between', boxShadow:'0 40px 80px -20px rgba(0,0,0,.55)' }}>
              <div style={{ ...tx.eyebrow, fontSize:11, letterSpacing:'.18em' }}>CheerInsider · Free Tools</div>
              <div>
                <div style={{ fontFamily:'var(--p-display)', fontSize:54, fontWeight:800, lineHeight:.9 }}>The Real</div>
                <div style={{ fontFamily:P.serif, fontStyle:'italic', fontSize:64, lineHeight:.9, marginTop:-4 }}>Cost</div>
                <div style={{ fontFamily:'var(--p-display)', fontSize:54, fontWeight:800, lineHeight:.9, marginTop:-6 }}>Calculator.</div>
                <div style={{ display:'inline-block', marginTop:18, padding:'4px 10px', background:'var(--p-ink)', color:'var(--p-cream)', fontSize:11, letterSpacing:'.12em', textTransform:'uppercase', fontWeight:700 }}>2026 Edition · Free</div>
              </div>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'end', fontSize:11, opacity:.85 }}>
                <span>cheer-insider.com</span>
                <span style={{ fontFamily:P.serif, fontStyle:'italic', fontSize:32, lineHeight:.6 }}>★</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
}
