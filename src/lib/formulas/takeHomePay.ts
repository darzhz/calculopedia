import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round2 } from './util';
import {
  slabTax,
  NEW_REGIME_SLABS,
  OLD_REGIME_SLABS,
  NEW_STANDARD_DEDUCTION,
  OLD_STANDARD_DEDUCTION,
  NEW_REBATE_LIMIT,
  OLD_REBATE_LIMIT,
} from './incomeTax';

/** Gross salary → net (take-home) pay for India, new/old regime. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const income = asNumber(inputs.annualIncome);
  const regime = asString(inputs.regime, 'new');
  const isNew = regime === 'new';
  const deductions = isNew ? 0 : asNumber(inputs.deductions);

  const slabs = isNew ? NEW_REGIME_SLABS : OLD_REGIME_SLABS;
  const stdDeduction = isNew ? NEW_STANDARD_DEDUCTION : OLD_STANDARD_DEDUCTION;
  const taxable = Math.max(0, income - stdDeduction - deductions);

  let taxBeforeCess = slabTax(taxable, slabs);
  const rebateLimit = isNew ? NEW_REBATE_LIMIT : OLD_REBATE_LIMIT;
  if (taxable <= rebateLimit) taxBeforeCess = 0;
  const cess = taxBeforeCess * 0.04;
  const totalTax = taxBeforeCess + cess;

  const netAnnual = income - totalTax;
  const netMonthly = netAnnual / 12;
  const effectiveRate = income > 0 ? (totalTax / income) * 100 : 0;

  return {
    grossAnnual: round2(income),
    standardDeduction: round2(stdDeduction),
    taxableIncome: round2(taxable),
    taxTotal: round2(totalTax),
    netAnnual: round2(netAnnual),
    netMonthly: round2(netMonthly),
    effectiveRate: round2(effectiveRate),
  };
};
