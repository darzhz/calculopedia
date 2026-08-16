import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'inflation-calculator',
  icon: 'euro',
  category: 'finance',
  title: 'Inflation Calculator',
  shortDescription:
    'See how inflation erodes your money: what a given amount will be worth in the future, or how much value it has lost over the years.',
  answer:
    'An inflation calculator shows how much a sum of money will grow in nominal terms at a given average inflation rate, revealing how much purchasing power it really loses over time.',
  targetKeyword: 'inflation calculator',
  keywords: [
    'inflation calculator',
    'how to calculate inflation',
    'inflation rate',
    'purchasing power calculator',
    'money value over time',
  ],
  inputs: [
    {
      type: 'number',
      id: 'amount',
      label: 'Amount',
      currency: true,
      default: 100000,
      min: 100,
      step: 1000,
    },
    {
      type: 'number',
      id: 'annualRate',
      label: 'Average annual inflation',
      unit: '%',
      default: 6,
      min: 0,
      max: 20,
      step: 0.1,
      help: "India's long-run CPI has averaged roughly 5–7%",
    },
    {
      type: 'number',
      id: 'startYear',
      label: 'Start year',
      unit: '',
      default: 2020,
      min: 1900,
      max: 2100,
      step: 1,
    },
    {
      type: 'number',
      id: 'endYear',
      label: 'End year',
      unit: '',
      default: 2026,
      min: 1900,
      max: 2100,
      step: 1,
    },
  ],
  formulaId: 'inflation',
  outputs: [
    {
      id: 'futureValue',
      label: 'Future value',
      format: 'currency',
      primary: true,
      note: 'Nominal amount needed in the future',
    },
    {
      id: 'increase',
      label: 'Nominal increase',
      format: 'currency',
      note: 'Growth due to inflation',
    },
    {
      id: 'multiplier',
      label: 'Price multiplier',
      format: 'decimal',
      decimals: 2,
      note: 'How many times prices grew',
    },
    {
      id: 'years',
      label: 'Years',
      format: 'number',
    },
  ],
  formulaDisplay:
    'Future value = amount × (1 + annual inflation ÷ 100)^years. Example: at 6% for 6 years, ₹1,00,000 becomes ₹1,41,852.',
  explanation: `**Inflation** is the gradual rise in the price of goods and services. It quietly shrinks what your money can buy — the same ₹1,000 buys less every year.

### The formula

    Future value = amount × (1 + rate)^years

With **₹1,00,000** at an average **6%** inflation over **6 years** (2020 → 2026):

    Future value = 1,00,000 × (1.06)^6 ≈ ₹1,41,852

That means a basket of goods costing ₹1,00,000 in 2020 costs about **₹1,41,852 in 2026**. Your money's *purchasing power* did not grow — prices did.

### Reading the result

- **Future value** — the nominal amount you would need later to buy the same things.
- **Price multiplier** — how many times prices grew (here **1.42×**).
- **Real loss** — the "extra" amount (₹41,852) is not extra value, it is the erosion of purchasing power.

### Why inflation matters

- **Savings** — if your FD pays 6% while inflation is 6%, your real return is **zero**.
- **Salary** — a 5% raise in a 6% inflation year is a real pay *cut*.
- **Long-term planning** — retirement and education costs must be inflation-adjusted.

> Inflation is uneven: food and housing often rise faster than the headline CPI number.
`,
  faq: [
    {
      question: 'How do I calculate inflation?',
      answer:
        'Future value = amount × (1 + inflation rate)^years. For ₹1,00,000 at 6% over 6 years that is ₹1,00,000 × 1.06⁶ ≈ ₹1,41,852.',
    },
    {
      question: 'How does inflation affect my money?',
      answer:
        'It reduces purchasing power. If inflation averages 6%, the same items cost 6% more each year, so your savings buy less unless they grow faster than inflation.',
    },
    {
      question: "What has been India's average inflation rate?",
      answer:
        "India's CPI has averaged roughly 5–7% over the past decades, though it varies by year. Central banks target keeping it moderate and stable.",
    },
  ],
  relatedCalculators: [
    'roi-calculator',
    'fd-calculator',
    'compound-interest-calculator',
    'gdp-calculator',
  ],
  updated: '2026-08-16',
};

export default config;