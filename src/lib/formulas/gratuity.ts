import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asBoolean } from './types';
import { round2 } from './util';

/**
 * Gratuity under the Indian Payment of Gratuity Act, 1972.
 * Covered: 15/26 * last drawn basic+DA * completed years (min 5).
 * Non-covered: 15/30 * last drawn wages * completed years.
 */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const lastBasicDa = asNumber(inputs.lastBasicDa);
  const years = asNumber(inputs.yearsOfService);
  const covered = asBoolean(inputs.coveredByAct, true);

  if (years < 5) {
    return {
      gratuityAmount: 0,
      eligible: 0,
      gratuityText:
        'Not eligible yet — gratuity requires at least 5 continuous years of service (Gratuity Act, 1972).',
    };
  }

  const numerator = covered ? 15 : 15;
  const denominator = covered ? 26 : 30;
  const gratuity = (lastBasicDa * years * numerator) / denominator;

  return {
    gratuityAmount: round2(gratuity),
    eligible: 1,
    gratuityText: `${covered ? 'Covered' : 'Not covered'} by the Act — ${numerator}/${denominator} × ₹${round2(lastBasicDa)} × ${years} years`,
  };
};
