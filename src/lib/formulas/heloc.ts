import type { FormulaFn, InputValues, OutputValues } from './types';
import { asBoolean, asNumber } from './types';
import { round2 } from './util';

/** HELOC payment: interest-only or fully amortized monthly payment on the drawn balance. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const draw = asNumber(inputs.drawAmount);
  const annualRate = asNumber(inputs.annualRate);
  const years = asNumber(inputs.years);
  const interestOnly = asBoolean(inputs.interestOnly);

  const monthlyRate = annualRate / 100 / 12;
  const months = Math.max(1, Math.round(years * 12));
  const monthlyInterest = draw * monthlyRate;

  let monthlyPayment: number;
  let totalInterest: number;

  if (interestOnly) {
    monthlyPayment = monthlyInterest;
    totalInterest = monthlyInterest * months;
  } else if (monthlyRate > 0) {
    monthlyPayment =
      (draw * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    totalInterest = monthlyPayment * months - draw;
  } else {
    monthlyPayment = draw / months;
    totalInterest = 0;
  }

  return {
    monthlyPayment: round2(monthlyPayment),
    monthlyInterest: round2(monthlyInterest),
    totalInterest: round2(Math.max(0, totalInterest)),
    annualInterest: round2(monthlyInterest * 12),
  };
};