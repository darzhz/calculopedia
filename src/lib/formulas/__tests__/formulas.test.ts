import { describe, it, expect } from 'vitest';
import { computeFormula } from '../index';
import type { InputValues, OutputValues } from '../types';

function run(id: string, inputs: InputValues): OutputValues {
  return computeFormula(id, inputs);
}

function num(v: unknown): number {
  return typeof v === 'number' ? v : Number(v);
}

describe('emi', () => {
  it('computes EMI for a 50L home loan at 8.5% for 20 years', () => {
    const out = run('emi', {
      loanAmount: 5000000,
      annualRate: 8.5,
      tenureYears: 20,
      tenureMonths: 0,
      loanType: 'home',
    });
    expect(num(out.monthlyEmi)).toBeGreaterThan(43000);
    expect(num(out.monthlyEmi)).toBeLessThan(44000);
    expect(num(out.totalPayment)).toBeCloseTo(num(out.monthlyEmi) * 240, 0);
    expect(num(out.totalInterest)).toBeCloseTo(num(out.totalPayment) - 5000000, 0);
    expect(Array.isArray(out.amortization)).toBe(true);
    const rows = out.amortization as Record<string, unknown>[];
    expect(rows.length).toBe(240);
    expect(rows[239].balance).toBe(0);
  });
});

describe('compoundInterest', () => {
  it('computes quarterly compounding for 1L at 7% for 10 years', () => {
    const out = run('compoundInterest', {
      principal: 100000,
      annualRate: 7,
      years: 10,
      compoundingFrequency: 'quarterly',
    });
    expect(num(out.maturityAmount)).toBeCloseTo(200160, 0);
    expect(num(out.totalInterest)).toBeCloseTo(100160, 0);
  });
});

describe('sip', () => {
  it('computes a 10k monthly SIP at 12% for 10 years', () => {
    const out = run('sip', { monthlyInvestment: 10000, annualRate: 12, years: 10, stepUp: 0 });
    expect(num(out.investedAmount)).toBeCloseTo(1200000, 0);
    expect(num(out.maturityValue)).toBeGreaterThan(2000000);
    expect(num(out.estimatedReturns)).toBeGreaterThan(800000);
  });
});

describe('fd', () => {
  it('computes cumulative FD maturity', () => {
    const out = run('fd', {
      principal: 100000,
      annualRate: 7,
      years: 5,
      compoundingFrequency: 'quarterly',
      interestPayout: false,
    });
    expect(num(out.maturityValue)).toBeCloseTo(141478, 0);
  });
});

describe('rd', () => {
  it('maturity exceeds total deposits', () => {
    const out = run('rd', {
      monthlyDeposit: 5000,
      annualRate: 6.5,
      years: 5,
      compoundingFrequency: 'quarterly',
    });
    expect(num(out.totalDeposits)).toBeCloseTo(300000, 0);
    expect(num(out.maturityValue)).toBeGreaterThan(300000);
    expect(num(out.totalInterest)).toBeGreaterThan(40000);
  });
});

describe('swp', () => {
  it('small withdrawals last indefinitely', () => {
    const out = run('swp', {
      initialInvestment: 5000000,
      annualRate: 8,
      monthlyWithdrawal: 25000,
    });
    expect(num(out.survivalMonths)).toBe(600);
    expect(String(out.survivalDurationText)).toContain('50 year');
  });

  it('large withdrawals exhaust the corpus', () => {
    const out = run('swp', {
      initialInvestment: 5000000,
      annualRate: 8,
      monthlyWithdrawal: 50000,
    });
    const months = num(out.survivalMonths);
    expect(months).toBeGreaterThan(100);
    expect(months).toBeLessThan(180);
    expect(num(out.finalBalance)).toBe(0);
  });
});

