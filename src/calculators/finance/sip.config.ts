import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'sip-calculator',
  icon: 'savings',
  category: 'finance',
  title: 'SIP Calculator',
  shortDescription:
    'Estimate how much a monthly SIP investment can grow into, with expected annual returns and optional yearly step-up.',
  answer:
    'A SIP calculator estimates the future value of monthly mutual-fund investments based on the amount, expected annual return and time period, showing how much you invest and how much it can grow.',
  targetKeyword: 'sip calculator',
  keywords: [
    'sip calculator',
    'systematic investment plan',
    'sip returns',
    'monthly investment calculator',
  ],
  inputs: [
    {
      type: 'number',
      id: 'monthlyInvestment',
      label: 'Monthly investment',
      currency: true,
      default: 10000,
      min: 100,
      step: 500,
    },
    {
      type: 'number',
      id: 'annualRate',
      label: 'Expected annual return',
      unit: '%',
      default: 12,
      min: 0,
      max: 30,
      step: 0.5,
    },
    {
      type: 'number',
      id: 'years',
      label: 'Investment period',
      unit: 'years',
      default: 10,
      min: 1,
      max: 40,
      step: 1,
    },
    {
      type: 'number',
      id: 'stepUp',
      label: 'Annual step-up',
      unit: '%',
      default: 0,
      min: 0,
      max: 20,
      step: 1,
      help: 'Increase your SIP by this % every year',
    },
  ],
  formulaId: 'sip',
  outputs: [
    {
      id: 'maturityValue',
      label: 'Expected maturity value',
      format: 'currency',
      primary: true,
    },
    {
      id: 'investedAmount',
      label: 'Total amount invested',
      format: 'currency',
    },
    {
      id: 'estimatedReturns',
      label: 'Estimated returns',
      format: 'currency',
    },
  ],
  formulaDisplay:
    'Future value of a monthly annuity: FV = P × ((1 + r)ⁿ − 1) / r × (1 + r), with r = monthly return and n = number of months. Step-up grows P by the step-up % each year.',
  explanation: `A **SIP (Systematic Investment Plan)** is a way to invest a fixed amount in mutual funds every month. Because you buy units regularly at whatever the fund's price is, you naturally buy fewer units when prices are high and more when they are low — this "rupee cost averaging" smooths out market ups and downs.

### How the calculation works

Each monthly contribution earns returns until the end of the period, and those returns compound. The future value of a series of equal monthly payments is:

    FV = P × [((1 + r)ⁿ − 1) / r] × (1 + r)

- **P** — your monthly investment
- **r** — monthly return = expected annual return ÷ 12 ÷ 100
- **n** — number of months

If you enable a **step-up**, your monthly contribution increases by that percentage each year — a common strategy that lets small starting amounts grow into large savings as your income grows.

### Worked example

Invest **₹10,000 every month for 10 years expecting 12% annual returns**:

- r = 0.01, n = 120
- FV = 10,000 × [(1.01¹²⁰ − 1) / 0.01] × 1.01 ≈ **₹23,23,391**

You invest ₹12,00,000 in total and earn roughly ₹11,23,391 in returns. With a 10% yearly step-up, the maturity value roughly doubles compared to a flat SIP over the same period.

### Important caveat

SIPs invest in the market, so returns are **not guaranteed**. The 12% default is an expectation, not a promise. Equity funds can fall short of (or beat) that figure depending on the market — this calculator helps you plan, but past performance never guarantees future results.
`,
  faq: [
    {
      question: 'What is a SIP calculator?',
      answer:
        'A SIP calculator estimates the future value of regular monthly investments based on your contribution, expected annual return and investment period. It shows how much you invest and how much it might grow.',
    },
    {
      question: 'How is SIP return calculated?',
      answer:
        'SIP returns are compounded monthly. The future value of equal monthly payments is FV = P × [((1 + r)ⁿ − 1) / r] × (1 + r), where r is the monthly return and n is the number of months.',
    },
    {
      question: 'What is a step-up SIP?',
      answer:
        'A step-up (or top-up) SIP increases your monthly investment by a set percentage every year, so your savings grow along with your income.',
    },
    {
      question: 'Are SIP returns guaranteed?',
      answer:
        'No. SIPs invest in mutual funds and returns depend on market performance. Use the expected return as a planning assumption, not a promise.',
    },
  ],
  relatedCalculators: [
    'fd-calculator',
    'compound-interest-calculator',
    'swp-calculator',
    'rd-calculator',
  ],
  updated: '2026-08-14',
};

export default config;
