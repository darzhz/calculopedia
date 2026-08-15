import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asBoolean } from './types';
import { round2 } from './util';

function toMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number);
  return (h || 0) * 60 + (m || 0);
}

/** Net hours worked in a shift: clock out minus clock in, minus breaks. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const startTime = String(inputs.startTime || '09:00');
  const endTime = String(inputs.endTime || '17:00');
  const nextDay = asBoolean(inputs.nextDay, false);
  const breakMinutes = asNumber(inputs.breakMinutes);

  let start = toMinutes(startTime);
  let end = toMinutes(endTime);
  if (nextDay) end += 24 * 60;

  const grossMinutes = Math.max(0, end - start);
  const netMinutes = Math.max(0, grossMinutes - breakMinutes);
  const netHours = netMinutes / 60;

  const hours = Math.floor(netMinutes / 60);
  const minutes = netMinutes % 60;

  return {
    netHours: round2(netHours),
    grossHours: round2(grossMinutes / 60),
    breakHours: round2(breakMinutes / 60),
    netMinutes,
    durationText: `${hours} hour${hours === 1 ? '' : 's'} ${minutes} minute${minutes === 1 ? '' : 's'}`,
  };
};
