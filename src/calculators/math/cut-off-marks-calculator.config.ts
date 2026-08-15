import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'cut-off-marks-calculator',
  icon: 'school',
  category: 'math',
  title: 'Cut Off Marks Calculator',
  shortDescription:
    'Calculate your cut-off marks and percentage from up to 5 subjects — best of 4 for Indian board exam admissions.',
  answer:
    'The cut-off calculator takes the best 4 (or 5) subject marks and computes your cut-off score, percentage and grade for college admissions.',
  targetKeyword: 'cut off marks calculator',
  keywords: [
    'cut off marks calculator',
    'percentage calculator for students',
    'board exam marks',
    'best of 4 calculator',
    'cut off percentage',
  ],
  inputs: [
    {
      type: 'number',
      id: 'subject1',
      label: 'Subject 1 marks',
      default: 85,
      min: 0,
      max: 100,
      step: 1,
    },
    {
      type: 'number',
      id: 'subject2',
      label: 'Subject 2 marks',
      default: 90,
      min: 0,
      max: 100,
      step: 1,
    },
    {
      type: 'number',
      id: 'subject3',
      label: 'Subject 3 marks',
      default: 78,
      min: 0,
      max: 100,
      step: 1,
    },
    {
      type: 'number',
      id: 'subject4',
      label: 'Subject 4 marks',
      default: 92,
      min: 0,
      max: 100,
      step: 1,
    },
    {
      type: 'number',
      id: 'subject5',
      label: 'Subject 5 marks (optional)',
      default: 0,
      min: 0,
      max: 100,
      step: 1,
      help: 'Leave 0 if not needed — best 4 are used',
    },
    {
      type: 'number',
      id: 'maxMarks',
      label: 'Maximum marks per subject',
      default: 100,
      min: 1,
      step: 1,
    },
  ],
  formulaId: 'cutOffMarks',
  outputs: [
    {
      id: 'cutoff',
      label: 'Cut-off percentage',
      format: 'percent',
      decimals: 2,
      primary: true,
    },
    {
      id: 'totalMarks',
      label: 'Total (best 4)',
      format: 'number',
    },
    {
      id: 'percentage',
      label: 'Percentage',
      format: 'percent',
      decimals: 1,
    },
    {
      id: 'grade',
      label: 'Grade',
      format: 'text',
    },
  ],
  formulaDisplay: 'Cut-off = (sum of best 4 subjects ÷ 4 × max marks) × 100.',
  explanation: `**Cut-off marks** are used by Indian colleges and universities to determine eligibility for admissions. The most common method is **best-of-4**: your top 4 subject marks determine your cut-off score.

### How it works

1. Enter marks for 4 or 5 subjects (each out of 100 or your board's maximum)
2. The calculator picks the **best 4** automatically
3. Your cut-off percentage = (total of best 4 ÷ 400) × 100

### Worked example

Marks: 85, 90, 78, 92, 88

Best 4: 92, 90, 88, 85 = **355**

    Cut-off = 355 ÷ 400 × 100 = **88.75%**

### Grade scale

| Percentage | Grade |
| --- | --- |
| 90%+ | A+ |
| 80–89% | A |
| 70–79% | B+ |
| 60–69% | B |
| 50–59% | C |
| 40–49% | D |
| Below 40% | F |

### Note

Different colleges and boards may use different formulas (best-of-3, best-of-5, or all subjects). Check your specific institution's requirements.
`,
  faq: [
    {
      question: 'How is cut-off percentage calculated?',
      answer:
        'Add the marks of your best 4 subjects, divide by 4 × maximum marks per subject, then multiply by 100. For example, 355 ÷ 400 × 100 = 88.75%.',
    },
    {
      question: 'What is best-of-4?',
      answer:
        'Best-of-4 means you take your highest 4 marks from all subjects. If you have 5 subjects with marks 85, 90, 78, 92, 88, the best 4 are 92, 90, 88, 85.',
    },
    {
      question: 'Do all colleges use best-of-4?',
      answer:
        'No. Some use best-of-3, best-of-5, or all subjects. Always check the specific admission criteria of the college you\'re applying to.',
    },
  ],
  relatedCalculators: ['percentage-calculator', 'gpa-calculator', 'average-calculator'],
  updated: '2026-08-15',
};

export default config;
