import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString, asBoolean } from './types';
import { round2 } from './util';

const FREQUENCY: Record<string, number> = {
  yearly: 1,
  halfyearly: 2,
  quarterly: 4,
  monthly: 12,
};

/** Fixed Deposit maturity with compounding. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const principal = asNumber(inputs.principal);
  const annualRate = asNumber(inputs.annualRate);
  const years = asNumber(inputs.years);
  const m = FREQUENCY[asString(inputs.compoundingFrequency, 'quarterly')] ?? 4;
  const payout = asBoolean(inputs.interestPayout);
  const r = annualRate / 100;

  const grossMaturity = principal * Math.pow(1 + r / m, m * years);
  const totalInterest = grossMaturity - principal;

  return {
    maturityValue: round2(payout ? principal : grossMaturity),
    totalInterest: round2(totalInterest),
    principalAmount: round2(principal),
  };
};
