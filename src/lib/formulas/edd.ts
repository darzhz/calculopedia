import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { addDays, diffDays, parseISO, toISO, todayISO } from './util';

/** EDD (Estimated Due Date) adjusted for cycle length. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const lmpIso = asString(inputs.lmpDate);
  const cycleLength = asNumber(inputs.cycleLength, 28);

  const lmp = parseISO(lmpIso);
  const cycleAdjustment = cycleLength - 28;
  const dueDate = addDays(lmp, 280 + cycleAdjustment);

  const today = parseISO(todayISO());
  const daysSinceLMP = diffDays(lmp, today);
  const weeksPregnant = Math.max(0, Math.floor(daysSinceLMP / 7));

  let trimester = 'First trimester (weeks 1–13)';
  if (weeksPregnant >= 14 && weeksPregnant < 28) trimester = 'Second trimester (weeks 14–27)';
  if (weeksPregnant >= 28) trimester = 'Third trimester (weeks 28+)';

  const eddMonth = dueDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return {
    edd: toISO(dueDate),
    eddText: eddMonth,
    weeksPregnant,
    trimester,
  };
};
