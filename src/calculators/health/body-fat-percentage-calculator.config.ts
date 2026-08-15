import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'body-fat-percentage-calculator',
  icon: 'accessibility_new',
  category: 'health',
  title: 'Body Fat Percentage Calculator',
  shortDescription:
    'Estimate your body fat percentage with the US Navy method from your height and waist, neck (and hip) measurements — plus your fat and lean mass.',
  answer:
    'The body fat calculator uses the US Navy method, which estimates your body fat percentage from tape-measure circumference readings and height, and shows your fitness category plus fat and lean mass.',
  targetKeyword: 'body fat percentage calculator',
  keywords: [
    'body fat percentage calculator',
    'how to calculate body fat',
    'body fat calculator',
    'navy body fat',
    'body fat mass',
  ],
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
      default: 75,
      min: 30,
      max: 300,
      step: 0.5,
    },
    {
      type: 'number',
      id: 'heightCm',
      label: 'Height',
      unit: 'cm',
      default: 175,
      min: 120,
      max: 230,
      step: 1,
    },
    {
      type: 'number',
      id: 'neckCm',
      label: 'Neck circumference',
      unit: 'cm',
      default: 38,
      min: 20,
      max: 60,
      step: 0.5,
      help: 'Measure just below the larynx, at the widest point',
    },
    {
      type: 'number',
      id: 'waistCm',
      label: 'Waist circumference',
      unit: 'cm',
      default: 85,
      min: 40,
      max: 160,
      step: 0.5,
      help: 'For men: measure at the navel. For women: at the narrowest point',
    },
    {
      type: 'number',
      id: 'hipCm',
      label: 'Hip circumference',
      unit: 'cm',
      default: 95,
      min: 50,
      max: 180,
      step: 0.5,
      showWhen: { field: 'gender', value: 'female' },
      help: 'Measure at the widest point of the hips/buttocks',
    },
  ],
  formulaId: 'bodyFat',
  outputs: [
    {
      id: 'bodyFatPercent',
      label: 'Body fat percentage',
      format: 'decimal',
      decimals: 1,
      primary: true,
      note: 'US Navy method estimate',
    },
    {
      id: 'category',
      label: 'Category',
      format: 'text',
      note: 'ACSM classification',
    },
    {
      id: 'fatMass',
      label: 'Fat mass',
      format: 'decimal',
      decimals: 1,
      note: 'kg of body fat',
    },
    {
      id: 'leanMass',
      label: 'Lean body mass',
      format: 'decimal',
      decimals: 1,
      note: 'kg of everything that is not fat',
    },
  ],
  formulaDisplay:
    'Men: 495 ÷ (1.0324 − 0.19077·log₁₀(waist − neck) + 0.15456·log₁₀(height)) − 450. Women: replace with 1.29579 and log₁₀(waist + hip − neck). Measurements in inches.',
  explanation: `Your **body fat percentage** is a more honest health metric than weight alone, because it separates the fat you carry from the muscle, bone and water that make up the rest.

### The US Navy method

It estimates body fat from circumference measurements — no calipers or scans needed. The formula (measurements in **inches**; the calculator converts your centimetres):

    Men:    495 ÷ (1.0324 − 0.19077·log₁₀(waist − neck) + 0.15456·log₁₀(height)) − 450
    Women:  495 ÷ (1.29579 − 0.35004·log₁₀(waist + hip − neck) + 0.221·log₁₀(height)) − 450

### Measuring correctly

- **Neck** — just below the larynx, at its widest point.
- **Waist** — for men, at the navel; for women, at the narrowest point.
- **Hip (women)** — at the widest point of the hips.

The tape should sit snug but not dig in. Accuracy is about ±3 percentage points — good enough to track changes over time, not to obsess over one reading.

### Categories (ACSM)

| Category | Men | Women |
| --- | --- | --- |
| Essential fat | 2–5% | 10–13% |
| Athletes | 6–13% | 14–20% |
| Fitness | 14–17% | 21–24% |
| Acceptable | 18–24% | 25–31% |
| Obese | 25%+ | 32%+ |

Below essential-fat levels is unhealthy for everyone. Higher ranges raise the risk of metabolic disease — which is why body fat matters even when BMI looks "normal".
`,
  faq: [
    {
      question: 'How do I calculate my body fat percentage?',
      answer:
        'The US Navy method uses height plus waist and neck (and hip, for women) circumferences in a log formula. This calculator does the math instantly from your centimetre measurements.',
    },
    {
      question: 'What is a healthy body fat percentage?',
      answer:
        'For men, 14–24% is generally healthy; for women, 21–31%. Athletes sit lower (6–13% men, 14–20% women), while 25%+ (men) and 32%+ (women) is considered obese.',
    },
    {
      question: 'How accurate is the Navy method?',
      answer:
        'Within about ±3 percentage points of lab methods like DEXA when measured correctly. It is best used to track trends over time rather than to judge a single reading.',
    },
    {
      question: 'What is the difference between BMI and body fat percentage?',
      answer:
        'BMI uses only height and weight, so it can misclassify muscular people as overweight. Body fat percentage measures actual fat, giving a more accurate health picture.',
    },
  ],
  relatedCalculators: ['bmi-calculator', 'ideal-weight-calculator', 'maintenance-calories-calculator'],
  updated: '2026-08-15',
};

export default config;
