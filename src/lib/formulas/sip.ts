import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round2 } from './util';

/**
 * SIP (Systematic Investment Plan) calculator with optional annual step-up.
 * Contributions are made monthly and grow by `stepUp`% each year.
 */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const monthly = asNumber(inputs.monthlyInvestment);
  const annualRate = asNumber(inputs.annualRate);
  const years = asNumber(inputs.years);
  const stepUp = asNumber(inputs.stepUp);

  const r = annualRate / 100 / 12;
  const months = Math.round(years * 12);

  let balance = 0;
  let invested = 0;

  for (let i = 1; i <= months; i++) {
    const yearIndex = Math.floor((i - 1) / 12);
    const contribution = monthly * Math.pow(1 + stepUp / 100, yearIndex);
    invested += contribution;
    balance = balance * (1 + r) + contribution;
  }

  return {
    investedAmount: round2(invested),
    maturityValue: round2(balance),
    estimatedReturns: round2(balance - invested),
  };
};
