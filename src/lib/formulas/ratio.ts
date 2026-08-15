import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round, round2 } from './util';

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

/** Ratio simplifier: reduces a:b to simplest form and computes proportions. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const a = asNumber(inputs.a);
  const b = asNumber(inputs.b);

  const g = gcd(a, b);
  const simpleA = g === 0 ? 0 : a / g;
  const simpleB = g === 0 ? 0 : b / g;

  const total = a + b;
  const percentA = total === 0 ? 0 : (a / total) * 100;
  const percentB = total === 0 ? 0 : (b / total) * 100;
  const aRatio = total === 0 ? 0 : a / total;
  const bRatio = total === 0 ? 0 : b / total;

  return {
    simplifiedRatio: `${simpleA} : ${simpleB}`,
    gcd: g,
    aRatio: round(aRatio, 4),
    bRatio: round(bRatio, 4),
    percentA: round(percentA, 1),
    percentB: round(percentB, 1),
  };
};
