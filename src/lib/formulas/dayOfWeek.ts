import type { FormulaFn, InputValues, OutputValues } from './types';
import { asString } from './types';
import { parseISO } from './util';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/** Day of week from a date. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const dateIso = asString(inputs.date);
  const date = parseISO(dateIso);

  const dayName = DAYS[date.getDay()];
  const dayNumber = date.getDay() + 1;

  const y = date.getFullYear();
  const isLeap = (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;

  // ISO week number
  const d = new Date(Date.UTC(y, date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNumber = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);

  return {
    dayName,
    dayNumber,
    weekNumber,
    isLeapYear: isLeap ? 'Yes' : 'No',
  };
};
