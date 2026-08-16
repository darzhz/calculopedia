import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round2 } from './util';

/** Cost of sales (COGS) = opening inventory + purchases − closing inventory. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const opening = asNumber(inputs.openingInventory);
  const purchases = asNumber(inputs.purchases);
  const closing = asNumber(inputs.closingInventory);

  const availableForSale = opening + purchases;
  const cogs = availableForSale - closing;

  return {
    cogs: round2(Math.max(0, cogs)),
    availableForSale: round2(availableForSale),
    opening: round2(opening),
    purchases: round2(purchases),
    closing: round2(closing),
  };
};