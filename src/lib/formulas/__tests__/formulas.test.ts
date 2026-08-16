import { describe, it, expect } from 'vitest';
import { computeFormula } from '../index';
import type { InputValues, OutputValues } from '../types';

function run(id: string, inputs: InputValues): OutputValues {
  return computeFormula(id, inputs);
}

function num(v: unknown): number {
  return typeof v === 'number' ? v : Number(v);
}

describe('monthlyIncome', () => {
  it('converts 1L monthly to 12L annual', () => {
    const out = run('monthlyIncome', { amount: 100000, frequency: 'monthly', hoursPerWeek: 40 });
    expect(num(out.monthlyIncome)).toBeCloseTo(100000, 0);
    expect(num(out.annualIncome)).toBeCloseTo(1200000, 0);
    expect(num(out.weeklyIncome)).toBeCloseTo(23077, 0);
  });

  it('converts hourly rate to monthly', () => {
    const out = run('monthlyIncome', { amount: 800, frequency: 'hourly', hoursPerWeek: 40 });
    expect(num(out.monthlyIncome)).toBeCloseTo(138667, 0);
  });
});

describe('interestPerMonth', () => {
  it('12% annual → 1% monthly, ₹500/month on 50k', () => {
    const out = run('interestPerMonth', { annualRate: 12, principal: 50000, months: 12 });
    expect(num(out.monthlyRate)).toBe(1);
    expect(num(out.monthlyInterest)).toBeCloseTo(500, 0);
    expect(num(out.totalInterest)).toBeCloseTo(6000, 0);
  });
});

describe('gpa', () => {
  it('computes weighted GPA on 4.0 scale', () => {
    const out = run('gpa', {
      scale: '4',
      subject1Grade: 'A',
      subject1Credits: 3,
      subject2Grade: 'A',
      subject2Credits: 3,
      subject3Grade: 'A',
      subject3Credits: 3,
      subject4Grade: 'B',
      subject4Credits: 3,
      subject5Grade: 'F',
      subject5Credits: 0,
    });
    expect(num(out.gpa)).toBeCloseTo(3.75, 2);
    expect(num(out.totalCredits)).toBe(12);
    expect(Array.isArray(out.courseBreakdown)).toBe(true);
  });
});

describe('shipping', () => {
  it('estimates UPS cost for 2kg regional box', () => {
    const out = run('shipping', { carrier: 'ups', weightKg: 2, zone: 'regional', packageType: 'box' });
    expect(num(out.baseRate)).toBe(9);
    expect(num(out.weightCharge)).toBeCloseTo(2.4, 1);
    expect(num(out.estimatedTotal)).toBeCloseTo(9 + 2.4 + 1.5 + 0.5, 0);
  });
});

describe('zscore', () => {
  it('computes z = 1.5 and percentile ~93.3 for 85 vs mean 70 sd 10', () => {
    const out = run('zscore', { value: 85, mean: 70, standardDeviation: 10 });
    expect(num(out.zScore)).toBeCloseTo(1.5, 2);
    expect(num(out.percentile)).toBeGreaterThan(93);
    expect(num(out.percentile)).toBeLessThan(94);
    expect(String(out.interpretation)).toContain('above the mean');
  });

  it('gives 50th percentile at the mean', () => {
    const out = run('zscore', { value: 70, mean: 70, standardDeviation: 10 });
    expect(num(out.zScore)).toBeCloseTo(0, 2);
    expect(num(out.percentile)).toBeCloseTo(50, 0);
  });
});

describe('hoursWorked', () => {
  it('09:00–17:00 minus 30 min break = 7.5 hours', () => {
    const out = run('hoursWorked', {
      startTime: '09:00',
      endTime: '17:00',
      nextDay: false,
      breakMinutes: 30,
    });
    expect(num(out.netHours)).toBeCloseTo(7.5, 1);
    expect(num(out.netMinutes)).toBe(450);
    expect(String(out.durationText)).toContain('7 hour');
  });

  it('handles overnight shifts', () => {
    const out = run('hoursWorked', {
      startTime: '23:00',
      endTime: '07:00',
      nextDay: true,
      breakMinutes: 0,
    });
    expect(num(out.netHours)).toBeCloseTo(8, 1);
  });
});

