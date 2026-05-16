export const P = {
  hot:     '#FF1F7A',
  hotDeep: '#C7155F',
  accent:  '#FF6A1A',
  ink:     '#0F0E13',
  inkSoft: '#2A2730',
  cream:   '#FAF6F1',
  paper:   '#FFFFFF',
  chip:    '#FFE9F1',
  muted:   'rgba(15,14,19,.6)',
  line:    'rgba(15,14,19,.12)',
  display: '"Bricolage Grotesque","Helvetica Neue",sans-serif',
  serif:   '"Instrument Serif",Georgia,serif',
  body:    '"Manrope","Helvetica Neue",sans-serif',
  radius:  2,
} as const;

export const tx = {
  eyebrow: {
    fontFamily: P.body,
    fontSize: 11,
    letterSpacing: '.16em',
    textTransform: 'uppercase' as const,
    fontWeight: 700,
  },
  display: {
    fontFamily: P.display,
    fontWeight: 800,
    letterSpacing: '-0.025em',
    lineHeight: '.95',
  },
  serifItalic: {
    fontFamily: P.serif,
    fontStyle: 'italic' as const,
    fontWeight: 400,
    letterSpacing: '-0.005em',
  },
};
