import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'lcm-calculator',
  icon: 'tag',
  category: 'math',
  title: 'LCM Calculator (Least Common Multiple)',
  shortDescription:
    'Find the Least Common Multiple of two numbers — useful for adding fractions, scheduling and pattern alignment.',
  answer:
    'The LCM calculator finds the smallest number that is a multiple of both inputs, using the relationship LCM(a,b) = |a×b| ÷ GCD(a,b).',
  targetKeyword: 'lcm calculator',
  keywords: [
    'lcm calculator',
    'least common multiple',
    'lowest common multiple',
    'how to calculate lcm',
  ],
  inputs: [
    {
      type: 'number',
      id: 'a',
      label: 'First number',
      default: 4,
      min: 1,
      step: 1,
    },
    {
      type: 'number',
      id: 'b',
      label: 'Second number',
      default: 6,
      min: 1,
      step: 1,
    },
  ],
  formulaId: 'lcm',
  outputs: [
    {
      id: 'lcm',
      label: 'LCM',
      format: 'number',
      primary: true,
    },
    {
      id: 'lcmSteps',
      label: 'Steps',
      format: 'text',
    },
  ],
  formulaDisplay: 'LCM(a,b) = |a × b| ÷ GCD(a,b). First find the GCD, then divide the product by it.',
  explanation: `The **Least Common Multiple (LCM)** is the smallest positive number that both numbers divide into evenly.

### The formula

    LCM(a, b) = |a × b| ÷ GCD(a, b)

### Worked example: LCM(4, 6)

1. Find GCD(4, 6) = 2
2. LCM = |4 × 6| ÷ 2 = 24 ÷ 2 = **12**

So 12 is the smallest number that both 4 and 6 divide into: 12 ÷ 4 = 3, 12 ÷ 6 = 2.

### Common uses

- **Adding fractions** — to add 1/4 + 1/6, find LCM(4,6) = 12, then convert: 3/12 + 2/12 = 5/12
- **Scheduling** — if one event happens every 4 days and another every 6 days, they coincide every 12 days
- **Gears and cycles** — two gears with 4 and 6 teeth align every 12 teeth
- **Pattern matching** — finding when two repeating patterns overlap

### LCM vs HCF

The LCM is the smallest shared multiple; the HCF is the largest shared factor:

    HCF(4, 6) = 2
    LCM(4, 6) = 12
    2 × 12 = 4 × 6 ✓
`,
  faq: [
    {
      question: 'What is LCM?',
      answer:
        'The Least Common Multiple is the smallest number that both numbers divide into evenly. For 4 and 6, the LCM is 12.',
    },
    {
      question: 'How do I calculate LCM?',
      answer:
        'Use the formula: LCM(a,b) = |a×b| ÷ GCD(a,b). First find the GCD using the Euclidean algorithm, then divide the product by it.',
    },
    {
      question: 'Why is LCM useful for fractions?',
      answer:
        'To add or subtract fractions, you need a common denominator. The LCM of the denominators gives you the smallest common denominator.',
    },
  ],
  relatedCalculators: ['hcf-calculator', 'ratio-calculator', 'percentage-calculator'],
  updated: '2026-08-15',
};

export default config;
