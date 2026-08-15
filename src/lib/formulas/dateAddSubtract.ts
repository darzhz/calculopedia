import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { addDays, parseISO, toISO } from './util';

function addMonthsClamped(date: Date, months: number): Date {
  const d = new Date(date);
  const day = d.getDate();
  d.setDate(1);
  d.setMonth(d.getMonth() + months);
  const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  d.setDate(Math.min(day, lastDay));
  return d;
}

/** Add or subtract days/weeks/months/years to/from a date. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const baseIso = asString(inputs.baseDate);
  const operation = asString(inputs.operation, 'add');
  const unit = asString(inputs.unit, 'days');
  const amount = Math.round(asNumber(inputs.amount));

  const base = parseISO(baseIso);
  const sign = operation === 'add' ? 1 : -1;
  let result = new Date(base);

  switch (unit) {
    case 'days':
      result = addDays(result, sign * amount);
      break;
    case 'weeks':
      result = addDays(result, sign * amount * 7);
      break;
    case 'months':
      result = addMonthsClamped(result, sign * amount);
      break;
    case 'years':
      result = addMonthsClamped(result, sign * amount * 12);
      break;
  }

  return {
    resultDate: toISO(result),
    unitLabel: `${operation === 'add' ? 'Added' : 'Subtracted'} ${amount} ${unit}`,
  };
};
