import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';

/** Leap year check and next leap year finder. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const year = asNumber(inputs.year);

  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const daysInYear = isLeap ? 366 : 365;
  const februaryDays = isLeap ? 29 : 28;

  let nextLeap = year + 1;
  while (!((nextLeap % 4 === 0 && nextLeap % 100 !== 0) || nextLeap % 400 === 0)) {
    nextLeap++;
  }

  return {
    isLeapYear: isLeap ? 'Yes' : 'No',
    daysInYear,
    nextLeapYear: nextLeap,
    februaryDays,
  };
};
