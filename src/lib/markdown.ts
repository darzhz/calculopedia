import { marked } from 'marked';

marked.setOptions({ gfm: true, breaks: false });

/** Render a markdown string to HTML (server-side, for AEO static content). */
export function renderMarkdown(markdown: string): string {
  return marked.parse(markdown) as string;
}
