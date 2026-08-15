import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'interest-per-month-calculator',
  icon: 'percent',
  category: 'finance',
  title: 'Interest Per Month Calculator',
  shortDescription:
    'Convert an annual interest rate to a monthly rate and see the monthly interest on any principal amount.',
  answer:
    'The interest per month calculator divides your annual rate by 12 to get the monthly rate, then applies it to a principal to show your monthly and total interest.',
  targetKeyword: 'interest rate per month calculator',
  keywords: [
    'interest rate per month calculator',
    'how to calculate interest rate per month',
    'monthly interest',
    'monthly interest rate',
    'calculate interest',
  ],
  inputs: [
    {
      type: 'number',
      id: 'annualRate',
      label: 'Annual interest rate',
      unit: '%',
      default: 12,
      min: 0,
      max: 60,
      step: 0.1,
    },
    {
      type: 'number',
      id: 'principal',
      label: 'Principal amount',
      currency: true,
      default: 50000,
      min: 0,
      step: 100,
    },
    {
      type: 'number',
      id: 'months',
      label: 'Time period',
      unit: 'months',
      default: 12,
      min: 1,
      max: 360,
      step: 1,
    },
  ],
  formulaId: 'interestPerMonth',
  outputs: [
    {
      id: 'monthlyRate',
      label: 'Monthly interest rate',
      format: 'percent',
      decimals: 2,
      primary: true,
      note: 'Annual rate ÷ 12',
    },
    {
      id: 'monthlyInterest',
      label: 'Monthly interest',
      format: 'currency',
      note: 'Simple interest on principal per month',
    },
    {
      id: 'totalInterest',
      label: 'Total interest',
      format: 'currency',
      note: 'Monthly interest × months',
    },
  ],
  formulaDisplay:
    'Monthly rate = annual rate ÷ 12. Monthly interest = principal × monthly rate ÷ 100. Total = monthly interest × months.',
  explanation: `An **annual interest rate** is quoted for the year, but most loans and savings accounts charge or credit interest **monthly**. Converting is a simple division.

### The formula

    Monthly rate = annual rate ÷ 12
    Monthly interest = principal × monthly rate ÷ 100

### Worked example

A loan of **₹50,000 at 12% per annum**:

    Monthly rate = 12 ÷ 12 = 1%
    Monthly interest = 50,000 × 1% = ₹500
    Over 12 months: 500 × 12 = ₹6,000 total interest

### Simple vs compound

This calculator uses **simple interest** — the same principal every month. In reality:

- **Loans** amortize: you pay interest on a shrinking balance, so interest declines each month (see the EMI calculator).
- **Fixed deposits** compound: interest is added to the principal, so each month earns a little more (see the FD calculator).

For monthly budgeting, simple interest is a great ballpark — for exact repayment, use the amortizing loan calculators.

### Converting the other way

Have a monthly rate and want the annual? Multiply by 12: a 1% monthly rate ≈ 12% per annum (nominal) or about **12.68% effective** when compounded monthly.
`,
  faq: [
    {
      question: 'How do I calculate the monthly interest rate from annual?',
      answer:
        'Divide the annual rate by 12. A 12% annual rate is a 1% monthly rate. This is the nominal rate; compounding can make the effective annual rate slightly higher.',
    },
    {
      question: 'How much interest do I pay per month on a loan?',
      answer:
        'Multiply your remaining balance by the monthly rate: ₹50,000 × 1% = ₹500 in the first month. As you repay, the interest portion falls — the EMI calculator shows this month by month.',
    },
    {
      question: 'What is the difference between nominal and effective interest rate?',
      answer:
        'The nominal rate is the stated annual rate. The effective rate accounts for monthly compounding, so it is slightly higher — 12% nominal ≈ 12.68% effective.',
    },
    {
      question: 'Does the interest rate per month apply to savings too?',
      answer:
        'Yes — bank FD and savings accounts quote annual rates but credit interest monthly or quarterly. Use this calculator to see what a month of interest adds up to.',
    },
  ],
  relatedCalculators: ['loan-emi-calculator', 'fd-calculator', 'compound-interest-calculator', 'mortgage-payment-calculator'],
  updated: '2026-08-15',
};

export default config;
