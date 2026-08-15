import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'date-add-subtract',
  icon: 'event',
  category: 'date-time',
  title: 'Add or Subtract Days from a Date',
  shortDescription:
    'Calculate the date that falls a given number of days, weeks, months or years before or after any date.',
  answer:
    'This date calculator adds or subtracts days, weeks, months or years to or from any date, giving you the resulting date instantly.',
  targetKeyword: 'add days to date',
  keywords: [
    'add days to date',
    'date add calculator',
    'date calculator',
    'days from date',
    'subtract days',
  ],
  inputs: [
    {
      type: 'date',
      id: 'baseDate',
      label: 'Start date',
      default: '2026-08-14',
    },
    {
      type: 'number',
      id: 'amount',
      label: 'Amount',
      default: 30,
      min: 0,
      max: 100000,
      step: 1,
    },
    {
      type: 'select',
      id: 'unit',
      label: 'Unit',
      options: [
        { value: 'days', label: 'Days' },
        { value: 'weeks', label: 'Weeks' },
        { value: 'months', label: 'Months' },
        { value: 'years', label: 'Years' },
      ],
      default: 'days',
    },
    {
      type: 'select',
      id: 'operation',
      label: 'Add or subtract',
      options: [
        { value: 'add', label: 'Add' },
        { value: 'subtract', label: 'Subtract' },
      ],
      default: 'add',
    },
  ],
  formulaId: 'dateAddSubtract',
  outputs: [
    {
      id: 'resultDate',
      label: 'Resulting date',
      format: 'date',
      primary: true,
    },
    {
      id: 'unitLabel',
      label: 'What was done',
      format: 'text',
    },
  ],
  formulaDisplay:
    'Result = base date ± amount in the chosen unit. Months and years adjust the calendar month/year, rolling over when lengths differ.',
  explanation: `Need to know what date falls **30 days from now**, **6 weeks before a deadline**, or **3 months after a bill**? This calculator takes any date and shifts it forward or backward by days, weeks, months or years.

### How it works

- **Days / weeks** — simple calendar arithmetic: add or subtract the exact number of days (weeks × 7). The result respects month lengths and leap years automatically.
- **Months / years** — calendar-based: it adds the amount to the month or year, keeping the day of the month. When the target month has fewer days (e.g., adding 1 month to 31 January), the result rolls over to the last valid day (28/29 February, or the 30th).

### Worked example

- **14 August 2026 + 30 days** = **13 September 2026**
- **14 August 2026 − 6 weeks** = **3 July 2026**
- **31 January 2026 + 1 month** = **28 February 2026** (Jan has 31 days, Feb has 28)
- **14 August 2026 + 5 years** = **14 August 2031**

### Common uses

- **Contract and notice periods** ("45 days from signing")
- **Medicine refills and prescriptions**
- **Billing, EMI and subscription renewal dates**
- **Warranty and visa validity windows**
- **Countdown planning** for events and trips

> If you need the *number of days between* two known dates instead, use the [Days Between Dates](/date-time/days-between-dates/) calculator.
`,
  faq: [
    {
      question: 'What is 30 days from today?',
      answer:
        "Enter today's date with 30 days added, or use the calculator's default and change the amount. For example, 14 Aug 2026 + 30 days = 13 Sep 2026.",
    },
    {
      question: 'How do I add months to a date?',
      answer:
        'Select "Months" as the unit and "Add" as the operation. The calculator keeps the day of the month and rolls over to the last day if the target month is shorter.',
    },
    {
      question: 'What happens if I add a month to January 31?',
      answer:
        'The result rolls over to the last valid day of February (28th, or 29th in a leap year), because February has fewer days than January.',
    },
  ],
  relatedCalculators: ['days-between-dates', 'age-calculator', 'time-duration-calculator'],
  updated: '2026-08-14',
};

export default config;
