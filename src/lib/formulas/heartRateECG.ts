import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round } from './util';

/** Heart rate from ECG: RR interval method or count-over-time method. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const method = asString(inputs.method, 'rr');

  let heartRate: number;

  if (method === 'rr') {
    const rrInterval = asNumber(inputs.rrInterval, 800);
    heartRate = rrInterval > 0 ? 60000 / rrInterval : 0;
  } else {
    const complexes = asNumber(inputs.complexes, 5);
    const timePeriod = asNumber(inputs.timePeriod, 10);
    heartRate = timePeriod > 0 ? (complexes * 60) / timePeriod : 0;
  }

  let rhythm = 'Likely regular';
  if (heartRate < 60) rhythm = 'Bradycardia (slow)';
  else if (heartRate > 100) rhythm = 'Tachycardia (fast)';

  return {
    heartRate: round(heartRate, 0),
    rhythm,
  };
};
