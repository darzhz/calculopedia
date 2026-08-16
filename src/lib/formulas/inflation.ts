import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round2 } from './util';

/** Inflation-adjusted value: amount × (1 + rate)^years. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const amount = asNumber(inputs.amount);
  const rate = asNumber(inputs.annualRate);
  const startYear = asNumber(inputs.startYear);
  const endYear = asNumber(inputs.endYear);

  const years = Math.max(0, endYear - startYear);
  const futureValue = amount * Math.pow(1 + rate / 100, years);
  const increase = futureValue - amount;

  return {
    futureValue: round2(futureValue),
    increase: round2(increase),
    multiplier: round2(Math.pow(1 + rate / 100, years)),
    years,
  };
};