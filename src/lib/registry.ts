import type { CalculatorConfig, InputField } from './schema';
import type { InputValues } from './formulas/types';
import { computeFormula } from './formulas';
import type { OutputValues } from './formulas/types';

/**
 * Loads every calculator config from `src/calculators/**` at build time.
 * Uses `import.meta.glob` so configs are resolved through Vite (which handles
 * TypeScript). An invalid config throws here and fails the build.
 */

const modules = import.meta.glob('../calculators/**/*.config.ts', {
  eager: true,
  import: 'default',
}) as Record<string, unknown>;

export interface CalculatorEntry {
  config: CalculatorConfig;
  exampleInputs: InputValues;
  exampleOutputs: OutputValues;
}

export function defaultInputValues(config: CalculatorConfig): InputValues {
  const values: InputValues = {};
  for (const field of config.inputs) {
    values[field.id] = field.default ?? defaultForField(field);
  }
  return values;
}

function defaultForField(field: InputField): number | string | boolean {
  switch (field.type) {
    case 'select':
      return field.default ?? field.options[0]?.value ?? '';
    case 'date':
      return field.default ?? '';
    case 'time':
      return field.default ?? '';
    case 'toggle':
      return field.default ?? false;
    default:
      return field.default ?? 0;
  }
}

export function buildEntry(config: CalculatorConfig): CalculatorEntry {
  const exampleInputs = config.example ?? defaultInputValues(config);
  const exampleOutputs = computeFormula(config.formulaId, exampleInputs);
  return { config, exampleInputs, exampleOutputs };
}

let cache: CalculatorEntry[] | null = null;

/** All calculator entries, sorted by category then slug. */
export function loadEntries(): CalculatorEntry[] {
  if (cache) return cache;

  const entries: CalculatorEntry[] = [];
  for (const [file, raw] of Object.entries(modules)) {
    if (typeof raw !== 'object' || raw == null) {
      throw new Error(`Calculator config module is empty: ${file}`);
    }
    entries.push(buildEntry(raw as CalculatorConfig));
  }

  // Basic uniqueness check on slugs.
  const seen = new Set<string>();
  for (const e of entries) {
    if (seen.has(e.config.slug)) {
      throw new Error(`Duplicate calculator slug: ${e.config.slug}`);
    }
    seen.add(e.config.slug);
  }

  entries.sort(
    (a, b) =>
      a.config.category.localeCompare(b.config.category) ||
      a.config.slug.localeCompare(b.config.slug),
  );

  cache = entries;
  return entries;
}

export function findBySlug(slug: string): CalculatorEntry | undefined {
  return loadEntries().find((e) => e.config.slug === slug);
}

export function findByCategory(category: string): CalculatorEntry[] {
  return loadEntries().filter((e) => e.config.category === category);
}

export function relatedTo(entry: CalculatorEntry): CalculatorEntry[] {
  const slugs = entry.config.relatedCalculators ?? [];
  return slugs.map((s) => findBySlug(s)).filter((e): e is CalculatorEntry => Boolean(e));
}

export function pageUrl(entry: CalculatorEntry): string {
  return `/${entry.config.category}/${entry.config.slug}/`;
}
