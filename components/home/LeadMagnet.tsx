'use client';
import { FormEvent } from 'react';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { P, tx } from '@/lib/palette';

export function LeadMagnet() {
  return (
    <section style={{ background:'var(--p-ink)', color:'var(--p-cream)', padding:'96px 0', position:'relative', overflow:'hidden' }}>
      <div aria-hidden style={{ position:'absolute', left:-30, bottom:-100, fontFamily:P.display, fontSize:340, fontWeight:800, color:'rgba(255,45,126,.07)', lineHeight:.8, letterSpacing:'-.05em', pointerEvents:'none' }}>FREE</div>
      <Container style={{ position:'relative', display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:64, alignItems:'center' }}>
        <div>
          <div style={{ ...tx.eyebrow, color:'var(--p-accent)', marginBottom:24 }}>★ Free download · Updated for the 2026 season</div>
          <h2 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(44px, 5.6vw, 88px)', margin:'0 0 24px', lineHeight:.95, letterSpacing:'-.03em' }}>
            The Bid Season<br/>
            <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>Survival</span> Guide.
          </h2>
          <p style={{ fontSize:19, lineHeight:1.5, color:'rgba(250,246,241,.78)', maxWidth:520, margin:'0 0 32px', textWrap:'pretty' as never }}>
            64 pages. Every checklist, packing template, fee tracker, and judge-side scoring note you need to survive — and actually enjoy — your first bid season. Free, no upsell.
          </p>
          <ul style={{ listStyle:'none', padding:0, margin:'0 0 36px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px 24px', maxWidth:560 }}>
            {['Pre-comp packing list (mom-tested)','NCA / D2 / Worlds bid map','Hotel/flight booking timeline','What judges actually score','Hair & makeup cheat sheet','Real cost spreadsheet (XLSX)'].map((b) => (
              <li key={b} style={{ display:'flex', alignItems:'center', gap:10, fontSize:14, fontWeight:500 }}>
                <span style={{ display:'inline-grid', placeItems:'center', width:18, height:18, background:'var(--p-hot)', color:'#fff', borderRadius:99 }}><Icon.check/></span>
                {b}
              </li>
            ))}
          </ul>
          <form onSubmit={(e: FormEvent) => e.preventDefault()} style={{ display:'flex', maxWidth:520, alignItems:'stretch', background:'rgba(255,255,255,.06)', borderRadius:99, padding:6, border:'1px solid rgba(255,255,255,.12)' }}>
            <span style={{ display:'grid', placeItems:'center', padding:'0 14px', color:'rgba(250,246,241,.55)' }}><Icon.mail/></span>
            <input type="email" placeholder="your@email.com" style={{ flex:1, background:'transparent', border:'none', outline:'none', color:'var(--p-cream)', fontSize:15, fontFamily:'inherit', fontWeight:500 }}/>
            <button type="submit" style={{ background:'var(--p-hot)', color:'#fff', border:'none', cursor:'pointer', padding:'14px 22px', borderRadius:99, fontWeight:700, fontSize:14, letterSpacing:'.01em', display:'inline-flex', alignItems:'center', gap:8, fontFamily:'inherit' }}>
              Send me the guide <Icon.arrow/>
            </button>
          </form>
          <div style={{ fontSize:12, color:'rgba(250,246,241,.5)', marginTop:14 }}>Joined by 41,238 other cheer moms. We don't sell your info. Unsubscribe whenever.</div>
        </div>
        <div style={{ position:'relative', display:'grid', placeItems:'center' }}>
          <div style={{ position:'relative', transform:'rotate(-4deg)', width:'min(360px, 100%)' }}>
            <div style={{ position:'absolute', inset:'8px -10px -10px 8px', background:'var(--p-accent)', borderRadius:'var(--p-radius)' }}/>
            <div style={{ position:'relative', aspectRatio:'3/4', background:'var(--p-hot)', borderRadius:'var(--p-radius)', padding:32, color:'#fff', display:'flex', flexDirection:'column', justifyContent:'space-between', boxShadow:'0 40px 80px -20px rgba(0,0,0,.55)' }}>
              <div style={{ ...tx.eyebrow, fontSize:11, letterSpacing:'.18em' }}>CheerInsider · The Survival Series</div>
              <div>
                <div style={{ fontFamily:'var(--p-display)', fontSize:54, fontWeight:800, lineHeight:.9 }}>Bid Season</div>
                <div style={{ fontFamily:P.serif, fontStyle:'italic', fontSize:64, lineHeight:.9, marginTop:-4 }}>Survival</div>
                <div style={{ fontFamily:'var(--p-display)', fontSize:54, fontWeight:800, lineHeight:.9, marginTop:-6 }}>Guide.</div>
                <div style={{ display:'inline-block', marginTop:18, padding:'4px 10px', background:'var(--p-ink)', color:'var(--p-cream)', fontSize:11, letterSpacing:'.12em', textTransform:'uppercase', fontWeight:700 }}>2026 Edition · 64 pages</div>
              </div>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'end', fontSize:11, opacity:.85 }}>
                <span>cheerinsider.com</span>
                <span style={{ fontFamily:P.serif, fontStyle:'italic', fontSize:32, lineHeight:.6 }}>★</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
