import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'percentage-calculator',
  icon: 'percent',
  category: 'math',
  title: 'Percentage Calculator',
  shortDescription:
    'Find what X% of Y is, instantly — the everyday percentage calculator for discounts, marks, tips and more.',
  answer:
    'To find what a percentage of a number is, multiply the number by the percentage and divide by 100: result = value × percent ÷ 100.',
  targetKeyword: 'percentage calculator',
  keywords: [
    'percentage calculator',
    'what is 15% of 200',
    'percent calculator',
    'calculate percentage',
    'percentage of a number',
  ],
  inputs: [
    {
      type: 'number',
      id: 'percent',
      label: 'Percentage',
      unit: '%',
      default: 15,
      min: 0,
      max: 1000,
      step: 1,
    },
    {
      type: 'number',
      id: 'value',
      label: 'Number',
      default: 200,
      min: 0,
      step: 1,
    },
  ],
  formulaId: 'percentOf',
  outputs: [
    {
      id: 'result',
      label: 'Result',
      format: 'number',
      decimals: 2,
      primary: true,
    },
    {
      id: 'percentOfValue',
      label: 'The number you used',
      format: 'number',
      decimals: 0,
    },
  ],
  formulaDisplay: 'Result = value × percent ÷ 100. Example: 15% of 200 = 200 × 15 ÷ 100 = 30.',
  explanation: `A **percentage** means "per hundred". 15% is simply 15 out of every 100. The most common percentage question — *"What is X% of Y?"* — is answered in one step:

    Result = value × percent ÷ 100

### Worked example

**What is 15% of 200?**

    200 × 15 ÷ 100 = 3000 ÷ 100 = 30

So 15% of 200 is **30**. The calculator does exactly this for any two numbers you enter.

### Why the ÷ 100?

Because "%" is shorthand for "÷ 100". 15% is 0.15 as a decimal. So "15% of 200" is just 200 × 0.15. The calculator keeps the numbers as whole percentages and divides by 100 at the end — same result.

### Everyday uses

- **Discounts** — "25% off ₹2,000" → 2,000 × 25 ÷ 100 = ₹500 off, you pay ₹1,500
- **Marks** — "I scored 85% in a 120-mark exam" → 120 × 85 ÷ 100 = 102 marks
- **Tips** — 10% of a ₹540 bill is ₹54
- **Budgeting** — "30% of my salary for rent" → 30% of ₹40,000 = ₹12,000

### Related percentage tools

The percentage family covers every direction of this math:
- [Percentage change](/math/percentage-change-calculator/) — "from 80 to 100, what's the increase?"
- [Percentage increase](/math/percentage-increase-calculator/) — "add 15% to 200"
- [Percentage decrease](/math/percentage-decrease-calculator/) — "take 15% off 200"
- [Reverse percentage](/math/reverse-percentage-calculator/) — "30 is 15% of what?"
- [X is what percent of Y](/math/what-percent-of-calculator/) — "30 is what % of 200?"
- [Percentage difference](/math/percentage-difference-calculator/) — "how different are 80 and 100, in %?"
`,
  faq: [
    {
      question: 'How do I calculate what 15% of 200 is?',
      answer: 'Multiply 200 by 15 and divide by 100: 200 × 15 ÷ 100 = 30. So 15% of 200 is 30.',
    },
    {
      question: 'How do I calculate a percentage of a number?',
      answer:
        'Multiply the number by the percentage and divide by 100. For example, 25% of 2,000 = 2,000 × 25 ÷ 100 = 500.',
    },
    {
      question: 'What is the percentage formula?',
      answer:
        'Part = Whole × Percent ÷ 100. This is the standard formula for finding a percentage of a number.',
    },
  ],
  relatedCalculators: [
    'percentage-change-calculator',
    'percentage-increase-calculator',
    'percentage-decrease-calculator',
    'reverse-percentage-calculator',
    'what-percent-of-calculator',
    'percentage-difference-calculator',
  ],
  updated: '2026-08-14',
};

export default config;
