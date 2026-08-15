import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round2 } from './util';

/** Creatinine clearance (Cockcroft-Gault): (140 − age) × weight / (72 × sCr), ×0.85 for women. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const age = asNumber(inputs.age);
  const weight = asNumber(inputs.weight);
  const gender = asString(inputs.gender, 'male');
  const serumCreatinine = Math.max(0.1, asNumber(inputs.serumCreatinine));

  let crCl = ((140 - age) * weight) / (72 * serumCreatinine);
  if (gender === 'female') crCl *= 0.85;

  let category: string;
  if (crCl < 15) category = 'Kidney failure (< 15 mL/min)';
  else if (crCl < 30) category = 'Severely reduced (15–29 mL/min)';
  else if (crCl < 60) category = 'Moderately reduced (30–59 mL/min)';
  else if (crCl < 90) category = 'Mildly reduced (60–89 mL/min)';
  else category = 'Normal (≥ 90 mL/min)';

  return {
    crCl: round2(crCl),
    category,
  };
};
