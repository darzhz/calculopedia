import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'percentage-decrease-calculator',
  icon: 'arrow_downward',
  category: 'math',
  title: 'Percentage Decrease Calculator',
  shortDescription:
    'Take a percentage off a number — find the new value after a discount, price cut or reduction.',
  answer:
    'To decrease a number by a percentage, multiply the number by (1 − percent ÷ 100): new value = value × (1 − percent ÷ 100).',
  targetKeyword: 'percentage decrease',
  keywords: [
    'percentage decrease calculator',
    'discount calculator',
    'subtract percentage',
    'price off',
  ],
  inputs: [
    {
      type: 'number',
      id: 'value',
      label: 'Original number',
      default: 2000,
      min: 0,
      step: 1,
    },
    {
      type: 'number',
      id: 'percent',
      label: 'Decrease by',
      unit: '%',
      default: 25,
      min: 0,
      max: 100,
      step: 1,
    },
  ],
  formulaId: 'percentDecrease',
  outputs: [
    {
      id: 'newValue',
      label: 'New value',
      format: 'number',
      decimals: 2,
      primary: true,
    },
    {
      id: 'decrease',
      label: 'Amount saved / reduced',
      format: 'number',
      decimals: 2,
    },
  ],
  formulaDisplay:
    'Decrease = value × percent ÷ 100. New value = value − decrease = value × (1 − percent ÷ 100).',
  explanation: `A **percentage decrease** answers "what does the number become after going down by X%?" — a discount, a price cut, a pay reduction or a drop in usage.

### The formula

    New value = value × (1 − percent ÷ 100)

Or in two steps: find the decrease, then subtract it.

### Worked example

**₹2,000 with a 25% discount:**

    Decrease = 2,000 × 25 ÷ 100 = ₹500
    New value = 2,000 − 500 = ₹1,500

Using the one-line formula: 2,000 × 0.75 = **₹1,500**.

### Why 1 − percent ÷ 100?

"Take 25% off" means you keep 75% of the original. 75% as a decimal is 0.75, so you multiply by 0.75. Take 10% off → multiply by 0.90; take 50% off → multiply by 0.50.

### Everyday uses

- **Discounts and sales** — "40% off" on a ₹3,000 item → 3,000 × 0.60 = ₹1,800
- **Price cuts** — a product falling 15% from ₹1,000 to ₹850
- **Expense reduction** — cutting a budget line by 20%
- **Battery/depreciation** — any "down by X%" situation

> Want the reverse — *add* a percentage? See the [percentage increase](/math/percentage-increase-calculator/) calculator.
`,
  faq: [
    {
      question: 'How do I take a percentage off a number?',
      answer:
        'Multiply the number by (1 − percent ÷ 100). For example, 25% off 2,000 gives 2,000 × 0.75 = 1,500.',
    },
    {
      question: 'What is 40% off 3,000?',
      answer: '3,000 × 0.60 = 1,800. You save 1,200 and pay 1,800.',
    },
    {
      question: 'What is the formula for percentage decrease?',
      answer:
        'New value = original × (1 − percent ÷ 100). The decrease itself is original × percent ÷ 100.',
    },
  ],
  relatedCalculators: [
    'percentage-calculator',
    'percentage-increase-calculator',
    'percentage-change-calculator',
  ],
  updated: '2026-08-14',
};

export default config;
