import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';

const DIET: Record<string, number> = { poor: 2, average: 0, good: -1 };
const EXERCISE: Record<string, number> = { none: 2, light: 0, regular: -2 };
const SLEEP: Record<string, number> = { short: 2, adequate: 0, optimal: -1, long: 0 };
const SMOKING: Record<string, number> = { yes: 4, no: 0 };
const ALCOHOL: Record<string, number> = { regular: 1, social: 0, none: -1 };
const STRESS: Record<string, number> = { high: 2, medium: 0, low: -1 };

/** Biological age estimate from lifestyle factors added to chronological age. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const age = asNumber(inputs.age);

  const adjustment =
    (DIET[asString(inputs.diet, 'average')] ?? 0) +
    (EXERCISE[asString(inputs.exercise, 'light')] ?? 0) +
    (SLEEP[asString(inputs.sleep, 'adequate')] ?? 0) +
    (SMOKING[asString(inputs.smoking, 'no')] ?? 0) +
    (ALCOHOL[asString(inputs.alcohol, 'social')] ?? 0) +
    (STRESS[asString(inputs.stress, 'medium')] ?? 0);

  const biologicalAge = age + adjustment;

  let category: string;
  if (biologicalAge < age - 1) category = 'Younger than your calendar age';
  else if (biologicalAge > age + 1) category = 'Older than your calendar age';
  else category = 'Tracking with your calendar age';

  return {
    biologicalAge,
    adjustment,
    category,
  };
};