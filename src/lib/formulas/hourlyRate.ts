import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round2 } from './util';

/** Annual salary ↔ hourly, daily, weekly and monthly rates. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const annualSalary = asNumber(inputs.annualSalary);
  const hoursPerWeek = asNumber(inputs.hoursPerWeek, 40);
  const weeksPerYear = asNumber(inputs.weeksPerYear, 52);

  const hoursPerYear = hoursPerWeek * weeksPerYear;
  const hourlyRate = hoursPerYear > 0 ? annualSalary / hoursPerYear : 0;
  const daily = hoursPerWeek > 0 ? hourlyRate * 8 : 0;
  const weekly = hoursPerYear > 0 ? annualSalary / weeksPerYear : 0;
  const monthly = annualSalary / 12;

  return {
    hourlyRate: round2(hourlyRate),
    daily,
    weekly: round2(weekly),
    monthly: round2(monthly),
    hoursPerYear,
  };
};
