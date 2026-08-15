import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round2 } from './util';

const FT_PER_INCH = 1 / 12;
const FT_PER_CM = 1 / 30.48;

/** Cubic feet (and metric equivalents) from length × width × height. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const unit = asString(inputs.unit, 'ft');
  const length = asNumber(inputs.length);
  const width = asNumber(inputs.width);
  const height = asNumber(inputs.height);

  const factor = unit === 'in' ? FT_PER_INCH : unit === 'cm' ? FT_PER_CM : 1;
  const cubicFeet = length * factor * width * factor * height * factor;
  const cubicMeters = cubicFeet * 0.0283168;
  const liters = cubicMeters * 1000;
  const cubicInches = cubicFeet * 1728;

  return {
    cubicFeet: round2(cubicFeet),
    cubicMeters: round2(cubicMeters),
    liters: round2(liters),
    cubicInches: round2(cubicInches),
  };
};
