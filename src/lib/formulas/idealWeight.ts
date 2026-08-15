import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round2 } from './util';

const FORMULAS: Record<string, Record<'male' | 'female', { base: number; perInch: number }>> = {
  devine: { male: { base: 50, perInch: 2.3 }, female: { base: 45.5, perInch: 2.3 } },
  robinson: { male: { base: 52, perInch: 1.9 }, female: { base: 49, perInch: 1.7 } },
  miller: { male: { base: 56.2, perInch: 1.41 }, female: { base: 53.1, perInch: 1.36 } },
  hamwi: { male: { base: 48, perInch: 2.7 }, female: { base: 45.5, perInch: 2.2 } },
};

/** Ideal body weight from height and gender (Devine/Robinson/Miller/Hamwi). */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const heightCm = asNumber(inputs.heightCm);
  const gender = asString(inputs.gender, 'male') === 'male' ? 'male' : 'female';
  const formula = FORMULAS[asString(inputs.formula, 'devine')] ?? FORMULAS.devine;

  const heightIn = heightCm / 2.54;
  const overInches = Math.max(0, heightIn - 60);
  const ideal = formula[gender].base + formula[gender].perInch * overInches;

  const heightM = heightCm / 100;
  const healthyMin = 18.5 * heightM * heightM;
  const healthyMax = 24.9 * heightM * heightM;

  return {
    idealWeight: round2(ideal),
    healthyWeightMin: round2(healthyMin),
    healthyWeightMax: round2(healthyMax),
  };
};
