import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round2 } from './util';

const FIRST_BEND = 1226;
const SECOND_BEND = 7392;

/** Social Security benefit: PIA approximation from AIME using 2025 bend points. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const aime = asNumber(inputs.aime);

  let pia = 0;
  if (aime <= FIRST_BEND) {
    pia = aime * 0.9;
  } else if (aime <= SECOND_BEND) {
    pia = FIRST_BEND * 0.9 + (aime - FIRST_BEND) * 0.32;
  } else {
    pia = FIRST_BEND * 0.9 + (SECOND_BEND - FIRST_BEND) * 0.32 + (aime - SECOND_BEND) * 0.15;
  }

  return {
    piaMonthly: round2(pia),
    piaAnnual: round2(pia * 12),
    firstBend: FIRST_BEND,
    secondBend: SECOND_BEND,
  };
};