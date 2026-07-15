import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { Icon } from '@/components/ui/Icon';
import { getArticlesBySection } from '@/lib/articles';
import { P, tx } from '@/lib/palette';

export function Pillars() {
  const PILLARS = [
    { num:'01', name:'Educational Guides', desc:'Levels, scoring, skill progressions — the rules of the sport, explained honestly.', count: getArticlesBySection('guides').length, href:'/guides' },
    { num:'02', name:'Parent Resources',   desc:'Cost breakdowns, gym selection, competition prep, mental load.', count: getArticlesBySection('parents').length, href:'/parents' },
    { num:'03', name:'Gear Roundups',      desc:'Tested cheer shoes, bow brands, bags, makeup, practice wear.', count: getArticlesBySection('gear').length, href:'/gear' },
  ];

  return (
    <section style={{ padding:'96px 0' }}>
      <Container>
        <SectionHead eyebrow="THE THREE PILLARS" title={<>Everything we cover, <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>in plain English</span>.</>}/>
        <div className="ci-3col" style={{ gap:0, marginTop:32 }}>
          {PILLARS.map((p, i) => (
            <Link key={i} href={p.href} style={{ padding:'28px 24px 32px', borderRight: i<2 ? '1px solid var(--p-line)' : 'none', borderTop:'4px solid var(--p-ink)', cursor:'pointer' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
                <span style={{ fontFamily:'var(--p-display)', fontSize:36, fontWeight:800, color:'var(--p-hot)', letterSpacing:'-.04em', lineHeight:1 }}>{p.num}</span>
                <span style={{ fontSize:11, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--p-muted)', fontWeight:600 }}>{p.count} articles</span>
              </div>
              <h3 style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:24, margin:'0 0 10px', letterSpacing:'-.02em', lineHeight:1.05 }}>{p.name}</h3>
              <p style={{ fontSize:14, lineHeight:1.5, color:'var(--p-inkSoft)', margin:'0 0 20px' }}>{p.desc}</p>
              <span style={{ display:'inline-flex', alignItems:'center', gap:8, fontSize:13, fontWeight:700 }}>Browse <Icon.arrow/></span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
