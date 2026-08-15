import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round2 } from './util';

const FREQUENCY: Record<string, number> = {
  yearly: 1,
  halfyearly: 2,
  quarterly: 4,
  monthly: 12,
  daily: 365,
};

/** Compound interest: A = P * (1 + r/m)^(m*t) */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const principal = asNumber(inputs.principal);
  const annualRate = asNumber(inputs.annualRate);
  const years = asNumber(inputs.years);
  const m = FREQUENCY[asString(inputs.compoundingFrequency, 'yearly')] ?? 1;
  const r = annualRate / 100;

  const maturity = principal * Math.pow(1 + r / m, m * years);
  const interest = maturity - principal;

  return {
    maturityAmount: round2(maturity),
    totalInterest: round2(interest),
    principalAmount: round2(principal),
  };
};
