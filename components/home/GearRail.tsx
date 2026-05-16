import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { Gradient } from '@/components/ui/Gradient';
import { Pill } from '@/components/ui/Pill';
import { Icon } from '@/components/ui/Icon';
import { P } from '@/lib/palette';

type GVariant = 'halo' | 'stripes' | 'field' | 'pulse';

const GEAR: {
  rank: string; name: string; cat: string; price: string; stars: number;
  blurb: string; g: GVariant; img: string | null; buy: string | null; href: string;
}[] = [
  {
    rank: 'Best overall shoe',
    name: 'Nfinity Vengeance',
    cat: 'Cheer Shoes',
    price: '$110',
    stars: 5,
    blurb: 'Still the gold standard. Lightweight, locks the heel, holds up a full season and through summer camps.',
    g: 'halo',
    img: 'https://www.nfinity.com/cdn/shop/files/Untitled_design_98.png?crop=center&height=800&v=1776804596&width=800',
    buy: 'https://www.nfinity.com/products/nfinity-vengeance-cheer-shoes',
    href: '/gear/cheer-shoes-2026',
  },
  {
    rank: 'Best camp bag',
    name: 'Nfinity Classic Backpack',
    cat: 'Bags',
    price: '$65',
    stars: 5,
    blurb: 'Fits everything: shoes, bow case, snacks, a full change of clothes. Holds its shape after two years of abuse.',
    g: 'stripes',
    img: 'https://totalspirit.com/cdn/shop/products/Black_ClassicBackpack1.jpg?v=1477872330&width=600',
    buy: 'https://totalspirit.com/products/nfinity-classic-black-backpack',
    href: '/gear/cheer-shoes-2026',
  },
  {
    rank: 'Best practice shorts',
    name: 'Chassé Practice Short',
    cat: 'Practice Wear',
    price: '$28',
    stars: 4,
    blurb: 'The only practice shorts that survive a full camp week of tumbling without rolling up. Get two pairs.',
    g: 'field',
    img: 'https://www.omnicheer.com/cdn/shop/files/61SH_BLK_016_WEB_1.jpg?v=1776191100&width=600',
    buy: 'https://www.omnicheer.com/shop/cheer-practice-wear/practice-wear-bottoms/cheer-shorts/chasse-practice-knit-short_61sh',
    href: '/gear/cheer-shoes-2026',
  },
  {
    rank: 'Most overrated',
    name: '(redacted) Pro Shoe',
    cat: 'Cheer Shoes',
    price: '$140',
    stars: 2,
    blurb: "You're paying for the bow on the box. Hard pass at any price — especially before summer camps.",
    g: 'pulse',
    img: null,
    buy: null,
    href: '/gear/cheer-shoes-2026',
  },
];

export function GearRail() {
  return (
    <section style={{ padding:'96px 0', background:'var(--p-paper)', borderTop:'1px solid var(--p-line)', borderBottom:'1px solid var(--p-line)' }}>
      <Container>
        <SectionHead eyebrow="GEAR ROUNDUPS · TESTED ON THE MAT" right="All roundups" rightHref="/gear" title={<>The honest <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>gear</span> guide.</>}/>
        <div className="ci-4col" style={{ gap:18, marginTop:48 }}>
          {GEAR.map((g) => (
            <div key={g.name} style={{ display:'flex', flexDirection:'column', border:'1px solid var(--p-line)', background:'var(--p-cream)' }}>
              <Link href={g.href} style={{ display:'block', position:'relative' }}>
                {g.img ? (
                  <img
                    src={g.img}
                    alt={g.name}
                    style={{ width:'100%', aspectRatio:'1/1', objectFit:'contain', background:'#fff', padding:16 }}
                  />
                ) : (
                  <Gradient variant={g.g} ratio="1/1"/>
                )}
                <Pill style={{ position:'absolute', top:14, left:14, fontSize:10.5 }}>{g.rank}</Pill>
              </Link>
              <div style={{ padding:'18px 18px 22px', display:'flex', flexDirection:'column', gap:8, flex:1 }}>
                <div style={{ fontSize:10, letterSpacing:'.1em', textTransform:'uppercase' as const, fontWeight:700, color:'var(--p-muted)' }}>{g.cat}</div>
                <div style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:22, letterSpacing:'-.02em', lineHeight:1.05 }}>{g.name}</div>
                <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                  <span style={{ display:'inline-flex', gap:2, color:'var(--p-hot)' }}>
                    {[1,2,3,4,5].map(s => <Icon.star key={s} style={{ opacity: s<=g.stars ? 1 : .18 }}/>)}
                  </span>
                  <span style={{ fontSize:12, color:'var(--p-muted)' }}>{g.stars}.0 / 5</span>
                </div>
                <p style={{ fontSize:13.5, lineHeight:1.5, color:'var(--p-inkSoft)', margin:'4px 0 0', flex:1 }}>{g.blurb}</p>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:14, paddingTop:14, borderTop:'1px solid var(--p-line)', gap:8, flexWrap:'wrap' as const }}>
                  <span style={{ fontFamily:'var(--p-display)', fontSize:20, fontWeight:800 }}>{g.price}</span>
                  <div style={{ display:'flex', gap:8, alignItems:'center' }}>
                    <Link href={g.href} style={{ display:'inline-flex', alignItems:'center', gap:5, fontSize:12, fontWeight:700 }}>
                      Review <Icon.arrow/>
                    </Link>
                    {g.buy && (
                      <a
                        href={g.buy}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        style={{ background:'var(--p-hot)', color:'#fff', padding:'6px 10px', borderRadius:99, fontSize:12, fontWeight:700, display:'inline-flex', alignItems:'center', gap:5 }}
                      >
                        Buy <Icon.arrowUp/>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
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
