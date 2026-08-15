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

/** Maintenance calories from BMR (Mifflin-St Jeor or Katch-McArdle) × activity. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const age = asNumber(inputs.age);
  const gender = asString(inputs.gender, 'male');
  const heightCm = asNumber(inputs.heightCm);
  const weight = asNumber(inputs.weight);
  const bodyFatPercent = asNumber(inputs.bodyFatPercent);
  const method = asString(inputs.method, 'mifflin');
  const activity = ACTIVITY[asString(inputs.activity, 'moderate')] ?? 1.55;

  const mifflin =
    gender === 'male'
      ? 10 * weight + 6.25 * heightCm - 5 * age + 5
      : 10 * weight + 6.25 * heightCm - 5 * age - 161;

  const katch = bodyFatPercent > 0 ? 370 + 21.6 * (weight * (1 - bodyFatPercent / 100)) : mifflin;

  const bmr = method === 'katch' && bodyFatPercent > 0 ? katch : mifflin;
  const maintenanceCalories = bmr * activity;
  const cutCalories = Math.max(1200, maintenanceCalories * 0.85);
  const bulkCalories = maintenanceCalories * 1.15;

  return {
    bmr: round2(bmr),
    bmrMifflin: round2(mifflin),
    bmrKatch: round2(katch),
    maintenanceCalories: round2(maintenanceCalories),
    cutCalories: round2(cutCalories),
    bulkCalories: round2(bulkCalories),
  };
};
