import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { addDays, diffDays, parseISO, toISO } from './util';

/** Ovulation: cycle length minus luteal phase from the last period date, with fertile window. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const periodStart = asString(inputs.periodStart);
  const cycleLength = asNumber(inputs.cycleLength, 28);
  const lutealPhase = asNumber(inputs.lutealPhase, 14);

  const start = parseISO(periodStart);
  if (Number.isNaN(start.getTime())) {
    return {
      ovulationDate: '',
      fertileStart: '',
      fertileEnd: '',
      nextPeriodDate: '',
      daysUntilOvulation: 0,
    };
  }

  const ovulationDaysFromStart = Math.max(1, cycleLength - lutealPhase);
  const ovulation = addDays(start, ovulationDaysFromStart);
  const fertileStart = addDays(ovulation, -5);
  const fertileEnd = addDays(ovulation, 1);
  const nextPeriod = addDays(start, cycleLength);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return {
    ovulationDate: toISO(ovulation),
    fertileStart: toISO(fertileStart),
    fertileEnd: toISO(fertileEnd),
    nextPeriodDate: toISO(nextPeriod),
    daysUntilOvulation: Math.max(0, diffDays(today, ovulation)),
  };
};