import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'hours-worked-calculator',
  icon: 'schedule',
  category: 'date-time',
  title: 'Hours Worked Calculator',
  shortDescription:
    'Calculate net hours worked in a shift — clock in, clock out, overnight and break time — as hours, minutes and a clean timecard text.',
  answer:
    'The hours worked calculator subtracts your break time from the time between clock-in and clock-out (including overnight shifts) to give your exact hours and minutes worked.',
  targetKeyword: 'hours worked calculator',
  keywords: [
    'hours worked calculator',
    'calculate hours worked',
    'calculate work hours',
    'timecard calculator',
    'overtime hours',
  ],
  inputs: [
    {
      type: 'time',
      id: 'startTime',
      label: 'Clock in',
      default: '09:00',
    },
    {
      type: 'time',
      id: 'endTime',
      label: 'Clock out',
      default: '17:00',
    },
    {
      type: 'toggle',
      id: 'nextDay',
      label: 'Ends next day',
      default: false,
      help: 'Turn on for overnight shifts (e.g. 23:00 to 07:00)',
    },
    {
      type: 'number',
      id: 'breakMinutes',
      label: 'Break time',
      unit: 'minutes',
      default: 30,
      min: 0,
      max: 300,
      step: 5,
    },
  ],
  formulaId: 'hoursWorked',
  outputs: [
    {
      id: 'netHours',
      label: 'Hours worked',
      format: 'decimal',
      decimals: 2,
      primary: true,
      note: 'After subtracting breaks',
    },
    {
      id: 'netMinutes',
      label: 'Total minutes',
      format: 'number',
    },
    {
      id: 'durationText',
      label: 'Timecard entry',
      format: 'text',
      note: 'e.g. 7 hours 30 minutes',
    },
    {
      id: 'grossHours',
      label: 'Shift length',
      format: 'decimal',
      decimals: 2,
      note: 'Clock in to clock out',
    },
    {
      id: 'breakHours',
      label: 'Break time',
      format: 'decimal',
      decimals: 2,
      note: 'In hours',
    },
  ],
  formulaDisplay:
    'Net hours = (clock out − clock in, +24h if next day) − break time. Worked example: 09:00–17:00 with a 30 min break = 7.5 hours.',
  explanation: `Calculating hours worked is the difference between your **clock-out** and **clock-in** times, minus breaks. The calculator handles the fiddly cases for you.

### The simple case

Clock in at **09:00**, out at **17:00**, no overnight:

    17:00 − 09:00 = 8 hours
    Minus a 30-minute break = 7 hours 30 minutes (7.5 hours)

### Overnight shifts

If you clock in at **23:00** and out at **07:00**, the shift crosses midnight. The calculator adds 24 hours:

    07:00 + 24:00 = 31:00
    31:00 − 23:00 = 8 hours (minus breaks)

### Tips for accurate time tracking

- **Track the exact minute** — round only at the end, not at each clock in/out.
- **Lunch breaks matter** — 30 or 60 minutes of unpaid break usually doesn't count as work time.
- **Weekly view** — total each day and sum. For a full workweek or overtime at 1.5×, use a weekly timesheet on top of this per-shift tool.
- **Decimal for payroll** — most payroll systems want 7.5 hours, not "7 hours 30 min". The calculator gives you both.
`,
  faq: [
    {
      question: 'How do I calculate hours worked?',
      answer:
        'Subtract your clock-in time from your clock-out time (adding 24 hours for overnight shifts), then subtract your break time. The calculator does this instantly.',
    },
    {
      question: 'How do I calculate hours worked overnight?',
      answer:
        'For a shift crossing midnight (e.g. 23:00 to 07:00), add 24 hours to the clock-out time before subtracting: 31:00 − 23:00 = 8 hours. Toggle "ends next day" in the calculator.',
    },
    {
      question: 'Does break time count as hours worked?',
      answer:
        'Short paid breaks usually count; longer unpaid meal breaks typically do not. Check your employment agreement — this calculator lets you subtract whatever break time applies.',
    },
    {
      question: 'How do I convert hours worked to decimals for payroll?',
      answer:
        'Divide minutes by 60. For example, 7 hours 30 minutes = 7.5 hours, and 8 hours 15 minutes = 8.25 hours. The calculator shows both formats.',
    },
  ],
  relatedCalculators: ['time-duration-calculator', 'days-between-dates', 'hourly-rate-calculator'],
  updated: '2026-08-15',
};

export default config;
