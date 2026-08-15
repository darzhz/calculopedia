import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'day-of-week-calculator',
  icon: 'calendar_today',
  category: 'date-time',
  title: 'Day of the Week Calculator',
  shortDescription:
    'Find out what day of the week any date falls on — past, present or future.',
  answer:
    'The day of the week calculator tells you which day any given date falls on, along with the week number and whether it\'s a leap year.',
  targetKeyword: 'day of the week calculator',
  keywords: [
    'day of the week calculator',
    'what day was',
    'what day is',
    'day on 15 august 1947',
    'calendar calculator',
  ],
  inputs: [
    {
      type: 'date',
      id: 'date',
      label: 'Date',
      default: '1947-08-15',
    },
  ],
  formulaId: 'dayOfWeek',
  outputs: [
    {
      id: 'dayName',
      label: 'Day of the week',
      format: 'text',
      primary: true,
    },
    {
      id: 'dayNumber',
      label: 'Day number (1 = Sunday)',
      format: 'number',
    },
    {
      id: 'weekNumber',
      label: 'Week number',
      format: 'number',
      note: 'ISO week of the year',
    },
    {
      id: 'isLeapYear',
      label: 'Leap year?',
      format: 'text',
    },
  ],
  formulaDisplay: 'Day of week is determined from the calendar date using standard calendar arithmetic.',
  explanation: `The **day of the week calculator** tells you which weekday any date falls on — useful for historical research, planning events, or answering trivia.

### What it shows

- **Day name** — Monday, Tuesday, etc.
- **Day number** — 1 (Sunday) through 7 (Saturday)
- **Week number** — the ISO week number within the year
- **Leap year** — whether the year is a leap year

### Fun historical dates

| Date | Day | Event |
| --- | --- | --- |
| 15 August 1947 | Friday | India's Independence Day |
| 26 January 1950 | Thursday | Republic Day of India |
| 15 August 2025 | Friday | India's 79th Independence Day |
| 29 February 2024 | Thursday | Leap day |

### How it works

JavaScript's Date object uses a formula based on the Gregorian calendar to determine the day of the week. The algorithm accounts for leap years and the shifting of days across years.

### Leap years and day shifts

Each regular year shifts the day by 1 (365 = 52 weeks + 1 day). Each leap year shifts it by 2. So if 15 August 2025 is a Friday, then 15 August 2026 will be a Saturday (regular year, +1 day).
`,
  faq: [
    {
      question: 'What day was 15 August 1947?',
      answer: '15 August 1947 was a Friday — the day India gained independence.',
    },
    {
      question: 'How do I find the day of the week for any date?',
      answer:
        'Enter the date in this calculator and it will instantly tell you the day, week number, and whether it\'s a leap year.',
    },
    {
      question: 'What is a leap year?',
      answer:
        'A leap year has 366 days (February has 29 days instead of 28). Years divisible by 4 are leap years, except century years not divisible by 400.',
    },
  ],
  relatedCalculators: ['age-calculator', 'leap-year-calculator', 'days-between-dates'],
  updated: '2026-08-15',
};

export default config;