describe('incomeTax', () => {
  it('new regime 12L income pays zero tax (87A rebate)', () => {
    const out = run('incomeTax', { annualIncome: 1200000, regime: 'new', deductions: 0 });
    expect(num(out.totalTax)).toBe(0);
    expect(num(out.taxableIncome)).toBe(1125000);
  });

  it('new regime 15L income pays slab tax + 4% cess', () => {
    const out = run('incomeTax', { annualIncome: 1500000, regime: 'new', deductions: 0 });
    expect(num(out.taxableIncome)).toBe(1425000);
    expect(num(out.taxBeforeCess)).toBeCloseTo(93750, 0);
    expect(num(out.totalTax)).toBeCloseTo(97500, 0);
  });
});

describe('gst', () => {
  it('adds 18% GST', () => {
    const out = run('gst', { amount: 10000, gstRate: '18', mode: 'add' });
    expect(num(out.gstAmount)).toBe(1800);
    expect(num(out.total)).toBe(11800);
  });

  it('extracts GST from an inclusive amount', () => {
    const out = run('gst', { amount: 11800, gstRate: '18', mode: 'exclude' });
    expect(num(out.baseAmount)).toBeCloseTo(10000, 0);
    expect(num(out.gstAmount)).toBeCloseTo(1800, 0);
  });
});

describe('gratuity', () => {
  it('computes 15/26 formula for covered employees', () => {
    const out = run('gratuity', { lastBasicDa: 40000, yearsOfService: 12, coveredByAct: true });
    expect(num(out.gratuityAmount)).toBeCloseTo(276923, 0);
    expect(num(out.eligible)).toBe(1);
  });

  it('returns zero below 5 years', () => {
    const out = run('gratuity', { lastBasicDa: 40000, yearsOfService: 4, coveredByAct: true });
    expect(num(out.gratuityAmount)).toBe(0);
    expect(num(out.eligible)).toBe(0);
  });
});

describe('salary', () => {
  it('converts 12L CTC to in-hand, new regime', () => {
    const out = run('salary', {
      ctc: 1200000,
      basicPercent: 40,
      hraPercent: 40,
      yearsOfService: 0,
      regime: 'new',
      deductions: 0,
    });
    expect(num(out.employeePfMonthly)).toBe(1800);
    expect(num(out.inHandMonthly)).toBeCloseTo(96200, 0);
  });
});

describe('gold', () => {
  it('values 20g of 22k gold', () => {
    const out = run('gold', {
      weight: 20,
      purity: '22',
      pricePerGram: 7250,
      makingPercent: 8,
    });
    expect(num(out.goldValue)).toBe(145000);
    expect(num(out.makingCharges)).toBe(11600);
    expect(num(out.totalPayable)).toBe(156600);
  });
});

describe('bmi', () => {
  it('classifies 70kg/175cm as normal', () => {
    const out = run('bmi', { weight: 70, heightCm: 175 });
    expect(num(out.bmi)).toBeCloseTo(22.9, 1);
    expect(String(out.category)).toBe('Normal weight');
  });
});

describe('calorie', () => {
  it('computes BMR and TDEE (Mifflin-St Jeor)', () => {
    const out = run('calorie', {
      age: 30,
      gender: 'male',
      heightCm: 175,
      weight: 75,
      activity: 'moderate',
      goal: 'maintain',
    });
    expect(num(out.bmr)).toBeCloseTo(1698.8, 1);
    expect(num(out.tdee)).toBeCloseTo(2633.1, 1);
    expect(num(out.targetCalories)).toBeCloseTo(2633.1, 1);
  });
});

describe('idealWeight', () => {
  it('uses Devine for a 175cm male', () => {
    const out = run('idealWeight', { heightCm: 175, gender: 'male', formula: 'devine' });
    expect(num(out.idealWeight)).toBeCloseTo(70.5, 1);
  });
});

describe('pregnancy', () => {
  it('computes due date and gestational age from LMP', () => {
    const out = run('pregnancy', { lmpDate: '2026-01-15', asOfDate: '2026-08-14' });
    expect(String(out.dueDate)).toBe('2026-10-22');
    expect(num(out.gestationalWeeks)).toBe(30);
    expect(num(out.gestationalDays)).toBe(1);
    expect(String(out.trimester)).toContain('Third');
  });
});

