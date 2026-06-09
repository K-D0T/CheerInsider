import Link from 'next/link';
import { P, tx } from '@/lib/palette';

const COLS = [
  { h:'Start here', items:[['New cheer mom','/parents'],['My kid wants to try out','/guides'],["I'm an athlete",'/guides'],['Cost calculator','/cost-calculator'],['Levels & scoring','/guides']] },
  { h:'Topics',     items:[['Parent resources','/parents'],['Educational guides','/guides'],['Gear roundups','/gear'],['Cost calculator','/cost-calculator'],['Gym guide','/gym-guide']] },
  { h:'Roundups',   items:[['Cheer shoes 2026','/gear/cheer-shoes-2026'],['All gear','/gear'],['20 things every cheer mom needs','/parents/20-things'],['The $24K season','/parents/the-24k-season'],['Team mom trap','/parents/team-mom-trap']] },
  { h:'Site',       items:[['About Lauren','/about'],['Editorial standards','/about'],['Affiliate policy','/about'],['Contact','/about'],['Press kit','/about']] },
];

export function Footer() {
  return (
    <footer style={{ background:'var(--p-ink)', color:'var(--p-cream)', padding:'80px 0 32px', position:'relative', overflow:'hidden' }}>
      <div aria-hidden style={{ position:'absolute', bottom:-120, right:-30, lineHeight:.7, fontFamily:P.display, fontSize:380, fontWeight:800, color:'rgba(255,45,126,.07)', pointerEvents:'none', letterSpacing:'-.05em' }}>cheer.</div>
      <div style={{ width:'min(1320px, 92%)', margin:'0 auto', position:'relative' }}>
        <div className="ci-footer-grid" style={{ display:'grid', gridTemplateColumns:'1.4fr repeat(4, 1fr)', gap:48, alignItems:'start' }}>
          <div>
            <Link href="/" style={{ fontFamily:P.display, fontSize:46, fontWeight:800, letterSpacing:'-.03em', lineHeight:1 }}>
              Cheer<span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>Insider</span>
            </Link>
            <p style={{ maxWidth:300, color:'rgba(250,246,241,.65)', fontSize:14, lineHeight:1.55, marginTop:18 }}>
              Honest, insider-written content about all-star cheerleading. Founded by Lauren K., former CCA-certified coach and current cheer mom of two.
            </p>
            <div style={{ marginTop:24, display:'flex', flexDirection:'column', gap:10, fontSize:12.5, color:'rgba(250,246,241,.5)' }}>
              <span>📍 Based in Tampa, FL</span>
              <span>✉ lauren@cheer-insider.com</span>
            </div>
          </div>
          {COLS.map((c) => (
            <div key={c.h}>
              <div style={{ ...tx.eyebrow, color:'var(--p-accent)', marginBottom:16 }}>{c.h}</div>
              <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                {c.items.map(([label, href]) => (
                  <li key={label}><Link href={href} style={{ color:'rgba(250,246,241,.85)' }}>{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop:64, paddingTop:24, borderTop:'1px solid rgba(250,246,241,.12)', display:'flex', justifyContent:'space-between', alignItems:'center', gap:24, flexWrap:'wrap', fontSize:12, color:'rgba(250,246,241,.5)' }}>
          <span>© 2026 CheerInsider, LLC · Not affiliated with USASF, Varsity, or any federation. · Editorial content is AI-assisted; cost figures are illustrative. <a href="/about" style={{ color:'inherit', textDecoration:'underline' }}>Learn more</a></span>
          <span style={{ display:'flex', gap:18 }}>
            <a href="/about">Privacy</a><a href="/about">Terms</a><a href="/about">Affiliate disclosures</a><a href="/about">Editorial standards</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
