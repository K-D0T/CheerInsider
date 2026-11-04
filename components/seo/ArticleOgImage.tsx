import { ImageResponse } from 'next/og';
import type { Article } from '@/lib/articles';

// Shared by the opengraph-image route in each of the three article sections.
// Every article used to share the site-wide card at app/opengraph-image.tsx,
// so twenty different links previewed identically.
//
// ImageResponse renders through Satori, which supports flexbox only: every
// element needs an explicit display and there is no grid. Colours are the
// palette's literals because CSS variables don't resolve here, and the font
// is the same generic sans-serif the site-wide card uses rather than the
// display face, which would mean shipping font files to the renderer.

export const OG_SIZE = { width: 1200, height: 630 };

const SECTION_LABELS: Record<Article['section'], string> = {
  parents: 'Parent Resources',
  gear: 'Gear',
  guides: 'Educational Guides',
};

// Titles run from 34 to 60 characters, so a single size either wraps the long
// ones to four lines or leaves the short ones looking lost.
function titleSize(title: string): number {
  if (title.length <= 34) return 86;
  if (title.length <= 46) return 74;
  if (title.length <= 56) return 64;
  return 58;
}

export function articleOgImage(article: Article) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0F0E13',
          padding: '72px 88px',
        }}
      >
        <div style={{ display: 'flex', fontFamily: 'sans-serif', fontSize: 24, letterSpacing: '5px', color: '#FF1F7A', fontWeight: 700 }}>
          {article.eyebrow}
        </div>

        <div
          style={{
            display: 'flex',
            fontFamily: 'sans-serif',
            fontSize: titleSize(article.title),
            fontWeight: 900,
            color: '#FAF6F1',
            lineHeight: 1.06,
            letterSpacing: '-2px',
            maxWidth: 1010,
          }}
        >
          {article.title}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'sans-serif', fontSize: 25, color: 'rgba(250,246,241,0.62)' }}>
          <div style={{ display: 'flex', color: '#FAF6F1', fontWeight: 700, letterSpacing: '3px', fontSize: 22 }}>CHEERINSIDER</div>
          <div style={{ display: 'flex', margin: '0 14px' }}>·</div>
          <div style={{ display: 'flex' }}>{SECTION_LABELS[article.section]}</div>
          <div style={{ display: 'flex', margin: '0 14px' }}>·</div>
          <div style={{ display: 'flex' }}>{article.readTime} read</div>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
