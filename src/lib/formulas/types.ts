/** Shared types for formula modules. */

export type InputValue = number | string | boolean;

export type InputValues = Record<string, InputValue>;

export type TableRow = Record<string, number | string>;

export type OutputValue = number | string | TableRow[];

export type OutputValues = Record<string, OutputValue>;

export type FormulaFn = (inputs: InputValues) => OutputValues;

export function asNumber(value: unknown, fallback = 0): number {
  const n = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(n) ? n : fallback;
}

export function asString(value: unknown, fallback = ''): string {
  return value == null ? fallback : String(value);
}

export function asBoolean(value: unknown, fallback = false): boolean {
  if (typeof value === 'boolean') return value;
  return value == null ? fallback : value !== 'false' && value !== '';
}
