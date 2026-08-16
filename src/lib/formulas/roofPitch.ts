import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round } from './util';

/** Roof pitch from rise per 12-inch run: X-in-12, degrees and percent grade. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const riseInches = asNumber(inputs.riseInches);
  const runInches = asNumber(inputs.runInches, 12);

  const ratio = runInches > 0 ? riseInches / runInches : 0;
  const degrees = Math.atan(ratio) * (180 / Math.PI);
  const percentGrade = ratio * 100;

  return {
    pitchRatio: `${round(riseInches, 1)}-in-${round(runInches, 1)}`,
    riseInches: round(riseInches, 1),
    runInches: round(runInches, 1),
    degrees: round(degrees, 1),
    percentGrade: round(percentGrade, 1),
  };
};