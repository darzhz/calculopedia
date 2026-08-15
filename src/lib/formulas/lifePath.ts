import type { FormulaFn, InputValues, OutputValues } from './types';
import { asString } from './types';

const MEANINGS: Record<number, string> = {
  1: 'The Leader — independent and pioneering, you forge your own path',
  2: 'The Diplomat — cooperative, gentle and peace-making',
  3: 'The Communicator — creative, expressive and full of joy',
  4: 'The Builder — practical, disciplined and reliable',
  5: 'The Adventurer — freedom-loving, versatile and curious',
  6: 'The Caretaker — nurturing, responsible and harmony-seeking',
  7: 'The Thinker — analytical, spiritual and deep',
  8: 'The Powerhouse — ambitious, driven and business-minded',
  9: 'The Humanitarian — compassionate, wise and generous',
  11: 'Master 11 — intuitive, inspiring and spiritually awake',
  22: 'Master 22 — the master builder who turns big dreams into reality',
  33: 'Master 33 — the master teacher, selfless and loving',
};

function reduceToDigit(n: number): number {
  let s = n;
  while (s > 9) {
    s = String(s)
      .split('')
      .reduce((a, c) => a + Number(c), 0);
  }
  return s;
}

function reducePath(day: number, month: number, year: number): number {
  const sum = reduceToDigit(day) + reduceToDigit(month) + reduceToDigit(year);
  if (sum === 11 || sum === 22 || sum === 33) return sum;
  return reduceToDigit(sum);
}

/** Life path number from date of birth, preserving master numbers 11/22/33. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const dateOfBirth = asString(inputs.dateOfBirth);
  const [y, m, d] = dateOfBirth.split('-').map(Number);

  const lifePathNumber = reducePath(d, m, y);
  const isMaster = lifePathNumber === 11 || lifePathNumber === 22 || lifePathNumber === 33;

  return {
    lifePathNumber,
    isMasterNumber: isMaster ? 'Yes' : 'No',
    meaning: MEANINGS[lifePathNumber],
    dateOfBirth,
  };
};
