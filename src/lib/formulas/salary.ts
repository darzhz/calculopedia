import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round2 } from './util';
import {
  slabTax,
  NEW_REGIME_SLABS,
  OLD_REGIME_SLABS,
  NEW_STANDARD_DEDUCTION,
  OLD_STANDARD_DEDUCTION,
  NEW_REBATE_LIMIT,
  OLD_REBATE_LIMIT,
} from './incomeTax';

const PF_MONTHLY_CAP = 15000;
const PF_RATE = 0.12;
const PROFESSIONAL_TAX_ANNUAL = 2400; // ~₹200/month for most states

/** Indian CTC → take-home salary breakdown. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const ctc = asNumber(inputs.ctc);
  const basicPercent = asNumber(inputs.basicPercent, 40);
  const yearsOfService = asNumber(inputs.yearsOfService);
  const regime = asString(inputs.regime, 'new');
  const isNew = regime === 'new';
  const deductions = isNew ? 0 : asNumber(inputs.deductions);

  const basic = (ctc * basicPercent) / 100;
  const monthlyBasic = basic / 12;

  const pfMonthly = Math.min(monthlyBasic, PF_MONTHLY_CAP) * PF_RATE;
  const employerPf = pfMonthly * 12;
  const employeePf = pfMonthly * 12;

  // Annual gratuity accrual: 15/26 × monthly basic (per completed year)
  const gratuityAnnual = yearsOfService >= 5 ? (monthlyBasic * 15) / 26 : 0;

  const gross = ctc - employerPf - gratuityAnnual;

  const slabs = isNew ? NEW_REGIME_SLABS : OLD_REGIME_SLABS;
  const stdDeduction = isNew ? NEW_STANDARD_DEDUCTION : OLD_STANDARD_DEDUCTION;
  const taxable = Math.max(0, gross - stdDeduction - deductions);

  let tax = slabTax(taxable, slabs);
  const rebateLimit = isNew ? NEW_REBATE_LIMIT : OLD_REBATE_LIMIT;
  if (taxable <= rebateLimit) tax = 0;
  const totalTax = tax + tax * 0.04;

  const inHandAnnual = gross - employeePf - PROFESSIONAL_TAX_ANNUAL - totalTax;
  const inHandMonthly = inHandAnnual / 12;
  const grossMonthly = gross / 12;

  return {
    grossMonthly: round2(grossMonthly),
    employeePfMonthly: round2(pfMonthly),
    employerPfMonthly: round2(pfMonthly),
    ptMonthly: round2(PROFESSIONAL_TAX_ANNUAL / 12),
    taxMonthly: round2(totalTax / 12),
    gratuityAnnual: round2(gratuityAnnual),
    inHandMonthly: round2(inHandMonthly),
    inHandAnnual: round2(inHandAnnual),
  };
};
