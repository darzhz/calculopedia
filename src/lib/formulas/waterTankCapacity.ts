import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round2 } from './util';

const LITERS_PER_GALLON = 0.264172;

/** Water tank capacity: rectangular or cylindrical, in liters, gallons and m³. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const shape = asString(inputs.shape, 'rectangular');
  const height = asNumber(inputs.height, 60);

  let volumeCm3: number;

  if (shape === 'cylindrical') {
    const diameter = asNumber(inputs.diameter, 60);
    const radius = diameter / 2;
    volumeCm3 = Math.PI * radius * radius * height;
  } else {
    const length = asNumber(inputs.length, 100);
    const width = asNumber(inputs.width, 50);
    volumeCm3 = length * width * height;
  }

  const capacityLiters = volumeCm3 / 1000;
  const capacityGallons = capacityLiters * LITERS_PER_GALLON;
  const capacityM3 = volumeCm3 / 1e6;

  return {
    capacityLiters: round2(capacityLiters),
    capacityGallons: round2(capacityGallons),
    capacityM3: round2(capacityM3),
  };
};
