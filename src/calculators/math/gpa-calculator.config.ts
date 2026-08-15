import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'gpa-calculator',
  icon: 'school',
  category: 'math',
  title: 'GPA Calculator',
  shortDescription:
    'Calculate your weighted GPA from up to five courses and credit hours, on the US 4.0 scale or the Indian 10-point scale.',
  answer:
    'The GPA calculator multiplies each course grade by its credit hours, sums them, and divides by total credits to give your weighted GPA on the 4.0 or 10.0 scale.',
  targetKeyword: 'gpa calculator',
  keywords: ['gpa calculator', 'how to calculate gpa', 'cgpa', 'grade point average', 'gpa to percentage'],
  inputs: [
    {
      type: 'select',
      id: 'scale',
      label: 'Grading scale',
      options: [
        { value: '4', label: 'US 4.0 scale' },
        { value: '10', label: 'Indian 10-point scale' },
      ],
      default: '4',
    },
    {
      type: 'select',
      id: 'subject1Grade',
      label: 'Course 1 grade',
      options: [
        { value: 'O', label: 'O (Outstanding)' },
        { value: 'A+', label: 'A+' },
        { value: 'A', label: 'A' },
        { value: 'A-', label: 'A-' },
        { value: 'B+', label: 'B+' },
        { value: 'B', label: 'B' },
        { value: 'B-', label: 'B-' },
        { value: 'C+', label: 'C+' },
        { value: 'C', label: 'C' },
        { value: 'C-', label: 'C-' },
        { value: 'D', label: 'D' },
        { value: 'F', label: 'F (Fail)' },
      ],
      default: 'A',
    },
    {
      type: 'number',
      id: 'subject1Credits',
      label: 'Course 1 credits',
      default: 3,
      min: 0,
      max: 20,
      step: 1,
    },
    {
      type: 'select',
      id: 'subject2Grade',
      label: 'Course 2 grade',
      options: [
        { value: 'O', label: 'O (Outstanding)' },
        { value: 'A+', label: 'A+' },
        { value: 'A', label: 'A' },
        { value: 'A-', label: 'A-' },
        { value: 'B+', label: 'B+' },
        { value: 'B', label: 'B' },
        { value: 'B-', label: 'B-' },
        { value: 'C+', label: 'C+' },
        { value: 'C', label: 'C' },
        { value: 'C-', label: 'C-' },
        { value: 'D', label: 'D' },
        { value: 'F', label: 'F (Fail)' },
      ],
      default: 'B+',
    },
    {
      type: 'number',
      id: 'subject2Credits',
      label: 'Course 2 credits',
      default: 3,
      min: 0,
      max: 20,
      step: 1,
    },
    {
      type: 'select',
      id: 'subject3Grade',
      label: 'Course 3 grade',
      options: [
        { value: 'O', label: 'O (Outstanding)' },
        { value: 'A+', label: 'A+' },
        { value: 'A', label: 'A' },
        { value: 'A-', label: 'A-' },
        { value: 'B+', label: 'B+' },
        { value: 'B', label: 'B' },
        { value: 'B-', label: 'B-' },
        { value: 'C+', label: 'C+' },
        { value: 'C', label: 'C' },
        { value: 'C-', label: 'C-' },
        { value: 'D', label: 'D' },
        { value: 'F', label: 'F (Fail)' },
      ],
      default: 'A-',
    },
    {
      type: 'number',
      id: 'subject3Credits',
      label: 'Course 3 credits',
      default: 4,
      min: 0,
      max: 20,
      step: 1,
    },
    {
      type: 'select',
      id: 'subject4Grade',
      label: 'Course 4 grade',
      options: [
        { value: 'O', label: 'O (Outstanding)' },
        { value: 'A+', label: 'A+' },
        { value: 'A', label: 'A' },
        { value: 'A-', label: 'A-' },
        { value: 'B+', label: 'B+' },
        { value: 'B', label: 'B' },
        { value: 'B-', label: 'B-' },
        { value: 'C+', label: 'C+' },
        { value: 'C', label: 'C' },
        { value: 'C-', label: 'C-' },
        { value: 'D', label: 'D' },
        { value: 'F', label: 'F (Fail)' },
      ],
      default: 'B',
    },
    {
      type: 'number',
      id: 'subject4Credits',
      label: 'Course 4 credits',
      default: 3,
      min: 0,
      max: 20,
      step: 1,
    },
    {
      type: 'select',
      id: 'subject5Grade',
      label: 'Course 5 grade',
      options: [
        { value: 'O', label: 'O (Outstanding)' },
        { value: 'A+', label: 'A+' },
        { value: 'A', label: 'A' },
        { value: 'A-', label: 'A-' },
        { value: 'B+', label: 'B+' },
        { value: 'B', label: 'B' },
        { value: 'B-', label: 'B-' },
        { value: 'C+', label: 'C+' },
        { value: 'C', label: 'C' },
        { value: 'C-', label: 'C-' },
        { value: 'D', label: 'D' },
        { value: 'F', label: 'F (Fail)' },
      ],
      default: 'C+',
    },
    {
      type: 'number',
      id: 'subject5Credits',
      label: 'Course 5 credits',
      default: 3,
      min: 0,
      max: 20,
      step: 1,
    },
  ],
  formulaId: 'gpa',
  outputs: [
    {
      id: 'gpa',
      label: 'Your GPA',
      format: 'decimal',
      decimals: 2,
      primary: true,
    },
    {
      id: 'totalPoints',
      label: 'Total grade points',
      format: 'decimal',
      decimals: 2,
      note: 'Σ (grade points × credits)',
    },
    {
      id: 'totalCredits',
      label: 'Total credits',
      format: 'number',
    },
    {
      id: 'courseBreakdown',
      label: 'Per-course breakdown',
      format: 'table',
    },
  ],
  formulaDisplay:
    'GPA = Σ (grade points × credit hours) ÷ Σ credit hours. On the 4.0 scale A = 4.0; on the 10-point scale A = 8, A+ = 9, O = 10.',
  explanation: `Your **GPA (Grade Point Average)** is the weighted average of your course grades, where each grade is multiplied by the course's credit hours. Weighting matters: failing a 4-credit subject hurts far more than a 1-credit elective.

### The formula

    GPA = Σ (grade points × credits) ÷ Σ credits

### Grade points on the 4.0 scale

| Grade | Points | Grade | Points |
| --- | --- | --- | --- |
| A+ / A / O | 4.0 | C+ | 2.3 |
| A- | 3.7 | C | 2.0 |
| B+ | 3.3 | C- | 1.7 |
| B | 3.0 | D | 1.0 |
| B- | 2.7 | F | 0 |

### Worked example

Four courses, all 3 credits: A, B+, A-, B.

    Total points = 4×3 + 3.3×3 + 3.7×3 + 3×3 = 42.0
    Total credits = 12
    GPA = 42.0 ÷ 12 = 3.5

### Indian 10-point (CGPA)

Indian universities use a 10-point scale where O = 10, A+ = 9, A = 8, B+ = 7 and so on. The calculation is identical — just with different point values. Many institutions treat CGPA × 9.5 as a rough percentage equivalent.

### Tips

- **Zero-credit or failed courses** — set credits to 0 to exclude a course from the average.
- **Focus on high-credit courses** — they move your GPA the most.
- **Retakes help** — most colleges average or replace the grade; improving a failed course can lift your GPA noticeably.
`,
  faq: [
    {
      question: 'How do I calculate my GPA?',
      answer:
        'Multiply each course grade by its credit hours, add them all up, and divide by the total credits: GPA = Σ(points × credits) ÷ Σ credits.',
    },
    {
      question: 'What is the difference between GPA and CGPA?',
      answer:
        'GPA is usually per term; CGPA is the cumulative average across all terms. Both use the same weighted-average formula, just over different time periods.',
    },
    {
      question: 'How do I convert CGPA to a percentage?',
      answer:
        'A common Indian formula is percentage = CGPA × 9.5, though conversion rules vary by university. Always check your institution\u2019s official table.',
    },
    {
      question: 'Which grades count in my GPA?',
      answer:
        'Only courses with credit hours count. This calculator lets you set any course to 0 credits to exclude it, mirroring how many colleges handle audit or non-credit courses.',
    },
  ],
  relatedCalculators: ['z-score-calculator', 'percentage-calculator', 'percentage-difference-calculator'],
  updated: '2026-08-15',
};

export default config;
