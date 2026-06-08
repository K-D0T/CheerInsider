import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { Gradient } from '@/components/ui/Gradient';
import { Pill } from '@/components/ui/Pill';
import { AdUnit } from '@/components/ui/AdUnit';
import { P, tx } from '@/lib/palette';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Summer Camp vs. Privates: What Actually Moves the Needle',
  description: 'Every June, gyms pitch one. Parents sign up for the other. Neither side agrees on which is worth the money. After 18 years on the mat, here\'s the honest breakdown.',
  openGraph: {
    title: 'Summer Camp vs. Privates: What Actually Moves the Needle | CheerInsider',
    description: 'Camps build culture, privates build skills — but only when there\'s a specific skill to fix and a coach who can fix it. Here\'s how to decide for your athlete.',
    type: 'article',
    publishedTime: '2026-05-15T00:00:00Z',
    authors: ['Lauren K.'],
    tags: ['cheer summer camp', 'cheer privates', 'all-star cheerleading', 'cheer training', 'cheer costs'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Summer Camp vs. Privates | CheerInsider',
    description: 'After 18 years on the mat, here\'s the honest breakdown of what\'s worth the money — and what isn\'t.',
  },
};

const RELATED = [
  { eyebrow:'COST DEEP DIVE',  title:'We tracked every penny one Level 4 family spent in a single season', meta:'18 min', g:'glow' as const, href:'/parents/the-24k-season' },
  { eyebrow:'GYM SELECTION',   title:'How to tell if a gym is actually good, or just loud on Instagram',     meta:'9 min',  g:'flash' as const, href:'/gym-guide' },
  { eyebrow:'20 THINGS',       title:'20 things every new cheer mom wishes she\'d known on day one',         meta:'14 min', g:'stripes' as const, href:'/parents/20-things' },
  { eyebrow:'TEAM MOM TRAP',   title:'The "team mom" job is unpaid labor. We need to stop pretending.',     meta:'8 min',  g:'pulse' as const, href:'/parents/team-mom-trap' },
];

