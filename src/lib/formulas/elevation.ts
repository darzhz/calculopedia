import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round2 } from './util';

/** Elevation change from horizontal distance and slope (degrees or percent grade). */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const distance = asNumber(inputs.distance);
  const slope = asNumber(inputs.slope);
  const method = asString(inputs.method, 'degrees');

  const elevationChange =
    method === 'degrees'
      ? distance * Math.tan((slope * Math.PI) / 180)
      : distance * (slope / 100);

  return {
    elevationChange: round2(elevationChange),
    distance,
    slope,
    slopeLabel: method === 'degrees' ? `${slope}°` : `${slope}%`,
  };
};