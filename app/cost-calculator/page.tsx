'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Pill } from '@/components/ui/Pill';
import { Icon } from '@/components/ui/Icon';
import { P, tx } from '@/lib/palette';

export default function CostCalculatorPage() {
  const [level, setLevel] = useState(4);
  const [comps, setComps] = useState(8);
  const [team, setTeam] = useState<'rec'|'prep'|'competitive'>('competitive');
  const [travel, setTravel] = useState<'local'|'regional'|'nationals'>('regional');
  const [privates, setPrivates] = useState(true);

  const tuitionMonthly = ({ 1:185, 2:225, 3:270, 4:295, 5:320, 6:360 } as Record<number,number>)[level] ?? 295;
  const tuition = tuitionMonthly * 10;
  const placement = team === 'rec' ? 0 : 400;
  const choreo = team === 'rec' ? 250 : team === 'prep' ? 700 : 1250;
  const uniform = team === 'rec' ? 600 : team === 'prep' ? 1200 : 1840;
  const travelPerComp = travel === 'local' ? 280 : travel === 'regional' ? 1080 : 1620;
  const travelCost = travelPerComp * comps;
  const compFees = 300 * comps;
  const hairMakeup = 150 * comps;
  const privateTraining = privates ? 2800 : 0;
  const teamMom = team === 'competitive' ? 680 : 0;
  const banquet = team === 'rec' ? 250 : 2020;
  const total = tuition + placement + choreo + uniform + travelCost + compFees + hairMakeup + privateTraining + teamMom + banquet;

  const lines: [string,number,string][] = [
    ['Tuition', tuition, `$${tuitionMonthly}/mo × 10 mo · Level ${level}`],
    ['Team placement fee', placement, team === 'rec' ? 'Not charged on rec teams' : 'One-time, deducted from choreo'],
    ['Choreography & music', choreo, `${team === 'rec' ? 'Light' : team === 'prep' ? 'Standard' : 'Custom'} package`],
    ['Uniform + warmups', uniform, 'Required, gym-supplied'],
    ['Travel (hotels, flights, gas)', travelCost, `${comps} comps × $${travelPerComp} avg`],
    ['Competition entry fees', compFees, `$300 × ${comps} events`],
    ['Hair, bows, makeup', hairMakeup, 'Per-comp recurring'],
    ['Private tumbling lessons', privateTraining, privates ? '~$80/wk × 35 wk' : 'Skipped'],
    ['Team mom fund', teamMom, team === 'competitive' ? '"Optional" but expected' : 'Not collected'],
    ['Banquet, photos, video', banquet, 'End-of-season'],
  ];

  const fmt = (n: number) => '$' + n.toLocaleString();

  return (
    <>
      {/* Hero */}
      <section style={{ padding:'48px 0 64px', borderBottom:'1px solid var(--p-line)' }}>
        <Container>
          <div style={{ display:'flex', alignItems:'center', gap:14, fontSize:13, color:'var(--p-muted)', marginBottom:24 }}>
            <Link href="/">Home</Link><span>›</span><Link href="/parents">Parents</Link><span>›</span><span style={{ color:'var(--p-ink)' }}>Cost Calculator</span>
          </div>
          <Pill style={{ marginBottom:24 }}>★ INTERACTIVE · UPDATED MAY 2026</Pill>
          <h1 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(56px,7.2vw,120px)', margin:'0 0 24px', letterSpacing:'-.03em', lineHeight:.92 }}>
            What's an all-star season <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>actually</span> going to cost you?
          </h1>
          <p style={{ fontSize:19, lineHeight:1.5, color:'var(--p-inkSoft)', margin:0, maxWidth:760 }}>
            Move the dials. We use real numbers, sourced from 142 cheer-mom budgets submitted by readers in 2025.
          </p>
        </Container>
      </section>

      {/* Calculator */}
      <section style={{ padding:'64px 0', background:'var(--p-paper)' }}>
        <Container>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1.3fr', gap:48, alignItems:'start' }}>
            {/* Inputs */}
            <div style={{ display:'flex', flexDirection:'column', gap:24, position:'sticky', top:96 }}>
              <CalcRow label="Team level">
                <div style={{ display:'flex', gap:6 }}>
                  {[1,2,3,4,5,6].map(l => (
                    <button key={l} onClick={() => setLevel(l)} style={{ flex:1, padding:'12px 0', fontFamily:'var(--p-display)', fontWeight:800, fontSize:18, background: l===level ? 'var(--p-hot)' : 'transparent', color: l===level ? '#fff' : 'var(--p-ink)', border:'1px solid var(--p-ink)', cursor:'pointer' }}>L{l}</button>
                  ))}
                </div>
              </CalcRow>

              <CalcRow label="Team type">
                <div style={{ display:'flex', gap:6 }}>
                  {([['rec','Rec'],['prep','Prep'],['competitive','Competitive']] as const).map(([k,v]) => (
                    <button key={k} onClick={() => setTeam(k)} style={{ flex:1, padding:'12px 0', fontSize:14, fontWeight:700, background: k===team ? 'var(--p-ink)' : 'transparent', color: k===team ? 'var(--p-cream)' : 'var(--p-ink)', border:'1px solid var(--p-ink)', cursor:'pointer', fontFamily:'inherit' }}>{v}</button>
                  ))}
                </div>
              </CalcRow>

              <CalcRow label={`Competitions per season · ${comps}`}>
                <input type="range" min={2} max={14} value={comps} onChange={e => setComps(+e.target.value)} style={{ width:'100%', accentColor:'var(--p-hot)' }}/>
                <div style={{ display:'flex', justifyContent:'space-between', fontSize:11, color:'var(--p-muted)', marginTop:4 }}>
                  <span>2</span><span>8 avg</span><span>14</span>
                </div>
              </CalcRow>

              <CalcRow label="Travel scope">
                <div style={{ display:'flex', gap:6 }}>
                  {([['local','Local'],['regional','Regional'],['nationals','Nationals']] as const).map(([k,v]) => (
                    <button key={k} onClick={() => setTravel(k)} style={{ flex:1, padding:'12px 0', fontSize:14, fontWeight:700, background: k===travel ? 'var(--p-ink)' : 'transparent', color: k===travel ? 'var(--p-cream)' : 'var(--p-ink)', border:'1px solid var(--p-ink)', cursor:'pointer', fontFamily:'inherit' }}>{v}</button>
                  ))}
                </div>
              </CalcRow>

              <CalcRow label="Private tumbling lessons">
                <button onClick={() => setPrivates(!privates)} style={{ width:'100%', padding:'12px 16px', textAlign:'left', display:'flex', alignItems:'center', justifyContent:'space-between', background: privates ? 'var(--p-accent)' : 'transparent', color:'var(--p-ink)', border:'1px solid var(--p-ink)', cursor:'pointer', fontFamily:'inherit', fontSize:14, fontWeight:700 }}>
                  <span>{privates ? 'Including' : 'Skipped'} private lessons</span>
                  <span style={{ fontFamily:'var(--p-display)', fontWeight:800 }}>{privates ? '$2,800' : '$0'}</span>
                </button>
              </CalcRow>
            </div>

            {/* Result */}
            <div>
              <div style={{ background:'var(--p-ink)', color:'var(--p-cream)', padding:'40px 36px', position:'relative', overflow:'hidden' }}>
                <div aria-hidden style={{ position:'absolute', bottom:-80, right:-20, fontFamily:'var(--p-display)', fontSize:260, fontWeight:800, lineHeight:.8, color:'rgba(255,45,126,.08)', pointerEvents:'none' }}>$</div>
                <div style={{ ...tx.eyebrow, color:'var(--p-accent)', marginBottom:14 }}>Estimated season total</div>
                <div style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(72px,9vw,144px)', lineHeight:.9, letterSpacing:'-.04em', color:'var(--p-hot)' }}>{fmt(total)}</div>
                <div style={{ fontSize:14, color:'rgba(250,246,241,.7)', marginTop:8, position:'relative' }}>
                  ≈ {fmt(Math.round(total/12))} / month · {fmt(Math.round(total/comps))} per competition
                </div>
              </div>

              <div style={{ marginTop:32, border:'1px solid var(--p-ink)' }}>
                <div style={{ display:'grid', gridTemplateColumns:'1.4fr auto 1.2fr', padding:'12px 18px', background:'var(--p-ink)', color:'var(--p-cream)', fontSize:11, letterSpacing:'.1em', textTransform:'uppercase' as const, fontWeight:700 }}>
                  <span>Line item</span><span>Cost</span><span style={{ paddingLeft:18 }}>Notes</span>
                </div>
                {lines.map(([k,v,n], i) => (
                  <div key={i} style={{ display:'grid', gridTemplateColumns:'1.4fr auto 1.2fr', padding:'12px 18px', borderTop:'1px solid var(--p-line)', background: i%2===0 ? 'var(--p-paper)' : 'var(--p-cream)', alignItems:'center' }}>
                    <span style={{ fontSize:14, fontWeight:600 }}>{k}</span>
                    <span style={{ fontSize:15, fontWeight:700, fontFamily:'var(--p-display)', minWidth:80, textAlign:'right' }}>{fmt(v)}</span>
                    <span style={{ fontSize:12.5, color:'var(--p-muted)', paddingLeft:18 }}>{n}</span>
                  </div>
                ))}
                <div style={{ display:'grid', gridTemplateColumns:'1.4fr auto 1.2fr', padding:'16px 18px', background:'var(--p-hot)', color:'#fff', fontWeight:800, alignItems:'center' }}>
                  <span>SEASON TOTAL</span>
                  <span style={{ fontFamily:'var(--p-display)', fontSize:24, textAlign:'right' }}>{fmt(total)}</span>
                  <span style={{ paddingLeft:18, fontSize:11, fontWeight:600, opacity:.85 }}>Source: 142 reader budgets</span>
                </div>
              </div>

              <div style={{ marginTop:24, display:'flex', gap:10, flexWrap:'wrap' }}>
                <span style={{ background:'var(--p-hot)', color:'#fff', padding:'14px 22px', borderRadius:99, fontWeight:700, fontSize:14, display:'inline-flex', alignItems:'center', gap:8, cursor:'pointer' }}>Email me this breakdown <Icon.mail/></span>
                <span style={{ background:'transparent', color:'var(--p-ink)', border:'1px solid var(--p-ink)', padding:'13px 20px', borderRadius:99, fontWeight:700, fontSize:14, cursor:'pointer' }}>Download as .xlsx →</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function CalcRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ ...tx.eyebrow, color:'var(--p-muted)', marginBottom:10 }}>{label}</div>
      {children}
    </div>
  );
}
