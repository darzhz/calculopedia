import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round } from './util';

/** Zone 2 range: 60–70% of max HR, optionally using the Karvonen (heart-rate reserve) method. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const age = asNumber(inputs.age);
  const method = asString(inputs.method, 'maxHr');
  const restingHr = asNumber(inputs.restingHr, 0);

  const maxHr = 220 - age;

  let low: number;
  let high: number;
  if (method === 'karvonen' && restingHr > 0) {
    const reserve = maxHr - restingHr;
    low = reserve * 0.6 + restingHr;
    high = reserve * 0.7 + restingHr;
  } else {
    low = maxHr * 0.6;
    high = maxHr * 0.7;
  }

  return {
    maxHr: round(maxHr, 0),
    zone2Low: round(low, 0),
    zone2High: round(high, 0),
    methodNote:
      method === 'karvonen' && restingHr > 0
        ? 'Karvonen formula using heart-rate reserve (max HR − resting HR)'
        : 'Percentage of max HR (60–70%)',
  };
};