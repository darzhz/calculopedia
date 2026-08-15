import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round2 } from './util';

/**
 * Recurring Deposit maturity with quarterly compounding (standard for Indian RDs).
 * Deposits are made monthly; the balance compounds quarterly.
 */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const deposit = asNumber(inputs.monthlyDeposit);
  const annualRate = asNumber(inputs.annualRate);
  const years = asNumber(inputs.years);
  const m = asString(inputs.compoundingFrequency, 'quarterly') === 'halfyearly' ? 2 : 4;
  const r = annualRate / 100;
  const months = Math.round(years * 12);

  let balance = 0;
  let totalDeposits = 0;

  for (let i = 1; i <= months; i++) {
    balance += deposit;
    totalDeposits += deposit;
    if (i % (12 / m) === 0) {
      balance *= 1 + r / m;
    }
  }

  return {
    maturityValue: round2(balance),
    totalDeposits: round2(totalDeposits),
    totalInterest: round2(balance - totalDeposits),
  };
};
