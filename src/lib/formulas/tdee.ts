import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round2 } from './util';

const ACTIVITY: Record<string, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very: 1.9,
};

/** TDEE = Mifflin-St Jeor BMR × activity factor, plus lose/gain targets. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const age = asNumber(inputs.age);
  const gender = asString(inputs.gender, 'male');
  const heightCm = asNumber(inputs.heightCm);
  const weight = asNumber(inputs.weight);
  const activity = ACTIVITY[asString(inputs.activity, 'moderate')] ?? 1.55;

  const bmr =
    gender === 'male'
      ? 10 * weight + 6.25 * heightCm - 5 * age + 5
      : 10 * weight + 6.25 * heightCm - 5 * age - 161;

  const tdee = bmr * activity;

  return {
    bmr: round2(bmr),
    tdee: round2(tdee),
    lossTarget: round2(Math.max(1200, tdee - 500)),
    gainTarget: round2(tdee + 500),
  };
};