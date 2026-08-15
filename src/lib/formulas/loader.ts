import type { FormulaFn } from './types';

/**
 * Client-side formula loader. Uses `import.meta.glob` so each calculator page
 * only downloads the formula chunk it needs (code-split, better CWV).
 */
const modules = import.meta.glob('./*.ts', {
  eager: false,
}) as Record<string, () => Promise<{ compute: FormulaFn }>>;

export async function loadFormula(id: string): Promise<FormulaFn> {
  const mod = modules[`./${id}.ts`] ?? modules[`./${id}.js`];
  if (!mod) throw new Error(`Formula module not found: ${id}`);
  return (await mod()).compute;
}
