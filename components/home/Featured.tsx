import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { Gradient } from '@/components/ui/Gradient';
import { Pill } from '@/components/ui/Pill';
import { Icon } from '@/components/ui/Icon';
import { P, tx } from '@/lib/palette';

const ITEMS = [
  { eyebrow:'GYM SELECTION', title:'Should you switch gyms this summer? The 5 questions to answer before June.', meta:'8 min · Decision guide', g:'flash' as const, href:'/gym-guide' },
  { eyebrow:'COST · SUMMER', title:'Summer camp vs. privates: what actually moves the needle (and what doesn\'t)', meta:'10 min · Parent guide', g:'halo' as const, href:'/parents/summer-vs-privates' },
  { eyebrow:'OPINION · UNPAID LABOR', title:'The "Team Mom" job is unpaid labor. We need to stop pretending it isn\'t.', meta:'6 min · Opinion', g:'stripes' as const, href:'/parents/team-mom-trap' },
];

export function Featured() {
  return (
    <section style={{ padding:'96px 0', background:'var(--p-paper)', borderTop:'1px solid var(--p-line)', borderBottom:'1px solid var(--p-line)' }}>
      <Container>
        <SectionHead eyebrow="THIS WEEK · MUST READ" right="View all articles" rightHref="/parents" title={<>The week in <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>cheer</span>.</>}/>
        <div className="ci-featured-grid" style={{ gap:48, marginTop:48 }}>
          <article style={{ display:'flex', flexDirection:'column', gap:24 }}>
            <Link href="/parents/the-24k-season" style={{ position:'relative', display:'block' }}>
              <Gradient variant="glow" ratio="16/11" caption="cover · receipts spread"/>
              <Pill style={{ position:'absolute', top:18, left:18 }}>Cover Story</Pill>
            </Link>
            <div style={{ ...tx.eyebrow, color:'var(--p-hotDeep)' }}>THE COST DEEP DIVE</div>
            <Link href="/parents/the-24k-season">
              <h3 style={{ fontFamily:'var(--p-display)', fontWeight:800, letterSpacing:'-.025em', lineHeight:.98, fontSize:'clamp(34px, 3.4vw, 50px)', margin:0 }}>
                The $24,000 cheer season: every dollar, tracked.
              </h3>
            </Link>
            <p style={{ fontSize:18, lineHeight:1.5, margin:0, color:'var(--p-inkSoft)', maxWidth:620, textWrap:'pretty' as never }}>
              Tuition was a third of what one Level 4 family actually paid. We followed their invoices for a full season — here's the full ledger.
            </p>
            <div style={{ display:'flex', alignItems:'center', gap:14, fontSize:13, color:'var(--p-muted)' }}>
              <span style={{ display:'inline-block', width:32, height:32, borderRadius:99, background:'var(--p-accent)' }}/>
              <span><b style={{ color:'var(--p-ink)' }}>By Lauren K.</b> · former CCA coach, Level 5 cheer mom</span>
              <span style={{ marginLeft:'auto' }}>11 min read · May 2026</span>
            </div>
          </article>

          <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
            {ITEMS.map((it, i) => (
              <Link key={i} href={it.href} style={{ display:'grid', gridTemplateColumns:'140px 1fr', gap:20, padding:'24px 0', borderTop:'1px solid var(--p-line)', borderBottom: i===ITEMS.length-1 ? '1px solid var(--p-line)' : 'none', cursor:'pointer', alignItems:'start' }}>
                <Gradient variant={it.g} ratio="1/1"/>
                <div>
                  <div style={{ ...tx.eyebrow, color:'var(--p-muted)', marginBottom:10 }}>{it.eyebrow}</div>
                  <h4 style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:22, margin:'0 0 10px', lineHeight:1.05, letterSpacing:'-.02em' }}>{it.title}</h4>
                  <div style={{ fontSize:12.5, color:'var(--p-muted)' }}>{it.meta}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
