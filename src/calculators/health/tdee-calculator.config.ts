import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'tdee-calculator',
  icon: 'local_fire_department',
  category: 'health',
  title: 'TDEE Calculator',
  shortDescription:
    'Find your Total Daily Energy Expenditure — the exact calories you burn each day — from BMR and activity level, with lose and gain targets.',
  answer:
    'TDEE (Total Daily Energy Expenditure) is the number of calories you burn in a day, calculated as your BMR multiplied by an activity factor, and it tells you how much to eat to maintain, lose or gain weight.',
  targetKeyword: 'tdee calculator',
  keywords: [
    'tdee calculator',
    'total daily energy expenditure',
    'how to calculate tdee',
    'maintenance calories',
    'calories burned per day',
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
  ],
  formulaId: 'tdee',
  outputs: [
    {
      id: 'tdee',
      label: 'TDEE',
      format: 'number',
      primary: true,
      note: 'Calories to maintain your current weight',
    },
    {
      id: 'bmr',
      label: 'BMR',
      format: 'number',
      note: 'Calories burned at complete rest',
    },
    {
      id: 'lossTarget',
      label: 'To lose weight',
      format: 'number',
      note: 'About 500 kcal below TDEE',
    },
    {
      id: 'gainTarget',
      label: 'To gain weight',
      format: 'number',
      note: 'About 500 kcal above TDEE',
    },
  ],
  formulaDisplay:
    'BMR (Mifflin-St Jeor): men 10w + 6.25h − 5a + 5; women 10w + 6.25h − 5a − 161. TDEE = BMR × activity factor (1.2–1.9).',
  explanation: `**TDEE** — Total Daily Energy Expenditure — is the sum of every calorie you burn in a day: your resting metabolism, the energy from digesting food, and everything you use through movement and exercise. Eat this number and your weight stays flat.

### Step 1 — BMR (resting burn)

Your **BMR** is the energy your body needs at complete rest. The **Mifflin-St Jeor** formula is the most widely used estimate:

    Men:    BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age + 5
    Women:  BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age − 161

For a **30-year-old man, 175 cm, 75 kg**:

    BMR = 750 + 1093.75 − 150 + 5 ≈ 1,699 kcal

### Step 2 — add activity

| Activity | Factor |
| --- | --- |
| Sedentary | 1.2 |
| Lightly active | 1.375 |
| Moderately active | 1.55 |
| Very active | 1.725 |
| Extra active | 1.9 |

Moderately active → TDEE = 1,699 × 1.55 ≈ **2,633 kcal**.

### Using your TDEE

- **Maintain** — eat your TDEE.
- **Lose** — aim about 500 kcal below TDEE (≈0.5 kg/week).
- **Gain** — aim about 500 kcal above TDEE.

These are estimates. Real burn varies with muscle mass, genetics and hormones — track your weight for a few weeks and adjust by 100–200 kcal as needed.
`,
  faq: [
    {
      question: 'What does TDEE mean?',
      answer:
        'TDEE stands for Total Daily Energy Expenditure — the total calories your body burns in a day, including resting metabolism, digestion and physical activity.',
    },
    {
      question: 'How is TDEE calculated?',
      answer:
        'TDEE = BMR × activity factor. BMR is estimated with the Mifflin-St Jeor formula, then multiplied by a factor between 1.2 (sedentary) and 1.9 (extra active) based on your activity level.',
    },
    {
      question: 'What is the difference between BMR and TDEE?',
      answer:
        'BMR is the calories you burn at complete rest. TDEE adds all your daily activity on top, so it is always higher than BMR — unless you never move.',
    },
  ],
  relatedCalculators: [
    'bmr-calculator',
    'calorie-calculator',
    'maintenance-calories-calculator',
    'calorie-deficit-calculator',
  ],
  updated: '2026-08-16',
};

export default config;