import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round2 } from './util';

const RATES: Record<string, number> = {
  '5': 5,
  '12': 12,
  '18': 18,
  '28': 28,
};

/** GST calculator: add GST to an amount, or extract GST from an inclusive amount. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const amount = asNumber(inputs.amount);
  const rate = RATES[asString(inputs.gstRate, '18')] ?? 18;
  const mode = asString(inputs.mode, 'add');

  let base = amount;
  let gst = (amount * rate) / 100;
  let total = amount + gst;

  if (mode === 'exclude') {
    base = amount / (1 + rate / 100);
    gst = amount - base;
    total = amount;
  }

  return {
    gstAmount: round2(gst),
    total: round2(total),
    baseAmount: round2(base),
    gstRatePercent: rate,
  };
};
