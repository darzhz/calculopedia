import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'age-calculator',
  icon: 'cake',
  category: 'date-time',
  title: 'Age Calculator',
  shortDescription:
    'Calculate your exact age in years, months and days from your date of birth — plus total days and your next birthday.',
  answer:
    'The age calculator works out your exact age in years, months and days from your date of birth, and also shows your age in total days, months and weeks.',
  targetKeyword: 'age calculator',
  keywords: [
    'age calculator',
    'date of birth calculator',
    'how old am i',
    'birthday calculator',
    'age by date of birth',
  ],
  inputs: [
    {
      type: 'date',
      id: 'birthDate',
      label: 'Date of birth',
      default: '1995-06-15',
    },
    {
      type: 'date',
      id: 'asOfDate',
      label: 'Calculate age as of',
      help: 'Defaults to today',
    },
  ],
  formulaId: 'age',
  outputs: [
    {
      id: 'ageText',
      label: 'Your age',
      format: 'text',
      primary: true,
      note: 'In years, months and days',
    },
    {
      id: 'ageYears',
      label: 'Years',
      format: 'number',
    },
    {
      id: 'ageMonths',
      label: 'Months',
      format: 'number',
    },
    {
      id: 'ageDays',
      label: 'Days',
      format: 'number',
    },
    {
      id: 'totalDays',
      label: 'Total days alive',
      format: 'number',
    },
    {
      id: 'totalMonths',
      label: 'Total months',
      format: 'number',
    },
    {
      id: 'totalWeeks',
      label: 'Total weeks',
      format: 'number',
    },
    {
      id: 'nextBirthday',
      label: 'Next birthday',
      format: 'date',
    },
    {
      id: 'daysUntilBirthday',
      label: 'Days until your birthday',
      format: 'number',
    },
  ],
  formulaDisplay:
    'Age = (current date − date of birth), decomposed into years, months and days by calendar subtraction.',
  explanation: `An **age calculator** tells you exactly how old you are — years, months and days — by subtracting your **date of birth** from today's date.

### How the calculation works

It's not simple day-count subtraction: an age is measured in **calendar units**. For someone born on **15 June 1995** on **14 August 2026**:

- Years: 2026 − 1995 = 31
- Then months: August − June = 2 months
- Then days: 14 − 15 = −1 → borrow a month: 31 years, 1 month, and the day count wraps to the end of July → **31 years, 1 month, 30 days**

The calculator handles leap years and month-lengths automatically (a birthday on 29 February is handled by rolling to 28 February in non-leap years).

### What else it shows

- **Total days alive** — the raw number of days since birth, handy for comparing with life milestones
- **Total months and weeks**
- **Next birthday and days until it** — always the next occurrence of your birth date, rolling over to the following year if today is your birthday month

### Uses

Beyond casual "how old am I", age calculators are used for:
- **Retirement planning** (Indian EPF and NPS touchpoints are age-based)
- **KYC and insurance** (age affects premiums)
- **School/college eligibility**
- **Medical checks** where reference ranges depend on age
`,
  faq: [
    {
      question: 'How do I calculate my age?',
      answer:
        "Subtract your date of birth from today's date in years, months and days. Enter your date of birth in this calculator and it does the calendar math instantly.",
    },
    {
      question: 'How do I calculate age from date of birth?',
      answer:
        'Start from the birth year and count forward, then months, then days, borrowing across months where needed (e.g., from 15 June 1995 to 14 Aug 2026 is 31 years, 1 month, 30 days).',
    },
    {
      question: 'How many days old am I?',
      answer:
        'The calculator shows your total days alive — the exact number of days from your birth date to today.',
    },
    {
      question: 'How is my next birthday calculated?',
      answer:
        'The calculator finds the next occurrence of your birth month and day after today, adding a year if your birthday already passed this year. If you were born on 29 Feb, it uses 28 Feb in non-leap years.',
    },
  ],
  relatedCalculators: ['days-between-dates', 'date-add-subtract', 'pregnancy-due-date-calculator'],
  updated: '2026-08-14',
};

export default config;
