import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round2 } from './util';

/** Credit card interest: monthly interest + payoff time with a fixed payment. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const balance = asNumber(inputs.balance);
  const annualRate = asNumber(inputs.annualRate);
  const monthlyPayment = asNumber(inputs.monthlyPayment);

  const monthlyRate = annualRate / 100 / 12;
  const firstMonthInterest = balance * monthlyRate;

  // Simulate payoff month by month.
  let remaining = balance;
  let months = 0;
  let totalInterest = 0;
  const maxMonths = 1200;
  while (remaining > 0 && months < maxMonths) {
    const interest = remaining * monthlyRate;
    totalInterest += interest;
    const principal = monthlyPayment - interest;
    if (principal <= 0) {
      remaining = Infinity;
      break;
    }
    remaining -= principal;
    months++;
  }

  const payoffPossible = Number.isFinite(remaining);

  return {
    monthlyInterest: round2(firstMonthInterest),
    payoffMonths: payoffPossible ? months : 0,
    payoffYears: payoffPossible ? round2(months / 12) : 0,
    totalInterest: payoffPossible ? round2(totalInterest) : 0,
    payoffPossible: payoffPossible ? 'Yes' : 'No — payment must exceed the monthly interest',
  };
};