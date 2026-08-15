import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'fd-calculator',
  icon: 'account_balance',
  category: 'finance',
  title: 'FD Calculator (Fixed Deposit)',
  shortDescription:
    'Calculate the maturity value and interest of a fixed deposit with compounding frequency and optional interest payout.',
  answer:
    'A fixed deposit calculator computes the maturity amount and total interest you earn on a lump-sum deposit, based on the principal, rate, tenure and how often interest compounds.',
  targetKeyword: 'fd calculator',
  keywords: [
    'fd calculator',
    'fixed deposit calculator',
    'fd interest calculator',
    'fixed deposit maturity',
  ],
  inputs: [
    {
      type: 'number',
      id: 'principal',
      label: 'Deposit amount',
      currency: true,
      default: 100000,
      min: 1000,
      step: 1000,
    },
    {
      type: 'number',
      id: 'annualRate',
      label: 'Interest rate',
      unit: '%',
      default: 7,
      min: 0,
      max: 15,
      step: 0.1,
    },
    {
      type: 'number',
      id: 'years',
      label: 'Tenure',
      unit: 'years',
      default: 5,
      min: 0,
      max: 20,
      step: 1,
    },
    {
      type: 'select',
      id: 'compoundingFrequency',
      label: 'Compounding frequency',
      options: [
        { value: 'quarterly', label: 'Quarterly' },
        { value: 'halfyearly', label: 'Half-yearly' },
        { value: 'yearly', label: 'Yearly' },
        { value: 'monthly', label: 'Monthly' },
      ],
      default: 'quarterly',
    },
    {
      type: 'toggle',
      id: 'interestPayout',
      label: 'Interest payout (not cumulative)',
      default: false,
      help: 'Pay out interest instead of reinvesting it',
    },
  ],
  formulaId: 'fd',
  outputs: [
    {
      id: 'maturityValue',
      label: 'Maturity value',
      format: 'currency',
      primary: true,
      note: 'Principal returned at maturity',
    },
    {
      id: 'totalInterest',
      label: 'Total interest',
      format: 'currency',
    },
    {
      id: 'principalAmount',
      label: 'Principal invested',
      format: 'currency',
    },
  ],
  formulaDisplay:
    'Maturity = P × (1 + r/m)^(m × t), where P = deposit, r = annual rate, m = compounding periods per year, t = years.',
  explanation: `A **fixed deposit (FD)** is one of the safest savings instruments in India. You deposit a lump sum for a fixed tenure at an agreed interest rate, and the bank returns your principal plus interest at maturity. Interest is typically compounded **quarterly**.

### The formula

    Maturity = P × (1 + r/m)^(m × t)

- **P** — deposit amount
- **r** — annual interest rate (as a decimal)
- **m** — compounding periods per year (usually 4 for quarterly)
- **t** — tenure in years

### Worked example

Deposit **₹1,00,000 at 7% for 5 years, compounded quarterly**:

- Maturity = 1,00,000 × (1 + 0.07/4)^(4 × 5) = 1,00,000 × (1.0175)²⁰ ≈ **₹1,41,478**

You earn ₹41,478 in interest. If you choose **interest payout** instead, the bank pays the interest out each period and returns only your ₹1,00,000 principal at maturity — useful if you want regular income.

### Things to know

- Senior citizens usually earn **0.5% more** on FDs — ask your bank.
- Interest earned on FDs is **taxable** as per your income-tax slab (TDS is deducted above certain limits), so factor that into your effective return.
- **5-year tax-saver FDs** qualify for a deduction under Section 80C, but lock in your money for 5 years.
`,
  faq: [
    {
      question: 'How is FD interest calculated?',
      answer:
        'Fixed deposits in India usually compound interest quarterly. Maturity = P × (1 + r/4)^(4 × t), where P is the deposit, r the annual rate and t the tenure in years.',
    },
    {
      question: 'Is FD interest taxable?',
      answer:
        'Yes. Interest from fixed deposits is added to your income and taxed per your slab. Banks deduct TDS on interest above certain thresholds. A 5-year tax-saver FD can give a deduction under Section 80C.',
    },
    {
      question: 'What is a cumulative vs non-cumulative FD?',
      answer:
        'In a cumulative FD, interest is reinvested and paid at maturity. In a non-cumulative FD, interest is paid out periodically (monthly/quarterly/yearly), which is useful for regular income.',
    },
  ],
  relatedCalculators: [
    'compound-interest-calculator',
    'rd-calculator',
    'income-tax-calculator',
    'sip-calculator',
  ],
  updated: '2026-08-14',
};

export default config;
