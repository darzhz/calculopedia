import type { APIRoute } from 'astro';
import { loadEntries, pageUrl } from '@/lib/registry';
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/lib/site';

/** llms.txt — an LLM-friendly index of the site's content. */
export const GET: APIRoute = async () => {
  const entries = loadEntries();
  const lines: string[] = [
    `# ${SITE_NAME}`,
    '',
    `> ${SITE_TAGLINE}`,
    '',
    '## Calculators',
    '',
    ...entries.map(
      (e) => `- [${e.config.title}](${SITE_URL}${pageUrl(e)}): ${e.config.shortDescription}`,
    ),
    '',
    '## Key pages',
    '',
    `- [All calculators](${SITE_URL}/calculators/): full directory of tools`,
    `- [Glossary](${SITE_URL}/glossary/): definitions of finance and health terms`,
    `- [Blog](${SITE_URL}/blog/): explainers that link back to the calculators`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
