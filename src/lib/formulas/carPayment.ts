import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round2 } from './util';

/** Car loan: monthly payment from price, down payment, rate and tenure. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const price = asNumber(inputs.carPrice);
  const downPayment = asNumber(inputs.downPayment);
  const annualRate = asNumber(inputs.annualRate);
  const years = asNumber(inputs.years);

  const loanAmount = Math.max(0, price - downPayment);
  const n = Math.max(1, Math.round(years * 12));
  const r = annualRate / 100 / 12;

  const monthlyPayment =
    r === 0 ? loanAmount / n : (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayment = monthlyPayment * n;
  const totalInterest = totalPayment - loanAmount;
  const totalCost = price + totalInterest;

  const amortization: { month: number; principal: number; interest: number; balance: number }[] =
    [];
  let balance = loanAmount;
  for (let i = 1; i <= n; i++) {
    const interest = balance * r;
    const principalPaid = Math.min(monthlyPayment - interest, balance);
    balance = Math.max(0, balance - principalPaid);
    amortization.push({
      month: i,
      principal: round2(principalPaid),
      interest: round2(interest),
      balance: round2(balance),
    });
  }

  return {
    loanAmount: round2(loanAmount),
    monthlyPayment: round2(monthlyPayment),
    totalInterest: round2(totalInterest),
    totalCost: round2(totalCost),
    amortization,
  };
};
