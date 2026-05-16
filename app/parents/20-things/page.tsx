import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Gradient } from '@/components/ui/Gradient';
import { Pill } from '@/components/ui/Pill';
import { Icon } from '@/components/ui/Icon';
import { P, tx } from '@/lib/palette';

export const metadata = { title: '20 Things Every New Cheer Mom Wishes She\'d Known' };

const ITEMS = [
  { n:'01', cat:'COST',   t:'The monthly tuition is a third of your real spend.', body:'If your gym quotes $295/mo, plan for ~$24K total. The other two-thirds arrive as separate invoices.', read:3 },
  { n:'02', cat:'COST',   t:'"Optional" almost always means "expected."', body:'Privates, team mom fund, banquet, photo package. Read the room.', read:2 },
  { n:'03', cat:'GYM',    t:'Tour the gym during a Level 5 practice.', body:'The lobby is theater. The mat during senior practice is the real culture.', read:2 },
  { n:'04', cat:'COMP',   t:'Pack two pairs of every white sock.', body:'You will lose one. You will need the other on Sunday morning. Trust me.', read:1 },
  { n:'05', cat:'HAIR',   t:"Buy the gym's bow. Twice.", body:'You will lose one, and you cannot show up Day Two without the matching bow.', read:1 },
  { n:'06', cat:'TRAVEL', t:'Book hotels through the team block — but the night BEFORE.', body:'Day-before flights save $400 and your sanity. Block rates extend by request.', read:2 },
  { n:'07', cat:'COMP',   t:'Comp days are 14 hours. Pack snacks for you.', body:'The vending machine at 11pm in a convention center is a $9 granola bar.', read:1 },
  { n:'08', cat:'GYM',    t:'The coach you sign up for is not always the coach who shows.', body:"Ask about choreo turnover. Some gyms cycle 'guest' choreographers — find out who's actually on the mat.", read:3 },
  { n:'09', cat:'SOCIAL', t:'The group chat is a job.', body:'Mute it on weekends. Reply with one emoji. The world will keep spinning.', read:2 },
  { n:'10', cat:'COST',   t:"Privates aren't a 'next step' — they're an industry.", body:"Most gyms make 40% of profit on private lessons. Treat them as optional even when the coach says they aren't.", read:3 },
  { n:'11', cat:'KID',    t:'Your kid will quit at least once.', body:"Don't panic. Wait 72 hours. They almost always come back.", read:2 },
  { n:'12', cat:'GYM',    t:'There is a "good gym, bad gym" in every metro.', body:"Ask alumni — the gym's reputation among ex-athletes is the real signal.", read:2 },
  { n:'13', cat:'COST',   t:'Get the season total IN WRITING before signing.', body:'Verbal "around $5K" quotes turn into $14K invoices by November.', read:2 },
  { n:'14', cat:'HAIR',   t:'The "competition pony" is a $40 add-on at most comps.', body:'YouTube it once, do it yourself thereafter.', read:1 },
  { n:'15', cat:'COMP',   t:'Score sheets are public. Read them.', body:'After every comp, the score sheets explain exactly where you lost points. Most parents never look.', read:2 },
  { n:'16', cat:'KID',    t:"Your kid's body changes. So will the team.", body:'Late puberty growth spurts often move flyers to bases. This is normal. The gym should be honest about it.', read:3 },
  { n:'17', cat:'GYM',    t:'Asking what something costs is not rude.', body:'Ever. The gym is a business. Treat it like one.', read:1 },
  { n:'18', cat:'COMP',   t:"Sundays are about being on time, not being early.", body:"2-hour pre-call is gym tradition, not gym requirement. Save your kid's legs for the floor.", read:2 },
  { n:'19', cat:'SOCIAL', t:"Don't post the routine video before it's legal to.", body:'Most gyms have a no-post window for choreo IP. Violating it can mean dropped placement.', read:2 },
  { n:'20', cat:'KID',    t:'Cheer ends. Your kid is more than this.', body:'18 is the cliff for most. Build her identity outside the gym while she\'s still in it.', read:3 },
];

