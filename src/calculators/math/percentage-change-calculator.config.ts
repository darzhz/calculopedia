import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'percentage-change-calculator',
  icon: 'compare_arrows',
  category: 'math',
  title: 'Percentage Change Calculator',
  shortDescription:
    'Find the percentage increase or decrease between two values — from 80 to 100, or 100 to 80.',
  answer:
    'Percentage change = (new value − old value) ÷ old value × 100. A positive result is a percentage increase; a negative result is a percentage decrease.',
  targetKeyword: 'percentage change calculator',
  keywords: [
    'percentage change',
    'percent change',
    'percentage increase calculator',
    'increase by percentage',
  ],
  inputs: [
    {
      type: 'number',
      id: 'fromValue',
      label: 'Original value',
      default: 80,
      min: 0,
      step: 1,
    },
    {
      type: 'number',
      id: 'toValue',
      label: 'New value',
      default: 100,
      min: 0,
      step: 1,
    },
  ],
  formulaId: 'percentChange',
  outputs: [
    {
      id: 'changePercent',
      label: 'Percentage change',
      format: 'percent',
      decimals: 1,
      primary: true,
      note: 'Positive = increase, negative = decrease',
    },
    {
      id: 'absoluteChange',
      label: 'Absolute change',
      format: 'number',
      decimals: 2,
    },
  ],
  formulaDisplay: 'Percentage change = ((new − original) ÷ original) × 100.',
  explanation: `**Percentage change** tells you how much a value moved, as a proportion of where it started — the standard way to report growth, inflation, stock moves and scores.

### The formula

    Percentage change = (new value − original value) ÷ original value × 100

### Worked examples

**From 80 to 100:**

    (100 − 80) ÷ 80 × 100 = 20 ÷ 80 × 100 = +25%

So 80 → 100 is a **25% increase**.

**From 100 to 80:**

    (80 − 100) ÷ 100 × 100 = −20 ÷ 100 × 100 = −20%

So 100 → 80 is a **20% decrease**.

Notice the asymmetry: a 25% rise from 80 lands on 100, but it takes a 25% drop from 100 to fall back to 75. Percentages work on the *current* value, so increases and decreases don't cancel symmetrically.

### Why the base matters

Percentage change is always relative to the starting value. A ₹10 rise from ₹100 is +10%, but the same ₹10 rise from ₹1,000 is just +1%. Always state the base when quoting a percentage change — "profits grew 25%" means little without "from what?".

### Uses

- **Finance** — returns on investments, price moves, inflation
- **Business** — sales growth, budget variance
- **Everyday** — weight changes, grades, cricket score improvements

> Need to add or subtract a percentage to/from a number instead? Use the [percentage increase](/math/percentage-increase-calculator/) or [percentage decrease](/math/percentage-decrease-calculator/) calculators.
`,
  faq: [
    {
      question: 'How do I calculate percentage change?',
      answer:
        'Subtract the original value from the new value, divide by the original value, and multiply by 100. A positive result is an increase; a negative result is a decrease.',
    },
    {
      question: 'What is the percentage increase from 80 to 100?',
      answer: '((100 − 80) ÷ 80) × 100 = 25%. So 80 → 100 is a 25% increase.',
    },
    {
      question: 'Is a 20% decrease the reverse of a 25% increase?',
      answer:
        'Not exactly. A 25% increase from 80 gives 100, but a 20% decrease from 100 gives 80 — the two do reverse each other here only because the percentages are computed from different bases.',
    },
  ],
  relatedCalculators: [
    'percentage-calculator',
    'percentage-increase-calculator',
    'percentage-decrease-calculator',
    'percentage-difference-calculator',
  ],
  updated: '2026-08-14',
};

export default config;
