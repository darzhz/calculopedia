import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'calorie-calculator',
  icon: 'restaurant',
  category: 'health',
  title: 'Calorie Calculator (BMR & TDEE)',
  shortDescription:
    'Find your daily calorie needs — BMR, TDEE and calories for losing, maintaining or gaining weight.',
  answer:
    'The calorie calculator estimates how many calories you burn each day using the Mifflin-St Jeor formula, and how many to eat to lose, maintain or gain weight.',
  targetKeyword: 'calorie calculator',
  keywords: [
    'calorie calculator',
    'bmr calculator',
    'tdee',
    'calories to lose weight',
    'daily calorie needs',
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
      id: 'goal',
      label: 'Goal',
      options: [
        { value: 'maintain', label: 'Maintain weight' },
        { value: 'lose', label: 'Lose weight (500 kcal deficit)' },
        { value: 'gain', label: 'Gain weight (500 kcal surplus)' },
      ],
      default: 'maintain',
    },
  ],
  formulaId: 'calorie',
  outputs: [
    {
      id: 'bmr',
      label: 'BMR (resting calories)',
      format: 'number',
      note: 'Calories burned at complete rest',
    },
    {
      id: 'tdee',
      label: 'TDEE (daily maintenance)',
      format: 'number',
      note: 'Calories to maintain current weight',
    },
    {
      id: 'targetCalories',
      label: 'Target calories',
      format: 'number',
      primary: true,
      note: 'For your chosen goal',
    },
  ],
  formulaDisplay:
    'BMR (Mifflin-St Jeor): men 10w + 6.25h − 5a + 5; women 10w + 6.25h − 5a − 161. TDEE = BMR × activity factor. Goal: TDEE ± 500.',
  explanation: `Your body needs a certain number of **calories** each day just to run — and activity adds more. Knowing that number tells you how much to eat to maintain, lose or gain weight.

### BMR — your resting burn

**BMR (Basal Metabolic Rate)** is the energy your body uses at complete rest — breathing, heartbeat, cell repair. The widely used **Mifflin-St Jeor** formula estimates it:

    Men:    BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age + 5
    Women:  BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age − 161

For a **30-year-old man, 175 cm, 75 kg**:

    BMR = 750 + 1093.75 − 150 + 5 ≈ 1,699 kcal

### TDEE — your real daily burn

**TDEE (Total Daily Energy Expenditure)** adds your activity to your BMR by multiplying with an activity factor:

| Activity | Factor |
| --- | --- |
| Sedentary | 1.2 |
| Lightly active | 1.375 |
| Moderately active | 1.55 |
| Very active | 1.725 |
| Extra active | 1.9 |

Moderate → TDEE = 1,699 × 1.55 ≈ **2,633 kcal**. Eating that many calories keeps your weight steady.

### Lose, maintain or gain

- **Maintain** — eat your TDEE.
- **Lose** — eat about 500 kcal less than TDEE (≈0.5 kg/week of fat loss). The calculator never goes below 1,200 kcal for safety.
- **Gain** — eat about 500 kcal more.

**One caution:** these are estimates. Real needs vary with muscle mass, genetics and hormones. Track your weight for a few weeks and adjust by ~100–200 kcal as needed.
`,
  faq: [
    {
      question: 'How many calories should I eat to lose weight?',
      answer:
        'Eat roughly 500 calories below your maintenance (TDEE). That typically produces about 0.5 kg of weight loss per week. The calculator shows your exact number.',
    },
    {
      question: 'What is the Mifflin-St Jeor formula?',
      answer:
        'It estimates your BMR: 10 × weight(kg) + 6.25 × height(cm) − 5 × age + 5 for men, and −161 instead of +5 for women. It is considered the most accurate common formula.',
    },
    {
      question: 'What is the difference between BMR and TDEE?',
      answer:
        'BMR is the calories you burn at complete rest. TDEE adds your physical activity on top, so it is the number of calories needed to maintain your current weight.',
    },
  ],
  relatedCalculators: ['bmi-calculator', 'ideal-weight-calculator'],
  updated: '2026-08-14',
};

export default config;
