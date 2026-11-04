import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { Gradient } from '@/components/ui/Gradient';
import { Pill } from '@/components/ui/Pill';
import { getAllArticles, getArticleBySlug, articlePath } from '@/lib/articles';
import { P, tx } from '@/lib/palette';

const LEAD_SLUG = 'the-24k-season';

export function Featured() {
  const lead = getArticleBySlug(LEAD_SLUG);

  // Next three most-recently-updated articles, excluding the lead.
  const rest = getAllArticles()
    .filter((a) => a.slug !== LEAD_SLUG)
    .slice(0, 3)
    .map((a) => ({
      eyebrow: a.card.eyebrow,
      title: a.title,
      meta: `${a.readTime} · ${a.section === 'gear' ? 'Gear' : a.section === 'guides' ? 'Guide' : 'Parents'}`,
      g: a.gradient,
      href: articlePath(a),
    }));

  if (!lead) return null;

  return (
    <section style={{ padding:'96px 0', background:'var(--p-paper)', borderTop:'1px solid var(--p-line)', borderBottom:'1px solid var(--p-line)' }}>
      <Container>
        <SectionHead eyebrow="START HERE · MOST READ" right="View all articles" rightHref="/parents" title={<>The week in <span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400 }}>cheer</span>.</>}/>
        <div className="ci-featured-grid" style={{ gap:48, marginTop:48 }}>
          <article style={{ display:'flex', flexDirection:'column', gap:24 }}>
            <Link href={articlePath(lead)} style={{ position:'relative', display:'block' }}>
              <Gradient variant={lead.gradient} ratio="16/11"/>
              <Pill style={{ position:'absolute', top:18, left:18 }}>Cover Story</Pill>
            </Link>
            <div style={{ ...tx.eyebrow, color:'var(--p-hotDeep)' }}>{lead.card.eyebrow}</div>
            <Link href={articlePath(lead)}>
              <h3 style={{ fontFamily:'var(--p-display)', fontWeight:800, letterSpacing:'-.025em', lineHeight:.98, fontSize:'clamp(34px, 3.4vw, 50px)', margin:0 }}>
                {lead.title}
              </h3>
            </Link>
            <p style={{ fontSize:18, lineHeight:1.5, margin:0, color:'var(--p-inkSoft)', maxWidth:620, textWrap:'pretty' as never }}>
              {lead.description}
            </p>
            <div style={{ display:'flex', alignItems:'center', gap:14, fontSize:13, color:'var(--p-muted)', flexWrap:'wrap' }}>
              <span><b style={{ color:'var(--p-ink)' }}>By Lauren K.</b> · CheerInsider editorial</span>
              <span style={{ marginLeft:'auto' }}>{lead.readTime} read</span>
            </div>
          </article>

          <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
            {rest.map((it, i) => (
              <Link key={it.href} href={it.href} style={{ display:'grid', gridTemplateColumns:'140px 1fr', gap:20, padding:'24px 0', borderTop:'1px solid var(--p-line)', borderBottom: i===rest.length-1 ? '1px solid var(--p-line)' : 'none', cursor:'pointer', alignItems:'start' }}>
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
