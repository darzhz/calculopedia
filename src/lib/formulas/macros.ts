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

const PROTEIN_SPLIT: Record<string, number> = { low: 1.2, moderate: 1.6, high: 2.0 };
const FAT_PERCENT = 0.25;

/** Macro targets from TDEE, goal and protein preference. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const age = asNumber(inputs.age);
  const gender = asString(inputs.gender, 'male');
  const heightCm = asNumber(inputs.heightCm);
  const weight = asNumber(inputs.weight);
  const activity = ACTIVITY[asString(inputs.activity, 'moderate')] ?? 1.55;
  const goal = asString(inputs.goal, 'maintain');
  const proteinSplit = PROTEIN_SPLIT[asString(inputs.proteinSplit, 'moderate')] ?? 1.6;

  const bmr =
    gender === 'male'
      ? 10 * weight + 6.25 * heightCm - 5 * age + 5
      : 10 * weight + 6.25 * heightCm - 5 * age - 161;

  const tdee = bmr * activity;
  const target =
    goal === 'cut' ? Math.max(1200, tdee - 500) : goal === 'bulk' ? tdee + 500 : tdee;

  const proteinG = weight * proteinSplit;
  const fatG = (target * FAT_PERCENT) / 9;
  const carbG = Math.max(0, (target - proteinG * 4 - fatG * 9) / 4);

  return {
    tdee: round2(tdee),
    targetCalories: round2(target),
    proteinG: round2(proteinG),
    fatG: round2(fatG),
    carbG: round2(carbG),
    proteinCals: round2(proteinG * 4),
    fatCals: round2(fatG * 9),
    carbCals: round2(carbG * 4),
  };
};