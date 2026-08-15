import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round2 } from './util';

/**
 * SWP (Systematic Withdrawal Plan): how long a corpus lasts given monthly
 * withdrawals, and the income generated.
 */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const initial = asNumber(inputs.initialInvestment);
  const annualRate = asNumber(inputs.annualRate);
  const withdrawal = asNumber(inputs.monthlyWithdrawal);

  const r = annualRate / 100 / 12;
  const maxMonths = 600; // 50-year safety bound

  let balance = initial;
  let months = 0;
  let totalWithdrawn = 0;

  for (let i = 1; i <= maxMonths; i++) {
    if (balance <= 0) break;
    months = i;
    balance = balance * (1 + r) - withdrawal;
    totalWithdrawn += withdrawal;
    if (balance < 0) balance = 0;
  }

  const years = Math.floor(months / 12);
  const remMonths = months % 12;
  const durationText =
    months <= 0
      ? '0 months'
      : `${years} year${years === 1 ? '' : 's'} ${remMonths} month${remMonths === 1 ? '' : 's'}`;

  return {
    survivalMonths: months,
    survivalDurationText: months <= 0 ? 'Not possible at this withdrawal rate' : durationText,
    totalWithdrawn: round2(totalWithdrawn),
    finalBalance: round2(balance),
    totalInterestEarned: round2(totalWithdrawn - initial),
  };
};
