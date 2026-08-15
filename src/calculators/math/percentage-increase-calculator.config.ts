import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'percentage-increase-calculator',
  icon: 'arrow_upward',
  category: 'math',
  title: 'Percentage Increase Calculator',
  shortDescription:
    'Add a percentage to a number — find the new value after a price rise, salary increase or markup.',
  answer:
    'To increase a number by a percentage, multiply the number by (1 + percent ÷ 100): new value = value × (1 + percent ÷ 100).',
  targetKeyword: 'percentage increase',
  keywords: [
    'percentage increase calculator',
    'add percentage',
    'increase by percent',
    'price increase',
  ],
  inputs: [
    {
      type: 'number',
      id: 'value',
      label: 'Original number',
      default: 20000,
      min: 0,
      step: 1,
    },
    {
      type: 'number',
      id: 'percent',
      label: 'Increase by',
      unit: '%',
      default: 10,
      min: 0,
      max: 1000,
      step: 1,
    },
  ],
  formulaId: 'percentIncrease',
  outputs: [
    {
      id: 'newValue',
      label: 'New value',
      format: 'number',
      decimals: 2,
      primary: true,
    },
    {
      id: 'increase',
      label: 'Amount of increase',
      format: 'number',
      decimals: 2,
    },
  ],
  formulaDisplay:
    'Increase = value × percent ÷ 100. New value = value + increase = value × (1 + percent ÷ 100).',
  explanation: `A **percentage increase** answers "what does the number become after going up by X%?" — a salary raise, a price rise, a markup, or a fee increase.

### The formula

    New value = value × (1 + percent ÷ 100)

You can think of it in two steps: find the increase, then add it to the original.

### Worked example

**₹20,000 increased by 10%:**

    Increase = 20,000 × 10 ÷ 100 = ₹2,000
    New value = 20,000 + 2,000 = ₹22,000

Using the one-line formula: 20,000 × 1.10 = **₹22,000**.

### Why 1 + percent ÷ 100?

"Add 10%" means "keep 100% and add another 10%" — that's 110% of the original. Since 110% as a decimal is 1.10, you simply multiply by 1.10. Add 25% → multiply by 1.25; add 5% → multiply by 1.05.

### Everyday uses

- **Salary increase** — a 12% raise on ₹50,000 becomes 50,000 × 1.12 = ₹56,000
- **Price rise** — an item at ₹1,200 going up 8% becomes ₹1,296
- **Markup** — a retailer adding 20% to a ₹500 cost price sells at ₹600
- **Rent, fees, taxes** — any "plus X%" situation

> Want the reverse — *take* a percentage off? See the [percentage decrease](/math/percentage-decrease-calculator/) calculator.
`,
  faq: [
    {
      question: 'How do I add a percentage to a number?',
      answer:
        'Multiply the number by (1 + percent ÷ 100). For example, adding 10% to 20,000 gives 20,000 × 1.10 = 22,000.',
    },
    {
      question: 'What is a 12% increase on 50,000?',
      answer: '50,000 × 1.12 = 56,000. The increase is 6,000 and the new value is 56,000.',
    },
    {
      question: 'What is the formula for percentage increase?',
      answer:
        'New value = original × (1 + percent ÷ 100). The increase itself is original × percent ÷ 100.',
    },
  ],
  relatedCalculators: [
    'percentage-calculator',
    'percentage-decrease-calculator',
    'percentage-change-calculator',
  ],
  updated: '2026-08-14',
};

export default config;
