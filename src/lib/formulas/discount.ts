import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round2 } from './util';

/** Discount: original price minus discount percent. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const originalPrice = asNumber(inputs.originalPrice);
  const discountPercent = asNumber(inputs.discountPercent);

  const discountAmount = (originalPrice * discountPercent) / 100;
  const finalPrice = originalPrice - discountAmount;

  return {
    discountAmount: round2(discountAmount),
    finalPrice: round2(finalPrice),
    savingsText: `You save ${discountPercent}%`,
  };
};