describe('cubicFeet', () => {
  it('computes 2×2×3 ft = 12 cu ft', () => {
    const out = run('cubicFeet', { unit: 'ft', length: 2, width: 2, height: 3 });
    expect(num(out.cubicFeet)).toBeCloseTo(12, 2);
    expect(num(out.liters)).toBeGreaterThan(330);
    expect(num(out.liters)).toBeLessThan(340);
  });

  it('converts cm to cubic feet', () => {
    const out = run('cubicFeet', { unit: 'cm', length: 100, width: 50, height: 40 });
    expect(num(out.cubicFeet)).toBeGreaterThan(7);
    expect(num(out.cubicFeet)).toBeLessThan(7.1);
  });
});

describe('hourlyRate', () => {
  it('12L annual at 40h × 52w ≈ ₹577/hour', () => {
    const out = run('hourlyRate', { annualSalary: 1200000, hoursPerWeek: 40, weeksPerYear: 52 });
    expect(num(out.hourlyRate)).toBeCloseTo(576.9, 0);
    expect(num(out.monthly)).toBeCloseTo(100000, 0);
  });
});

describe('bmr', () => {
  it('Mifflin-St Jeor for a 30y male 175cm 75kg', () => {
    const out = run('bmr', { age: 30, gender: 'male', heightCm: 175, weight: 75, bodyFatPercent: 20 });
    expect(num(out.bmrMifflin)).toBeCloseTo(1698.8, 1);
    expect(num(out.bmrKatch)).toBeGreaterThan(1600);
  });
});

describe('debtToIncome', () => {
  it('12L income, ₹30k monthly debts → 30% DTI', () => {
    const out = run('debtToIncome', { annualIncome: 1200000, monthlyDebts: 30000 });
    expect(num(out.grossMonthly)).toBeCloseTo(100000, 0);
    expect(num(out.dti)).toBeCloseTo(30, 1);
    expect(String(out.category)).toContain('Good');
  });
});

describe('squareFootage', () => {
  it('10×12 ft room = 120 sq ft', () => {
    const out = run('squareFootage', { unit: 'ft', length: 10, width: 12 });
    expect(num(out.squareFeet)).toBeCloseTo(120, 2);
  });
});

describe('creatinineClearance', () => {
  it('Cockcroft-Gault male 40y 70kg sCr 1.0', () => {
    const out = run('creatinineClearance', { age: 40, weight: 70, gender: 'male', serumCreatinine: 1 });
    expect(num(out.crCl)).toBeCloseTo(97.2, 1);
    expect(String(out.category)).toContain('Normal');
  });

  it('female multiplier 0.85 lowers clearance', () => {
    const out = run('creatinineClearance', { age: 40, weight: 70, gender: 'female', serumCreatinine: 1 });
    expect(num(out.crCl)).toBeCloseTo(82.6, 1);
  });
});

describe('braSize', () => {
  it('underbust 31, bust 36, modern → 32D', () => {
    const out = run('braSize', { unit: 'in', underbust: 31, bust: 36, method: 'modern' });
    expect(num(out.bandSize)).toBe(32);
    expect(String(out.cupLetter)).toBe('D');
    expect(String(out.braSize)).toBe('32D');
  });

  it('cm input converts and traditional method adds 4', () => {
    const out = run('braSize', { unit: 'cm', underbust: 80, bust: 95, method: 'traditional' });
    expect(num(out.bandSize)).toBe(36);
  });
});

describe('carPayment', () => {
  it('computes monthly payment from price minus down payment', () => {
    const out = run('carPayment', {
      carPrice: 800000,
      downPayment: 150000,
      annualRate: 9.5,
      years: 5,
    });
    expect(num(out.loanAmount)).toBeCloseTo(650000, 0);
    expect(num(out.monthlyPayment)).toBeGreaterThan(13500);
    expect(num(out.monthlyPayment)).toBeLessThan(13800);
    expect(num(out.totalCost)).toBeCloseTo(800000 + num(out.totalInterest), 0);
    const rows = out.amortization as Record<string, unknown>[];
    expect(rows.length).toBe(60);
    expect(rows[59].balance).toBe(0);
  });
});

describe('takeHomePay', () => {
  it('12L gross in new regime pays zero tax (rebate)', () => {
    const out = run('takeHomePay', { annualIncome: 1200000, regime: 'new', deductions: 0 });
    expect(num(out.taxableIncome)).toBe(1125000);
    expect(num(out.taxTotal)).toBe(0);
    expect(num(out.netMonthly)).toBeCloseTo(100000, 0);
  });

  it('15L gross in new regime pays tax + cess', () => {
    const out = run('takeHomePay', { annualIncome: 1500000, regime: 'new', deductions: 0 });
    expect(num(out.taxTotal)).toBeCloseTo(97500, 0);
    expect(num(out.netAnnual)).toBeCloseTo(1402500, 0);
  });

  it('old regime allows deductions', () => {
    const out = run('takeHomePay', {
      annualIncome: 1500000,
      regime: 'old',
      deductions: 150000,
    });
    expect(num(out.taxableIncome)).toBe(1300000);
    expect(num(out.taxTotal)).toBeCloseTo(210600, 0);
  });
});

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

