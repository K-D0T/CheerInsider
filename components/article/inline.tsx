import { ReactNode } from 'react';
import { P } from '@/lib/palette';

// Renders inline markers from article JSON: **text** → <strong>,
// *text* → emphasis. In "accent" mode the emphasis renders as the
// site's italic serif in hot pink (used in headlines/quotes); in
// body mode it renders as a plain <em>.
export function renderInline(text: string, mode: 'body' | 'accent' = 'body'): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
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
