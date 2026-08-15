import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'maintenance-calories-calculator',
  icon: 'local_fire_department',
  category: 'health',
  title: 'Maintenance Calories Calculator',
  shortDescription:
    'Find the calories needed to maintain your weight from BMR and activity level, plus targets for cutting and bulking.',
  answer:
    'Maintenance calories are your BMR multiplied by an activity factor (TDEE). The calculator estimates them with Mifflin-St Jeor or Katch-McArdle and shows cut and bulk targets.',
  targetKeyword: 'maintenance calories calculator',
  keywords: [
    'maintenance calories calculator',
    'how to calculate maintenance calories',
    'tdee',
    'calories to maintain weight',
    'bmr',
  ],
  inputs: [
    {
      type: 'number',
      id: 'age',
      label: 'Age',
      unit: 'years',
      default: 30,
      min: 15,
      max: 100,
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
      type: 'select',
      id: 'activity',
      label: 'Activity level',
      options: [
        { value: 'sedentary', label: 'Sedentary (little or no exercise)' },
        { value: 'light', label: 'Lightly active (1–3 days/week)' },
        { value: 'moderate', label: 'Moderately active (3–5 days/week)' },
        { value: 'active', label: 'Very active (6–7 days/week)' },
        { value: 'very', label: 'Extra active (physical job + training)' },
      ],
      default: 'moderate',
    },
    {
      type: 'select',
      id: 'method',
      label: 'BMR formula',
      options: [
        { value: 'mifflin', label: 'Mifflin-St Jeor (uses age & height)' },
        { value: 'katch', label: 'Katch-McArdle (uses body fat %)' },
      ],
      default: 'mifflin',
    },
    {
      type: 'number',
      id: 'bodyFatPercent',
      label: 'Body fat percentage',
      unit: '%',
      default: 20,
      min: 3,
      max: 60,
      step: 0.5,
      showWhen: { field: 'method', value: 'katch' },
      help: 'Find it with the body fat calculator',
    },
  ],
  formulaId: 'maintenanceCalories',
  outputs: [
    {
      id: 'maintenanceCalories',
      label: 'Maintenance calories',
      format: 'number',
      primary: true,
      note: 'TDEE — eat this to stay the same weight',
    },
    {
      id: 'bmr',
      label: 'BMR (resting burn)',
      format: 'number',
      note: 'Calories at complete rest',
    },
    {
      id: 'cutCalories',
      label: 'Cutting target',
      format: 'number',
      note: '~15% deficit for fat loss',
    },
    {
      id: 'bulkCalories',
      label: 'Bulking target',
      format: 'number',
      note: '~15% surplus to gain weight',
    },
  ],
  formulaDisplay:
    'Maintenance = BMR × activity factor. Mifflin-St Jeor: men 10w + 6.25h − 5a + 5; women − 161. Katch-McArdle: 370 + 21.6 × lean mass. Cut = 85% of maintenance, bulk = 115%.',
  explanation: `**Maintenance calories** are the number of calories you can eat each day and keep your weight exactly the same. Eat more and you gain; eat less and you lose. Every diet plan starts from this number.

### Step 1 — your BMR

Your **BMR** is the energy you burn at complete rest. Two common formulas:

    Mifflin-St Jeor:
      Men:   10 × weight(kg) + 6.25 × height(cm) − 5 × age + 5
      Women: 10 × weight(kg) + 6.25 × height(cm) − 5 × age − 161

    Katch-McArdle (needs body fat %):
      BMR = 370 + 21.6 × lean body mass(kg)

### Step 2 — multiply by activity

| Activity | Factor |
| --- | --- |
| Sedentary | 1.2 |
| Lightly active | 1.375 |
| Moderately active | 1.55 |
| Very active | 1.725 |
| Extra active | 1.9 |

For a **30-year-old man, 175 cm, 75 kg, moderate activity**:

    BMR = 750 + 1093.75 − 150 + 5 ≈ 1,699 kcal
    Maintenance = 1,699 × 1.55 ≈ 2,633 kcal/day

### Step 3 — targets

- **Cut** (fat loss): ~85% of maintenance ≈ **2,238 kcal**. A deficit of 500 kcal/day ≈ 0.5 kg/week.
- **Bulk** (muscle gain): ~115% of maintenance ≈ **3,028 kcal**.

These are estimates. Track your weight for two weeks — if it drifts, adjust by 100–200 kcal.
`,
  faq: [
    {
      question: 'How do I calculate maintenance calories?',
      answer:
        'Calculate your BMR (Mifflin-St Jeor or Katch-McArdle) and multiply by your activity factor: sedentary 1.2, light 1.375, moderate 1.55, active 1.725, extra active 1.9.',
    },
    {
      question: 'What is the difference between BMR and maintenance calories?',
      answer:
        'BMR is what you burn at complete rest. Maintenance calories (TDEE) add your daily activity on top, so it is the number of calories to maintain your current weight.',
    },
    {
      question: 'How many calories should I eat to lose weight?',
      answer:
        'Eat about 15% (roughly 500 kcal) below your maintenance calories. That produces a sustainable loss of about 0.5 kg per week without going too low.',
    },
    {
      question: 'Which BMR formula is more accurate?',
      answer:
        'Katch-McArdle is more accurate for lean individuals because it uses body fat, but it requires a reliable body fat reading. Mifflin-St Jeor is a great default for most people.',
    },
  ],
  relatedCalculators: ['calorie-calculator', 'bmr-calculator', 'body-fat-percentage-calculator', 'bmi-calculator'],
  updated: '2026-08-15',
};

export default config;
