import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'z-score-calculator',
  icon: 'monitoring',
  category: 'math',
  title: 'Z-Score Calculator',
  shortDescription:
    'Calculate the z-score of a value from its mean and standard deviation, and see the corresponding percentile in the normal distribution.',
  answer:
    'The z-score calculator computes how many standard deviations a value sits above or below the mean (z = (x − mean) ÷ σ) and converts it to a percentile.',
  targetKeyword: 'z score calculator',
  keywords: ['z score calculator', 'how to calculate z score', 'standard score', 'normal distribution', 'percentile'],
  inputs: [
    {
      type: 'number',
      id: 'value',
      label: 'Value (x)',
      default: 85,
      step: 0.1,
      help: 'The data point you want to standardize',
    },
    {
      type: 'number',
      id: 'mean',
      label: 'Mean (μ)',
      default: 70,
      step: 0.1,
    },
    {
      type: 'number',
      id: 'standardDeviation',
      label: 'Standard deviation (σ)',
      default: 10,
      min: 0,
      step: 0.1,
    },
  ],
  formulaId: 'zscore',
  outputs: [
    {
      id: 'zScore',
      label: 'Z-score',
      format: 'decimal',
      decimals: 2,
      primary: true,
      note: 'Standard deviations from the mean',
    },
    {
      id: 'percentile',
      label: 'Percentile',
      format: 'percent',
      decimals: 1,
      note: 'Share of values at or below x',
    },
    {
      id: 'interpretation',
      label: 'Interpretation',
      format: 'text',
    },
  ],
  formulaDisplay:
    'Z = (x − μ) ÷ σ. A positive z is above the mean, negative below. Percentile = P(Z ≤ z) from the standard normal distribution.',
  explanation: `The **z-score** (standard score) tells you how far a value sits from the mean, measured in **standard deviations**. It's the universal ruler of statistics — it lets you compare values from completely different scales.

### The formula

    Z = (x − μ) ÷ σ

- **x** — your data point
- **μ** — the mean (average) of the data
- **σ** — the standard deviation

### Worked example

If a class mean is **70** with a standard deviation of **10**, what is the z-score of **85**?

    Z = (85 − 70) ÷ 10 = 1.5

A score of 85 is **1.5 standard deviations above the mean** — a good result.

### Reading the percentile

Under the normal distribution, a z of 1.5 corresponds to about the **93.3rd percentile**: roughly 93.3% of scores are at or below 85, and only 6.7% are above.

### Rules of thumb

| Z-score | Meaning |
| --- | --- |
| ≈ 0 | Right at the average |
| +1 to +2 | Above average |
| +2 to +3 | Well above average |
| −1 to −2 | Below average |
| > +3 or < −3 | Unusually far from the mean |

### Where z-scores are used

- **Standardized tests** — normalizing scores across different test versions.
- **Quality control** — flagging measurements that drift far from spec.
- **Comparing datasets** — turning "apples and oranges" into the same scale.
`,
  faq: [
    {
      question: 'How do I calculate a z-score?',
      answer:
        'Subtract the mean from the value and divide by the standard deviation: z = (x − mean) ÷ σ. A positive z means above average; negative means below.',
    },
    {
      question: 'What does a z-score of 1.5 mean?',
      answer:
        'It means the value is 1.5 standard deviations above the mean, which sits at about the 93rd percentile in a normal distribution — better than ~93% of values.',
    },
    {
      question: 'What is a good z-score?',
      answer:
        'A z-score near 0 is average. Above +1 is clearly above average, and above +2 is well above. Negative z-scores are below the mean — not necessarily "bad", it depends on the context.',
    },
    {
      question: 'What is the difference between z-score and standard deviation?',
      answer:
        'Standard deviation (σ) measures the spread of the whole dataset. The z-score measures where one specific value sits relative to the mean, in units of σ.',
    },
  ],
  relatedCalculators: ['percentage-difference-calculator', 'gpa-calculator', 'percentage-calculator'],
  updated: '2026-08-15',
};

export default config;
