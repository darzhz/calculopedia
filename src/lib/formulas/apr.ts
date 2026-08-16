import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round } from './util';

/** APR approximation from interest rate plus fees spread over the loan term. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const loanAmount = asNumber(inputs.loanAmount);
  const fees = asNumber(inputs.fees);
  const annualRate = asNumber(inputs.annualRate);
  const years = asNumber(inputs.years);
  const paymentsPerYear = asNumber(inputs.paymentsPerYear, 12);

  const totalPayments = Math.max(1, Math.round(years * paymentsPerYear));
  const monthlyRate = annualRate / 100 / paymentsPerYear;
  const monthlyPayment =
    monthlyRate > 0
      ? (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalPayments))
      : loanAmount / totalPayments;

  // Standard APR approximation: interest rate + fees expressed as a rate.
  const aprApprox =
    annualRate + ((2 * paymentsPerYear * fees) / (loanAmount * (totalPayments + 1))) * 100;

  const totalCost = monthlyPayment * totalPayments + fees;

  return {
    apr: round(aprApprox, 2),
    monthlyPayment: round(monthlyPayment, 2),
    totalCost: round(totalCost, 2),
    fees,
  };
};