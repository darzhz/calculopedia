import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round, round2 } from './util';

const ACTIVITY_MULTIPLIERS: Record<string, number> = {
  sedentary: 0.8,
  light: 1.0,
  moderate: 1.2,
  intense: 1.6,
  athlete: 2.0,
};

/** Daily protein intake from weight, activity level and goal. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const weight = asNumber(inputs.weight);
  const activityLevel = asString(inputs.activityLevel, 'moderate');
  const goal = asString(inputs.goal, 'maintain');

  const multiplier = ACTIVITY_MULTIPLIERS[activityLevel] ?? 1.2;
  let goalAdjustment = 0;
  if (goal === 'lose') goalAdjustment = 0.2;
  if (goal === 'gain') goalAdjustment = -0.2;

  const proteinPerKg = multiplier + goalAdjustment;
  const dailyProtein = weight * proteinPerKg;
  const minProtein = weight * (proteinPerKg - 0.1);
  const maxProtein = weight * (proteinPerKg + 0.1);

  return {
    dailyProtein: round(dailyProtein, 0),
    proteinPerKg: round(proteinPerKg, 1),
    proteinRange: `${round(minProtein, 0)}–${round(maxProtein, 0)} g`,
  };
};
