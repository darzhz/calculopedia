import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'time-duration-calculator',
  icon: 'schedule',
  category: 'date-time',
  title: 'Time Duration Calculator',
  shortDescription:
    'Calculate the duration between two times of day, in hours and minutes, including overnight shifts.',
  answer:
    'The time duration calculator works out how many hours and minutes pass between two times, including shifts that cross midnight.',
  targetKeyword: 'time calculator',
  keywords: [
    'time calculator',
    'time duration',
    'hours between times',
    'duration calculator',
    'work hours',
  ],
  inputs: [
    {
      type: 'time',
      id: 'startTime',
      label: 'Start time',
      default: '09:00',
    },
    {
      type: 'time',
      id: 'endTime',
      label: 'End time',
      default: '17:00',
    },
    {
      type: 'toggle',
      id: 'nextDay',
      label: 'End time is next day',
      default: false,
      help: 'For overnight shifts (e.g. 23:00 to 07:00)',
    },
  ],
  formulaId: 'timeDuration',
  outputs: [
    {
      id: 'durationText',
      label: 'Duration',
      format: 'text',
      primary: true,
      note: 'In hours and minutes',
    },
    {
      id: 'hours',
      label: 'Hours',
      format: 'number',
    },
    {
      id: 'minutes',
      label: 'Minutes',
      format: 'number',
    },
    {
      id: 'totalMinutes',
      label: 'Total minutes',
      format: 'number',
    },
  ],
  formulaDisplay:
    'Duration (minutes) = end − start in minutes. If end ≤ start and "next day", add 24 hours. Hours = duration ÷ 60, minutes = remainder.',
  explanation: `A **time duration calculator** answers "how long is it between two times?" — from shift lengths and travel times to meeting windows and cooking schedules.

### How the calculation works

Each time is converted to minutes since midnight (e.g., 09:00 = 540 minutes, 17:00 = 1020 minutes). The duration is simply the difference:

    Duration = end time − start time

### Worked example

From **09:00 to 17:00** (a standard work shift):

- 17:00 = 1020 min, 09:00 = 540 min
- Duration = 480 minutes = **8 hours 0 minutes**

From **23:00 to 07:00 next day** (night shift):

- 07:00 < 23:00, so with "next day" selected the calculator adds 24 hours
- Duration = (1440 − 1380) + 420 = 480 minutes = **8 hours**

### Crossing midnight

If your end time is earlier than your start time, the calculator assumes the shift crosses midnight and adds 24 hours automatically. Toggle the "next day" option for clarity, or leave it off if your times genuinely don't span midnight — either way you get the same total.

### Uses

- **Work hours and overtime** — total your daily shifts
- **Travel time** — how long a journey takes between departure and arrival
- **Cooking and baking** — precise timings
- **Sporting events, exams and schedules** — knowing exactly how long something runs
`,
  faq: [
    {
      question: 'How do I calculate the duration between two times?',
      answer:
        'Convert both times to minutes since midnight and subtract the earlier from the later. This calculator does that instantly and shows the result in hours and minutes.',
    },
    {
      question: 'How do I calculate hours between two times crossing midnight?',
      answer:
        'When the end time is earlier than the start time, the calculator adds 24 hours to the end time — so 23:00 to 07:00 is 8 hours.',
    },
    {
      question: 'What is 9am to 5pm in hours?',
      answer: '9am to 5pm is exactly 8 hours and 0 minutes (480 minutes).',
    },
  ],
  relatedCalculators: ['days-between-dates', 'age-calculator'],
  updated: '2026-08-14',
};

export default config;
