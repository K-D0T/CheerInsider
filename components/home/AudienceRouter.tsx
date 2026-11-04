import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { P, tx } from '@/lib/palette';

const TILES = [
  { tag:'01 · NEW HERE', head:"I'm new to all this", sub:"Your kid just got placed and you're drowning in acronyms, fees and bow politics.", cta:'Start with the costs', bullets:['What a season really costs','What "optional" actually means','How to read the invoice'], kind:'hot', href:'/parents/the-24k-season' },
  { tag:'02 · CHOOSING A GYM', head:'I need to pick a gym', sub:'What separates a good program from a loud one, and the questions to ask before you sign.', cta:'Open the checklist', bullets:['10 questions to ask','Costs in writing','Refund and injury policy'], kind:'ink', href:'/gym-guide' },
  { tag:'03 · LEARNING THE SPORT', head:'I need the rules explained', sub:'Levels, scoring panels, legal skills, and how placement decisions actually get made.', cta:'Read the guides', bullets:['The level system','How judges score','How placement works'], kind:'cream', href:'/guides' },
];

export function AudienceRouter() {
  return (
    <section style={{ padding:'72px 0 96px', borderTop:'1px solid var(--p-line)' }}>
      <Container>
        <div className="ci-head-flex" style={{ marginBottom:36 }}>
          <h2 style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:'clamp(36px, 4.4vw, 64px)', margin:0, maxWidth:760, lineHeight:.95, letterSpacing:'-.025em' }}>
            Start where you <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>actually</span> are.
          </h2>
          <p style={{ maxWidth:340, color:'var(--p-muted)', margin:0, fontSize:15, lineHeight:1.5 }}>
            Three honest entry points. Pick the one that fits — no one's reading every article on this site, and that's fine.
          </p>
        </div>
        <div className="ci-3col" style={{ gap:18 }}>
          {TILES.map((t) => {
            const isHot = t.kind==='hot', isInk = t.kind==='ink', isCream = t.kind==='cream';
            const bg = isHot ? 'var(--p-hot)' : isInk ? 'var(--p-ink)' : 'var(--p-cream)';
            const fg = isHot ? '#fff' : isInk ? 'var(--p-cream)' : 'var(--p-ink)';
            return (
              <Link key={t.tag} href={t.href} style={{ position:'relative', display:'flex', flexDirection:'column', background:bg, color:fg, padding:'32px 28px 28px', minHeight:380, border: isCream ? '1px solid var(--p-ink)' : 'none', borderRadius:'var(--p-radius)', cursor:'pointer' }}>
                <div style={{ ...tx.eyebrow, color: isInk ? 'var(--p-accent)' : isHot ? 'rgba(255,255,255,.75)' : 'var(--p-hot)', marginBottom:18 }}>{t.tag}</div>
                <h3 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:42, margin:'0 0 16px', lineHeight:.95, letterSpacing:'-.025em' }}>{t.head}</h3>
                <p style={{ fontSize:15, lineHeight:1.5, margin:'0 0 28px', opacity:.86, maxWidth:280 }}>{t.sub}</p>
                <ul style={{ listStyle:'none', margin:'0 0 28px', padding:0, display:'flex', flexDirection:'column', gap:8 }}>
                  {t.bullets.map((b) => (
                    <li key={b} style={{ display:'flex', alignItems:'center', gap:10, fontSize:13.5, fontWeight:500 }}>
                      <span style={{ display:'inline-grid', placeItems:'center', width:18, height:18, borderRadius:99, background: isHot ? 'rgba(255,255,255,.2)' : isInk ? 'rgba(255,255,255,.1)' : 'var(--p-ink)', color: isHot ? '#fff' : isInk ? 'var(--p-accent)' : 'var(--p-cream)' }}><Icon.check/></span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop:'auto', display:'flex', alignItems:'center', justifyContent:'space-between', gap:12 }}>
                  <span style={{ display:'inline-flex', alignItems:'center', gap:8, fontSize:14, fontWeight:700 }}>{t.cta} <Icon.arrow/></span>
                  <span style={{ fontFamily:P.serif, fontStyle:'italic', fontSize:46, lineHeight:.6, color: isCream ? 'var(--p-hot)' : 'var(--p-accent)', opacity:.8 }}>★</span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
