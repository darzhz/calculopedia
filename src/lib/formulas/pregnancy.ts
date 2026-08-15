import type { FormulaFn, InputValues, OutputValues } from './types';
import { asString } from './types';
import { addDays, diffDays, parseISO, toISO, todayISO } from './util';

const PREGNANCY_DAYS = 280;

/** Pregnancy due date from LMP: due date = LMP + 280 days. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const lmpIso = asString(inputs.lmpDate);
  const asOfIso = asString(inputs.asOfDate) || todayISO();

  const lmp = parseISO(lmpIso);
  const asOf = parseISO(asOfIso);

  const dueDate = addDays(lmp, PREGNANCY_DAYS);
  const conceived = addDays(lmp, 14);

  const totalDays = diffDays(lmp, asOf);
  const gestationalWeeks = Math.floor(Math.max(0, totalDays) / 7);
  const gestationalDays = Math.floor(Math.max(0, totalDays) % 7);

  let trimester = 'First trimester (weeks 1–13)';
  if (gestationalWeeks >= 14 && gestationalWeeks < 28) trimester = 'Second trimester (weeks 14–27)';
  if (gestationalWeeks >= 28) trimester = 'Third trimester (weeks 28+)';

  const weeksRemaining = Math.max(0, diffDays(asOf, dueDate) / 7);

  return {
    dueDate: toISO(dueDate),
    conceivedDate: toISO(conceived),
    gestationalWeeks,
    gestationalDays,
    trimester,
    weeksRemaining: Math.round(weeksRemaining * 10) / 10,
  };
};
