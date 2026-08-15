import type { APIRoute } from 'astro';
import { loadEntries, pageUrl } from '@/lib/registry';
import { categoryBySlug, SITE_URL } from '@/lib/site';

/** Lightweight client-side search index consumed by the header SearchBox. */
export const GET: APIRoute = async () => {
  const entries = loadEntries();
  const items = entries.map((e) => ({
    title: e.config.title,
    url: `${SITE_URL}${pageUrl(e)}`,
    category: categoryBySlug(e.config.category)?.label ?? e.config.category,
    icon: e.config.icon ?? categoryBySlug(e.config.category)?.icon ?? 'calculate',
    description: e.config.shortDescription,
    keywords: (e.config.keywords ?? []).join(' '),
  }));

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
