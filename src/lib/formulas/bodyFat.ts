import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round, round2 } from './util';

const CM_PER_INCH = 2.54;

/** Navy method % body fat from circumference measurements. */
function navyPercent(gender: string, neckCm: number, waistCm: number, hipCm: number, heightCm: number): number {
  const height = heightCm / CM_PER_INCH;
  if (gender === 'female') {
    const waistHipNeck = (waistCm + hipCm - neckCm) / CM_PER_INCH;
    return 495 / (1.29579 - 0.35004 * Math.log10(waistHipNeck) + 0.221 * Math.log10(height)) - 450;
  }
  const waistNeck = (waistCm - neckCm) / CM_PER_INCH;
  return 495 / (1.0324 - 0.19077 * Math.log10(waistNeck) + 0.15456 * Math.log10(height)) - 450;
}

/** ACSM body-fat categories. */
function category(p: number, gender: string): string {
  if (gender === 'male') {
    if (p < 6) return 'Essential fat';
    if (p < 14) return 'Athletes';
    if (p < 18) return 'Fitness';
    if (p < 25) return 'Acceptable';
    return 'Obese';
  }
  if (p < 14) return 'Essential fat';
  if (p < 21) return 'Athletes';
  if (p < 25) return 'Fitness';
  if (p < 32) return 'Acceptable';
  return 'Obese';
}

/** Body fat % (Navy method) plus fat and lean mass from weight. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const gender = asString(inputs.gender, 'male');
  const heightCm = asNumber(inputs.heightCm);
  const neckCm = asNumber(inputs.neckCm);
  const waistCm = asNumber(inputs.waistCm);
  const hipCm = gender === 'female' ? asNumber(inputs.hipCm) : 0;
  const weight = asNumber(inputs.weight);

  const bodyFatPercent = Math.max(0, navyPercent(gender, neckCm, waistCm, hipCm, heightCm));
  const fatMass = weight * (bodyFatPercent / 100);
  const leanMass = weight - fatMass;

  return {
    bodyFatPercent: round(bodyFatPercent, 1),
    category: category(bodyFatPercent, gender),
    fatMass: round2(fatMass),
    leanMass: round2(leanMass),
  };
};
