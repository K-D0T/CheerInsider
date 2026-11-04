import { ReactNode } from 'react';
import Link from 'next/link';
import { P } from '@/lib/palette';

// Renders inline markers from article JSON:
//   **text**       → <strong>
//   *text*         → emphasis (the site's italic serif in "accent" mode, a
//                    plain <em> in body text)
//   [text](/path)  → a link
//
// Links inherit their surrounding colour and carry an underline, so a link in
// body prose reads as a link without fighting the type. An href with a scheme
// (or a protocol-relative //) leaves the site and gets target/rel; everything
// else is internal and goes through next/link.
//
// One capture group only: String.split keeps the matched separators, which is
// how the markers survive the split. The link alternative comes first so that
// "[**bold**](/x)" is taken as one link rather than split at the bold.
const TOKEN = /(\[[^\]\n]+\]\([^)\s]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g;
const LINK = /^\[([^\]\n]+)\]\(([^)\s]+)\)$/;
const EXTERNAL = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

const linkStyle = { color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 2 } as const;

export function renderInline(text: string, mode: 'body' | 'accent' = 'body'): ReactNode[] {
  return text.split(TOKEN).map((part, i) => {
    const link = LINK.exec(part);
    if (link) {
      const [, label, href] = link;
      const children = renderInline(label, mode);
      if (EXTERNAL.test(href)) {
        return (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={linkStyle}>{children}</a>
        );
      }
      return <Link key={i} href={href} style={linkStyle}>{children}</Link>;
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      const inner = part.slice(1, -1);
      if (mode === 'accent') {
        return <span key={i} style={{ fontFamily: P.serif, fontStyle: 'italic', color: 'var(--p-hot)', fontWeight: 400 }}>{inner}</span>;
      }
      return <em key={i}>{inner}</em>;
    }
    return part;
  });
}
