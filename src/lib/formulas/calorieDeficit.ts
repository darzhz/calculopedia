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

const CALORIES_PER_KG = 7700;

/** Calorie deficit: TDEE − deficit → target intake and projected weight loss. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const age = asNumber(inputs.age);
  const gender = asString(inputs.gender, 'male');
  const heightCm = asNumber(inputs.heightCm);
  const weight = asNumber(inputs.weight);
  const activity = ACTIVITY[asString(inputs.activity, 'moderate')] ?? 1.55;
  const deficit = asNumber(inputs.deficit, 500);

  const bmr =
    gender === 'male'
      ? 10 * weight + 6.25 * heightCm - 5 * age + 5
      : 10 * weight + 6.25 * heightCm - 5 * age - 161;

  const tdee = bmr * activity;
  const target = Math.max(1200, tdee - deficit);
  const weeklyLossKg = (deficit * 7) / CALORIES_PER_KG;
  const weeksToLose5Kg = weeklyLossKg > 0 ? 5 / weeklyLossKg : Infinity;

  return {
    tdee: round2(tdee),
    deficit: round2(deficit),
    targetCalories: round2(target),
    weeklyLossKg: round2(weeklyLossKg),
    weeksToLose5Kg: Number.isFinite(weeksToLose5Kg) ? round2(weeksToLose5Kg) : 0,
  };
};