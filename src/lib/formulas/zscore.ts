import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round } from './util';

/** Standard normal CDF (Abramowitz & Stegun 26.2.17), accurate to ~1e-4. */
function normCdf(z: number): number {
  if (z > 6.5) return 1;
  if (z < -6.5) return 0;
  const p = 0.2316419;
  const b1 = 0.31938153;
  const b2 = -0.356563782;
  const b3 = 1.781477937;
  const b4 = -1.821255978;
  const b5 = 1.330274429;
  const t = 1 / (1 + p * Math.abs(z));
  const poly = b1 * t + b2 * t ** 2 + b3 * t ** 3 + b4 * t ** 4 + b5 * t ** 5;
  const phi = Math.exp((-z * z) / 2) / Math.sqrt(2 * Math.PI);
  const cdf = 1 - phi * poly;
  return z >= 0 ? cdf : 1 - cdf;
}

/** Z-score = (x − mean) / standard deviation, with percentile interpretation. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const x = asNumber(inputs.value);
  const mean = asNumber(inputs.mean);
  const sd = asNumber(inputs.standardDeviation);

  const zScore = sd > 0 ? (x - mean) / sd : 0;
  const percentile = normCdf(zScore) * 100;

  let interpretation: string;
  if (zScore === 0) interpretation = 'Exactly at the mean';
  else if (zScore > 0) interpretation = `${round(Math.abs(zScore), 2)} standard deviations above the mean`;
  else interpretation = `${round(Math.abs(zScore), 2)} standard deviations below the mean`;

  return {
    zScore: round(zScore, 2),
    percentile: round(percentile, 1),
    interpretation,
  };
};