describe('age', () => {
  it('computes age in years, months and days', () => {
    const out = run('age', { birthDate: '1995-06-15', asOfDate: '2026-08-14' });
    expect(num(out.ageYears)).toBe(31);
    expect(num(out.ageMonths)).toBe(1);
    expect(num(out.ageDays)).toBe(30);
    expect(num(out.totalDays)).toBeGreaterThan(11350);
    expect(num(out.totalDays)).toBeLessThan(11390);
    expect(String(out.ageText)).toContain('31 year');
  });
});

describe('daysBetween', () => {
  it('counts days and business days', () => {
    const out = run('daysBetween', { startDate: '2026-01-01', endDate: '2026-01-07' });
    expect(num(out.totalDays)).toBe(6);
    expect(num(out.businessDays)).toBe(5);
  });

  it('counts 225 days between Jan 1 and Aug 14 2026', () => {
    const out = run('daysBetween', { startDate: '2026-01-01', endDate: '2026-08-14' });
    expect(num(out.totalDays)).toBe(225);
    expect(num(out.businessDays)).toBe(162);
  });
});

describe('dateAddSubtract', () => {
  it('adds days across months', () => {
    const out = run('dateAddSubtract', {
      baseDate: '2026-08-14',
      amount: 30,
      unit: 'days',
      operation: 'add',
    });
    expect(String(out.resultDate)).toBe('2026-09-13');
  });

  it('rolls over when adding a month to Jan 31', () => {
    const out = run('dateAddSubtract', {
      baseDate: '2026-01-31',
      amount: 1,
      unit: 'months',
      operation: 'add',
    });
    expect(String(out.resultDate)).toBe('2026-02-28');
  });
});

describe('timeDuration', () => {
  it('computes 9am to 5pm as 8 hours', () => {
    const out = run('timeDuration', {
      startTime: '09:00',
      endTime: '17:00',
      nextDay: false,
    });
    expect(num(out.hours)).toBe(8);
    expect(num(out.totalMinutes)).toBe(480);
  });

  it('handles overnight shifts', () => {
    const out = run('timeDuration', {
      startTime: '23:00',
      endTime: '07:00',
      nextDay: true,
    });
    expect(num(out.hours)).toBe(8);
  });
});

describe('percentage family', () => {
  it('percentOf: 15% of 200 = 30', () => {
    const out = run('percentOf', { percent: 15, value: 200 });
    expect(num(out.result)).toBe(30);
  });

  it('percentChange: 80 to 100 = +25%', () => {
    const out = run('percentChange', { fromValue: 80, toValue: 100 });
    expect(num(out.changePercent)).toBe(25);
  });

  it('percentIncrease: 20000 + 10% = 22000', () => {
    const out = run('percentIncrease', { value: 20000, percent: 10 });
    expect(num(out.newValue)).toBe(22000);
  });

  it('percentDecrease: 2000 - 25% = 1500', () => {
    const out = run('percentDecrease', { value: 2000, percent: 25 });
    expect(num(out.newValue)).toBe(1500);
  });

  it('reversePercent: 30 is 15% of 200', () => {
    const out = run('reversePercent', { valueIs: 30, percent: 15 });
    expect(num(out.original)).toBe(200);
  });

  it('partOfPercent: 30 of 200 = 15%', () => {
    const out = run('partOfPercent', { part: 30, whole: 200 });
    expect(num(out.percent)).toBe(15);
  });

  it('percentDifference: 80 vs 100 ≈ 22.2%', () => {
    const out = run('percentDifference', { firstValue: 80, secondValue: 100 });
    expect(num(out.differencePercent)).toBeCloseTo(22.2, 1);
  });

  it('markupMargin: 500 cost + 20% = 600 selling, 16.7% margin', () => {
    const out = run('markupMargin', { cost: 500, markupPercent: 20 });
    expect(num(out.sellingPrice)).toBe(600);
    expect(num(out.marginPercent)).toBeCloseTo(16.7, 1);
  });
});
