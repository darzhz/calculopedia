import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'rd-calculator',
  icon: 'event_repeat',
  category: 'finance',
  title: 'RD Calculator (Recurring Deposit)',
  shortDescription:
    'Estimate the maturity value and interest of a recurring deposit based on monthly deposits, rate and tenure.',
  answer:
    'A recurring deposit calculator estimates how much your monthly deposits grow to at maturity, based on the deposit amount, interest rate and tenure, with quarterly compounding.',
  targetKeyword: 'rd calculator',
  keywords: ['rd calculator', 'recurring deposit calculator', 'rd maturity', 'monthly deposit'],
  inputs: [
    {
      type: 'number',
      id: 'monthlyDeposit',
      label: 'Monthly deposit',
      currency: true,
      default: 5000,
      min: 100,
      step: 100,
    },
    {
      type: 'number',
      id: 'annualRate',
      label: 'Interest rate',
      unit: '%',
      default: 6.5,
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
      min: 1,
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
      ],
      default: 'quarterly',
    },
  ],
  formulaId: 'rd',
  outputs: [
    {
      id: 'maturityValue',
      label: 'Maturity value',
      format: 'currency',
      primary: true,
    },
    {
      id: 'totalDeposits',
      label: 'Total deposited',
      format: 'currency',
    },
    {
      id: 'totalInterest',
      label: 'Total interest',
      format: 'currency',
    },
  ],
  formulaDisplay:
    'Maturity = Σ of monthly deposits compounded quarterly at rate r: each deposit accrues until maturity with quarterly compounding.',
  explanation: `A **recurring deposit (RD)** is like an FD you fund monthly. You commit to depositing a fixed amount every month for a set tenure (typically 6 months to 10 years), and the bank pays interest on the accumulating balance — usually compounded **quarterly** — just like an FD.

### How it's calculated

Unlike an FD where a single lump sum compounds, an RD has a new deposit each month. The standard approach compounds the running balance quarterly and credits each month's deposit as it is made:

- Every month, your deposit is added to the balance.
- At the end of each quarter, the balance earns interest at the quarterly rate.
- At maturity you receive the sum of all deposits plus all the interest.

### Worked example

Deposit **₹5,000 every month at 6.5% for 5 years** (60 months):

- Total deposited = 5,000 × 60 = **₹3,00,000**
- With quarterly compounding, the maturity value is approximately **₹3,53,230**
- Total interest earned ≈ **₹53,230**

### RD vs SIP

An RD is **safe and guaranteed** — the interest rate is fixed and your principal is secure. A SIP invests in the market and can earn more, but returns are not guaranteed. Many savers use RDs for short-term goals and SIPs for longer-term wealth building.
`,
  faq: [
    {
      question: 'What is a recurring deposit?',
      answer:
        'A recurring deposit is a bank savings scheme where you deposit a fixed amount every month for a fixed tenure and earn interest on the accumulating balance, usually compounded quarterly.',
    },
    {
      question: 'How is RD maturity value calculated?',
      answer:
        'Each monthly deposit accrues interest until maturity. The balance compounds quarterly at the quarterly rate, and maturity equals total deposits plus total interest earned.',
    },
    {
      question: 'Is an RD better than an SIP?',
      answer:
        'An RD offers guaranteed, safe returns with a fixed rate. An SIP can potentially earn more but carries market risk. RDs suit short-term goals; SIPs suit long-term wealth creation.',
    },
  ],
  relatedCalculators: ['fd-calculator', 'sip-calculator', 'compound-interest-calculator'],
  updated: '2026-08-14',
};

export default config;
