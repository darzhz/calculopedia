import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round, round2 } from './util';

/** BMI = weight(kg) / height(m)^2 with gender-aware categories. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const weight = asNumber(inputs.weight);
  const heightCm = asNumber(inputs.heightCm);
  const gender = asString(inputs.gender, 'male');

  const heightM = heightCm / 100;
  const bmi = heightM > 0 ? weight / (heightM * heightM) : 0;

  let category: string;
  let genderNote: string;

  if (gender === 'female') {
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 24) category = 'Normal weight';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';
    genderNote = 'For women, a BMI of 18.5–24 is considered healthy. Women naturally have more body fat than men at the same BMI.';
  } else {
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal weight';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';
    genderNote = 'BMI categories for men are the same as the standard WHO ranges.';
  }

  const healthyMin = 18.5 * heightM * heightM;
  const healthyMax = (gender === 'female' ? 24 : 24.9) * heightM * heightM;

  return {
    bmi: round(bmi, 1),
    category,
    genderNote,
    healthyWeightMin: round2(healthyMin),
    healthyWeightMax: round2(healthyMax),
  };
};
