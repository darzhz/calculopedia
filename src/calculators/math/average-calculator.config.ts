import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'average-calculator',
  icon: 'calculate',
  category: 'math',
  title: 'Average Calculator',
  shortDescription:
    'Calculate the mean, median, mode and range of any set of numbers — enter values separated by commas.',
  answer:
    'The average calculator computes the mean (sum ÷ count), median (middle value), mode (most frequent) and range (highest − lowest) for any list of numbers.',
  targetKeyword: 'average calculator',
  keywords: [
    'average calculator',
    'mean calculator',
    'median calculator',
    'mode calculator',
    'how to calculate average',
  ],
  inputs: [
    {
      type: 'text',
      id: 'numbers',
      label: 'Numbers (comma-separated)',
      default: '85, 90, 78, 92, 88',
      placeholder: 'e.g., 85, 90, 78, 92, 88',
    },
  ],
  formulaId: 'average',
  outputs: [
    {
      id: 'mean',
      label: 'Mean (average)',
      format: 'decimal',
      decimals: 2,
      primary: true,
    },
    {
      id: 'median',
      label: 'Median (middle value)',
      format: 'decimal',
      decimals: 2,
    },
    {
      id: 'mode',
      label: 'Mode (most frequent)',
      format: 'text',
    },
    {
      id: 'range',
      label: 'Range (high − low)',
      format: 'decimal',
      decimals: 2,
    },
    {
      id: 'count',
      label: 'Count',
      format: 'number',
    },
    {
      id: 'sum',
      label: 'Sum',
      format: 'decimal',
      decimals: 2,
    },
  ],
  formulaDisplay: 'Mean = sum of values ÷ count. Median = middle value when sorted. Mode = most frequent value.',
  explanation: `The **average** (or **mean**) is the most common measure of central tendency — it's the "typical" value in a set.

### Mean

Add all values and divide by the count:

    Mean = (85 + 90 + 78 + 92 + 88) ÷ 5 = 433 ÷ 5 = 86.6

### Median

The **median** is the middle value when the numbers are sorted. For an odd count, it's the single middle number. For an even count, it's the average of the two middle numbers.

Sorted: 78, 85, **88**, 90, 92 → Median = 88

### Mode

The **mode** is the value that appears most often. If all values appear once, there is no mode.

### Range

The **range** shows the spread — the difference between the highest and lowest values:

    Range = 92 − 78 = 14

### When to use which?

- **Mean** — best for symmetric data without outliers (test scores, heights)
- **Median** — better when outliers skew the mean (income, house prices)
- **Mode** — useful for categorical data (most popular shoe size)
- **Range** — shows how spread out the data is
`,
  faq: [
    {
      question: 'How do I calculate the average?',
      answer:
        'Add all the numbers together and divide by how many numbers there are. For example, (85 + 90 + 78 + 92 + 88) ÷ 5 = 86.6.',
    },
    {
      question: 'What is the difference between mean and median?',
      answer:
        'The mean is the arithmetic average (sum ÷ count). The median is the middle value when sorted. The median is better when outliers pull the mean up or down.',
    },
    {
      question: 'What is mode?',
      answer:
        'The mode is the number that appears most frequently in a data set. A set can have no mode (all values appear once) or multiple modes.',
    },
  ],
  relatedCalculators: ['percentage-calculator', 'z-score-calculator', 'gpa-calculator'],
  updated: '2026-08-15',
};

export default config;
