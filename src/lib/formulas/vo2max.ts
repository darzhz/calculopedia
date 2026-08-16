import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round } from './util';

/** VO₂max estimate from resting heart rate: 15.3 × (HRmax ÷ HRrest). */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const age = asNumber(inputs.age);
  const restingHr = asNumber(inputs.restingHr);
  const gender = asString(inputs.gender, 'male');

  const maxHr = 220 - age;
  const vo2max = restingHr > 0 ? 15.3 * (maxHr / restingHr) : 0;

  // ACSM-style categories for a 30–39 year old.
  let category: string;
  if (gender === 'female') {
    if (vo2max >= 41) category = 'Excellent';
    else if (vo2max >= 35) category = 'Good';
    else if (vo2max >= 31) category = 'Average';
    else if (vo2max >= 25) category = 'Fair';
    else category = 'Below average';
  } else {
    if (vo2max >= 52) category = 'Excellent';
    else if (vo2max >= 44) category = 'Good';
    else if (vo2max >= 38) category = 'Average';
    else if (vo2max >= 32) category = 'Fair';
    else category = 'Below average';
  }

  return {
    vo2max: round(vo2max, 1),
    maxHr,
    restingHr,
    category,
  };
};