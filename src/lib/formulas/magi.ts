import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round2 } from './util';

/** MAGI = AGI + the adjustments that must be added back (IRA, student loan interest, etc.). */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const agi = asNumber(inputs.agi);
  const addBacks = asNumber(inputs.addBacks);

  const magi = agi + addBacks;

  return {
    magi: round2(magi),
    agi: round2(agi),
    addBacks: round2(addBacks),
  };
};