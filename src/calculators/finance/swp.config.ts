import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'swp-calculator',
  icon: 'withdraw',
  category: 'finance',
  title: 'SWP Calculator (Systematic Withdrawal Plan)',
  shortDescription:
    'See how long a lump-sum investment lasts with regular monthly withdrawals, and how much income it can generate.',
  answer:
    'A SWP calculator works out how long a lump-sum investment lasts if you withdraw a fixed amount every month, based on the expected annual return.',
  targetKeyword: 'swp calculator',
  keywords: [
    'swp calculator',
    'systematic withdrawal plan',
    'retirement withdrawal',
    'monthly income calculator',
  ],
  inputs: [
    {
      type: 'number',
      id: 'initialInvestment',
      label: 'Initial investment',
      currency: true,
      default: 5000000,
      min: 10000,
      step: 10000,
    },
    {
      type: 'number',
      id: 'monthlyWithdrawal',
      label: 'Monthly withdrawal',
      currency: true,
      default: 25000,
      min: 1000,
      step: 1000,
    },
    {
      type: 'number',
      id: 'annualRate',
      label: 'Expected annual return',
      unit: '%',
      default: 8,
      min: 0,
      max: 20,
      step: 0.5,
    },
  ],
  formulaId: 'swp',
  outputs: [
    {
      id: 'survivalMonths',
      label: 'How long your money lasts',
      format: 'number',
      primary: true,
      note: 'In months',
    },
    {
      id: 'survivalDurationText',
      label: 'Duration',
      format: 'text',
    },
    {
      id: 'totalWithdrawn',
      label: 'Total withdrawn',
      format: 'currency',
    },
    {
      id: 'totalInterestEarned',
      label: 'Net income earned',
      format: 'currency',
      note: 'Total withdrawn minus initial investment',
    },
  ],
  formulaDisplay:
    'Month by month: balance = balance × (1 + r/12) − withdrawal, until the balance reaches zero.',
  explanation: `A **Systematic Withdrawal Plan (SWP)** lets you withdraw a fixed amount from a mutual fund investment at regular intervals — commonly monthly. It's popular with retirees who want a regular "salary" from a lump-sum corpus, and with investors planning income from their investments.

### How the calculation works

The calculator simulates the corpus month by month:

- Each month the balance earns the expected monthly return.
- Your fixed withdrawal is then deducted.
- This repeats until the balance hits zero.

If your withdrawal is larger than the monthly earnings, the corpus shrinks — eventually to nothing. If it's smaller than the earnings, your money can last indefinitely and even grow.

### Worked example

Invest **₹50,00,000 expecting 8% annual returns, withdrawing ₹25,000 per month**:

- Monthly return = 8% ÷ 12 ≈ 0.667%
- Balance after month 1 = 50,00,000 × 1.00667 − 25,000 ≈ ₹50,33,333
- The corpus keeps growing for years because ₹25,000 is below the ~₹33,333 monthly earnings, so your money effectively **never runs out**.

Now try ₹50,000 per month: the corpus declines and runs out in roughly **12 years** — the calculator shows you exactly how many months.

### A note on returns

SWPs usually run on equity or hybrid funds, so returns vary. This tool uses a flat expected return for simplicity. In practice, volatile returns mean the corpus can last shorter or longer than projected.
`,
  faq: [
    {
      question: 'What is an SWP?',
      answer:
        'A Systematic Withdrawal Plan is a facility that lets you withdraw a fixed amount from your mutual fund investment at regular intervals, such as monthly, providing a regular income.',
    },
    {
      question: 'How long will my money last with an SWP?',
      answer:
        'It depends on your corpus, withdrawal amount and returns. If your monthly withdrawal is less than your monthly earnings, the corpus lasts indefinitely; otherwise it runs out eventually. This calculator shows the exact months.',
    },
    {
      question: 'Is SWP good for retirement income?',
      answer:
        'SWPs are a popular retirement-income tool because they provide regular, flexible payouts while the remaining corpus keeps earning. However, market-linked returns mean income is not guaranteed.',
    },
  ],
  relatedCalculators: ['sip-calculator', 'fd-calculator', 'compound-interest-calculator'],
  updated: '2026-08-14',
};

export default config;
