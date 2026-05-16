'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Pill } from '@/components/ui/Pill';
import { Icon } from '@/components/ui/Icon';
import { P, tx } from '@/lib/palette';

const CHECKLIST = [
  { q:'Have they given you the season total in writing — not just monthly tuition?', red:'Verbal-only quote is the #1 red flag.' },
  { q:'Are competition fees, choreo, uniforms, and travel itemized separately?', red:'"It\'s all included" usually means it\'s not.' },
  { q:'Can you talk to two current parents — without the coach in the room?', red:"If they're hesitant to put you in touch, that's your answer." },
  { q:'Is there a written refund policy if your kid quits or gets injured?', red:'Some gyms keep 100% no matter what.' },
  { q:'Are "optional" privates actually required for competition time?', red:'Ask alumni directly.' },
  { q:'Does the gym have liability insurance + USASF safety credentials posted?', red:"If they can't show you, walk." },
  { q:"Have you seen the actual practice space, not just the lobby?", red:"Lobby Instagram ≠ training environment." },
  { q:'Do older athletes look happy — or stressed?', red:'Walk the floor during a Level 5 practice if you can.' },
  { q:'Is there a clear path from current level to next level?', red:'Some gyms keep kids at Level 2 forever to fill teams.' },
  { q:'Have they pressured you to commit by a specific date?', red:"Real gyms don't need hard-sell tactics." },
];

export default function GymGuidePage() {
  const [checks, setChecks] = useState<Set<number>>(new Set([0,2,5]));
  const toggle = (i: number) => {
    const c = new Set(checks);
    c.has(i) ? c.delete(i) : c.add(i);
    setChecks(c);
  };

  return (
    <>
      {/* Hero */}
      <section style={{ padding:'48px 0 56px', borderBottom:'1px solid var(--p-line)' }}>
        <Container>
          <div style={{ display:'flex', alignItems:'center', gap:14, fontSize:13, color:'var(--p-muted)', marginBottom:24 }}>
            <Link href="/">Home</Link><span>›</span><Link href="/parents">Parents</Link><span>›</span><span style={{ color:'var(--p-ink)' }}>Gym Selection Checklist</span>
          </div>
          <Pill style={{ marginBottom:24 }}>★ THE GYM SELECTION SERIES · PART 2 OF 4</Pill>
          <h1 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(56px,7.2vw,120px)', margin:'0 0 24px', letterSpacing:'-.03em', lineHeight:.92 }}>
            How to tell if a gym is <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>actually</span> good, or just loud on Instagram.
          </h1>
          <p style={{ fontSize:19, lineHeight:1.5, color:'var(--p-inkSoft)', margin:0, maxWidth:760 }}>
            Ten questions to ask before you sign. Print this. Take it to your gym tour. Tick them off as you go.
          </p>
        </Container>
      </section>

      {/* Checklist */}
      <section style={{ padding:'80px 0' }}>
        <Container max={1100} style={{ display:'grid', gridTemplateColumns:'1fr 280px', gap:48, alignItems:'start' }}>
          <div>
            {/* Score bar */}
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'18px 24px', background:'var(--p-ink)', color:'var(--p-cream)', marginBottom:24 }}>
              <div>
                <div style={{ ...tx.eyebrow, color:'var(--p-accent)', marginBottom:4 }}>Your score</div>
                <div style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:34, lineHeight:1, letterSpacing:'-.02em' }}>
                  <span style={{ color:'var(--p-hot)' }}>{checks.size}</span> / {CHECKLIST.length}
                </div>
              </div>
              <div style={{ textAlign:'right', fontSize:13, color:'rgba(250,246,241,.7)', maxWidth:260, lineHeight:1.4 }}>
                <strong style={{ color:'var(--p-accent)' }}>
                  {checks.size >= 8 ? 'Sign with confidence.' : checks.size >= 5 ? 'Push back on the gaps.' : "Walk away — this isn't the gym."}
                </strong>
                <div style={{ marginTop:4 }}>8+ green checks is the bar.</div>
              </div>
            </div>

            <ol style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:14 }}>
              {CHECKLIST.map((c, i) => (
                <li key={i} onClick={() => toggle(i)} style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:18, padding:'18px 22px', border:'1px solid var(--p-line)', background: checks.has(i) ? 'var(--p-cream)' : 'var(--p-paper)', cursor:'pointer', alignItems:'start' }}>
                  <button aria-pressed={checks.has(i)} onClick={e => { e.stopPropagation(); toggle(i); }} style={{ width:32, height:32, borderRadius:6, background: checks.has(i) ? 'var(--p-hot)' : 'transparent', border: checks.has(i) ? 'none' : '1.5px solid var(--p-ink)', color:'#fff', display:'grid', placeItems:'center', cursor:'pointer', flexShrink:0, marginTop:2 }}>
                    {checks.has(i) && <Icon.check/>}
                  </button>
                  <div>
                    <div style={{ display:'flex', alignItems:'baseline', gap:10, marginBottom:6 }}>
                      <span style={{ fontFamily:'var(--p-display)', fontSize:20, fontWeight:800, color:'var(--p-hot)', letterSpacing:'-.02em', lineHeight:1 }}>{String(i+1).padStart(2,'0')}</span>
                      <h3 style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:19, margin:0, letterSpacing:'-.01em', lineHeight:1.2 }}>{c.q}</h3>
                    </div>
                    <p style={{ fontSize:13.5, lineHeight:1.5, color:'var(--p-muted)', margin:0, paddingLeft:32 }}>
                      <span style={{ ...tx.eyebrow, color:'var(--p-hot)', fontSize:10, marginRight:6 }}>Why it matters:</span>
                      {c.red}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Sidebar */}
          <aside style={{ position:'sticky', top:96, display:'flex', flexDirection:'column', gap:18 }}>
            <div style={{ background:'var(--p-hot)', color:'#fff', padding:24 }}>
              <div style={{ ...tx.eyebrow, marginBottom:10 }}>Bookmark this</div>
              <h4 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:24, margin:'0 0 12px', letterSpacing:'-.02em', lineHeight:1.05 }}>The full PDF checklist</h4>
              <p style={{ fontSize:13.5, lineHeight:1.5, margin:'0 0 14px', opacity:.95 }}>Printable. One page. Take it to every gym tour.</p>
              <button style={{ width:'100%', background:'#fff', color:'var(--p-ink)', border:'none', padding:'10px 14px', fontSize:13, fontWeight:700, fontFamily:'inherit', cursor:'pointer', borderRadius:99 }}>Download PDF →</button>
            </div>
            <div style={{ padding:'18px 0', borderTop:'1px solid var(--p-line)' }}>
              <div style={{ ...tx.eyebrow, color:'var(--p-muted)', marginBottom:10 }}>Series · Gym Selection</div>
              <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:12, fontSize:13.5 }}>
                {[['Pt 1','Why gym choice matters more than coach choice', false],['Pt 2','The 10-question checklist', true],['Pt 3','Red flags I\'ve seen 100 times', false],['Pt 4','How to leave a gym without scorched earth', false]].map(([p,t,a], i) => (
                  <li key={i} style={{ opacity: a ? 1 : .6 }}>
                    <div style={{ ...tx.eyebrow, color:'var(--p-hot)', fontSize:10 }}>{p}</div>
                    <div style={{ fontWeight: a ? 700 : 500, marginTop:2 }}>{t as string}</div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
