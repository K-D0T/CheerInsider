'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/ui/Icon';
import { P, tx } from '@/lib/palette';

const NAV = [
  { label: 'Guides',          href: '/guides' },
  { label: 'Gear',            href: '/gear/cheer-shoes-2026' },
  { label: 'Parents',         href: '/parents' },
  { label: 'Cost Calculator', href: '/cost-calculator' },
  { label: 'About',           href: '/about' },
];

export function Header() {
  const path = usePathname();
  return (
    <header style={{ position:'sticky', top:0, zIndex:50, background:'rgba(250,246,241,.92)', backdropFilter:'saturate(160%) blur(14px)', borderBottom:'1px solid var(--p-line)' }}>
      <div style={{ width:'min(1320px, 92%)', margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 0', gap:32 }}>
        <Link href="/" style={{ fontFamily:'var(--p-display)', fontSize:30, fontWeight:800, letterSpacing:'-.03em', lineHeight:1 }}>
          Cheer<span style={{ fontFamily:P.serif, fontStyle:'italic', color:'var(--p-hot)', fontWeight:400, fontSize:32 }}>Insider</span>
        </Link>

        <nav className="ci-header-nav" style={{ display:'flex', gap:26, fontSize:14, fontWeight:600 }}>
          {NAV.map((n, i) => {
            const active = path.startsWith(n.href) || (n.href === '/' && path === '/');
            return (
              <Link key={n.href} href={n.href} style={{ position:'relative', opacity: active ? 1 : .8, borderBottom: active ? '2px solid var(--p-hot)' : '2px solid transparent', paddingBottom:2 }}>
                {n.label}
                {i === 0 && (
                  <span style={{ position:'absolute', top:-7, right:-22, fontSize:9, letterSpacing:'.12em', textTransform:'uppercase', background:'var(--p-hot)', color:'#fff', padding:'2px 5px', borderRadius:2, fontWeight:700 }}>20</span>
                )}
              </Link>
            );
          })}
        </nav>

        <div style={{ display:'flex', gap:10, alignItems:'center' }}>
          <button aria-label="Search" style={{ background:'transparent', border:'1px solid var(--p-line)', width:38, height:38, borderRadius:99, color:'inherit', cursor:'pointer', display:'grid', placeItems:'center' }}>
            <Icon.search/>
          </button>
          <Link href="/parents/the-24k-season" className="ci-header-cta" style={{ background:'var(--p-hot)', color:'#fff', border:'none', cursor:'pointer', padding:'10px 18px', borderRadius:99, fontWeight:700, fontSize:13, letterSpacing:'.01em', display:'inline-flex', alignItems:'center', gap:8, fontFamily:'inherit' }}>
            Get the Survival Guide <Icon.arrowUp/>
          </Link>
        </div>
      </div>
    </header>
  );
}
