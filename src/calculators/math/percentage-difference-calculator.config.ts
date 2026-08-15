import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'percentage-difference-calculator',
  icon: 'sync_alt',
  category: 'math',
  title: 'Percentage Difference Calculator',
  shortDescription:
    'Compare two numbers and find the percentage difference between them — the symmetric measure used for prices, estimates and measurements.',
  answer:
    'Percentage difference = |first − second| ÷ ((first + second) ÷ 2) × 100. It measures the gap between two numbers as a percentage of their average.',
  targetKeyword: 'percentage difference calculator',
  keywords: [
    'percentage difference',
    'percent difference',
    'compare two numbers',
    'difference between two values',
  ],
  inputs: [
    {
      type: 'number',
      id: 'firstValue',
      label: 'First value',
      default: 80,
      min: 0,
      step: 1,
    },
    {
      type: 'number',
      id: 'secondValue',
      label: 'Second value',
      default: 100,
      min: 0,
      step: 1,
    },
  ],
  formulaId: 'percentDifference',
  outputs: [
    {
      id: 'differencePercent',
      label: 'Percentage difference',
      format: 'percent',
      decimals: 1,
      primary: true,
      note: 'Relative to the average of the two values',
    },
    {
      id: 'absoluteDifference',
      label: 'Absolute difference',
      format: 'number',
      decimals: 2,
    },
  ],
  formulaDisplay: 'Percentage difference = |A − B| ÷ ((A + B) ÷ 2) × 100.',
  explanation: `**Percentage difference** measures how far apart two numbers are, as a percentage of their **average**. Unlike percentage *change*, it treats both numbers symmetrically — the answer is the same whichever value you call first.

### The formula

    Percentage difference = |A − B| ÷ ((A + B) ÷ 2) × 100

The denominator is the average of the two numbers, so the result is a "relative to the middle" measure rather than relative to a fixed starting point.

### Worked example

**Compare 80 and 100:**

    Average = (80 + 100) ÷ 2 = 90
    Difference = |80 − 100| = 20
    Percentage difference = 20 ÷ 90 × 100 ≈ 22.2%

So 80 and 100 differ by about **22.2%**. Reverse the order (100 vs 80) and you get the same answer — that's what makes it "difference" rather than "change".

### Percentage difference vs percentage change

- **Percentage change** (80 → 100) is **+25%** — it's relative to the starting value, so it depends on direction.
- **Percentage difference** (80 vs 100) is **22.2%** — symmetric, and it uses the average as the base.

Use *change* when one value is clearly the "before" and the other the "after". Use *difference* when comparing two independent values with no direction — two quotes, two prices, two measurements, two estimates.

### Everyday uses

- **Price comparison** — is quote A really that different from quote B?
- **Estimates vs actuals** — how far off was the prediction?
- **Survey and polling comparisons** — two groups' agreement levels
- **Laboratory and engineering measurements** — tolerance between readings
`,
  faq: [
    {
      question: 'How do I calculate percentage difference?',
      answer:
        'Divide the absolute difference between the two numbers by their average, then multiply by 100: |A − B| ÷ ((A + B) ÷ 2) × 100.',
    },
    {
      question: 'What is the percentage difference between 80 and 100?',
      answer:
        '|80 − 100| ÷ 90 × 100 ≈ 22.2%. The average of 80 and 100 is 90, and the difference of 20 is 22.2% of that average.',
    },
    {
      question: 'What is the difference between percentage difference and percentage change?',
      answer:
        'Percentage change is relative to the starting value and has a direction (+25% from 80 to 100). Percentage difference is symmetric and relative to the average of the two values (22.2%).',
    },
  ],
  relatedCalculators: ['percentage-change-calculator', 'percentage-calculator'],
  updated: '2026-08-14',
};

export default config;
