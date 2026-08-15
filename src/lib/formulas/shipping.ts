import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round2 } from './util';

const CARRIERS: Record<string, { base: number; perKg: number }> = {
  ups: { base: 9.0, perKg: 1.2 },
  usps: { base: 7.5, perKg: 1.0 },
  fedex: { base: 8.5, perKg: 1.15 },
};

const ZONES: Record<string, number> = {
  local: 0,
  regional: 1.5,
  national: 3.5,
  international: 12,
};

const PACKAGES: Record<string, number> = {
  envelope: 0,
  box: 0.5,
  oversized: 4,
};

/** Shipping cost estimator from carrier, weight, zone and package type. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const carrier = asString(inputs.carrier, 'ups');
  const weightKg = asNumber(inputs.weightKg);
  const zone = asString(inputs.zone, 'regional');
  const packageType = asString(inputs.packageType, 'box');

  const rates = CARRIERS[carrier] ?? CARRIERS.ups;
  const baseRate = rates.base;
  const weightCharge = Math.max(0, weightKg) * rates.perKg;
  const zoneFee = ZONES[zone] ?? 1.5;
  const packagingFee = PACKAGES[packageType] ?? 0.5;

  const estimatedTotal = baseRate + weightCharge + zoneFee + packagingFee;

  return {
    baseRate: round2(baseRate),
    weightCharge: round2(weightCharge),
    zoneFee: round2(zoneFee),
    packagingFee: round2(packagingFee),
    estimatedTotal: round2(estimatedTotal),
  };
};
