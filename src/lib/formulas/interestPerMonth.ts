import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round2 } from './util';

/** Monthly interest rate and interest amount from an annual rate and principal. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const annualRate = asNumber(inputs.annualRate);
  const principal = asNumber(inputs.principal);
  const months = asNumber(inputs.months);

  const monthlyRate = annualRate / 12;
  const monthlyInterest = (principal * monthlyRate) / 100;
  const totalInterest = monthlyInterest * months;

  return {
    monthlyRate: round2(monthlyRate),
    monthlyInterest: round2(monthlyInterest),
    totalInterest: round2(totalInterest),
  };
};
