import type { FormulaFn, InputValues, OutputValues } from './types';
import { asString } from './types';
import { diffDays, parseISO, todayISO } from './util';

/** Days between two dates, with optional business-day count. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const startIso = asString(inputs.startDate);
  const endIso = asString(inputs.endDate) || todayISO();

  let start = parseISO(startIso);
  let end = parseISO(endIso);
  if (end.getTime() < start.getTime()) [start, end] = [end, start];

  const totalDays = diffDays(start, end);
  const totalWeeks = Math.floor(totalDays / 7);
  const remDays = totalDays % 7;

  let businessDays = 0;
  const cursor = new Date(start);
  while (cursor.getTime() <= end.getTime()) {
    const day = cursor.getDay();
    if (day !== 0 && day !== 6) businessDays += 1;
    cursor.setDate(cursor.getDate() + 1);
  }

  const years = totalDays / 365.25;
  const months = totalDays / 30.44;

  return {
    totalDays,
    totalWeeks,
    remainingDays: remDays,
    businessDays,
    yearsApprox: Math.round(years * 10) / 10,
    monthsApprox: Math.round(months * 10) / 10,
    weeksAndDaysText: `${totalWeeks} week${totalWeeks === 1 ? '' : 's'} ${remDays} day${remDays === 1 ? '' : 's'}`,
  };
};
