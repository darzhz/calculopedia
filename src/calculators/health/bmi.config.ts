import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'bmi-calculator',
  icon: 'monitor_weight',
  category: 'health',
  title: 'BMI Calculator',
  shortDescription:
    'Calculate your Body Mass Index from weight and height, see your category, and the healthy weight range for your height.',
  answer:
    'The BMI calculator works out your Body Mass Index by dividing your weight in kilograms by your height in metres squared, and shows which weight category you fall into.',
  targetKeyword: 'bmi calculator',
  keywords: ['bmi calculator', 'bmi calculator for female', 'body mass index', 'bmi formula', 'healthy weight', 'bmi chart'],
  inputs: [
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
      type: 'number',
      id: 'weight',
      label: 'Weight',
      unit: 'kg',
      default: 70,
      min: 20,
      max: 300,
      step: 0.5,
    },
    {
      type: 'number',
      id: 'heightCm',
      label: 'Height',
      unit: 'cm',
      default: 175,
      min: 90,
      max: 250,
      step: 1,
    },
  ],
  formulaId: 'bmi',
  outputs: [
    {
      id: 'bmi',
      label: 'Your BMI',
      format: 'decimal',
      decimals: 1,
      primary: true,
    },
    {
      id: 'category',
      label: 'Category',
      format: 'text',
    },
    {
      id: 'genderNote',
      label: 'Note',
      format: 'text',
    },
    {
      id: 'healthyWeightMin',
      label: 'Healthy weight range',
      format: 'decimal',
      decimals: 1,
      note: 'For a BMI of 18.5–24.9',
    },
    {
      id: 'healthyWeightMax',
      label: 'Upper healthy weight',
      format: 'decimal',
      decimals: 1,
    },
  ],
  formulaDisplay: 'BMI = weight (kg) ÷ height (m)². A healthy BMI is 18.5 – 24.9.',
  explanation: `**BMI (Body Mass Index)** is a quick screen of whether your weight is healthy for your height. It's used worldwide by doctors and insurers, though it's a screening tool — not a diagnosis.

### The formula

    BMI = weight (kg) ÷ height (m)²

Height must be in **metres**, so divide centimetres by 100. For a **70 kg, 175 cm** person:

    BMI = 70 ÷ (1.75)² = 70 ÷ 3.06 = 22.9

### BMI categories (WHO, adults)

| BMI | Category |
| --- | --- |
| Below 18.5 | Underweight |
| 18.5 – 24.9 | Normal weight |
| 25 – 29.9 | Overweight |
| 30 and above | Obese |

A **22.9** result sits comfortably in the normal range. For a 175 cm person, a normal BMI of 18.5–24.9 corresponds to a healthy weight of roughly **56.7–76.3 kg** — the calculator shows your exact range.

### Limits of BMI

BMI cannot distinguish muscle from fat, so it can overestimate body fat for athletes and underestimate it for older adults or people with low muscle mass. It also doesn't account for where fat sits (belly fat is riskier). For a fuller picture, combine BMI with waist circumference and, ideally, a body-fat measurement. BMI for children and teens uses age- and sex-specific charts, so the adult categories above don't apply.
`,
  faq: [
    {
      question: 'How do I calculate my BMI?',
      answer:
        'Divide your weight in kilograms by your height in metres squared: BMI = weight ÷ height². For example, 70 kg ÷ 1.75² = 22.9.',
    },
    {
      question: 'What is a healthy BMI?',
      answer:
        'A BMI between 18.5 and 24.9 is considered healthy for adults. Below 18.5 is underweight, 25–29.9 is overweight and 30+ is obese.',
    },
    {
      question: 'Why is my BMI not accurate?',
      answer:
        "BMI doesn't measure body fat directly, so it can misclassify muscular people as overweight and miss unhealthy fat in people with low muscle mass. Use it as a rough guide, not a diagnosis.",
    },
  ],
  relatedCalculators: ['calorie-calculator', 'ideal-weight-calculator'],
  updated: '2026-08-14',
};

export default config;
