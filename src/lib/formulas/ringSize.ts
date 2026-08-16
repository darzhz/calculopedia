import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round } from './util';

/**
 * Ring size from finger circumference (mm). Linear fits to standard ring charts:
 * US size 5 ≈ 49.3 mm, size 10 ≈ 62.2 mm circumference.
 */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const circumference = asNumber(inputs.circumference);
  const diameter = asNumber(inputs.diameter, 0);
  const unit = asString(inputs.unit, 'us');

  const effectiveCirc = diameter > 0 ? diameter * Math.PI : circumference;

  const usSize = (effectiveCirc - 36.28) / 2.6;

  let outUs = usSize;
  let outUk = usSize - 0.5;
  let outEu = usSize * 2 + 39;

  if (unit === 'uk') outUk = usSize;
  if (unit === 'eu') outEu = usSize;

  return {
    usSize: round(outUs, 1),
    ukSize: round(outUk, 1),
    euSize: round(outEu, 0),
    circumference: round(effectiveCirc, 1),
    diameter: round(effectiveCirc / Math.PI, 1),
  };
};