import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round2 } from './util';

/** Bike mileage calculator: km/l, cost per km, total fuel cost. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const distance = asNumber(inputs.distance);
  const fuelUsed = asNumber(inputs.fuelUsed);
  const fuelPrice = asNumber(inputs.fuelPrice);

  const mileage = fuelUsed > 0 ? distance / fuelUsed : 0;
  const totalFuelCost = fuelUsed * fuelPrice;
  const costPerKm = distance > 0 ? totalFuelCost / distance : 0;

  return {
    mileage: round2(mileage),
    costPerKm: round2(costPerKm),
    totalFuelCost: round2(totalFuelCost),
  };
};
