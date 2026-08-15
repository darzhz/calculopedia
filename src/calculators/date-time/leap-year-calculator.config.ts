import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'leap-year-calculator',
  icon: 'event',
  category: 'date-time',
  title: 'Leap Year Calculator',
  shortDescription:
    'Check if a year is a leap year and find out how many days it has, plus the next leap year.',
  answer:
    'The leap year calculator checks whether a given year has 366 days (February 29) using the standard leap year rules, and shows the next leap year.',
  targetKeyword: 'leap year calculator',
  keywords: [
    'leap year calculator',
    'is 2024 a leap year',
    'leap year rules',
    'february 29',
    'how to check leap year',
  ],
  inputs: [
    {
      type: 'number',
      id: 'year',
      label: 'Year',
      default: 2024,
      min: 1,
      max: 9999,
      step: 1,
    },
  ],
  formulaId: 'leapYear',
  outputs: [
    {
      id: 'isLeapYear',
      label: 'Is it a leap year?',
      format: 'text',
      primary: true,
    },
    {
      id: 'daysInYear',
      label: 'Days in the year',
      format: 'number',
    },
    {
      id: 'februaryDays',
      label: 'February days',
      format: 'number',
    },
    {
      id: 'nextLeapYear',
      label: 'Next leap year',
      format: 'number',
    },
  ],
  formulaDisplay:
    'A year is a leap year if divisible by 4, except century years (÷100) unless also divisible by 400.',
  explanation: `A **leap year** has 366 days instead of 365 — February gets an extra day (29th). This keeps our calendar aligned with Earth's orbit around the Sun.

### The rules

A year is a leap year if:

1. Divisible by 4 → **yes**, leap year
2. **But** divisible by 100 → **not** a leap year
3. **Unless** also divisible by 400 → **yes**, leap year

| Year | ÷4 | ÷100 | ÷400 | Leap year? |
| --- | --- | --- | --- | --- |
| 2024 | Yes | No | No | **Yes** |
| 1900 | Yes | Yes | No | **No** |
| 2000 | Yes | Yes | Yes | **Yes** |
| 2025 | No | — | — | **No** |

### Why the exceptions?

Earth takes approximately 365.2422 days to orbit the Sun. A simple +1 day every 4 years overcorrects by about 3 days every 400 years. The century rule (skip leap years divisible by 100) and the 400-year exception bring the calendar back in sync.

### Fun facts

- **February 29** is called a "leap day" — people born on this day technically celebrate their birthday only every 4 years
- The probability of being born on Feb 29 is about 1 in 1,461
- In the Gregorian calendar, there are 97 leap years every 400 years
`,
  faq: [
    {
      question: 'Is 2024 a leap year?',
      answer:
        'Yes, 2024 is a leap year because it is divisible by 4 and not a century year. February 2024 has 29 days.',
    },
    {
      question: 'How do I check if a year is a leap year?',
      answer:
        'Check if it\'s divisible by 4. If it is, check if it\'s also divisible by 100 — if yes, it must also be divisible by 400 to be a leap year.',
    },
    {
      question: 'What is a leap day?',
      answer:
        'A leap day is February 29, the extra day added to leap years. It occurs every 4 years (with exceptions for century years).',
    },
  ],
  relatedCalculators: ['day-of-week-calculator', 'age-calculator', 'days-between-dates'],
  updated: '2026-08-15',
};

export default config;
