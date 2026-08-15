import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round, round2 } from './util';

/** BMI = weight(kg) / height(m)^2 */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const weight = asNumber(inputs.weight);
  const heightCm = asNumber(inputs.heightCm);

  const heightM = heightCm / 100;
  const bmi = heightM > 0 ? weight / (heightM * heightM) : 0;

  let category: string;
  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 25) category = 'Normal weight';
  else if (bmi < 30) category = 'Overweight';
  else category = 'Obese';

  const healthyMin = 18.5 * heightM * heightM;
  const healthyMax = 24.9 * heightM * heightM;

  return {
    bmi: round(bmi, 1),
    category,
    healthyWeightMin: round2(healthyMin),
    healthyWeightMax: round2(healthyMax),
  };
};
