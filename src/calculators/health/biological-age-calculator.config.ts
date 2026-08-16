import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'biological-age-calculator',
  icon: 'calendar_month',
  category: 'health',
  title: 'Biological Age Calculator',
  shortDescription:
    'Estimate your biological age from your lifestyle — diet, exercise, sleep, smoking, alcohol and stress — compared with your calendar age.',
  answer:
    'A biological age calculator scores your lifestyle habits against your chronological age to estimate whether your body is ageing faster or slower than your calendar years.',
  targetKeyword: 'biological age calculator',
  keywords: [
    'biological age calculator',
    'how to calculate biological age',
    'body age test',
    'chronological vs biological age',
    'lifestyle age',
  ],
  inputs: [
    {
      type: 'number',
      id: 'age',
      label: 'Your age',
      unit: 'years',
      default: 40,
      min: 18,
      max: 100,
      step: 1,
    },
    {
      type: 'select',
      id: 'diet',
      label: 'Diet',
      options: [
        { value: 'poor', label: 'Mostly processed / low fruit & veg' },
        { value: 'average', label: 'Mixed, some processed food' },
        { value: 'good', label: 'Mostly whole foods, plenty of vegetables' },
      ],
      default: 'average',
    },
    {
      type: 'select',
      id: 'exercise',
      label: 'Exercise',
      options: [
        { value: 'none', label: 'Rarely or never' },
        { value: 'light', label: '1–3 days a week' },
        { value: 'regular', label: '4+ days a week' },
      ],
      default: 'light',
    },
    {
      type: 'select',
      id: 'sleep',
      label: 'Sleep',
      options: [
        { value: 'short', label: 'Under 6 hours' },
        { value: 'adequate', label: '6–7 hours' },
        { value: 'optimal', label: '7–9 hours' },
        { value: 'long', label: 'Over 9 hours' },
      ],
      default: 'adequate',
    },
    {
      type: 'select',
      id: 'smoking',
      label: 'Smoking',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
      ],
      default: 'no',
    },
    {
      type: 'select',
      id: 'alcohol',
      label: 'Alcohol',
      options: [
        { value: 'regular', label: 'Most days' },
        { value: 'social', label: 'Occasionally' },
        { value: 'none', label: 'Rarely / never' },
      ],
      default: 'social',
    },
    {
      type: 'select',
      id: 'stress',
      label: 'Stress',
      options: [
        { value: 'high', label: 'Chronic, most days' },
        { value: 'medium', label: 'Occasional' },
        { value: 'low', label: 'Rarely stressed' },
      ],
      default: 'medium',
    },
  ],
  formulaId: 'biologicalAge',
  outputs: [
    {
      id: 'biologicalAge',
      label: 'Estimated biological age',
      format: 'number',
      primary: true,
      note: 'Your calendar age ± lifestyle adjustment',
    },
    {
      id: 'adjustment',
      label: 'Adjustment',
      format: 'number',
      note: 'Years added or subtracted',
    },
    {
      id: 'category',
      label: 'Result',
      format: 'text',
    },
  ],
  formulaDisplay:
    'Biological age = calendar age + sum of lifestyle adjustments (diet, exercise, sleep, smoking, alcohol, stress each add or subtract years).',
  explanation: `Your **biological age** describes how old your body behaves — at the level of cells, heart, lungs and metabolism — versus how old your birth certificate says you are. It is a wellness estimate, not a diagnosis.

### How the estimate works

Six lifestyle factors each add or subtract years from your calendar age:

| Factor | Better habits | Worse habits |
| --- | --- | --- |
| Diet | Whole foods: −1 | Processed diet: +2 |
| Exercise | 4+ days/week: −2 | Rarely: +2 |
| Sleep | 7–9 hrs: −1 | Under 6 hrs: +2 |
| Smoking | No: 0 | Yes: +4 |
| Alcohol | Rarely: −1 | Most days: +1 |
| Stress | Rarely: −1 | Chronic: +2 |

Sum the adjustments and add them to your age.

### Example

A **40-year-old** with a good diet, regular exercise, 7–9 hours of sleep, no smoking, occasional alcohol and low stress:

    −1 + −2 + −1 + 0 + 0 + −1 = −5 → biological age ≈ 35

### A real test vs this estimate

Lab tests measure **biological markers** — telomere length, blood pressure, cholesterol, blood sugar, grip strength — to gauge biological age. Lifestyle questionnaires like this one are a useful first screen: they flag the habits most strongly linked to premature ageing.

> This is an educational estimate. See a doctor for a proper health assessment.
`,
  faq: [
    {
      question: 'How do you calculate biological age?',
      answer:
        'This calculator scores six lifestyle factors — diet, exercise, sleep, smoking, alcohol and stress — each adding or subtracting years from your calendar age. Lab tests use blood and fitness markers for a more precise answer.',
    },
    {
      question: 'Why is my biological age different from my age?',
      answer:
        'Lifestyle habits accelerate or slow ageing. Smoking, poor sleep and a sedentary routine push biological age up; good diet, regular exercise and low stress push it down.',
    },
    {
      question: 'Can I lower my biological age?',
      answer:
        'Yes — the biggest wins come from quitting smoking, adding regular exercise, sleeping 7–9 hours, and eating mostly whole foods. Improvements show up in biomarkers within months.',
    },
  ],
  relatedCalculators: [
    'bmi-calculator',
    'body-fat-percentage-calculator',
    'vo2max-calculator',
    'max-heart-rate-calculator',
  ],
  updated: '2026-08-16',
};

export default config;