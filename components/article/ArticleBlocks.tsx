import { Fragment } from 'react';
import { Block } from '@/lib/articles';
import { SectionHead } from '@/components/ui/SectionHead';
import { Gradient } from '@/components/ui/Gradient';
import { Pill } from '@/components/ui/Pill';
import { Icon } from '@/components/ui/Icon';
import { AdUnit } from '@/components/ui/AdUnit';
import { renderInline } from './inline';
import { P, tx } from '@/lib/palette';

// Renders an article's body blocks. An in-article ad is inserted after the
// second block, and again roughly two-thirds through long articles —
// placements that follow AdSense's "natural break" guidance.
export function ArticleBlocks({ blocks }: { blocks: Block[] }) {
  const textBlocks = blocks.filter((b) => b.type === 'p' || b.type === 'h2').length;
  const midAdIndex = textBlocks > 8 ? Math.floor(blocks.length * 0.66) : -1;

  return (
    <>
      {blocks.map((block, i) => (
        <Fragment key={i}>
          {renderBlock(block)}
          {i === 1 && <AdUnit format="inline" style={{ margin: '32px 0' }} />}
          {i === midAdIndex && <AdUnit format="inline" style={{ margin: '32px 0' }} />}
        </Fragment>
      ))}
    </>
  );
}

