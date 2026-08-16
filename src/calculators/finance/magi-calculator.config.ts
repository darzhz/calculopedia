import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'magi-calculator',
  icon: 'account_balance_wallet',
  category: 'finance',
  title: 'MAGI Calculator',
  shortDescription:
    'Calculate your Modified Adjusted Gross Income (MAGI) by adding back specific deductions to your AGI.',
  answer:
    'MAGI (Modified Adjusted Gross Income) is your Adjusted Gross Income plus specific deductions you must add back, like IRA contributions and student loan interest, and it gates eligibility for many tax benefits.',
  targetKeyword: 'magi calculator',
  keywords: [
    'magi calculator',
    'how to calculate magi',
    'modified adjusted gross income',
    'magi for roth ira',
    'magi income limits',
  ],
  inputs: [
    {
      type: 'number',
      id: 'agi',
      label: 'Adjusted Gross Income (AGI)',
      currency: true,
      default: 1200000,
      min: 0,
      step: 10000,
      help: 'Line 11 of your income tax return',
    },
    {
      type: 'number',
      id: 'addBacks',
      label: 'Amounts to add back',
      currency: true,
      default: 0,
      min: 0,
      step: 1000,
      help: 'IRA contributions, student loan interest, foreign income exclusion, etc.',
    },
  ],
  formulaId: 'magi',
  outputs: [
    {
      id: 'magi',
      label: 'Modified Adjusted Gross Income',
      format: 'currency',
      primary: true,
      note: 'AGI + add-backs',
    },
    {
      id: 'agi',
      label: 'Adjusted Gross Income',
      format: 'currency',
    },
    {
      id: 'addBacks',
      label: 'Add-backs',
      format: 'currency',
    },
  ],
  formulaDisplay: 'MAGI = AGI + adjustments you must add back (IRA contributions, student loan interest, tax-exempt foreign income, and more).',
  explanation: `**MAGI** — Modified Adjusted Gross Income — starts from your **AGI** and adds back specific deductions that were subtracted to reach it. It determines eligibility for a long list of tax benefits, so getting it right matters.

### The basic formula

    MAGI = AGI + add-backs

Your **AGI** (Adjusted Gross Income) is your gross income minus "above-the-line" deductions. For MAGI, the most common deductions that must be added back are:

- Traditional **IRA** contributions
- **Student loan interest**
- Tax-exempt **foreign earned income** and housing
- **Rent** and other amounts claimed by US expats
- Certain education-related deductions

### Example

An AGI of **₹12,00,000** (use your local return's figure) with **₹50,000** of IRA contributions to add back:

    MAGI = 12,00,000 + 50,000 = ₹12,50,000

### Why MAGI matters

MAGI gates things like:

- **Roth IRA** contribution eligibility (income phase-out ranges)
- **Healthcare** premium tax credits and subsidies
- **Saver's credit** and some education credits
- **Medicare** premium surcharges

### Note

The exact add-backs differ by benefit. This calculator handles the common US-style case; for your specific scheme, check which items the relevant rule asks you to add back.
`,
  faq: [
    {
      question: 'How do I calculate my MAGI?',
      answer:
        'Start with your Adjusted Gross Income (AGI) and add back specific deductions such as IRA contributions and student loan interest: MAGI = AGI + add-backs.',
    },
    {
      question: 'What is the difference between AGI and MAGI?',
      answer:
        'AGI is gross income minus above-the-line deductions. MAGI is AGI with certain of those deductions added back, and it is used for eligibility tests on many tax benefits.',
    },
    {
      question: 'Why is MAGI important?',
      answer:
        'MAGI determines whether you qualify for benefits like Roth IRA contributions, healthcare subsidies and education credits. Being slightly over a MAGI limit can lose an entire benefit.',
    },
  ],
  relatedCalculators: [
    'income-tax-calculator',
    'take-home-pay-calculator',
    'salary-calculator',
    'gdp-calculator',
  ],
  updated: '2026-08-16',
};

export default config;