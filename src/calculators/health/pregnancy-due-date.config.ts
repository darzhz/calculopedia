import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'pregnancy-due-date-calculator',
  icon: 'favorite',
  category: 'health',
  title: 'Pregnancy Due Date Calculator',
  shortDescription:
    'Find your due date, gestational age and trimester from your last menstrual period (LMP).',
  answer:
    'The pregnancy calculator estimates your due date by adding 280 days to the first day of your last menstrual period, and shows your current gestational age and trimester.',
  targetKeyword: 'pregnancy calculator',
  keywords: [
    'pregnancy calculator',
    'due date calculator',
    'gestational age',
    'last menstrual period',
    'pregnancy week',
  ],
  inputs: [
    {
      type: 'date',
      id: 'lmpDate',
      label: 'First day of last menstrual period',
      default: '2026-01-15',
    },
    {
      type: 'date',
      id: 'asOfDate',
      label: 'As of date',
      help: 'Defaults to today',
    },
  ],
  formulaId: 'pregnancy',
  outputs: [
    {
      id: 'dueDate',
      label: 'Estimated due date',
      format: 'date',
      primary: true,
      note: 'LMP + 280 days',
    },
    {
      id: 'gestationalWeeks',
      label: 'Gestational age',
      format: 'number',
      note: 'Complete weeks',
    },
    {
      id: 'gestationalDays',
      label: 'Extra days',
      format: 'number',
    },
    {
      id: 'trimester',
      label: 'Trimester',
      format: 'text',
    },
    {
      id: 'conceivedDate',
      label: 'Estimated conception date',
      format: 'date',
      note: 'LMP + 14 days',
    },
    {
      id: 'weeksRemaining',
      label: 'Weeks remaining',
      format: 'decimal',
      decimals: 1,
    },
  ],
  formulaDisplay:
    "Due date = LMP + 280 days (Naegele's rule). Gestational age = days since LMP ÷ 7. Conception ≈ LMP + 14 days.",
  explanation: `Pregnancy is dated from the **first day of your last menstrual period (LMP)**, even though conception actually happens about two weeks later. This is standard medical practice.

### Naegele's rule

**Due date = first day of LMP + 280 days** (40 weeks).

If your LMP began on **15 January 2026**:

    Due date = 15 January + 280 days = 22 October 2026

About **4% of babies arrive exactly on the due date** — most are born within two weeks either side. Treat the date as a strong estimate, not a promise.

### Gestational age

**Gestational age** counts from the LMP. If today is 14 August 2026, that's 211 days after 15 January:

    211 ÷ 7 ≈ 30 weeks and 1 day

The pregnancy calendar is split into three **trimesters**:

| Trimester | Weeks | Milestones |
| --- | --- | --- |
| First | 1–13 | Organs form; nausea and fatigue common |
| Second | 14–27 | Movement felt; ultrasound can show the baby's sex |
| Third | 28–40 | Rapid growth; preparing for birth |

### Conception date

Ovulation typically happens about **14 days after the LMP**, so the estimated conception date is LMP + 14 days. (Sperm can survive a few days, so this is an estimate.)

> This tool is for general information and is not medical advice. Your doctor's ultrasound dating — especially the first-trimester scan — is the most accurate. Always follow your clinician's guidance.
`,
  faq: [
    {
      question: 'How is my due date calculated?',
      answer:
        "Add 280 days (40 weeks) to the first day of your last menstrual period. This is known as Naegele's rule and is the standard way to estimate a due date.",
    },
    {
      question: 'How accurate is the due date?',
      answer:
        'Only about 4% of babies are born exactly on the due date. Most arrive within two weeks before or after. First-trimester ultrasound dating is more accurate than LMP-based dates.',
    },
    {
      question: 'What is gestational age?',
      answer:
        'Gestational age is the age of the pregnancy, counted in weeks from the first day of your last menstrual period — not from conception.',
    },
    {
      question: 'When does the third trimester start?',
      answer:
        'The third trimester starts at 28 weeks of pregnancy and continues until birth (around week 40).',
    },
  ],
  relatedCalculators: ['age-calculator', 'days-between-dates'],
  updated: '2026-08-14',
};

export default config;
