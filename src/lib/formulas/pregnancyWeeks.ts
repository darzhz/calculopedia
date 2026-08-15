import type { FormulaFn, InputValues, OutputValues } from './types';
import { asString } from './types';
import { addDays, diffDays, parseISO, toISO, todayISO } from './util';

const PREGNANCY_DAYS = 280;

/** Gestational age in weeks from LMP or reverse from due date. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const method = asString(inputs.method, 'lmp');
  const asOfIso = asString(inputs.asOfDate) || todayISO();
  const asOf = parseISO(asOfIso);

  let lmp: Date;
  let dueDate: Date;
  if (method === 'dueDate') {
    dueDate = parseISO(asString(inputs.dueDate));
    lmp = addDays(dueDate, -PREGNANCY_DAYS);
  } else {
    lmp = parseISO(asString(inputs.lmpDate));
    dueDate = addDays(lmp, PREGNANCY_DAYS);
  }

  const totalDays = Math.max(0, diffDays(lmp, asOf));
  const gestationalWeeks = Math.floor(totalDays / 7);
  const gestationalDays = Math.floor(totalDays % 7);
  const weeksRemaining = Math.max(0, diffDays(asOf, dueDate) / 7);

  let trimester = 'First trimester (weeks 1–13)';
  if (gestationalWeeks >= 14 && gestationalWeeks < 28) trimester = 'Second trimester (weeks 14–27)';
  if (gestationalWeeks >= 28) trimester = 'Third trimester (weeks 28+)';

  const percentComplete = Math.min(100, Math.max(0, (totalDays / PREGNANCY_DAYS) * 100));

  return {
    gestationalWeeks,
    gestationalDays,
    trimester,
    dueDate: toISO(dueDate),
    lmpDate: toISO(lmp),
    weeksRemaining: Math.round(weeksRemaining * 10) / 10,
    percentComplete: Math.round(percentComplete * 10) / 10,
  };
};
