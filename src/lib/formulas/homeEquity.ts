import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round2 } from './util';

/** Home equity = home value − mortgage balance, plus equity share. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const homeValue = asNumber(inputs.homeValue);
  const mortgageBalance = asNumber(inputs.mortgageBalance);

  const equity = homeValue - mortgageBalance;
  const equityPercent = homeValue > 0 ? (equity / homeValue) * 100 : 0;

  return {
    equity: round2(equity),
    equityPercent: round2(equityPercent),
    homeValue: round2(homeValue),
    mortgageBalance: round2(mortgageBalance),
  };
};