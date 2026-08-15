import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'days-between-dates',
  icon: 'date_range',
  category: 'date-time',
  title: 'Days Between Dates Calculator',
  shortDescription:
    'Count the exact number of days, weeks, months and business days between any two dates.',
  answer:
    'The days-between-dates calculator counts the exact number of days between any two dates, and also shows the result in weeks, months, years and business days.',
  targetKeyword: 'date calculator',
  keywords: [
    'days calculator',
    'days between dates',
    'date calculator',
    'how many days between dates',
    'business days',
  ],
  inputs: [
    {
      type: 'date',
      id: 'startDate',
      label: 'Start date',
      default: '2026-01-01',
    },
    {
      type: 'date',
      id: 'endDate',
      label: 'End date',
      default: '2026-08-14',
    },
  ],
  formulaId: 'daysBetween',
  outputs: [
    {
      id: 'totalDays',
      label: 'Days between',
      format: 'number',
      primary: true,
      note: 'The exact day count',
    },
    {
      id: 'weeksAndDaysText',
      label: 'In weeks and days',
      format: 'text',
    },
    {
      id: 'totalWeeks',
      label: 'Whole weeks',
      format: 'number',
    },
    {
      id: 'remainingDays',
      label: 'Remaining days',
      format: 'number',
    },
    {
      id: 'businessDays',
      label: 'Business days',
      format: 'number',
      note: 'Excludes Saturdays and Sundays',
    },
    {
      id: 'monthsApprox',
      label: 'Approx. months',
      format: 'decimal',
      decimals: 1,
    },
    {
      id: 'yearsApprox',
      label: 'Approx. years',
      format: 'decimal',
      decimals: 1,
    },
  ],
  formulaDisplay:
    'Days = (end date − start date) in calendar days. Weeks = floor(days ÷ 7). Business days count Monday–Friday only.',
  explanation: `Counting the **days between two dates** is a common need — for deadlines, project timelines, leave balances, notices, or simply "how many days until that trip?" This calculator gives you the precise calendar-day count plus a few handy breakdowns.

### How the day count works

The calculator finds the exact difference in calendar days between the two dates, handling month lengths and leap years automatically. Enter the dates in either order — the result is always the absolute count.

### Worked example

From **1 January 2026** to **14 August 2026**:

- Days between = **225 days**
- That's **32 weeks and 1 day**
- Roughly 7.4 months or 0.6 years
- **Business days** (Mon–Fri) = 162

### Weeks and business days

- **Whole weeks + remaining days** is the natural human way to think about medium-length gaps ("32 weeks and 1 day").
- **Business days** skip Saturdays and Sundays — the useful figure for work deadlines, court holidays, bank processing and delivery promises. Note it does *not* exclude public holidays, which vary by state; adjust manually if you need a fully holiday-free count.

### Inclusive vs exclusive counting

If you need to count *including* both the start and end date (common for contracts: "5 days from 1 Jan" means 1–5 Jan), just add 1 to the result. For example, 1 Jan to 5 Jan is 4 days between, but 5 days inclusive.
`,
  faq: [
    {
      question: 'How many days are between two dates?',
      answer:
        'Enter the two dates in the calculator and it counts the exact calendar days between them, handling leap years and month lengths automatically.',
    },
    {
      question: 'How do I count business days between two dates?',
      answer:
        'This calculator counts Monday–Friday as business days. Public holidays vary by state and are not subtracted, so adjust for them if needed.',
    },
    {
      question: 'How many weeks is that in total?',
      answer:
        'The calculator divides the day count by 7 to show whole weeks, with the leftover days shown separately.',
    },
  ],
  relatedCalculators: ['age-calculator', 'date-add-subtract', 'time-duration-calculator'],
  updated: '2026-08-14',
};

export default config;
