import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'hcf-calculator',
  icon: 'tag',
  category: 'math',
  title: 'HCF Calculator (Greatest Common Divisor)',
  shortDescription:
    'Find the Highest Common Factor (HCF) of two numbers with step-by-step Euclidean algorithm work.',
  answer:
    'The HCF calculator uses the Euclidean algorithm to find the Highest Common Factor (also called Greatest Common Divisor) of two numbers, showing each step of the process.',
  targetKeyword: 'hcf calculator',
  keywords: [
    'hcf calculator',
    'greatest common divisor',
    'gcd calculator',
    'highest common factor',
    'how to calculate hcf',
  ],
  inputs: [
    {
      type: 'number',
      id: 'a',
      label: 'First number',
      default: 12,
      min: 1,
      step: 1,
    },
    {
      type: 'number',
      id: 'b',
      label: 'Second number',
      default: 18,
      min: 1,
      step: 1,
    },
  ],
  formulaId: 'hcf',
  outputs: [
    {
      id: 'hcf',
      label: 'HCF (GCD)',
      format: 'number',
      primary: true,
    },
    {
      id: 'hcfSteps',
      label: 'Steps (Euclidean algorithm)',
      format: 'text',
    },
  ],
  formulaDisplay: 'HCF is found by repeated division: divide a by b, replace a with b, b with the remainder, until the remainder is 0. The last non-zero divisor is the HCF.',
  explanation: `The **Highest Common Factor (HCF)** — also called the **Greatest Common Divisor (GCD)** — is the largest number that divides both numbers exactly (no remainder).

### The Euclidean algorithm

Instead of listing all factors, the Euclidean algorithm uses division:

1. Divide the larger number by the smaller → get a remainder
2. Replace the larger with the smaller, the smaller with the remainder
3. Repeat until the remainder is 0
4. The last non-zero remainder is the HCF

### Worked example: HCF(12, 18)

    18 ÷ 12 = 1 remainder 6
    12 ÷ 6 = 2 remainder 0

The last non-zero remainder is **6**, so HCF(12, 18) = **6**.

### Why HCF matters

- **Simplifying fractions** — 12/18 = (12÷6)/(18÷6) = 2/3
- **Sharing equally** — 12 apples and 18 oranges can be split into 6 equal groups
- **Tiling** — the largest square tile that fits exactly into a 12×18 room is 6×6
- **Ratios** — the ratio 12 : 18 simplifies to 2 : 3 using HCF

### HCF vs LCM

The HCF is the largest shared factor; the LCM (Least Common Multiple) is the smallest shared multiple. They're related:

    HCF(a, b) × LCM(a, b) = a × b
`,
  faq: [
    {
      question: 'What is HCF?',
      answer:
        'The Highest Common Factor (HCF) is the largest number that divides both numbers exactly. For 12 and 18, the HCF is 6.',
    },
    {
      question: 'How do I calculate HCF?',
      answer:
        'Use the Euclidean algorithm: repeatedly divide and take remainders until you get 0. The last non-zero remainder is the HCF.',
    },
    {
      question: 'What is the difference between HCF and LCM?',
      answer:
        'HCF is the largest number that divides both values. LCM is the smallest number that both values divide into. HCF × LCM = a × b.',
    },
  ],
  relatedCalculators: ['lcm-calculator', 'ratio-calculator', 'percentage-calculator'],
  updated: '2026-08-15',
};

export default config;
