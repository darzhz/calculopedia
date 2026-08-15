import type { FormulaFn, InputValues, OutputValues } from './types';
import { asString } from './types';

const MEANINGS: Record<string, string> = {
  F: 'Friends',
  L: 'Lovers',
  A: 'Affectionate',
  M: 'Marriage',
  E: 'Enemies',
  S: 'Siblings',
};

function charFreq(s: string): Record<string, number> {
  const m: Record<string, number> = {};
  for (const ch of s) m[ch] = (m[ch] ?? 0) + 1;
  return m;
}

/** FLAMES name compatibility game. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const name1 = asString(inputs.name1);
  const name2 = asString(inputs.name2);

  const a = name1.replace(/\s+/g, '').toLowerCase();
  const b = name2.replace(/\s+/g, '').toLowerCase();

  const fa = charFreq(a);
  const fb = charFreq(b);
  let common = 0;
  for (const ch in fa) {
    if (fb[ch]) common += Math.min(fa[ch], fb[ch]);
  }

  const remaining = a.length + b.length - 2 * common;
  const step = Math.max(1, remaining);

  const list = ['F', 'L', 'A', 'M', 'E', 'S'];
  let pos = 0;
  while (list.length > 1) {
    pos = (pos + step - 1) % list.length;
    list.splice(pos, 1);
  }
  const letter = list[0];

  return {
    remaining,
    step: step,
    letter,
    result: MEANINGS[letter],
    name1,
    name2,
  };
};
