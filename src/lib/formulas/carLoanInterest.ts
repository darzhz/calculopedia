import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round2 } from './util';

/** Car loan interest: EMI, total interest and total amount. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const principal = asNumber(inputs.principal);
  const annualRate = asNumber(inputs.annualRate);
  const tenureYears = asNumber(inputs.tenure);

  const monthlyRate = annualRate / 12 / 100;
  const n = tenureYears * 12;

  let monthlyEMI: number;
  if (monthlyRate === 0) {
    monthlyEMI = n > 0 ? principal / n : 0;
  } else {
    monthlyEMI = (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
      (Math.pow(1 + monthlyRate, n) - 1);
  }

  const totalAmount = monthlyEMI * n;
  const totalInterest = totalAmount - principal;

  return {
    monthlyEMI: round2(monthlyEMI),
    totalInterest: round2(totalInterest),
    totalAmount: round2(totalAmount),
  };
};
