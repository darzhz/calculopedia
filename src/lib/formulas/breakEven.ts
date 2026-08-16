import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round2 } from './util';

/** Break-even units = fixed costs ÷ (price − variable cost per unit). */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const fixedCosts = asNumber(inputs.fixedCosts);
  const pricePerUnit = asNumber(inputs.pricePerUnit);
  const variableCostPerUnit = asNumber(inputs.variableCostPerUnit);

  const contribution = pricePerUnit - variableCostPerUnit;
  const units = contribution > 0 ? fixedCosts / contribution : Infinity;
  const revenue = units * pricePerUnit;

  return {
    breakEvenUnits: Number.isFinite(units) ? round2(units) : 0,
    breakEvenRevenue: Number.isFinite(revenue) ? round2(revenue) : 0,
    contributionMargin: round2(contribution),
    fixedCosts: round2(fixedCosts),
  };
};