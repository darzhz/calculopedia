import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round2 } from './util';

/** BMR by Mifflin-St Jeor and Katch-McArdle (with body fat). */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const age = asNumber(inputs.age);
  const gender = asString(inputs.gender, 'male');
  const heightCm = asNumber(inputs.heightCm);
  const weight = asNumber(inputs.weight);
  const bodyFatPercent = asNumber(inputs.bodyFatPercent);

  const mifflin =
    gender === 'male'
      ? 10 * weight + 6.25 * heightCm - 5 * age + 5
      : 10 * weight + 6.25 * heightCm - 5 * age - 161;

  const leanMass = bodyFatPercent > 0 ? weight * (1 - bodyFatPercent / 100) : weight;
  const katch = 370 + 21.6 * leanMass;

  return {
    bmrMifflin: round2(mifflin),
    bmrKatch: round2(katch),
    leanMass: round2(leanMass),
  };
};
