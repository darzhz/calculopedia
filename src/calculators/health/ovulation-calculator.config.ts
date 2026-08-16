import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'ovulation-calculator',
  icon: 'pregnant_woman',
  category: 'health',
  title: 'Ovulation Calculator',
  shortDescription:
    'Find your ovulation date and fertile window from your last period and cycle length, with your next period date too.',
  answer:
    'An ovulation calculator finds your ovulation date as your next period date minus the luteal phase, and shows your fertile window — the five days before and day of ovulation.',
  targetKeyword: 'ovulation calculator',
  keywords: [
    'ovulation calculator',
    'how to calculate ovulation',
    'how to calculate ovulation period',
    'fertile window',
    'when am I most fertile',
  ],
  inputs: [
    {
      type: 'date',
      id: 'periodStart',
      label: 'First day of last period',
      default: '2026-08-01',
    },
    {
      type: 'number',
      id: 'cycleLength',
      label: 'Average cycle length',
      unit: 'days',
      default: 28,
      min: 21,
      max: 40,
      step: 1,
      help: 'From day 1 of one period to day 1 of the next',
    },
    {
      type: 'number',
      id: 'lutealPhase',
      label: 'Luteal phase',
      unit: 'days',
      default: 14,
      min: 10,
      max: 16,
      step: 1,
      help: 'From ovulation to the next period — usually 14 days',
    },
  ],
  formulaId: 'ovulation',
  outputs: [
    {
      id: 'ovulationDate',
      label: 'Ovulation date',
      format: 'date',
      primary: true,
      note: 'Your most fertile day',
    },
    {
      id: 'fertileStart',
      label: 'Fertile window starts',
      format: 'date',
      note: 'Sperm can survive up to 5 days',
    },
    {
      id: 'fertileEnd',
      label: 'Fertile window ends',
      format: 'date',
      note: 'Day after ovulation',
    },
    {
      id: 'nextPeriodDate',
      label: 'Next period due',
      format: 'date',
    },
    {
      id: 'daysUntilOvulation',
      label: 'Days until ovulation',
      format: 'number',
    },
  ],
  formulaDisplay:
    'Ovulation date = period start + (cycle length − luteal phase). Fertile window = ovulation − 5 days to ovulation + 1 day. Next period = period start + cycle length.',
  explanation: `**Ovulation** is the moment an egg is released from the ovary. It happens roughly **14 days before your next period** — which is why we count back from your cycle length, not forward from your period.

### The calculation

    Ovulation = period start + (cycle length − luteal phase)

With a **28-day cycle** and a **14-day luteal phase**, ovulation falls on **day 14**. With a 30-day cycle it falls on day 16.

### The fertile window

You are most fertile in the **five days before and the day of ovulation**:

- **Sperm** can live up to **5 days** inside the body.
- The **egg** survives only **about 24 hours** after release.

So the window for conception is roughly 6 days per cycle — shown as your fertile start and end dates.

### Example

Last period started **1 August 2026**, 28-day cycle, 14-day luteal phase:

    Ovulation = 1 Aug + 14 days = 15 August 2026
    Fertile window = 10–16 August 2026
    Next period = 29 August 2026

### Accuracy note

Cycle length varies. Tracking basal body temperature, cervical mucus or using ovulation test strips pinpoints ovulation much more precisely than a calendar estimate. This tool is for information, not medical advice or contraception.
`,
  faq: [
    {
      question: 'How do I calculate my ovulation date?',
      answer:
        'Subtract your luteal phase (usually 14 days) from your cycle length, then add that many days to the start of your last period. A 28-day cycle with a 14-day luteal phase ovulates on day 14.',
    },
    {
      question: 'When is the fertile window?',
      answer:
        'The fertile window is the five days before ovulation plus the day of ovulation. Sperm survive up to 5 days and the egg about 24 hours, so that is the conception window.',
    },
    {
      question: 'How many days after my period do I ovulate?',
      answer:
        'It depends on your cycle length: ovulation happens at cycle length minus 14 days. For a 28-day cycle that is day 14; for a 32-day cycle, day 18.',
    },
  ],
  relatedCalculators: [
    'pregnancy-week-calculator',
    'pregnancy-due-date-calculator',
    'edd-calculator',
    'days-between-dates',
  ],
  updated: '2026-08-16',
};

export default config;