describe('bodyFat', () => {
  it('estimates Navy-method body fat for a male', () => {
    const out = run('bodyFat', {
      gender: 'male',
      weight: 75,
      heightCm: 175,
      neckCm: 38,
      waistCm: 85,
      hipCm: 0,
    });
    expect(num(out.bodyFatPercent)).toBeGreaterThan(9);
    expect(num(out.bodyFatPercent)).toBeLessThan(12);
    expect(String(out.category)).toBe('Athletes');
    expect(num(out.fatMass)).toBeGreaterThan(0);
    expect(num(out.leanMass)).toBeCloseTo(75 - num(out.fatMass), 1);
  });
});

describe('mortgage', () => {
  it('computes P&I plus tax and insurance, no PMI at 20% down', () => {
    const out = run('mortgage', {
      homePrice: 350000,
      downPayment: 70000,
      annualRate: 6.5,
      years: 30,
      annualTax: 3000,
      annualInsurance: 1200,
      includePmi: true,
      pmiRate: 1,
    });
    expect(num(out.loanAmount)).toBeCloseTo(280000, 0);
    expect(num(out.monthlyPI)).toBeGreaterThan(1750);
    expect(num(out.monthlyPI)).toBeLessThan(1800);
    expect(num(out.monthlyPmi)).toBe(0);
    expect(num(out.totalMonthly)).toBeCloseTo(num(out.monthlyPI) + 250 + 100, 0);
    const rows = out.amortization as Record<string, unknown>[];
    expect(rows.length).toBe(360);
    expect(rows[359].balance).toBe(0);
  });

  it('applies PMI when down payment is under 20%', () => {
    const out = run('mortgage', {
      homePrice: 350000,
      downPayment: 30000,
      annualRate: 6.5,
      years: 30,
      annualTax: 0,
      annualInsurance: 0,
      includePmi: true,
      pmiRate: 1,
    });
    expect(num(out.monthlyPmi)).toBeGreaterThan(250);
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

describe('maintenanceCalories', () => {
  it('computes maintenance from Mifflin-St Jeor BMR', () => {
    const out = run('maintenanceCalories', {
      age: 30,
      gender: 'male',
      heightCm: 175,
      weight: 75,
      activity: 'moderate',
      method: 'mifflin',
      bodyFatPercent: 20,
    });
    expect(num(out.bmr)).toBeCloseTo(1698.8, 1);
    expect(num(out.maintenanceCalories)).toBeCloseTo(2633.1, 1);
    expect(num(out.cutCalories)).toBeCloseTo(2238.1, 0);
    expect(num(out.bulkCalories)).toBeCloseTo(3028.1, 0);
  });
});

describe('idealWeight', () => {
  it('uses Devine for a 175cm male', () => {
    const out = run('idealWeight', { heightCm: 175, gender: 'male', formula: 'devine' });
    expect(num(out.idealWeight)).toBeCloseTo(70.5, 1);
  });
});

describe('flames', () => {
  it('RAM + SITA returns Friends', () => {
    const out = run('flames', { name1: 'RAM', name2: 'SITA' });
    expect(String(out.result)).toBe('Friends');
    expect(num(out.remaining)).toBe(5);
  });

  it('handles spaces and mixed case', () => {
    const out = run('flames', { name1: 'Rahul Kumar', name2: 'Priya' });
    expect(['Friends', 'Lovers', 'Affectionate', 'Marriage', 'Enemies', 'Siblings']).toContain(
      String(out.result),
    );
  });
});

describe('mulank', () => {
  it('15 Jun 1995 → Mulank 6, Bhagyank 9', () => {
    const out = run('mulank', { dateOfBirth: '1995-06-15' });
    expect(num(out.mulank)).toBe(6);
    expect(String(out.mulankPlanet)).toContain('Venus');
    expect(num(out.bhagyank)).toBe(9);
    expect(String(out.bhagyankPlanet)).toContain('Mars');
  });
});

describe('lifePath', () => {
  it('15 Jun 1995 → Life Path 9', () => {
    const out = run('lifePath', { dateOfBirth: '1995-06-15' });
    expect(num(out.lifePathNumber)).toBe(9);
    expect(String(out.meaning)).toContain('Humanitarian');
  });

  it('preserves master number 22', () => {
    const out = run('lifePath', { dateOfBirth: '1993-09-18' });
    expect(num(out.lifePathNumber)).toBe(22);
    expect(String(out.isMasterNumber)).toBe('Yes');
  });
});

describe('pregnancyWeeks', () => {
  it('computes weeks and due date from LMP', () => {
    const out = run('pregnancyWeeks', { method: 'lmp', lmpDate: '2026-01-15', dueDate: '', asOfDate: '2026-08-14' });
    expect(num(out.gestationalWeeks)).toBe(30);
    expect(num(out.gestationalDays)).toBe(1);
    expect(String(out.dueDate)).toBe('2026-10-22');
    expect(String(out.trimester)).toContain('Third');
  });

  it('works backwards from a due date', () => {
    const out = run('pregnancyWeeks', { method: 'dueDate', lmpDate: '', dueDate: '2026-10-22', asOfDate: '2026-08-14' });
    expect(String(out.lmpDate)).toBe('2026-01-15');
    expect(num(out.gestationalWeeks)).toBe(30);
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

describe('tdee', () => {
  it('30yo male 175cm 75kg moderate → ~2633 kcal', () => {
    const out = run('tdee', { age: 30, gender: 'male', heightCm: 175, weight: 75, activity: 'moderate' });
    expect(num(out.bmr)).toBeCloseTo(1699, 0);
    expect(num(out.tdee)).toBeCloseTo(2633, 0);
    expect(num(out.lossTarget)).toBeCloseTo(2133, 0);
    expect(num(out.gainTarget)).toBeCloseTo(3133, 0);
  });
});

describe('calorieDeficit', () => {
  it('500 kcal deficit → ~0.45 kg/week, ~11 weeks for 5kg', () => {
    const out = run('calorieDeficit', {
      age: 30, gender: 'male', heightCm: 175, weight: 75, activity: 'moderate', deficit: 500,
    });
    expect(num(out.targetCalories)).toBeCloseTo(2133, 0);
    expect(num(out.weeklyLossKg)).toBeCloseTo(0.45, 1);
    expect(num(out.weeksToLose5Kg)).toBeCloseTo(11, 0);
  });

  it('never recommends below 1200 kcal', () => {
    const out = run('calorieDeficit', {
      age: 60, gender: 'female', heightCm: 150, weight: 40, activity: 'sedentary', deficit: 1000,
    });
    expect(num(out.targetCalories)).toBeGreaterThanOrEqual(1200);
  });
});

describe('maxHeartRate', () => {
  it('30yo: 220-age = 190, Tanaka = 187', () => {
    const out = run('maxHeartRate', { age: 30, method: '220' });
    expect(num(out.maxHr)).toBe(190);
    expect(num(out.zone2Low)).toBe(114);
    expect(num(out.zone2High)).toBe(133);
    const tanaka = run('maxHeartRate', { age: 30, method: 'tanaka' });
    expect(num(tanaka.maxHr)).toBe(187);
    expect(Array.isArray(out.zoneTable)).toBe(true);
  });
});

describe('zone2HeartRate', () => {
  it('35yo maxHR method → 111–130', () => {
    const out = run('zone2HeartRate', { age: 35, method: 'maxHr' });
    expect(num(out.zone2Low)).toBe(111);
    expect(num(out.zone2High)).toBe(130);
  });

  it('35yo Karvonen with resting 60 → 135–147', () => {
    const out = run('zone2HeartRate', { age: 35, method: 'karvonen', restingHr: 60 });
    expect(num(out.zone2Low)).toBe(135);
    expect(num(out.zone2High)).toBe(148);
  });
});

describe('dogYears', () => {
  it('5yo medium dog → 39 human years', () => {
    const out = run('dogYears', { age: 5, breedSize: 'medium' });
    expect(num(out.humanYears)).toBe(39);
  });

  it('1yo dog → 15, 2yo → 24', () => {
    expect(num(run('dogYears', { age: 1, breedSize: 'small' }).humanYears)).toBe(15);
    expect(num(run('dogYears', { age: 2, breedSize: 'small' }).humanYears)).toBe(24);
  });

  it('large breeds age faster: 5yo large → 42', () => {
    const out = run('dogYears', { age: 5, breedSize: 'large' });
    expect(num(out.humanYears)).toBe(42);
  });
});

describe('heloc', () => {
  it('50k drawn at 8.5% interest-only → ~354/month', () => {
    const out = run('heloc', { drawAmount: 50000, annualRate: 8.5, years: 10, interestOnly: true });
    expect(num(out.monthlyPayment)).toBeCloseTo(354, 0);
  });

  it('amortized over 10 years → ~620/month', () => {
    const out = run('heloc', { drawAmount: 50000, annualRate: 8.5, years: 10, interestOnly: false });
    expect(num(out.monthlyPayment)).toBeCloseTo(620, 0);
    expect(num(out.totalInterest)).toBeGreaterThan(0);
  });
});

describe('apr', () => {
  it('8% + 2k fees on 100k over 5y → APR ≈ 8.79%', () => {
    const out = run('apr', { loanAmount: 100000, annualRate: 8, fees: 2000, years: 5, paymentsPerYear: 12 });
    expect(num(out.apr)).toBeCloseTo(8.79, 1);
  });
});

describe('roi', () => {
  it('100k → 150k over 5y → 50% ROI, ~8.4% annualized', () => {
    const out = run('roi', { cost: 100000, finalValue: 150000, years: 5 });
    expect(num(out.roi)).toBe(50);
    expect(num(out.profit)).toBe(50000);
    expect(num(out.annualizedRoi)).toBeCloseTo(8.4, 1);
  });
});

describe('inflation', () => {
  it('100k at 6% for 6 years → ~141852', () => {
    const out = run('inflation', { amount: 100000, annualRate: 6, startYear: 2020, endYear: 2026 });
    expect(num(out.futureValue)).toBeCloseTo(141852, 0);
    expect(num(out.multiplier)).toBeCloseTo(1.42, 2);
  });
});

describe('ringSize', () => {
  it('55mm circumference → US ~7.2', () => {
    const out = run('ringSize', { circumference: 55, diameter: 0, unit: 'us' });
    expect(num(out.usSize)).toBeCloseTo(7.2, 1);
  });

  it('17mm diameter → circumference ~53.4, US ~6.6', () => {
    const out = run('ringSize', { circumference: 0, diameter: 17, unit: 'us' });
    expect(num(out.circumference)).toBeCloseTo(53.4, 1);
    expect(num(out.usSize)).toBeCloseTo(6.6, 1);
  });
});

describe('golf', () => {
  it('90 on rating 71.5 slope 113 → differential 18.5', () => {
    const out = run('golf', { score: 90, courseRating: 71.5, slope: 113 });
    expect(num(out.differential)).toBeCloseTo(18.5, 1);
  });
});

describe('magi', () => {
  it('AGI 1200000 + 50000 add-backs = 1250000', () => {
    const out = run('magi', { agi: 1200000, addBacks: 50000 });
    expect(num(out.magi)).toBe(1250000);
  });
});

describe('realGdp', () => {
  it('nominal 240 deflator 120 → real 200', () => {
    const out = run('realGdp', { nominalGdp: 240, deflator: 120 });
    expect(num(out.realGdp)).toBeCloseTo(200, 0);
  });
});

describe('breakEven', () => {
  it('fixed 500000, price 250, var 150 → 5000 units, 1250000 revenue', () => {
    const out = run('breakEven', { fixedCosts: 500000, pricePerUnit: 250, variableCostPerUnit: 150 });
    expect(num(out.breakEvenUnits)).toBe(5000);
    expect(num(out.breakEvenRevenue)).toBe(1250000);
    expect(num(out.contributionMargin)).toBe(100);
  });
});

describe('costOfSales', () => {
  it('opening 200000 + purchases 800000 − closing 150000 = 850000', () => {
    const out = run('costOfSales', { openingInventory: 200000, purchases: 800000, closingInventory: 150000 });
    expect(num(out.cogs)).toBe(850000);
  });
});

describe('ltv', () => {
  it('8L loan on 10L value → 80% LTV', () => {
    const out = run('ltv', { loanAmount: 8000000, propertyValue: 10000000 });
    expect(num(out.ltv)).toBe(80);
    expect(num(out.maxLoan80)).toBe(8000000);
  });
});

describe('socialSecurity', () => {
  it('AIME 5000 → PIA ≈ 2311/month', () => {
    const out = run('socialSecurity', { aime: 5000 });
    expect(num(out.piaMonthly)).toBeCloseTo(2311, 0);
  });
});

describe('homeEquity', () => {
  it('1.2cr value − 50L balance = 70L equity (58.3%)', () => {
    const out = run('homeEquity', { homeValue: 12000000, mortgageBalance: 5000000 });
    expect(num(out.equity)).toBe(7000000);
    expect(num(out.equityPercent)).toBeCloseTo(58.3, 1);
  });
});

describe('creditCardInterest', () => {
  it('50k at 36% → 1500/month interest; 5k payment clears debt', () => {
    const out = run('creditCardInterest', { balance: 50000, annualRate: 36, monthlyPayment: 5000 });
    expect(num(out.monthlyInterest)).toBeCloseTo(1500, 0);
    expect(String(out.payoffPossible)).toBe('Yes');
    expect(num(out.payoffMonths)).toBeGreaterThan(0);
    expect(num(out.totalInterest)).toBeGreaterThan(0);
  });

  it('payment below interest → cannot pay off', () => {
    const out = run('creditCardInterest', { balance: 50000, annualRate: 36, monthlyPayment: 1000 });
    expect(String(out.payoffPossible)).toContain('No');
  });
});

describe('biologicalAge', () => {
  it('healthy 40yo lifestyle → ~35', () => {
    const out = run('biologicalAge', {
      age: 40, diet: 'good', exercise: 'regular', sleep: 'optimal', smoking: 'no', alcohol: 'social', stress: 'low',
    });
    expect(num(out.adjustment)).toBe(-5);
    expect(num(out.biologicalAge)).toBe(35);
  });
});

describe('vo2max', () => {
  it('35yo resting 65 → ~43.6', () => {
    const out = run('vo2max', { age: 35, gender: 'male', restingHr: 65 });
    expect(num(out.vo2max)).toBeCloseTo(43.5, 1);
  });
});

describe('ovulation', () => {
  it('28-day cycle from 2026-08-01 → ovulation 2026-08-15', () => {
    const out = run('ovulation', { periodStart: '2026-08-01', cycleLength: 28, lutealPhase: 14 });
    expect(out.ovulationDate).toBe('2026-08-15');
    expect(out.fertileStart).toBe('2026-08-10');
    expect(out.fertileEnd).toBe('2026-08-16');
    expect(out.nextPeriodDate).toBe('2026-08-29');
  });
});

describe('macros', () => {
  it('maintaining 75kg male → protein 120g', () => {
    const out = run('macros', {
      age: 30, gender: 'male', heightCm: 175, weight: 75, activity: 'moderate', goal: 'maintain', proteinSplit: 'moderate',
    });
    expect(num(out.proteinG)).toBe(120);
    expect(num(out.targetCalories)).toBeCloseTo(2633, 0);
  });
});

describe('passivePerception', () => {
  it('WIS+3 prof+3 → 16', () => {
    const out = run('passivePerception', { wisdomMod: 3, proficiency: 3, hasProficiency: true, hasExpertise: false });
    expect(num(out.passivePerception)).toBe(16);
  });

  it('expertise doubles proficiency → 19', () => {
    const out = run('passivePerception', { wisdomMod: 3, proficiency: 3, hasProficiency: true, hasExpertise: true });
    expect(num(out.passivePerception)).toBe(19);
  });
});

describe('arcana', () => {
  it('12 + INT+4 + prof+4 = 20', () => {
    const out = run('arcana', { intelligenceMod: 4, proficiency: 4, hasProficiency: true, hasExpertise: false, roll: 12 });
    expect(num(out.total)).toBe(20);
  });
});

describe('roofPitch', () => {
  it('6-in-12 → 26.6° and 50% grade', () => {
    const out = run('roofPitch', { riseInches: 6, runInches: 12 });
    expect(String(out.pitchRatio)).toBe('6-in-12');
    expect(num(out.degrees)).toBeCloseTo(26.6, 1);
    expect(num(out.percentGrade)).toBeCloseTo(50, 1);
  });
});

describe('elevation', () => {
  it('100m at 10° → ~17.6m climb', () => {
    const out = run('elevation', { distance: 100, slope: 10, method: 'degrees' });
    expect(num(out.elevationChange)).toBeCloseTo(17.6, 1);
  });

  it('100m at 18% grade → 18m climb', () => {
    const out = run('elevation', { distance: 100, slope: 18, method: 'percent' });
    expect(num(out.elevationChange)).toBeCloseTo(18, 1);
  });
});
