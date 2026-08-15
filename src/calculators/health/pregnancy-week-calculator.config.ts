import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'pregnancy-week-calculator',
  icon: 'child_friendly',
  category: 'health',
  title: 'Pregnancy Week Calculator',
  shortDescription:
    'Find your pregnancy week, trimester and due date from your last period — or work backwards from a due date.',
  answer:
    'The pregnancy week calculator works out your gestational age by counting weeks from the first day of your last menstrual period (LMP) or backwards from your due date, then shows your trimester.',
  targetKeyword: 'pregnancy week calculator',
  keywords: [
    'pregnancy week calculator',
    'how to calculate pregnancy weeks',
    'pregnancy week by week',
    'gestational age calculator',
    'what week of pregnancy am I in',
  ],
  inputs: [
    {
      type: 'select',
      id: 'method',
      label: 'Calculate from',
      options: [
        { value: 'lmp', label: 'Last menstrual period (LMP)' },
        { value: 'dueDate', label: 'Due date' },
      ],
      default: 'lmp',
    },
    {
      type: 'date',
      id: 'lmpDate',
      label: 'First day of last menstrual period',
      default: '2026-01-15',
      showWhen: { field: 'method', value: 'lmp' },
    },
    {
      type: 'date',
      id: 'dueDate',
      label: 'Estimated due date',
      default: '2026-10-22',
      showWhen: { field: 'method', value: 'dueDate' },
      help: 'From a scan or your doctor',
    },
    {
      type: 'date',
      id: 'asOfDate',
      label: 'As of date',
      help: 'Defaults to today',
    },
  ],
  formulaId: 'pregnancyWeeks',
  outputs: [
    {
      id: 'gestationalWeeks',
      label: 'Pregnancy week',
      format: 'number',
      primary: true,
      note: 'Complete weeks pregnant',
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
      id: 'dueDate',
      label: 'Due date',
      format: 'date',
      note: 'LMP + 280 days',
    },
    {
      id: 'weeksRemaining',
      label: 'Weeks to go',
      format: 'decimal',
      decimals: 1,
    },
    {
      id: 'percentComplete',
      label: 'Pregnancy complete',
      format: 'percent',
      decimals: 1,
    },
  ],
  formulaDisplay:
    'Gestational age = days since LMP ÷ 7. LMP → due date = LMP + 280 days. Due date → LMP = due date − 280 days. Trimesters: 1–13, 14–27, 28+ weeks.',
  explanation: `Pregnancy is counted in **gestational weeks** from the first day of your **last menstrual period (LMP)** — even though conception happens about two weeks later. This is the standard dating used everywhere.

### From your LMP

    Gestational age = days since LMP ÷ 7

If your LMP was **15 January 2026** and today is **14 August 2026**:

    211 days ÷ 7 = 30 weeks and 1 day

Your due date is LMP + 280 days (40 weeks) = **22 October 2026**.

### From your due date

Don't know your LMP? Work backwards: LMP = due date − 280 days. This is handy when your only date comes from a scan or your doctor.

### Week-by-week

| Trimester | Weeks | What's happening |
| --- | --- | --- |
| First | 1–13 | Organs form; morning sickness common |
| Second | 14–27 | Baby moves; scan can reveal the sex |
| Third | 28–40 | Rapid growth; getting ready to meet the baby |

A full pregnancy is 40 weeks. About 4% of babies arrive exactly on the due date — most come within two weeks either side.

> This tool is for general information and is not medical advice. An early ultrasound is the most accurate way to date a pregnancy.
`,
  faq: [
    {
      question: 'How do I calculate how many weeks pregnant I am?',
      answer:
        'Count from the first day of your last menstrual period: divide the number of days since your LMP by 7. The calculator does this instantly — e.g. 211 days = 30 weeks 1 day.',
    },
    {
      question: 'Are pregnancy weeks counted from conception?',
      answer:
        'No. Gestational age is counted from the first day of your last menstrual period, about two weeks before conception. Your pregnancy is dated from LMP, not from ovulation.',
    },
    {
      question: 'How many weeks is a full pregnancy?',
      answer:
        'A full-term pregnancy is about 40 weeks (280 days) from the first day of the last menstrual period, spanning roughly 9 calendar months.',
    },
    {
      question: 'Can I calculate pregnancy weeks from my due date?',
      answer:
        'Yes. Subtract 280 days from your due date to get the LMP, then count weeks from there. This calculator supports both directions.',
    },
  ],
  relatedCalculators: ['pregnancy-due-date-calculator', 'days-between-dates', 'age-calculator'],
  updated: '2026-08-15',
};

export default config;
