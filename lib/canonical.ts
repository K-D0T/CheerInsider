import { SITE } from './siteInfo';

// Next.js emits <link rel="canonical"> only for routes that set
// `alternates.canonical`. Declaring it once in the root layout is not an
// option: child routes that don't override it would inherit the layout's URL
// and point every page at the same canonical. So each route declares its own
// path through this helper, which keeps the host in one place (SITE.url) and
// matches the no-trailing-slash form used by app/sitemap.ts.
export function canonical(path: string) {
  return { canonical: path === '/' ? SITE.url : `${SITE.url}${path}` };
}
