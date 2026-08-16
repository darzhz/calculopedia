import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round } from './util';

const BREED_FACTOR: Record<string, number> = {
  small: 4,
  medium: 5,
  large: 6,
  giant: 7,
};

/** Dog age in human years: 15 in year 1, +9 in year 2, then +4..7 per year by breed size. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const age = asNumber(inputs.age);
  const breedSize = asString(inputs.breedSize, 'medium');
  const factor = BREED_FACTOR[breedSize] ?? 5;

  let humanYears: number;
  if (age <= 0) {
    humanYears = 0;
  } else if (age <= 1) {
    humanYears = 15 * age;
  } else if (age <= 2) {
    humanYears = 15 + 9 * (age - 1);
  } else {
    humanYears = 24 + (age - 2) * factor;
  }

  const stage =
    age <= 1
      ? 'Puppy'
      : age <= 6
        ? 'Adolescent to adult'
        : age <= 10
          ? 'Adult'
          : age <= 13
            ? 'Senior'
            : 'Geriatric';

  return {
    humanYears: round(humanYears, 1),
    ageYears: age,
    stage,
    sizeLabel: breedSize,
  };
};