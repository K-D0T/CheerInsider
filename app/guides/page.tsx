import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { Gradient } from '@/components/ui/Gradient';
import { Pill } from '@/components/ui/Pill';
import { P, tx } from '@/lib/palette';

export const metadata = { title: 'Educational Guides' };

const GUIDES = [
  { eyebrow:'LEVELS EXPLAINED',  title:'The all-star level system, explained from scratch (Level 1–7)', meta:'11 min', g:'flash' as const },
  { eyebrow:'SCORING',           title:'How judges actually score: a panel-by-panel breakdown', meta:'9 min', g:'halo' as const },
  { eyebrow:'SKILLS',            title:'What tumbling skills are legal at each level?', meta:'7 min', g:'stripes' as const },
  { eyebrow:'DEFINITIONS',       title:'Cheer glossary: every term from "all-girl" to "XO" explained', meta:'14 min', g:'field' as const },
  { eyebrow:'COMPETITION TYPES', title:'NCA, D2, Worlds: what\'s the difference and which matters?', meta:'8 min', g:'burst' as const },
  { eyebrow:'TRYOUT PROCESS',    title:'How placement decisions actually work inside a gym', meta:'6 min', g:'pulse' as const },
];

export default function GuidesPage() {
  return (
    <>
      <section style={{ padding:'48px 0 56px', borderBottom:'1px solid var(--p-line)' }}>
        <Container>
          <div style={{ display:'flex', alignItems:'center', gap:14, fontSize:13, color:'var(--p-muted)', marginBottom:24 }}>
            <Link href="/">Home</Link><span>›</span><span style={{ color:'var(--p-ink)' }}>Educational Guides</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:64, alignItems:'end' }}>
            <div>
              <Pill style={{ marginBottom:24 }}>★ THE EDUCATION PILLAR · 42 GUIDES</Pill>
              <h1 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(60px,7.6vw,124px)', margin:'0 0 24px', letterSpacing:'-.03em', lineHeight:.92 }}>
                The rules of <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>the sport</span>, explained honestly.
              </h1>
              <p style={{ fontSize:19, lineHeight:1.5, color:'var(--p-inkSoft)', margin:0, maxWidth:620 }}>
                Levels, scoring, skill progressions, terminology — all the stuff the federations assume you already know. 42 guides, zero jargon.
              </p>
            </div>
            <Gradient variant="burst" ratio="4/5" caption="education pillar"/>
          </div>
        </Container>
      </section>

      <section style={{ padding:'64px 0 96px' }}>
        <Container>
          <SectionHead eyebrow="ALL GUIDES" title={<>Start <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>here</span>.</>}/>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'32px 24px', marginTop:48 }}>
            {GUIDES.map((g, i) => (
              <div key={i} style={{ display:'flex', flexDirection:'column', gap:14, cursor:'pointer' }}>
                <Gradient variant={g.g} ratio="4/3"/>
                <div style={{ ...tx.eyebrow, color:'var(--p-hot)' }}>{g.eyebrow}</div>
                <h3 style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:24, margin:0, letterSpacing:'-.02em', lineHeight:1.1 }}>{g.title}</h3>
                <div style={{ fontSize:13, color:'var(--p-muted)', marginTop:'auto' }}>{g.meta}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
