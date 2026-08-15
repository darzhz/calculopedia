import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'reverse-percentage-calculator',
  icon: 'find_replace',
  category: 'math',
  title: 'Reverse Percentage Calculator',
  shortDescription:
    'Find the original number when you know a value and the percentage it represents — "30 is 15% of what?"',
  answer:
    'To reverse a percentage, divide the known value by the percentage and multiply by 100: original = value ÷ percent × 100.',
  targetKeyword: 'reverse percentage',
  keywords: [
    'reverse percentage calculator',
    'percentage of original',
    'find original number',
    'x is y percent of what',
  ],
  inputs: [
    {
      type: 'number',
      id: 'valueIs',
      label: 'The value you know',
      default: 30,
      min: 0,
      step: 1,
    },
    {
      type: 'number',
      id: 'percent',
      label: 'It represents this %',
      unit: '%',
      default: 15,
      min: 0,
      max: 1000,
      step: 1,
    },
  ],
  formulaId: 'reversePercent',
  outputs: [
    {
      id: 'original',
      label: 'Original number',
      format: 'number',
      decimals: 2,
      primary: true,
    },
    {
      id: 'valueIs',
      label: 'The value you entered',
      format: 'number',
      decimals: 0,
    },
  ],
  formulaDisplay: 'Original = known value × 100 ÷ percent. Example: 30 × 100 ÷ 15 = 200.',
  explanation: `**Reverse percentage** solves the question "30 is 15% of what number?" — you know a part and its percentage, and you want the whole. It's the flip side of the forward percentage calculation.

### The formula

    Original = known value × 100 ÷ percent

### Worked example

**30 is 15% of what?**

    30 × 100 ÷ 15 = 3000 ÷ 15 = 200

So 30 is 15% of **200**. The calculator uses exactly this math.

### Why it works

"30 is 15% of X" means X × 0.15 = 30. Dividing both sides by 0.15 gives X = 30 ÷ 0.15 = 200. Multiplying by 100 and dividing by the percent (as a whole number) is the same operation.

### Real-world uses

- **GST-inclusive prices** — ₹11,800 is a price *including* 18% GST. Here you don't want "X is 18% of what" but rather the base: this is where the [GST calculator](/finance/gst-calculator/) and reverse-percentage logic overlap.
- **Scored marks** — "I got 34 out of 40. That's 85%. How many marks was the full exam?" Actually the full exam is given; instead: "34 marks is 85% of the total — what's the total?" → 34 × 100 ÷ 85 = 40.
- **Sales commissions** — "₹7,500 commission is 5% of sales. What were sales?" → 7,500 × 100 ÷ 5 = ₹1,50,000.
- **Test prep and budgeting** — working back from a known portion to the whole.
`,
  faq: [
    {
      question: 'How do I reverse a percentage?',
      answer:
        'Divide the known value by the percentage and multiply by 100: original = value ÷ percent × 100. For example, 30 ÷ 15 × 100 = 200.',
    },
    {
      question: '30 is 15% of what number?',
      answer: '30 × 100 ÷ 15 = 200. So 30 is 15% of 200.',
    },
    {
      question: 'What is the reverse percentage formula?',
      answer:
        'Original number = known value × 100 ÷ percent. Use it when you know a part and the percentage it represents, and you want the whole.',
    },
  ],
  relatedCalculators: [
    'percentage-calculator',
    'percentage-change-calculator',
    'what-percent-of-calculator',
  ],
  updated: '2026-08-14',
};

export default config;
