import type { FormulaFn, InputValues, OutputValues } from './types';
import { asString } from './types';

const MEANINGS: Record<number, { planet: string; meaning: string }> = {
  1: { planet: 'Sun (Surya)', meaning: 'A born leader — confident, independent and authoritative' },
  2: { planet: 'Moon (Chandra)', meaning: 'Diplomatic, sensitive and cooperative' },
  3: { planet: 'Jupiter (Guru)', meaning: 'Creative, expressive and optimistic' },
  4: { planet: 'Rahu / Uranus', meaning: 'Practical, disciplined and hard-working' },
  5: { planet: 'Mercury (Budh)', meaning: 'Adaptable, curious and quick-witted' },
  6: { planet: 'Venus (Shukra)', meaning: 'Harmonious, caring and artistic' },
  7: { planet: 'Ketu / Neptune', meaning: 'Mystic, analytical and spiritual' },
  8: { planet: 'Saturn (Shani)', meaning: 'Ambitious, determined and authoritative' },
  9: { planet: 'Mars (Mangal)', meaning: 'Bold, energetic and courageous' },
};

function reduceToDigit(n: number): number {
  let s = Math.abs(n);
  while (s > 9) {
    s = String(s)
      .split('')
      .reduce((a, c) => a + Number(c), 0);
  }
  return s;
}

/** Numerology Moolank (birth-date root number) and Bhagyank (destiny number). */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const dateOfBirth = asString(inputs.dateOfBirth);
  const [y, m, d] = dateOfBirth.split('-').map(Number);

  const mulank = reduceToDigit(d);
  const bhagyank = reduceToDigit(y + m + d);

  return {
    mulank,
    mulankPlanet: MEANINGS[mulank].planet,
    mulankMeaning: MEANINGS[mulank].meaning,
    bhagyank,
    bhagyankPlanet: MEANINGS[bhagyank].planet,
    bhagyankMeaning: MEANINGS[bhagyank].meaning,
    dateOfBirth,
  };
};
