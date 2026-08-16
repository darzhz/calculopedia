import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'ratio-calculator',
  icon: 'compare_arrows',
  category: 'math',
  title: 'Ratio Calculator',
  shortDescription:
    'Simplify any ratio to its lowest terms and see the percentage breakdown of each part.',
  answer:
    'The ratio calculator reduces any two-number ratio to its simplest form using the greatest common divisor (GCD), and shows each part as a fraction, decimal and percentage.',
  targetKeyword: 'ratio calculator',
  keywords: [
    'ratio calculator',
    'simplify ratio',
    'ratio to fraction',
    'ratio to percentage',
    'how to calculate ratio',
  ],
  inputs: [
    {
      type: 'number',
      id: 'a',
      label: 'First number',
      default: 8,
      min: 0,
      step: 1,
    },
    {
      type: 'number',
      id: 'b',
      label: 'Second number',
      default: 12,
      min: 0,
      step: 1,
    },
  ],
  formulaId: 'ratio',
  outputs: [
    {
      id: 'simplifiedRatio',
      label: 'Simplified ratio',
      format: 'text',
      primary: true,
    },
    {
      id: 'gcd',
      label: 'Greatest common divisor',
      format: 'number',
    },
    {
      id: 'aRatio',
      label: 'First part (decimal)',
      format: 'decimal',
      decimals: 4,
    },
    {
      id: 'bRatio',
      label: 'Second part (decimal)',
      format: 'decimal',
      decimals: 4,
    },
    {
      id: 'percentA',
      label: 'First part',
      format: 'percent',
      decimals: 1,
    },
    {
      id: 'percentB',
      label: 'Second part',
      format: 'percent',
      decimals: 1,
    },
  ],
  formulaDisplay: 'Simplified ratio = (a ÷ GCD) : (b ÷ GCD). Percentages are each part ÷ total × 100.',
  explanation: `A **ratio** compares two quantities — it tells you how much of one thing there is relative to another. The ratio **8 : 12** means "for every 8 of the first, there are 12 of the second."

### Simplifying a ratio

To reduce a ratio to its lowest terms, divide both numbers by their **Greatest Common Divisor (GCD)**:

    GCD(8, 12) = 4
    8 ÷ 4 = 2
    12 ÷ 4 = 3

So **8 : 12** simplifies to **2 : 3**.

### Converting to percentages

Add both parts to get the total, then divide each part by the total:

    Total = 8 + 12 = 20
    First part = 8 ÷ 20 = 40%
    Second part = 12 ÷ 20 = 60%

### Common uses

- **Mixing** — paint ratios, concrete mixes, recipe scaling
- **Finance** — debt-to-income, profit sharing, investment allocation
- **Maps** — scale ratios (1 : 50,000 means 1 cm on the map = 50,000 cm in reality)
- **Statistics** — comparing groups (e.g., 3 girls to 5 boys = 3 : 5)

### Three-part ratios

This calculator handles two-part ratios. For three or more parts (e.g., A : B : C), simplify by finding the GCD of all numbers and dividing each.
`,
  faq: [
    {
      question: 'How do I simplify a ratio?',
      answer:
        'Find the GCD (greatest common divisor) of both numbers and divide each by it. For example, GCD(8, 12) = 4, so 8 : 12 simplifies to 2 : 3.',
    },
    {
      question: 'How do I convert a ratio to a percentage?',
      answer:
        'Add both parts to get the total, then divide each part by the total and multiply by 100. For 8 : 12, 8 ÷ 20 = 40% and 12 ÷ 20 = 60%.',
    },
    {
      question: 'What is the GCD?',
      answer:
        'The Greatest Common Divisor is the largest number that divides both numbers evenly. For 8 and 12, the GCD is 4.',
    },
  ],
  relatedCalculators: ['percentage-calculator', 'hcf-calculator', 'lcm-calculator'],
  updated: '2026-08-15',
};

export default config;
