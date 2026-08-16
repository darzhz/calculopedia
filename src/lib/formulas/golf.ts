import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round } from './util';

/** Golf handicap differential: (score − course rating) × 113 ÷ slope. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const score = asNumber(inputs.score);
  const courseRating = asNumber(inputs.courseRating);
  const slope = asNumber(inputs.slope, 113);

  const differential = ((score - courseRating) * 113) / slope;

  return {
    differential: round(differential, 1),
    slope,
    score,
  };
};