export default function SummerVsPrivatesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding:'48px 0 64px', borderBottom:'1px solid var(--p-line)' }}>
        <Container max={1100}>
          <div style={{ display:'flex', alignItems:'center', gap:14, fontSize:13, color:'var(--p-muted)', marginBottom:24 }}>
            <Link href="/">Home</Link><span>›</span><Link href="/parents">Parent Resources</Link><span>›</span><span style={{ color:'var(--p-ink)' }}>Summer Camp vs. Privates</span>
          </div>
          <Pill style={{ marginBottom:24 }}>★ COST · SUMMER TRAINING</Pill>
          <h1 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:'clamp(48px,6vw,92px)', margin:'0 0 24px', letterSpacing:'-.03em', lineHeight:.95, maxWidth:1000 }}>
            Summer camp vs. privates: what actually <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>moves the needle</span> — and what doesn't.
          </h1>
          <p style={{ fontSize:21, lineHeight:1.5, color:'var(--p-inkSoft)', margin:'0 0 36px', maxWidth:780, fontWeight:500 }}>
            Every June, gyms pitch one. Parents sign up for the other. Neither side agrees on which one is worth the money. After 18 years on the mat, here's the honest breakdown.
          </p>
          <div style={{ display:'flex', alignItems:'center', gap:14, paddingTop:24, borderTop:'1px solid var(--p-line)', flexWrap:'wrap' }}>
            <div style={{ width:44, height:44, borderRadius:99, background:'var(--p-accent)' }}/>
            <div>
              <div style={{ fontSize:14, fontWeight:700 }}>By Lauren K.</div>
              <div style={{ fontSize:12.5, color:'var(--p-muted)' }}>Former CCA-certified coach · Cheer mom of two · Tampa, FL</div>
            </div>
            <div style={{ marginLeft:'auto', display:'flex', gap:18, fontSize:13, color:'var(--p-muted)', alignItems:'center' }}>
              <span>May 15, 2026</span><span>·</span><span>10 min read</span>
            </div>
          </div>
        </Container>
        <Container max={1100} style={{ marginTop:48 }}>
          <Gradient variant="field" caption="summer training · camp vs mat time" ratio="21/9" dark/>
        </Container>
      </section>

      {/* Body */}
      <section style={{ padding:'72px 0' }}>
        <Container max={1100} style={{ display:'grid', gridTemplateColumns:'1fr 240px', gap:64, alignItems:'start' }}>
          <article style={{ fontSize:17.5, lineHeight:1.7, color:'var(--p-ink)', maxWidth:700 }}>
            <p style={{ margin:'0 0 24px' }}>
              <span style={{ float:'left', fontFamily:'var(--p-display)', fontWeight:800, fontSize:88, lineHeight:.8, paddingRight:14, paddingTop:6, color:'var(--p-hot)', letterSpacing:'-.04em' }}>E</span>
              very spring, once Worlds results are posted and the group chat finally quiets down, the same question lands in my inbox about 200 times: <em>Should we do summer camp, privates, or both?</em> My answer has changed a lot over 18 years, and the honest version is more complicated than any gym will tell you.
            </p>
            <p style={{ margin:'0 0 24px' }}>
              Here's what I know after watching hundreds of athletes go through both: <strong>camps build culture, privates build skills.</strong> If you're spending money on the wrong one for your kid's current situation, you're not just wasting money — you may actually be slowing them down.
            </p>

            <AdUnit format="inline" style={{ margin:'32px 0' }}/>

            <h2 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:36, margin:'48px 0 16px', letterSpacing:'-.02em', lineHeight:1.05 }}>
              What camp actually <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>does</span>.
            </h2>
            <p style={{ margin:'0 0 24px' }}>
              A good summer camp — NCA, UCA, or a well-run gym camp — gives an athlete three things: high-volume repetition under time pressure, exposure to coaches who aren't their regular staff, and the experience of performing in a low-stakes environment. That last one is underrated.
            </p>
            <p style={{ margin:'0 0 24px' }}>
              Competition-season nerves are real, and they're partly a function of how rarely kids perform in front of strangers. Camp fixes that. An athlete who performs four times a day for four days in front of rotating judges is not the same athlete who shows up to her first comp in October having only stunted in her home gym.
            </p>
            <p style={{ margin:'0 0 24px' }}>
              <strong>Camp is especially valuable for:</strong> Level 1–3 athletes, new flyers and bases learning trust, athletes who struggle with performance nerves, and any kid who's about to move up a level and needs mat time before the season starts.
            </p>
            <p style={{ margin:'0 0 24px' }}>
              <strong>Camp will not help with:</strong> Specific skill gaps (a standing tuck problem is not fixed by doing it wrong 40 more times). Athletes who are burned out and need rest. Kids going into their fifth straight summer of the same camp curriculum.
            </p>

            <h2 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:36, margin:'48px 0 16px', letterSpacing:'-.02em', lineHeight:1.05 }}>
              What privates actually do.
            </h2>
            <p style={{ margin:'0 0 24px' }}>
              A private lesson with a good coach is surgical. It should identify the exact mechanical problem — hip angle at the peak of a tuck, hand position on a lib, timing on a basket — and give the athlete a correction they can feel. One well-run 45-minute private can accomplish what three months of group practice can't, for the right skill.
            </p>

            <blockquote style={{ margin:'48px 0', padding:'32px 36px', background:'var(--p-cream)', borderLeft:'4px solid var(--p-hot)' }}>
              <p style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:28, lineHeight:1.2, letterSpacing:'-.02em', margin:0 }}>
                "One good private is worth ten bad ones. The coach matters more than the format."
              </p>
            </blockquote>

            <p style={{ margin:'0 0 24px' }}>
              The problem: most summer privates aren't surgical. They're the gym's highest-margin product, and many gyms treat them as a revenue line first and a development tool second. A coach who just runs the athlete through the same skills they do in practice — with slightly more one-on-one attention — is not giving you a private. They're giving you a tutoring session for a class that already isn't working.
            </p>
            <p style={{ margin:'0 0 24px' }}>
              <strong>Privates are worth the money when:</strong> There's a specific, named skill to fix. The coach has a clear methodology and gives the athlete something to practice alone. Progress is measurable week over week. Your kid is Level 4+ and the group practice environment can't give enough individual attention.
            </p>
            <p style={{ margin:'0 0 24px' }}>
              <strong>Privates are not worth the money when:</strong> The gym recommends them to everyone without a specific rationale. The coach changes each week. Your kid hasn't mastered the prerequisites for the skill being trained. You're doing it because other families on the team are doing it.
            </p>

            <h2 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:36, margin:'48px 0 16px', letterSpacing:'-.02em', lineHeight:1.05 }}>
              The actual cost breakdown.
            </h2>
            <div style={{ border:'1px solid var(--p-ink)', margin:'24px 0', fontSize:14.5 }}>
              <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr 1.2fr', padding:'12px 18px', background:'var(--p-ink)', color:'var(--p-cream)', fontWeight:700, fontSize:12, letterSpacing:'.08em', textTransform:'uppercase' as const }}>
                <span>Option</span><span>Typical cost</span><span>Best for</span>
              </div>
              {[
                ['NCA/UCA 4-day camp','$400–$650','Level 1–4, new athletes, performance confidence'],
                ['Gym-run summer camp (1 week)','$250–$500','Staying sharp, team bonding, low-pressure reps'],
                ['Weekly privates (June–Aug)','$80–$140/session · $960–$1,680 total','Specific skill gaps, Level 4+ athletes'],
                ['One-time private (skill-focused)','$80–$140 per session','Pre-tryout polish, one named problem to fix'],
                ['Rest (the underrated option)','$0','Burned-out athletes, post-Worlds recovery'],
              ].map(([k,v,n], i) => (
                <div key={i} style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr 1.2fr', padding:'12px 18px', borderTop:'1px solid var(--p-line)', background: i%2===0 ? 'var(--p-paper)' : 'var(--p-cream)' }}>
                  <span style={{ fontWeight:600 }}>{k}</span>
                  <span style={{ fontFamily:'var(--p-display)', fontWeight:700 }}>{v}</span>
                  <span style={{ color:'var(--p-muted)', fontSize:13 }}>{n}</span>
                </div>
              ))}
            </div>

            <h2 style={{ fontFamily:'var(--p-display)', fontWeight:800, fontSize:36, margin:'48px 0 16px', letterSpacing:'-.02em', lineHeight:1.05 }}>
              My actual recommendation.
            </h2>
            <p style={{ margin:'0 0 24px' }}>
              If you're choosing one: <strong>camp for Level 1–3, privates for Level 4+</strong> — with the caveat that privates only work if there's a specific skill to fix and a coach who can actually fix it.
            </p>
            <p style={{ margin:'0 0 24px' }}>
              If you're being pressured to do both: ask the gym to name the specific skill that makes weekly privates necessary for your kid right now. If they can't name it, the answer is camp or rest.
            </p>
            <p style={{ margin:'0 0 32px', fontFamily:P.serif, fontStyle:'italic', fontSize:20, color:'var(--p-inkSoft)', lineHeight:1.5 }}>
              The gyms that make the most money off summer training are not always the ones producing the best athletes in October. Keep that distinction in mind before you write a check.
            </p>
          </article>

          {/* Right rail */}
          <aside style={{ position:'sticky', top:96, display:'flex', flexDirection:'column', gap:20 }}>
            <AdUnit format="rectangle"/>
            <div style={{ padding:'20px 0', borderTop:'1px solid var(--p-line)' }}>
              <div style={{ ...tx.eyebrow, color:'var(--p-muted)', marginBottom:10 }}>Also in Cost & Money</div>
              <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:14, fontSize:14 }}>
                <li><Link href="/parents/the-24k-season" style={{ fontWeight:600, lineHeight:1.3, display:'block' }}>The $24,000 Level 4 season, line by line</Link></li>
                <li><Link href="/cost-calculator" style={{ fontWeight:600, lineHeight:1.3, display:'block' }}>Cost calculator — enter your details</Link></li>
                <li><Link href="/parents/20-things" style={{ fontWeight:600, lineHeight:1.3, display:'block' }}>20 things every cheer mom wishes she'd known</Link></li>
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      {/* Related */}
      <section style={{ padding:'80px 0', borderTop:'1px solid var(--p-line)' }}>
        <Container max={1100}>
          <SectionHead eyebrow="KEEP READING" right="All Parent Resources" rightHref="/parents" title={<>More for <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>parents</span>.</>}/>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:18, marginTop:36 }}>
            {RELATED.map((r, i) => (
              <Link key={i} href={r.href} style={{ display:'flex', flexDirection:'column', gap:12 }}>
                <Gradient variant={r.g} ratio="4/3"/>
                <div style={{ ...tx.eyebrow, color:'var(--p-hot)', marginTop:4 }}>{r.eyebrow}</div>
                <h4 style={{ fontFamily:'var(--p-display)', fontWeight:700, fontSize:19, lineHeight:1.1, margin:0, letterSpacing:'-.02em' }}>{r.title}</h4>
                <div style={{ fontSize:12, color:'var(--p-muted)', marginTop:'auto' }}>{r.meta}</div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
