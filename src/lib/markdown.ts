import { marked } from 'marked';

marked.setOptions({ gfm: true, breaks: false });

/** Render a markdown string to HTML (server-side, for AEO static content). */
export function renderMarkdown(markdown: string): string {
  return marked.parse(markdown) as string;
}

/**
 * Split markdown into two halves at a paragraph break near the middle, so an
 * in-article ad can be inserted between them. Returns empty `second` for short
 * documents (below `minChars`) where an in-article ad would not make sense.
 */
export function splitMarkdown(
  markdown: string,
  minChars = 1500,
): { first: string; second: string } {
  const trimmed = markdown.trim();
  if (trimmed.length < minChars) return { first: trimmed, second: '' };

  const mid = Math.floor(trimmed.length / 2);
  const searchRadius = 1200;
  let breakAt = trimmed.indexOf('\n\n', mid);
  if (breakAt === -1 || breakAt > mid + searchRadius) {
    breakAt = trimmed.lastIndexOf('\n\n', mid);
  }
  if (breakAt === -1) return { first: trimmed, second: '' };

  const cut = breakAt + 2;
  return { first: trimmed.slice(0, cut), second: trimmed.slice(cut).trimStart() };
}
