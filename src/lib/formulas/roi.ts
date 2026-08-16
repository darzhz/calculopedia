import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round2 } from './util';

/** ROI and annualized ROI from cost, final value and holding period. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const cost = asNumber(inputs.cost);
  const finalValue = asNumber(inputs.finalValue);
  const years = asNumber(inputs.years);

  const profit = finalValue - cost;
  const roi = cost > 0 ? (profit / cost) * 100 : 0;
  const annualizedRoi =
    cost > 0 && years > 0 && profit > -cost
      ? (Math.pow(finalValue / cost, 1 / years) - 1) * 100
      : roi;

  return {
    roi: round2(roi),
    profit: round2(profit),
    annualizedRoi: round2(annualizedRoi),
  };
};