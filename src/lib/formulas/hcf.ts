import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';

function gcd(a: number, b: number): { result: number; steps: string[] } {
  const steps: string[] = [];
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    steps.push(`${a} ÷ ${b} = ${Math.floor(a / b)} remainder ${a % b}`);
    [a, b] = [b, a % b];
  }
  steps.push(`GCD = ${a}`);
  return { result: a, steps };
}

/** HCF (GCD) via Euclidean algorithm with step display. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const a = asNumber(inputs.a);
  const b = asNumber(inputs.b);
  const { result, steps } = gcd(a, b);

  return {
    hcf: result,
    hcfSteps: steps.join('\n'),
  };
};
