import type { FormulaFn, InputValues, OutputValues } from './types';
import { asString } from './types';
import { round, round2 } from './util';

/** Mean, median, mode, range, sum and count from comma-separated numbers. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const raw = asString(inputs.numbers, '');
  const nums = raw
    .split(/[,]+/)
    .map((s) => Number(s.trim()))
    .filter((n) => Number.isFinite(n));

  if (nums.length === 0) {
    return {
      mean: 0,
      median: 0,
      mode: 'N/A',
      range: 0,
      count: 0,
      sum: 0,
    };
  }

  const sorted = [...nums].sort((a, b) => a - b);
  const sum = nums.reduce((a, b) => a + b, 0);
  const mean = sum / nums.length;

  const mid = Math.floor(sorted.length / 2);
  const median =
    sorted.length % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid];

  const freq = new Map<number, number>();
  for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1);
  const maxFreq = Math.max(...freq.values());
  const modes = [...freq.entries()]
    .filter(([, f]) => f === maxFreq)
    .map(([n]) => n);
  const modeStr = modes.length === nums.length ? 'No mode' : modes.join(', ');

  const range = sorted[sorted.length - 1] - sorted[0];

  return {
    mean: round2(mean),
    median: round2(median),
    mode: modeStr,
    range: round2(range),
    count: nums.length,
    sum: round2(sum),
  };
};
