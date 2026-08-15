import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'what-percent-of-calculator',
  icon: 'pie_chart',
  category: 'math',
  title: 'X is What Percent of Y Calculator',
  shortDescription: 'Find what percentage one number is of another — "30 is what percent of 200?"',
  answer:
    'To find what percent one number is of another, divide the part by the whole and multiply by 100: percent = part ÷ whole × 100.',
  targetKeyword: 'what percent of',
  keywords: ['x is what percent of y', 'what percentage', 'percent of', 'part of whole'],
  inputs: [
    {
      type: 'number',
      id: 'part',
      label: 'The part (X)',
      default: 30,
      min: 0,
      step: 1,
    },
    {
      type: 'number',
      id: 'whole',
      label: 'The whole (Y)',
      default: 200,
      min: 1,
      step: 1,
    },
  ],
  formulaId: 'partOfPercent',
  outputs: [
    {
      id: 'percent',
      label: 'Percentage',
      format: 'percent',
      decimals: 1,
      primary: true,
    },
    {
      id: 'part',
      label: 'The part (X)',
      format: 'number',
      decimals: 0,
    },
  ],
  formulaDisplay: 'Percent = part ÷ whole × 100. Example: 30 ÷ 200 × 100 = 15%.',
  explanation: `The question **"X is what percent of Y?"** asks you to express one number as a proportion of another. It's everywhere: test scores, budget splits, survey results, class attendance.

### The formula

    Percent = part ÷ whole × 100

### Worked example

**30 is what percent of 200?**

    30 ÷ 200 × 100 = 0.15 × 100 = 15%

So 30 is **15% of 200**.

### Why it works

A percentage is a fraction out of 100. You're asking "what fraction of 200 is 30?" — that's 30/200 = 0.15, which is 15/100 = 15%. Dividing and multiplying by 100 converts the fraction into a percentage.

### Everyday uses

- **Scores** — "34 out of 40 is what percent?" → 34 ÷ 40 × 100 = 85%
- **Attendance** — "I attended 42 of 50 classes" → 42 ÷ 50 × 100 = 84%
- **Budgeting** — "rent of ₹12,000 out of ₹40,000 salary" → 30%
- **Surveys and polls** — 450 of 1,000 respondents = 45%

### The other directions

This calculator does *part → percent*. If instead you know the percent and want the part, that's the main [percentage calculator](/math/percentage-calculator/). If you know the percent and part but not the whole, use the [reverse percentage](/math/reverse-percentage-calculator/) calculator.
`,
  faq: [
    {
      question: '30 is what percent of 200?',
      answer: '30 ÷ 200 × 100 = 15%. So 30 is 15% of 200.',
    },
    {
      question: 'How do I find what percentage one number is of another?',
      answer:
        'Divide the part by the whole and multiply by 100. For example, 34 out of 40 = 34 ÷ 40 × 100 = 85%.',
    },
    {
      question: 'What is the formula for percentage of a total?',
      answer: 'Percent = part ÷ total × 100. This is the standard "what percentage" formula.',
    },
  ],
  relatedCalculators: [
    'percentage-calculator',
    'reverse-percentage-calculator',
    'percentage-change-calculator',
  ],
  updated: '2026-08-14',
};

export default config;
