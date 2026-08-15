import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'sgpa-to-percentage-calculator',
  icon: 'grading',
  category: 'math',
  title: 'SGPA to Percentage Calculator',
  shortDescription:
    'Convert your SGPA (Semester Grade Point Average) to percentage for job applications and higher studies.',
  answer:
    'The SGPA to percentage converter uses the standard formula (SGPA × 10 for 10-point scale) to give your equivalent percentage.',
  targetKeyword: 'sgpa to percentage calculator',
  keywords: [
    'sgpa to percentage',
    'sgpa calculator',
    'grade point to percentage',
    'sgpa conversion',
    'cgpa to percentage',
  ],
  inputs: [
    {
      type: 'number',
      id: 'sgpa',
      label: 'SGPA',
      default: 8.5,
      min: 0,
      max: 10,
      step: 0.01,
    },
    {
      type: 'select',
      id: 'scale',
      label: 'Grading scale',
      options: [
        { value: '10', label: '10-point scale' },
        { value: '4', label: '4-point scale (US GPA)' },
      ],
      default: '10',
    },
  ],
  formulaId: 'sgpaToPercentage',
  outputs: [
    {
      id: 'percentage',
      label: 'Equivalent percentage',
      format: 'decimal',
      decimals: 2,
      primary: true,
      note: '%',
    },
    {
      id: 'equivalentCGPA',
      label: 'Equivalent CGPA',
      format: 'decimal',
      decimals: 2,
    },
    {
      id: 'gradePoint',
      label: 'Letter grade',
      format: 'text',
    },
  ],
  formulaDisplay:
    'Percentage = SGPA × 10 (for 10-point scale). Percentage = GPA × 25 (for 4-point scale).',
  explanation: `**SGPA (Semester Grade Point Average)** is your grade point average for a single semester. Converting it to a percentage is often required for job applications and higher studies.

### The formula

**10-point scale** (most Indian universities):

    Percentage = SGPA × 10

An SGPA of **8.5** = **85%**

**4-point scale** (US universities):

    Percentage = GPA × 25

A GPA of **3.4** = **85%**

### Common SGPA to percentage (10-point)

| SGPA | Percentage |
| --- | --- |
| 10.0 | 100% |
| 9.5 | 95% |
| 9.0 | 90% |
| 8.5 | 85% |
| 8.0 | 80% |
| 7.5 | 75% |
| 7.0 | 70% |
| 6.5 | 65% |
| 6.0 | 60% |

### SGPA vs CGPA

- **SGPA** — grade point average for one semester
- **CGPA** — cumulative grade point average across all semesters

To convert CGPA to percentage, use the same formula: CGPA × 10 = percentage.

### Important note

Some universities use different conversion formulas. Always check your university's official conversion method. The formula SGPA × 10 is the most widely used in India but may not apply everywhere.
`,
  faq: [
    {
      question: 'How do I convert SGPA to percentage?',
      answer:
        'Multiply your SGPA by 10. For a 10-point scale: 8.5 SGPA = 85%. For a 4-point US GPA scale: multiply by 25.',
    },
    {
      question: 'What is SGPA?',
      answer:
        'SGPA (Semester Grade Point Average) is your grade point average for a single semester. It\'s calculated from the grades you earned in all courses that semester.',
    },
    {
      question: 'What is the difference between SGPA and CGPA?',
      answer:
        'SGPA is for one semester; CGPA is the cumulative average across all semesters. Both can be converted to percentage using the same formula (× 10 for 10-point scale).',
    },
  ],
  relatedCalculators: ['gpa-calculator', 'percentage-calculator', 'average-calculator'],
  updated: '2026-08-15',
};

export default config;
