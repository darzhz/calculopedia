import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round2 } from './util';

/** Real GDP = nominal GDP ÷ deflator × 100. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const nominal = asNumber(inputs.nominalGdp);
  const deflator = asNumber(inputs.deflator);

  const realGdp = deflator > 0 ? (nominal / deflator) * 100 : 0;
  const difference = nominal - realGdp;

  return {
    realGdp: round2(realGdp),
    nominal: round2(nominal),
    deflator,
    difference: round2(difference),
  };
};