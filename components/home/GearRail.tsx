import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { Gradient } from '@/components/ui/Gradient';
import { Pill } from '@/components/ui/Pill';
import { Icon } from '@/components/ui/Icon';
import { P, tx } from '@/lib/palette';

const GEAR = [
  { rank:'Best overall shoe', name:'Nfinity Vengeance', price:'$110', stars:5, blurb:'Still the gold standard. Lightweight, locks the heel, holds up a full season and through summer camps.', g:'halo' as const },
  { rank:'Best camp bag',     name:'Nfinity Spirit Backpack', price:'$65', stars:5, blurb:'Fits everything: shoes, bow case, snacks, a full change of clothes. Holds its shape after two years of abuse.', g:'stripes' as const },
  { rank:'Best practice wear', name:'Chassé Performance Shorts', price:'$28', stars:4, blurb:'The only practice shorts that survive a full camp week of tumbling without rolling up. Get two pairs.', g:'field' as const },
  { rank:'Most overrated',    name:'(redacted) Pro Shoe', price:'$140', stars:2, blurb:"You're paying for the bow on the box. Hard pass at any price — especially before summer camps.", g:'pulse' as const },
];

export function GearRail() {
  return (
    <section style={{ padding:'96px 0', background:'var(--p-paper)', borderTop:'1px solid var(--p-line)', borderBottom:'1px solid var(--p-line)' }}>
      <Container>
        <SectionHead eyebrow="GEAR ROUNDUPS · TESTED ON THE MAT" right="All roundups" rightHref="/gear" title={<>The honest <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>gear</span> guide.</>}/>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:18, marginTop:48 }}>
          {GEAR.map((g) => (
            <Link key={g.name} href="/gear/cheer-shoes-2026" style={{ display:'flex', flexDirection:'column', border:'1px solid var(--p-line)', background:'var(--p-cream)', cursor:'pointer' }}>
              <div style={{ position:'relative' }}>
                <Gradient variant={g.g} ratio="1/1"/>
                <Pill style={{ position:'absolute', top:14, left:14, fontSize:10.5 }}>{g.rank}</Pill>
              </div>
              <div style={{ padding:'18px 18px 22px', display:'flex', flexDirection:'column', gap:8, flex:1 }}>
                <div style={{ ...tx.eyebrow, color:'var(--p-muted)' }}>Cheer Shoes</div>
                <div style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:22, letterSpacing:'-.02em', lineHeight:1.05 }}>{g.name}</div>
                <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                  <span style={{ display:'inline-flex', gap:2, color:'var(--p-hot)' }}>
                    {[1,2,3,4,5].map(s => <Icon.star key={s} style={{ opacity: s<=g.stars ? 1 : .18 }}/>)}
                  </span>
                  <span style={{ fontSize:12, color:'var(--p-muted)' }}>{g.stars}.0 / 5</span>
                </div>
                <p style={{ fontSize:13.5, lineHeight:1.5, color:'var(--p-inkSoft)', margin:'4px 0 0', flex:1 }}>{g.blurb}</p>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:14, paddingTop:14, borderTop:'1px solid var(--p-line)' }}>
                  <span style={{ fontFamily:'var(--p-display)', fontSize:20, fontWeight:800 }}>{g.price}</span>
                  <span style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:12.5, fontWeight:700 }}>Read review <Icon.arrow/></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop:24, fontSize:12.5, color:'var(--p-muted)', display:'flex', alignItems:'center', gap:10 }}>
          <span style={{ display:'inline-block', width:6, height:6, borderRadius:99, background:'var(--p-accent)' }}/>
          Some links earn us a small commission. We only recommend gear we'd buy ourselves. Never sponsored, never paid.
        </div>
      </Container>
    </section>
  );
}