export default function TwentyThingsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding:'48px 0 56px', borderBottom:'1px solid var(--p-line)' }}>
        <Container>
          <div style={{ display:'flex', alignItems:'center', gap:14, fontSize:13, color:'var(--p-muted)', marginBottom:24 }}>
            <Link href="/">Home</Link><span>›</span><Link href="/parents">Parents</Link><span>›</span><span style={{ color:'var(--p-ink)' }}>20 Things</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:48, alignItems:'end' }}>
            <div>
              <Pill style={{ marginBottom:20 }}>★ THE LIST · 20 BIG ONES</Pill>
              <div style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(120px,14vw,240px)', lineHeight:.85, letterSpacing:'-.05em', color:'var(--p-hot)', marginBottom:-20 }}>20</div>
              <h1 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(40px,5vw,76px)', margin:'0 0 24px', letterSpacing:'-.025em', lineHeight:.98 }}>
                things every new <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>cheer mom</span> wishes she'd known on day one.
              </h1>
              <p style={{ fontSize:18, lineHeight:1.5, color:'var(--p-inkSoft)', margin:0, maxWidth:580 }}>
                Crowdsourced from 1,200+ moms in our reader survey. The hot ones first.
              </p>
            </div>
            <Gradient variant="stripes" ratio="4/5" caption="cover · twenty"/>
          </div>
        </Container>
      </section>

      {/* List body */}
      <section style={{ padding:'48px 0 96px' }}>
        <Container max={1100}>
          <div style={{ display:'flex', flexDirection:'column' }}>
            {ITEMS.map((it, i) => (
              <article key={i} style={{ display:'grid', gridTemplateColumns:'140px 1fr auto', gap:28, padding:'32px 0', borderTop:'1px solid var(--p-line)', alignItems:'start' }}>
                <div style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:80, color: i<5 ? 'var(--p-hot)' : 'var(--p-ink)', letterSpacing:'-.05em', lineHeight:.85 }}>{it.n}</div>
                <div>
                  <div style={{ ...tx.eyebrow, color:'var(--p-hot)', marginBottom:8 }}>{it.cat}</div>
                  <h3 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:30, margin:'0 0 10px', letterSpacing:'-.02em', lineHeight:1.05 }}>{it.t}</h3>
                  <p style={{ fontSize:16, lineHeight:1.5, color:'var(--p-inkSoft)', margin:0, maxWidth:680 }}>{it.body}</p>
                </div>
                <div style={{ textAlign:'right', display:'flex', flexDirection:'column', alignItems:'flex-end', gap:8 }}>
                  <span style={{ ...tx.eyebrow, color:'var(--p-muted)', fontSize:10 }}>{it.read} min read</span>
                  <span style={{ border:'1px solid var(--p-line)', borderRadius:99, padding:'6px 10px', cursor:'pointer', display:'inline-flex', alignItems:'center', gap:6, fontSize:12, color:'var(--p-ink)' }}>
                    <Icon.bookmark/> Save
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop:64, padding:40, background:'var(--p-hot)', color:'#fff', display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:32, alignItems:'center' }}>
            <div>
              <div style={{ ...tx.eyebrow, marginBottom:14, opacity:.85 }}>Add to the list</div>
              <h3 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:36, margin:'0 0 8px', letterSpacing:'-.025em', lineHeight:1 }}>
                What's <span style={{ fontFamily:P.serif, fontStyle:'italic', fontWeight:400 }}>your</span> #21?
              </h3>
              <p style={{ margin:0, fontSize:16, lineHeight:1.5, opacity:.92, maxWidth:480 }}>
                We update this list every quarter from reader submissions. Send yours — we'll credit you if we publish it.
              </p>
            </div>
            <span style={{ background:'var(--p-ink)', color:'var(--p-cream)', padding:'18px 26px', fontSize:15, fontWeight:700, borderRadius:99, fontFamily:'inherit', cursor:'pointer', display:'inline-flex', alignItems:'center', justifyContent:'center', gap:10, justifySelf:'end' }}>
              Submit your #21 <Icon.arrow/>
            </span>
          </div>
        </Container>
      </section>
    </>
  );
}
