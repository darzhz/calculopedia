import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round2 } from './util';

const PURITY: Record<string, number> = { '24': 24, '22': 22, '18': 18 };

/** Gold value: weight × price of selected purity + making charges. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const weight = asNumber(inputs.weight);
  const purity = PURITY[asString(inputs.purity, '22')] ?? 22;
  const pricePerGram = asNumber(inputs.pricePerGram);
  const makingPercent = asNumber(inputs.makingPercent, 8);

  const goldValue = weight * pricePerGram;
  const makingCharges = (goldValue * makingPercent) / 100;
  const total = goldValue + makingCharges;

  return {
    goldValue: round2(goldValue),
    makingCharges: round2(makingCharges),
    totalPayable: round2(total),
    purityRate: pricePerGram,
  };
};
