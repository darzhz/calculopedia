import type { FormulaFn, InputValues, OutputValues, TableRow } from './types';
import { asNumber, asString } from './types';
import { round2 } from './util';

export interface Slab {
  upTo: number;
  rate: number; // decimal
}

/** New regime slabs (FY 2025-26). */
export const NEW_REGIME_SLABS: Slab[] = [
  { upTo: 400000, rate: 0 },
  { upTo: 800000, rate: 0.05 },
  { upTo: 1200000, rate: 0.1 },
  { upTo: 1600000, rate: 0.15 },
  { upTo: 2000000, rate: 0.2 },
  { upTo: 2400000, rate: 0.25 },
  { upTo: Infinity, rate: 0.3 },
];

/** Old regime slabs (FY 2025-26). */
export const OLD_REGIME_SLABS: Slab[] = [
  { upTo: 250000, rate: 0 },
  { upTo: 500000, rate: 0.05 },
  { upTo: 1000000, rate: 0.2 },
  { upTo: Infinity, rate: 0.3 },
];

export const NEW_STANDARD_DEDUCTION = 75000;
export const OLD_STANDARD_DEDUCTION = 50000;
export const NEW_REBATE_LIMIT = 1200000;
export const OLD_REBATE_LIMIT = 500000;

export function slabTax(taxable: number, slabs: Slab[]): number {
  let tax = 0;
  let prev = 0;
  for (const s of slabs) {
    if (taxable > prev) {
      tax += (Math.min(taxable, s.upTo) - prev) * s.rate;
      prev = s.upTo;
    }
  }
  return tax;
}

export function taxSlabTable(taxable: number, slabs: Slab[]): TableRow[] {
  const rows: TableRow[] = [];
  let prev = 0;
  for (const s of slabs) {
    const from = prev;
    const to = s.upTo;
    const amount = taxable > from ? (Math.min(taxable, to) - from) * s.rate : 0;
    rows.push({ from, to: Number.isFinite(to) ? to : -1, rate: s.rate * 100, tax: round2(amount) });
    prev = to;
  }
  return rows;
}

/** Indian income tax with new/old regime choice, 87A rebate and 4% cess. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const income = asNumber(inputs.annualIncome);
  const regime = asString(inputs.regime, 'new');
  const isNew = regime === 'new';
  const deductions = isNew ? 0 : asNumber(inputs.deductions);

  const slabs = isNew ? NEW_REGIME_SLABS : OLD_REGIME_SLABS;
  const stdDeduction = isNew ? NEW_STANDARD_DEDUCTION : OLD_STANDARD_DEDUCTION;

  const taxable = Math.max(0, income - stdDeduction - deductions);
  const rebateLimit = isNew ? NEW_REBATE_LIMIT : OLD_REBATE_LIMIT;

  let taxBeforeCess = slabTax(taxable, slabs);
  if (taxable <= rebateLimit) taxBeforeCess = 0;

  const cess = taxBeforeCess * 0.04;
  const totalTax = taxBeforeCess + cess;
  const effectiveRate = income > 0 ? (totalTax / income) * 100 : 0;

  return {
    taxableIncome: round2(taxable),
    taxBeforeCess: round2(taxBeforeCess),
    cess: round2(cess),
    totalTax: round2(totalTax),
    effectiveRate: round2(effectiveRate),
    slabBreakdown: taxSlabTable(taxable, slabs),
  };
};
