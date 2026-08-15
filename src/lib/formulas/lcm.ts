import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

/** LCM via GCD: LCM(a,b) = |a*b| / GCD(a,b). */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const a = asNumber(inputs.a);
  const b = asNumber(inputs.b);

  const g = gcd(a, b);
  const lcm = g === 0 ? 0 : Math.abs(a * b) / g;

  return {
    lcm,
    lcmSteps: `GCD(${a}, ${b}) = ${g}\nLCM = |${a} × ${b}| ÷ ${g} = ${lcm}`,
  };
};
