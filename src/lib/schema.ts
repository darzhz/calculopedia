import { z } from 'zod';

/**
 * The calculator config schema — the single contract every calculator must
 * satisfy. Validated at build time by the registry; an invalid config fails
 * the build instead of breaking a page in production.
 *
 * Adding a calculator = adding one `.config.ts` file that satisfies this
 * schema. Adding a new *kind* of input/output = extending this schema, never
 * building a bespoke page.
 */

const sharedField = {
  id: z.string().min(1),
  label: z.string().min(1),
  help: z.string().optional(),
};

const numericField = {
  unit: z.string().optional(),
  min: z.number().optional(),
  max: z.number().optional(),
  step: z.number().optional(),
};

export const NumberFieldSchema = z.object({
  type: z.literal('number'),
  ...sharedField,
  ...numericField,
  percent: z.boolean().optional(),
  currency: z.boolean().optional(),
  default: z.number().optional(),
  placeholder: z.string().optional(),
  /** Show this input only when `field` has value `value`. */
  showWhen: z.object({ field: z.string(), value: z.string() }).optional(),
});

export const RangeFieldSchema = z.object({
  type: z.literal('range'),
  ...sharedField,
  ...numericField,
  percent: z.boolean().optional(),
  currency: z.boolean().optional(),
  default: z.number().optional(),
  showWhen: z.object({ field: z.string(), value: z.string() }).optional(),
});

export const SelectFieldSchema = z.object({
  type: z.literal('select'),
  ...sharedField,
  options: z.array(z.object({ value: z.string(), label: z.string() })).min(1),
  default: z.string().optional(),
  /** When this option is chosen, set these other input values (defaults). */
  presets: z.record(z.string(), z.record(z.string(), z.number())).optional(),
  showWhen: z.object({ field: z.string(), value: z.string() }).optional(),
});

export const DateFieldSchema = z.object({
  type: z.literal('date'),
  ...sharedField,
  default: z.string().optional(),
  showWhen: z.object({ field: z.string(), value: z.string() }).optional(),
});

export const TimeFieldSchema = z.object({
  type: z.literal('time'),
  ...sharedField,
  default: z.string().optional(),
  showWhen: z.object({ field: z.string(), value: z.string() }).optional(),
});

export const ToggleFieldSchema = z.object({
  type: z.literal('toggle'),
  ...sharedField,
  default: z.boolean().optional(),
  showWhen: z.object({ field: z.string(), value: z.string() }).optional(),
});

export const InputFieldSchema = z.discriminatedUnion('type', [
  NumberFieldSchema,
  RangeFieldSchema,
  SelectFieldSchema,
  DateFieldSchema,
  TimeFieldSchema,
  ToggleFieldSchema,
]);

export type InputField = z.infer<typeof InputFieldSchema>;
export type NumberField = z.infer<typeof NumberFieldSchema>;
export type SelectField = z.infer<typeof SelectFieldSchema>;

export const OutputSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  format: z.enum(['currency', 'percent', 'number', 'decimal', 'duration', 'date', 'text', 'table']),
  /** Highlight this output as the primary result. */
  primary: z.boolean().optional(),
  decimals: z.number().int().min(0).max(10).optional(),
  note: z.string().optional(),
});

export type OutputField = z.infer<typeof OutputSchema>;

export const FaqSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

export const CalculatorConfigSchema = z.object({
  /** URL slug, unique across all calculators. */
  slug: z.string().regex(/^[a-z0-9-]+$/),
  /** Must match a slug in `CATEGORIES`. */
  category: z.string(),
  title: z.string().min(1),
  shortDescription: z.string().min(1),
  /** Material Symbols icon name shown on cards and in the widget header. */
  icon: z.string().min(1).optional(),
  /** One-sentence, literal answer to the page's implied question (AEO). */
  answer: z.string().min(1),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  targetKeyword: z.string().optional(),
  keywords: z.array(z.string()).optional(),
  inputs: z.array(InputFieldSchema).min(1),
  /** Formula module name in `src/lib/formulas`. */
  formulaId: z.string().min(1),
  outputs: z.array(OutputSchema).min(1),
  /** Human-readable formula, rendered in its own section for AEO. */
  formulaDisplay: z.string().min(1),
  /** Markdown explanation: how it works, the formula, worked example. */
  explanation: z.string().min(1),
  /** Optional: inputs for the pre-rendered worked example. Defaults to input defaults. */
  example: z.record(z.string(), z.union([z.number(), z.string(), z.boolean()])).optional(),
  faq: z.array(FaqSchema).optional(),
  /** Slugs of related calculators for internal linking. */
  relatedCalculators: z.array(z.string()).optional(),
  /** Chart rendered from a `table` output. */
  chart: z.enum(['amortization']).optional(),
  /** ISO date, shown as a freshness signal. Update when defaults change. */
  updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

export type CalculatorConfig = z.infer<typeof CalculatorConfigSchema>;
