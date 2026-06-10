import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { Gradient } from '@/components/ui/Gradient';
import { Icon } from '@/components/ui/Icon';
import { P, tx } from '@/lib/palette';

const TESTS = [
  { name:'Megan T.', meta:'Level 2 mom · Atlanta', quote:'I read three articles before my daughter\'s tryout and saved myself $1,800 in "optional" fees. Only cheer site I trust.', stars:5, g:'halo' as const },
  { name:'Priya R.', meta:'Level 4 mom · Chicago', quote:'The negotiation script in the cost series literally got us $600 off our season. Forwarded to every mom on the team.', stars:5, g:'stripes' as const },
  { name:'Tasha W.', meta:'Level 5 mom · Houston', quote:"Used the gym checklist before re-signing for next year. Caught two 'optional' fees that weren't. Saved $1,100 before I even asked.", stars:5, g:'field' as const },
];

export function Testimonials() {
  return (
    <section style={{ padding:'96px 0', background:'var(--p-cream)' }}>
      <Container>
        <SectionHead eyebrow="WHAT CHEER MOMS ARE SAYING" right="Read all 1,402 reviews" rightHref="/about" title={<>Mom-tested. <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>Coach</span>-approved.</>}/>
        <div className="ci-3col" style={{ gap:24, marginTop:48 }}>
          {TESTS.map((t) => (
            <div key={t.name} style={{ background:'var(--p-paper)', border:'1px solid var(--p-line)', padding:28, display:'flex', flexDirection:'column', gap:18, position:'relative' }}>
              <span aria-hidden style={{ position:'absolute', top:-2, right:18, fontFamily:P.serif, fontStyle:'italic', fontSize:120, color:'var(--p-hot)', opacity:.18, lineHeight:1, pointerEvents:'none' }}>"</span>
              <div style={{ display:'inline-flex', gap:2, color:'var(--p-hot)' }}>
                {[1,2,3,4,5].map(s => <Icon.star key={s} style={{ opacity: s<=t.stars ? 1 : .2 }}/>)}
              </div>
              <p style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:22, lineHeight:1.2, letterSpacing:'-.01em', margin:0, position:'relative', color:'var(--p-ink)' }}>{t.quote}</p>
              <div style={{ display:'flex', alignItems:'center', gap:12, marginTop:'auto', paddingTop:18, borderTop:'1px solid var(--p-line)' }}>
                <div style={{ width:42, height:42, borderRadius:99, overflow:'hidden', flexShrink:0 }}>
                  <Gradient variant={t.g} ratio="1/1"/>
                </div>
                <div>
                  <div style={{ fontSize:14, fontWeight:700 }}>{t.name}</div>
                  <div style={{ fontSize:12, color:'var(--p-muted)' }}>{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="ci-rating-bar" style={{ marginTop:48, padding:'24px 32px', background:'var(--p-ink)', color:'var(--p-cream)', gap:32 }}>
          <div style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:64, color:'var(--p-hot)', lineHeight:1, letterSpacing:'-.04em' }}>4.9</div>
          <div>
            <div style={{ display:'inline-flex', gap:3, color:'var(--p-accent)', marginBottom:6 }}>{[1,2,3,4,5].map(s => <Icon.star key={s}/>)}</div>
            <div style={{ fontSize:14, color:'rgba(250,246,241,.85)' }}>From 1,402 reader responses · across the parent, athlete and coach pillars</div>
          </div>
          <a href="/about" style={{ ...tx.eyebrow, color:'var(--p-accent)', display:'inline-flex', alignItems:'center', gap:8 }}>Read all reviews <Icon.arrow/></a>
        </div>
      </Container>
    </section>
  );
}
