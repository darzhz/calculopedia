import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round2 } from './util';

/** Debt-to-income ratio: monthly debt payments ÷ gross monthly income. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const annualIncome = asNumber(inputs.annualIncome);
  const monthlyDebts = asNumber(inputs.monthlyDebts);

  const grossMonthly = annualIncome / 12;
  const dti = grossMonthly > 0 ? (monthlyDebts / grossMonthly) * 100 : 0;
  const remaining = grossMonthly - monthlyDebts;

  let category: string;
  if (dti < 36) category = 'Good — most lenders approve comfortably';
  else if (dti <= 43) category = 'Fair — near the ceiling for mortgages';
  else category = 'High — approvals will be difficult';

  return {
    dti: round2(dti),
    grossMonthly: round2(grossMonthly),
    monthlyDebts: round2(monthlyDebts),
    remaining: round2(remaining),
    category,
  };
};
