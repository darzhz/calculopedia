import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'ideal-weight-calculator',
  icon: 'accessibility_new',
  category: 'health',
  title: 'Ideal Weight Calculator',
  shortDescription:
    'Estimate your ideal body weight from height and gender using Devine, Robinson, Miller or Hamwi formulas.',
  answer:
    'The ideal weight calculator estimates a healthy body weight for your height and gender using the Devine, Robinson, Miller and Hamwi formulas, plus the healthy BMI range.',
  targetKeyword: 'ideal weight calculator',
  keywords: ['ideal weight calculator', 'ideal body weight', 'healthy weight', 'weight by height'],
  inputs: [
    {
      type: 'number',
      id: 'heightCm',
      label: 'Height',
      unit: 'cm',
      default: 175,
      min: 100,
      max: 250,
      step: 1,
    },
    {
      type: 'select',
      id: 'gender',
      label: 'Gender',
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
      ],
      default: 'male',
    },
    {
      type: 'select',
      id: 'formula',
      label: 'Formula',
      options: [
        { value: 'devine', label: 'Devine (1974)' },
        { value: 'robinson', label: 'Robinson (1983)' },
        { value: 'miller', label: 'Miller (1983)' },
        { value: 'hamwi', label: 'Hamwi (1964)' },
      ],
      default: 'devine',
    },
  ],
  formulaId: 'idealWeight',
  outputs: [
    {
      id: 'idealWeight',
      label: 'Ideal body weight',
      format: 'decimal',
      decimals: 1,
      primary: true,
      note: 'For your selected formula',
    },
    {
      id: 'healthyWeightMin',
      label: 'Healthy weight (lower)',
      format: 'decimal',
      decimals: 1,
      note: 'BMI 18.5',
    },
    {
      id: 'healthyWeightMax',
      label: 'Healthy weight (upper)',
      format: 'decimal',
      decimals: 1,
      note: 'BMI 24.9',
    },
  ],
  formulaDisplay:
    'Ideal weight = base (kg) + per-inch allowance × height above 5 ft. Devine: male 50 + 2.3/in, female 45.5 + 2.3/in.',
  explanation: `**Ideal body weight** is a rough estimate of a healthy weight for your height. It's used in clinical settings (for example, to dose medications) and is handy as a reference — though it's an estimate, not a strict target.

### The four formulas

All four formulas use a base weight for 5 feet (60 inches) of height, then add an allowance per extra inch:

| Formula | Male (base + per inch) | Female (base + per inch) |
| --- | --- | --- |
| **Devine** | 50 kg + 2.3 kg | 45.5 kg + 2.3 kg |
| **Robinson** | 52 kg + 1.9 kg | 49 kg + 1.7 kg |
| **Miller** | 56.2 kg + 1.41 kg | 53.1 kg + 1.36 kg |
| **Hamwi** | 48 kg + 2.7 kg | 45.5 kg + 2.2 kg |

### Worked example

A **175 cm (≈68.9 in) man** using Devine:

    Height above 5 ft = 68.9 − 60 = 8.9 inches
    Ideal = 50 + 2.3 × 8.9 = 50 + 20.5 ≈ 70.5 kg

The calculator also shows the **healthy BMI range** (18.5–24.9) for your height — for 175 cm that's about 56.7–76.3 kg. The four formulas sit within that range but give slightly different answers; the differences show that "ideal" is fuzzy.

### Use with care

These formulas were developed decades ago from limited samples and don't account for frame size or muscle mass. For most people the **healthy BMI range** is the more meaningful target — stay within it and focus on habits, not a single number.
`,
  faq: [
    {
      question: 'What is ideal body weight?',
      answer:
        'Ideal body weight is an estimate of a healthy weight for a given height and gender, calculated by formulas like Devine, Robinson, Miller and Hamwi.',
    },
    {
      question: 'What is the Devine formula?',
      answer:
        'The Devine formula gives men 50 kg plus 2.3 kg per inch above 5 feet, and women 45.5 kg plus 2.3 kg per inch above 5 feet.',
    },
    {
      question: 'Which ideal weight formula is most accurate?',
      answer:
        'There\'s no single "most accurate" — the formulas were built from small, older samples. Treat the healthy BMI range as the practical target instead.',
    },
  ],
  relatedCalculators: ['bmi-calculator', 'calorie-calculator'],
  updated: '2026-08-14',
};

export default config;
