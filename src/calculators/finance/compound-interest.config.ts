import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'compound-interest-calculator',
  icon: 'trending_up',
  category: 'finance',
  title: 'Compound Interest Calculator',
  shortDescription:
    'See how your money grows with compound interest — principal, rate, compounding frequency and final maturity value.',
  answer:
    'A compound interest calculator shows how an investment grows when the interest earned is added back and starts earning interest itself, based on the principal, rate, time and compounding frequency.',
  targetKeyword: 'compound interest calculator',
  keywords: [
    'compound interest calculator',
    'interest calculator',
    'compound interest formula',
    'investment growth',
  ],
  inputs: [
    {
      type: 'number',
      id: 'principal',
      label: 'Principal amount',
      currency: true,
      default: 100000,
      min: 0,
      step: 1000,
    },
    {
      type: 'number',
      id: 'annualRate',
      label: 'Annual interest rate',
      unit: '%',
      default: 7,
      min: 0,
      max: 30,
      step: 0.1,
    },
    {
      type: 'number',
      id: 'years',
      label: 'Time period',
      unit: 'years',
      default: 10,
      min: 0,
      max: 50,
      step: 1,
    },
    {
      type: 'select',
      id: 'compoundingFrequency',
      label: 'Compounding frequency',
      options: [
        { value: 'yearly', label: 'Yearly' },
        { value: 'halfyearly', label: 'Half-yearly' },
        { value: 'quarterly', label: 'Quarterly' },
        { value: 'monthly', label: 'Monthly' },
        { value: 'daily', label: 'Daily' },
      ],
      default: 'quarterly',
    },
  ],
  formulaId: 'compoundInterest',
  outputs: [
    {
      id: 'maturityAmount',
      label: 'Maturity value',
      format: 'currency',
      primary: true,
    },
    {
      id: 'totalInterest',
      label: 'Total interest earned',
      format: 'currency',
    },
    {
      id: 'principalAmount',
      label: 'Principal invested',
      format: 'currency',
    },
  ],
  formulaDisplay:
    'A = P × (1 + r/m)^(m × t), where P = principal, r = annual rate, m = compounding periods per year, t = years.',
  explanation: `**Compound interest** is interest earned on interest. Unlike simple interest — which is always calculated on the original principal — compound interest grows faster because each period's interest is added to the balance and itself earns interest next period. Albert Einstein is widely quoted as calling it the "eighth wonder of the world".

### The formula

    A = P × (1 + r/m)^(m × t)

- **P** — principal amount you start with
- **r** — annual interest rate (as a decimal)
- **m** — number of times interest compounds per year (1 yearly, 4 quarterly, 12 monthly, 365 daily)
- **t** — number of years
- **A** — maturity value (principal + interest)

### Worked example

Invest **₹1,00,000 at 7% per year for 10 years, compounded quarterly**:

- m = 4, r = 0.07
- A = 1,00,000 × (1 + 0.07/4)^(4 × 10)
- A = 1,00,000 × (1.0175)⁴⁰ ≈ **₹2,00,160**

You earn about ₹1,00,160 in interest — more than the principal itself. Compare that with simple interest, which would earn just 1,00,000 × 0.07 × 10 = ₹70,000.

### Why compounding frequency matters

The more often interest compounds, the faster your money grows — but the effect is modest. Over 10 years, the same ₹1,00,000 at 7% grows to ₹1,96,715 compounded yearly versus ₹2,00,160 quarterly. Time is the real multiplier: the longer you stay invested, the more powerful compounding becomes, which is why starting early matters more than starting big.
`,
  faq: [
    {
      question: 'What is compound interest?',
      answer:
        "Compound interest is interest calculated on the original principal plus the interest already accumulated. Each period, the balance grows and the next period's interest is calculated on the larger balance.",
    },
    {
      question: 'How is compound interest different from simple interest?',
      answer:
        'Simple interest is always calculated on the original principal only. Compound interest is calculated on principal plus accumulated interest, so it grows faster over time.',
    },
    {
      question: 'What is the compound interest formula?',
      answer:
        'A = P × (1 + r/m)^(m × t), where P is principal, r is the annual rate, m is the compounding frequency per year and t is time in years.',
    },
  ],
  relatedCalculators: ['sip-calculator', 'fd-calculator', 'rd-calculator'],
  updated: '2026-08-14',
};

export default config;
