import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'edd-calculator',
  icon: 'pregnant_woman',
  category: 'health',
  title: 'EDD Calculator (Estimated Due Date)',
  shortDescription:
    'Calculate your estimated due date adjusted for your menstrual cycle length using Naegele\'s rule.',
  answer:
    'The EDD calculator estimates your due date by adding 280 days (adjusted for cycle length) to the first day of your last menstrual period.',
  targetKeyword: 'edd calculator',
  keywords: [
    'edd calculator',
    'estimated due date',
    'due date calculator',
    'when is my due date',
    'naegele rule',
  ],
  inputs: [
    {
      type: 'date',
      id: 'lmpDate',
      label: 'First day of last menstrual period (LMP)',
      default: '2026-01-15',
    },
    {
      type: 'number',
      id: 'cycleLength',
      label: 'Average cycle length',
      unit: 'days',
      default: 28,
      min: 20,
      max: 45,
      step: 1,
      help: 'Average number of days between periods',
    },
  ],
  formulaId: 'edd',
  outputs: [
    {
      id: 'edd',
      label: 'Estimated due date',
      format: 'date',
      primary: true,
      note: 'Adjusted for cycle length',
    },
    {
      id: 'eddText',
      label: 'Due date',
      format: 'text',
    },
    {
      id: 'weeksPregnant',
      label: 'Weeks pregnant',
      format: 'number',
      note: 'As of today',
    },
    {
      id: 'trimester',
      label: 'Current trimester',
      format: 'text',
    },
  ],
  formulaDisplay:
    "EDD = LMP + 280 days + (cycle length − 28). Standard Naegele's rule assumes a 28-day cycle.",
  explanation: `The **Estimated Due Date (EDD)** is the predicted date when your baby will be born. This calculator adjusts for your actual cycle length, giving a more accurate estimate than the standard 280-day rule.

### Naegele's rule (adjusted)

    EDD = LMP + 280 days + (cycle length − 28)

If your **LMP was 15 January 2026** and your cycle is **30 days**:

    EDD = 15 Jan + 280 + (30 − 28) = 15 Jan + 282 days
    EDD = **14 October 2026**

### Why cycle length matters

The standard 280-day rule assumes a 28-day cycle with ovulation on day 14. If your cycle is longer, ovulation happens later, and the due date should be pushed forward accordingly.

| Cycle length | Adjustment |
| --- | --- |
| 26 days | −2 days |
| 28 days | 0 (standard) |
| 30 days | +2 days |
| 32 days | +4 days |
| 35 days | +7 days |

### Trimesters

| Trimester | Weeks |
| --- | --- |
| First | 1–13 |
| Second | 14–27 |
| Third | 28–40 |

### Important note

Only about **4% of babies** arrive exactly on their due date. Most are born within two weeks before or after. This calculator provides an estimate — always follow your doctor's guidance for medical decisions.
`,
  faq: [
    {
      question: 'How is EDD calculated?',
      answer:
        "Add 280 days to the first day of your last menstrual period. For a 28-day cycle, use standard Naegele's rule. For longer or shorter cycles, adjust by the difference from 28 days.",
    },
    {
      question: 'What is EDD?',
      answer:
        'EDD stands for Estimated Due Date — the predicted date when your baby will be born, calculated from your last menstrual period and cycle length.',
    },
    {
      question: 'How accurate is the due date?',
      answer:
        'Only about 4% of babies are born on the exact due date. Most arrive within 2 weeks before or after. First-trimester ultrasound is the most accurate dating method.',
    },
  ],
  relatedCalculators: ['pregnancy-due-date-calculator', 'pregnancy-week-calculator'],
  updated: '2026-08-15',
};

export default config;
