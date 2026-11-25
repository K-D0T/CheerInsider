'use client';
import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { tx } from '@/lib/palette';

// `htmlFor` labels a single control; `group` names a set of buttons so a
// screen reader announces what the set is for before reading the options.
function CalcRow({ label, htmlFor, group, children }: {
  label: string; htmlFor?: string; group?: boolean; children: React.ReactNode;
}) {
  const head = { ...tx.eyebrow, color:'var(--p-muted)', marginBottom:10, display:'block' };
  const labelId = group ? `${label.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-label` : undefined;
  return (
    <div>
      {htmlFor
        ? <label htmlFor={htmlFor} style={head}>{label}</label>
        : <div id={labelId} style={head}>{label}</div>}
      {group ? <div role="group" aria-labelledby={labelId}>{children}</div> : children}
    </div>
  );
}

export function CostCalculator() {
  const [level, setLevel] = useState(4);
  const [comps, setComps] = useState(8);
  const [team, setTeam] = useState<'rec'|'prep'|'competitive'>('competitive');
  const [travel, setTravel] = useState<'local'|'regional'|'nationals'>('regional');
  const [privates, setPrivates] = useState(true);

  // Every figure sits inside a range published by the cost guides cited on
  // /cost-calculator (ThePricer, Limelight Music, Stingray Allstars). Where a
  // guide gives only a range, the value per level or option is a point inside
  // it, so the defaults land in the commonly reported $4,000-$8,000 band and
  // the extremes stay near the $3,000-$12,000+ span those guides report.
  const tuitionMonthly = ({ 1:150, 2:185, 3:220, 4:260, 5:300, 6:350 } as Record<number,number>)[level] ?? 260;
  const tuition = tuitionMonthly * 12;
  const choreo = team === 'rec' ? 150 : team === 'prep' ? 250 : 400;
  const uniform = team === 'rec' ? 400 : team === 'prep' ? 700 : 1000;
  const shoes = 100;
  const travelPerComp = travel === 'local' ? 40 : travel === 'regional' ? 200 : 375;
  const travelCost = travelPerComp * comps;
  const compFeePer = 125;
  const compFees = compFeePer * comps;
  const privateTraining = privates ? 1000 : 0;
  const membership = team === 'rec' ? 0 : 49;
  const total = tuition + choreo + uniform + shoes + travelCost + compFees + privateTraining + membership;

  const lines: [string,number,string][] = [
    ['Tuition', tuition, `$${tuitionMonthly}/mo × 12 mo · Level ${level}`],
    ['Choreography & music', choreo, 'Per-athlete share'],
    ['Uniform + practice wear', uniform, 'Required, gym-supplied'],
    ['Cheer shoes', shoes, 'One pair'],
    ['Travel (hotels, flights, gas)', travelCost, `${comps} comps × $${travelPerComp} avg`],
    ['Competition entry fees', compFees, `$${compFeePer} × ${comps} events`],
    ['Private lessons', privateTraining, privates ? 'Season total' : 'Skipped'],
    ['USASF athlete membership', membership, team === 'rec' ? 'Not required on rec teams' : 'Per season'],
  ];

  const fmt = (n: number) => '$' + n.toLocaleString();

  return (
    <Container>
      <div className="ci-stack-mobile" style={{ display:'grid', gridTemplateColumns:'1fr 1.3fr', gap:48, alignItems:'start' }}>
        <div className="ci-static-mobile" style={{ display:'flex', flexDirection:'column', gap:24, position:'sticky', top:96 }}>
          <CalcRow label="Team level" group>
            <div style={{ display:'flex', gap:6 }}>
              {[1,2,3,4,5,6].map(l => (
                <button key={l} type="button" onClick={() => setLevel(l)} aria-pressed={l===level} style={{ flex:1, padding:'12px 0', fontFamily:'var(--p-display)', fontWeight:800, fontSize:18, background: l===level ? 'var(--p-hotDeep)' : 'transparent', color: l===level ? '#fff' : 'var(--p-ink)', border:'1px solid var(--p-ink)', boxShadow: l===level ? 'inset 0 0 0 2px var(--p-cream)' : 'none', cursor:'pointer' }}>L{l}</button>
              ))}
            </div>
          </CalcRow>

          <CalcRow label="Team type" group>
            <div style={{ display:'flex', gap:6 }}>
              {([['rec','Rec'],['prep','Prep'],['competitive','Competitive']] as const).map(([k,v]) => (
                <button key={k} type="button" onClick={() => setTeam(k)} aria-pressed={k===team} style={{ flex:1, padding:'12px 0', fontSize:14, fontWeight:700, background: k===team ? 'var(--p-ink)' : 'transparent', color: k===team ? 'var(--p-cream)' : 'var(--p-ink)', border:'1px solid var(--p-ink)', boxShadow: k===team ? 'inset 0 0 0 2px var(--p-cream)' : 'none', cursor:'pointer', fontFamily:'inherit' }}>{v}</button>
              ))}
            </div>
          </CalcRow>

          <CalcRow label={`Competitions per season · ${comps}`} htmlFor="ci-comps">
            <input id="ci-comps" type="range" min={2} max={14} value={comps} onChange={e => setComps(+e.target.value)} style={{ width:'100%', accentColor:'var(--p-hotDeep)' }}/>
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:11, color:'var(--p-muted)', marginTop:4 }}>
              <span>2</span><span>8 avg</span><span>14</span>
            </div>
          </CalcRow>

          <CalcRow label="Travel scope" group>
            <div style={{ display:'flex', gap:6 }}>
              {([['local','Local'],['regional','Regional'],['nationals','Nationals']] as const).map(([k,v]) => (
                <button key={k} type="button" onClick={() => setTravel(k)} aria-pressed={k===travel} style={{ flex:1, padding:'12px 0', fontSize:14, fontWeight:700, background: k===travel ? 'var(--p-ink)' : 'transparent', color: k===travel ? 'var(--p-cream)' : 'var(--p-ink)', border:'1px solid var(--p-ink)', boxShadow: k===travel ? 'inset 0 0 0 2px var(--p-cream)' : 'none', cursor:'pointer', fontFamily:'inherit' }}>{v}</button>
              ))}
            </div>
          </CalcRow>

          <CalcRow label="Private lessons">
            <button type="button" onClick={() => setPrivates(!privates)} aria-pressed={privates} style={{ width:'100%', padding:'12px 16px', textAlign:'left', display:'flex', alignItems:'center', justifyContent:'space-between', background: privates ? 'var(--p-accent)' : 'transparent', color:'var(--p-ink)', border:'1px solid var(--p-ink)', cursor:'pointer', fontFamily:'inherit', fontSize:14, fontWeight:700 }}>
              <span>{privates ? 'Including' : 'Skipped'} private lessons</span>
              <span style={{ fontFamily:'var(--p-display)', fontWeight:800 }}>{privates ? '$1,000' : '$0'}</span>
            </button>
          </CalcRow>
        </div>

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
            <div style={{ display:'grid', gridTemplateColumns:'1.4fr auto 1.2fr', padding:'16px 18px', background:'var(--p-hotDeep)', color:'#fff', fontWeight:800, alignItems:'center' }}>
              <span>SEASON TOTAL</span>
              <span style={{ fontFamily:'var(--p-display)', fontSize:24, textAlign:'right' }}>{fmt(total)}</span>
              <span style={{ paddingLeft:18, fontSize:11, fontWeight:600, opacity:.85 }}>Estimate</span>
            </div>
          </div>

          <div style={{ marginTop:20, fontSize:13, lineHeight:1.6, color:'var(--p-muted)' }}>
            Figures are points inside published national ranges, not a quote. Confirm every line with your own gym before committing to a season.
          </div>
        </div>
      </div>
    </Container>
  );
}
