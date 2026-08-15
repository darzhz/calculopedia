import type { FormulaFn, InputValues, OutputValues } from './types';
import { asString } from './types';
import { diffDays, parseISO, toISO, todayISO } from './util';

/** Age in years/months/days and total days between two dates. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const birthIso = asString(inputs.birthDate);
  const asOfIso = asString(inputs.asOfDate) || todayISO();

  const birth = parseISO(birthIso);
  const asOf = parseISO(asOfIso);

  let years = asOf.getFullYear() - birth.getFullYear();
  let months = asOf.getMonth() - birth.getMonth();
  let days = asOf.getDate() - birth.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonthDate = new Date(asOf.getFullYear(), asOf.getMonth(), 0);
    days += prevMonthDate.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalDays = Math.max(0, diffDays(birth, asOf));
  const totalMonths = Math.max(0, years * 12 + months);
  const totalWeeks = Math.floor(totalDays / 7);

  // Next birthday
  const nextBirthday = new Date(asOf.getFullYear(), birth.getMonth(), birth.getDate());
  if (nextBirthday.getTime() < asOf.getTime()) {
    nextBirthday.setFullYear(asOf.getFullYear() + 1);
  }

  const daysUntilBirthday = diffDays(asOf, nextBirthday);

  return {
    ageYears: years,
    ageMonths: months,
    ageDays: days,
    totalDays,
    totalMonths,
    totalWeeks,
    nextBirthday: toISO(nextBirthday),
    daysUntilBirthday,
    ageText: `${years} year${years === 1 ? '' : 's'}, ${months} month${months === 1 ? '' : 's'}, ${days} day${days === 1 ? '' : 's'}`,
  };
};
