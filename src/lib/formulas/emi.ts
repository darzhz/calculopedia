import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round2 } from './util';

/**
 * Loan EMI calculator (home, car, personal).
 * EMI = P * r * (1+r)^n / ((1+r)^n - 1)
 */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const principal = asNumber(inputs.loanAmount);
  const annualRate = asNumber(inputs.annualRate);
  const years = asNumber(inputs.tenureYears);
  const months = asNumber(inputs.tenureMonths);

  const n = Math.max(1, Math.round(years * 12 + months));
  const r = annualRate / 100 / 12;

  const emi =
    r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayment = emi * n;
  const totalInterest = totalPayment - principal;

  const amortization: { month: number; principal: number; interest: number; balance: number }[] =
    [];
  let balance = principal;
  for (let i = 1; i <= n; i++) {
    const interest = balance * r;
    const principalPaid = Math.min(emi - interest, balance);
    balance = Math.max(0, balance - principalPaid);
    amortization.push({
      month: i,
      principal: round2(principalPaid),
      interest: round2(interest),
      balance: round2(balance),
    });
  }

  return {
    monthlyEmi: round2(emi),
    totalPayment: round2(totalPayment),
    totalInterest: round2(totalInterest),
    principalAmount: round2(principal),
    amortization,
  };
};