function renderBlock(block: Block) {
  switch (block.type) {
    case 'p':
      if (block.serif) {
        return (
          <p style={{ margin: '0 0 32px', fontFamily: P.serif, fontStyle: 'italic', fontSize: 21, color: 'var(--p-inkSoft)', lineHeight: 1.45 }}>
            {renderInline(block.text)}
          </p>
        );
      }
      return (
        <p style={{ margin: '0 0 24px' }}>
          {block.dropcap && (
            <span style={{ float: 'left', fontFamily: 'var(--p-display)', fontWeight: 800, fontSize: 88, lineHeight: .8, paddingRight: 14, paddingTop: 6, color: 'var(--p-hot)', letterSpacing: '-.04em' }}>
              {block.text.charAt(0)}
            </span>
          )}
          {renderInline(block.dropcap ? block.text.slice(1) : block.text)}
        </p>
      );

    case 'h2':
      return (
        <h2 style={{ fontFamily: 'var(--p-display)', fontWeight: 800, fontSize: 36, margin: '48px 0 16px', letterSpacing: '-.02em', lineHeight: 1.05 }}>
          {renderInline(block.text, 'accent')}
        </h2>
      );

    case 'h3':
      return (
        <h3 style={{ fontFamily: 'var(--p-display)', fontWeight: 700, fontSize: 24, margin: '40px 0 12px', letterSpacing: '-.02em' }}>
          {renderInline(block.text, 'accent')}
        </h3>
      );

    case 'quote':
      if (block.variant === 'bleed') {
        return (
          <blockquote className="ci-bleed-mobile" style={{ margin: '56px -80px', padding: '48px 80px', background: 'var(--p-hot)', color: '#fff' }}>
            <p style={{ fontFamily: 'var(--p-display)', fontWeight: 800, fontSize: 'clamp(36px,4.4vw,64px)', lineHeight: 1.02, letterSpacing: '-.03em', margin: 0 }}>
              {renderInline(block.text, 'accent')}
            </p>
          </blockquote>
        );
      }
      return (
        <blockquote style={{ margin: '48px 0', padding: '32px 36px', background: 'var(--p-cream)', borderLeft: '4px solid var(--p-hot)' }}>
          <p style={{ fontFamily: 'var(--p-display)', fontWeight: 700, fontSize: 30, lineHeight: 1.15, letterSpacing: '-.02em', margin: 0 }}>
            {renderInline(block.text, 'accent')}
          </p>
        </blockquote>
      );

    case 'table': {
      const cols = `1.4fr ${block.head.slice(1).map(() => '1fr').join(' ')}`;
      return (
        <div style={{ border: '1px solid var(--p-ink)', margin: '24px 0', fontSize: 14.5 }}>
          <div style={{ display: 'grid', gridTemplateColumns: cols, padding: '12px 18px', background: 'var(--p-ink)', color: 'var(--p-cream)', fontWeight: 700, fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase' as const }}>
            {block.head.map((h, i) => <span key={i}>{h}</span>)}
          </div>
          {block.rows.map((row, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: cols, padding: '10px 18px', borderTop: '1px solid var(--p-line)', fontVariantNumeric: 'tabular-nums' as const, background: i % 2 === 0 ? 'var(--p-paper)' : 'var(--p-cream)' }}>
              {row.map((cell, j) => (
                <span key={j} style={j === 1 ? { fontWeight: 700 } : j > 1 ? { color: 'var(--p-muted)', fontSize: 13 } : { fontWeight: 600 }}>{cell}</span>
              ))}
            </div>
          ))}
          {block.foot && (
            <div style={{ display: 'grid', gridTemplateColumns: cols, padding: '14px 18px', background: 'var(--p-hot)', color: '#fff', fontWeight: 800 }}>
              {block.foot.map((cell, j) => <span key={j}>{cell}</span>)}
            </div>
          )}
        </div>
      );
    }

    case 'list': {
      const items = block.items.map((item, i) => <li key={i}>{renderInline(item)}</li>);
      const style = { paddingLeft: 22, margin: '0 0 24px', display: 'flex', flexDirection: 'column' as const, gap: 8 };
      return block.ordered ? <ol style={style}>{items}</ol> : <ul style={style}>{items}</ul>;
    }

    case 'numbered':
      return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {block.items.map((it, i) => (
            <article key={i} className="ci-list-row" style={{ display: 'grid', gridTemplateColumns: '140px 1fr auto', gap: 28, padding: '32px 0', borderTop: '1px solid var(--p-line)', alignItems: 'start' }}>
              <div className="ci-list-num" style={{ fontFamily: 'var(--p-display)', fontWeight: 800, fontSize: 80, color: i < 5 ? 'var(--p-hot)' : 'var(--p-ink)', letterSpacing: '-.05em', lineHeight: .85 }}>{it.n}</div>
              <div>
                <div style={{ ...tx.eyebrow, color: 'var(--p-hot)', marginBottom: 8 }}>{it.cat}</div>
                <h3 style={{ fontFamily: 'var(--p-display)', fontWeight: 800, fontSize: 30, margin: '0 0 10px', letterSpacing: '-.02em', lineHeight: 1.05 }}>{it.title}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.5, color: 'var(--p-inkSoft)', margin: 0, maxWidth: 680 }}>{it.body}</p>
              </div>
              <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                <span style={{ ...tx.eyebrow, color: 'var(--p-muted)', fontSize: 10 }}>{it.read} min read</span>
              </div>
            </article>
          ))}
        </div>
      );

    case 'responses':
      return (
        <section style={{ margin: '64px 0 0' }}>
          <SectionHead eyebrow={block.heading} right="Submit your response" title={<>The <span style={{ fontFamily: P.serif, fontStyle: 'italic', color: 'var(--p-hot)', fontWeight: 400 }}>conversation</span>.</>} />
          <div className="ci-stack-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginTop: 36 }}>
            {block.items.map((r, i) => (
              <div key={i} style={{ padding: '24px 28px', background: r.stance === 'agree' ? 'var(--p-cream)' : 'var(--p-paper)', border: r.stance === 'agree' ? '1px solid var(--p-hot)' : '1px solid var(--p-line)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <Pill color={r.stance === 'agree' ? 'var(--p-hot)' : 'var(--p-ink)'}>{r.stance === 'agree' ? '★ AGREE' : '× DISAGREE'}</Pill>
                  <span style={{ fontSize: 12, color: 'var(--p-muted)' }}>{r.name}</span>
                </div>
                <p style={{ margin: 0, fontFamily: 'var(--p-display)', fontWeight: 700, fontSize: 18, lineHeight: 1.3, letterSpacing: '-.01em' }}>&quot;{r.text}&quot;</p>
              </div>
            ))}
          </div>
        </section>
      );

    case 'glance':
      return (
        <section style={{ margin: '48px 0' }}>
          <SectionHead eyebrow="THE PICKS · AT A GLANCE" title={<>{renderInline(block.heading, 'accent')}</>} />
          <div className="ci-3col" style={{ gap: 18, marginTop: 36 }}>
            {block.items.map((p, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '130px 1fr', background: 'var(--p-cream)', border: '1px solid var(--p-line)' }}>
                {p.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.img} alt={p.name} style={{ width: 130, height: 130, objectFit: 'contain', background: '#fff', padding: 10 }} />
                ) : (
                  <Gradient variant={p.g} ratio="1/1" />
                )}
                <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <Pill color={p.verdict === 'Buy' ? 'var(--p-hot)' : 'var(--p-ink)'} style={{ alignSelf: 'start', fontSize: 10, padding: '3px 8px' }}>{p.rank}</Pill>
                  <div style={{ fontFamily: 'var(--p-display)', fontWeight: 700, fontSize: 20, letterSpacing: '-.02em', lineHeight: 1.05 }}>{p.name}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 'auto' }}>
                    <span style={{ fontFamily: 'var(--p-display)', fontSize: 30, fontWeight: 800, color: p.verdict === 'Buy' ? 'var(--p-hot)' : 'var(--p-muted)' }}>{p.score}</span>
                    <span style={{ fontSize: 11, color: 'var(--p-muted)' }}>/ 10</span>
                    <span style={{ marginLeft: 'auto', fontFamily: 'var(--p-display)', fontWeight: 800, fontSize: 18 }}>{p.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      );

    case 'review':
      return (
        <section style={{ margin: '48px 0' }}>
          <SectionHead eyebrow="DEEP REVIEWS" title={<>{renderInline(block.heading, 'accent')}</>} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48, marginTop: 48 }}>
            {block.items.map((r, i) => (
              <article key={i} className="ci-featured-grid" style={{ gap: 48, padding: '32px 0', borderBottom: '1px solid var(--p-line)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.img} alt={r.name} style={{ width: '100%', aspectRatio: '4/5', objectFit: 'contain', background: '#f8f8f8', padding: 32 }} />
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 20, marginBottom: 16 }}>
                    <div style={{ ...tx.eyebrow, color: 'var(--p-hot)' }}>{r.rank}</div>
                    <div style={{ fontFamily: 'var(--p-display)', fontSize: 64, fontWeight: 800, color: 'var(--p-hot)', letterSpacing: '-.04em', lineHeight: 1 }}>{r.score}<span style={{ fontSize: 18, color: 'var(--p-muted)', fontWeight: 500 }}>/10</span></div>
                  </div>
                  <h3 style={{ fontFamily: 'var(--p-display)', fontWeight: 800, fontSize: 42, margin: '0 0 6px', letterSpacing: '-.025em', lineHeight: 1 }}>{r.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 }}>
                    <span style={{ display: 'inline-flex', gap: 2, color: 'var(--p-hot)' }}>
                      {[1, 2, 3, 4, 5].map((s) => <Icon.star key={s} style={{ opacity: s <= r.stars ? 1 : .2 }} />)}
                    </span>
                    <span style={{ fontFamily: 'var(--p-display)', fontWeight: 800, fontSize: 24 }}>{r.price}</span>
                  </div>
                  <p style={{ fontSize: 16, lineHeight: 1.55, margin: '0 0 20px', color: 'var(--p-inkSoft)' }}>{r.blurb}</p>
                  <div className="ci-stack-mobile" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    <div>
                      <div style={{ ...tx.eyebrow, color: 'var(--p-hot)', marginBottom: 8 }}>What we loved</div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14 }}>
                        {r.pros.map((p, j) => <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon.check style={{ color: 'var(--p-hot)' }} /> {p}</li>)}
                      </ul>
                    </div>
                    <div>
                      <div style={{ ...tx.eyebrow, color: 'var(--p-muted)', marginBottom: 8 }}>Trade-offs</div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14 }}>
                        {r.cons.map((c, j) => <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--p-muted)' }}><span style={{ display: 'inline-block', width: 12, height: 2, background: 'var(--p-muted)' }} /> {c}</li>)}
                      </ul>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 10, marginTop: 24, flexWrap: 'wrap' }}>
                    <a href={r.buyAmazon} target="_blank" rel="noopener noreferrer nofollow"
                      style={{ background: 'var(--p-hot)', color: '#fff', padding: '12px 18px', fontSize: 13.5, fontWeight: 700, borderRadius: 99, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                      Buy on Amazon <Icon.arrowUp />
                    </a>
                    <a href={r.buyDirect} target="_blank" rel="noopener noreferrer nofollow"
                      style={{ background: 'transparent', color: 'var(--p-ink)', border: '1px solid var(--p-ink)', padding: '11px 16px', fontSize: 13.5, fontWeight: 700, borderRadius: 99, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                      Buy direct ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      );

    case 'specs': {
      const n = block.products.length;
      return (
        <section style={{ margin: '48px 0' }}>
          <SectionHead eyebrow="HEAD-TO-HEAD · ALL PICKS" title={<>{renderInline(block.heading, 'accent')}</>} />
          <div style={{ marginTop: 36, border: '1px solid var(--p-ink)', overflow: 'auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: `1.4fr repeat(${n}, 1fr)`, background: 'var(--p-ink)', color: 'var(--p-cream)', fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase' as const, fontWeight: 700, minWidth: 560 }}>
              <span style={{ padding: '14px 18px' }}>Metric</span>
              {block.products.map((c, i) => <span key={i} style={{ padding: '14px 18px', borderLeft: '1px solid rgba(255,255,255,.15)' }}>{c[0]}</span>)}
            </div>
            {block.metrics.map((m, ri) => (
              <div key={ri} style={{ display: 'grid', gridTemplateColumns: `1.4fr repeat(${n}, 1fr)`, borderTop: '1px solid var(--p-line)', fontSize: 14, background: ri % 2 === 0 ? 'var(--p-cream)' : 'var(--p-paper)', minWidth: 560 }}>
                <span style={{ padding: '14px 18px', fontWeight: 700 }}>{m}</span>
                {block.products.map((c, i) => <span key={i} style={{ padding: '14px 18px', borderLeft: '1px solid var(--p-line)', fontVariantNumeric: 'tabular-nums' as const }}>{c[ri + 1]}</span>)}
              </div>
            ))}
          </div>
        </section>
      );
    }

    case 'note':
      return (
        <div style={{ margin: '32px 0', padding: '24px 32px', background: 'var(--p-cream)', borderLeft: '4px solid var(--p-hot)', fontSize: 14, lineHeight: 1.6, color: 'var(--p-inkSoft)' }}>
          <strong style={{ color: 'var(--p-ink)' }}>{block.title}</strong> {block.text}
        </div>
      );

    case 'cta':
      return (
        <div className="ci-stack-mobile" style={{ marginTop: 64, padding: 40, background: 'var(--p-hot)', color: '#fff', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32, alignItems: 'center' }}>
          <div>
            <div style={{ ...tx.eyebrow, marginBottom: 14, opacity: .85 }}>{block.eyebrow}</div>
            <h3 style={{ fontFamily: 'var(--p-display)', fontWeight: 800, fontSize: 36, margin: '0 0 8px', letterSpacing: '-.025em', lineHeight: 1 }}>
              {block.title.split(/(\*[^*]+\*)/g).map((part, i) =>
                part.startsWith('*') && part.endsWith('*')
                  ? <span key={i} style={{ fontFamily: P.serif, fontStyle: 'italic', fontWeight: 400 }}>{part.slice(1, -1)}</span>
                  : part)}
            </h3>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5, opacity: .92, maxWidth: 480 }}>{block.body}</p>
          </div>
          <span style={{ background: 'var(--p-ink)', color: 'var(--p-cream)', padding: '18px 26px', fontSize: 15, fontWeight: 700, borderRadius: 99, fontFamily: 'inherit', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, justifySelf: 'end' }}>
            {block.button} <Icon.arrow />
          </span>
        </div>
      );
  }
}
