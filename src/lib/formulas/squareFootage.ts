import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round2 } from './util';

const SQFT_PER_SQM = 10.7639;

/** Square footage of a rectangle from length and width (ft or m). */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const unit = asString(inputs.unit, 'ft');
  const length = asNumber(inputs.length);
  const width = asNumber(inputs.width);

  const lengthFt = unit === 'm' ? length * 3.28084 : length;
  const widthFt = unit === 'm' ? width * 3.28084 : width;
  const squareFeet = lengthFt * widthFt;
  const squareMeters = squareFeet / SQFT_PER_SQM;

  return {
    squareFeet: round2(squareFeet),
    squareMeters: round2(squareMeters),
  };
};
