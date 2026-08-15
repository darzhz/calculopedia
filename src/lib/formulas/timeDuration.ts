import type { FormulaFn, InputValues, OutputValues } from './types';
import { asString, asBoolean } from './types';

function parseTime(value: string): number {
  const [h, m] = value.split(':').map(Number);
  return (h || 0) * 60 + (m || 0);
}

/** Duration between two times of day, in hours and minutes. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const startMin = parseTime(asString(inputs.startTime, '09:00'));
  const endMin = parseTime(asString(inputs.endTime, '17:00'));
  const nextDay = asBoolean(inputs.nextDay);

  let diff = endMin - startMin;
  if (diff < 0) diff += nextDay ? 24 * 60 : 24 * 60; // assume spans midnight if negative
  if (diff < 0) diff = 0;

  const hours = Math.floor(diff / 60);
  const minutes = diff % 60;

  return {
    hours,
    minutes,
    totalMinutes: diff,
    durationText: `${hours} hour${hours === 1 ? '' : 's'} ${minutes} minute${minutes === 1 ? '' : 's'}`,
  };
};
