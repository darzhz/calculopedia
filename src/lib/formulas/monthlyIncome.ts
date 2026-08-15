import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round2 } from './util';

/** Monthly income conversion from hourly, daily, weekly, biweekly, monthly or annual amounts. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const amount = asNumber(inputs.amount);
  const frequency = asString(inputs.frequency, 'monthly');
  const hoursPerWeek = asNumber(inputs.hoursPerWeek, 40);

  let annual = 0;
  if (frequency === 'hourly') annual = amount * hoursPerWeek * 52;
  else if (frequency === 'daily') annual = amount * 260;
  else if (frequency === 'weekly') annual = amount * 52;
  else if (frequency === 'biweekly') annual = amount * 26;
  else if (frequency === 'monthly') annual = amount * 12;
  else annual = amount;

  const monthly = annual / 12;
  const weekly = annual / 52;
  const hourly = hoursPerWeek > 0 ? annual / (hoursPerWeek * 52) : 0;

  return {
    monthlyIncome: round2(monthly),
    annualIncome: round2(annual),
    weeklyIncome: round2(weekly),
    hourlyRate: round2(hourly),
    periodAmount: round2(amount),
  };
};
