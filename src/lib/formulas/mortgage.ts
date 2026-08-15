import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asBoolean } from './types';
import { round2 } from './util';

/** US-style mortgage: P&I + optional property tax, insurance and PMI. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const price = asNumber(inputs.homePrice);
  const downPayment = asNumber(inputs.downPayment);
  const annualRate = asNumber(inputs.annualRate);
  const years = asNumber(inputs.years);
  const annualTax = asNumber(inputs.annualTax);
  const annualInsurance = asNumber(inputs.annualInsurance);
  const includePmi = asBoolean(inputs.includePmi, false);
  const pmiRate = asNumber(inputs.pmiRate, 1);

  const loanAmount = Math.max(0, price - downPayment);
  const downPaymentPercent = price > 0 ? (downPayment / price) * 100 : 0;
  const n = Math.max(1, Math.round(years * 12));
  const r = annualRate / 100 / 12;

  const monthlyPI =
    r === 0 ? loanAmount / n : (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const monthlyTax = annualTax / 12;
  const monthlyInsurance = annualInsurance / 12;
  const pmiActive = includePmi && downPaymentPercent < 20 && loanAmount > 0;
  const monthlyPmi = pmiActive ? (loanAmount * pmiRate) / 100 / 12 : 0;

  const monthlyEscrow = monthlyTax + monthlyInsurance + monthlyPmi;
  const totalMonthly = monthlyPI + monthlyEscrow;
  const totalPayment = monthlyPI * n;
  const totalInterest = totalPayment - loanAmount;
  const totalCost = price + totalInterest + monthlyEscrow * n;

  const amortization: { month: number; principal: number; interest: number; balance: number }[] =
    [];
  let balance = loanAmount;
  for (let i = 1; i <= n; i++) {
    const interest = balance * r;
    const principalPaid = Math.min(monthlyPI - interest, balance);
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
    monthlyPI: round2(monthlyPI),
    monthlyTax: round2(monthlyTax),
    monthlyInsurance: round2(monthlyInsurance),
    monthlyPmi: round2(monthlyPmi),
    totalMonthly: round2(totalMonthly),
    totalInterest: round2(totalInterest),
    totalCost: round2(totalCost),
    amortization,
  };
};
