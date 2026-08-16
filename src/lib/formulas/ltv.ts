import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round2 } from './util';

/** Loan-to-value ratio = loan ÷ property value × 100, with category and max 80% LTV loan. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const loan = asNumber(inputs.loanAmount);
  const value = asNumber(inputs.propertyValue);

  const ltv = value > 0 ? (loan / value) * 100 : 0;
  const maxLoan80 = value * 0.8;

  let category: string;
  if (ltv <= 60) category = 'Low risk — excellent terms';
  else if (ltv <= 80) category = 'Standard — typical mortgage range';
  else if (ltv <= 90) category = 'Higher risk — may need mortgage insurance';
  else category = 'Very high risk — hard to refinance';

  return {
    ltv: round2(ltv),
    loanAmount: round2(loan),
    maxLoan80,
    category,
  };
};