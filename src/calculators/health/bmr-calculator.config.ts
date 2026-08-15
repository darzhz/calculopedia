import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'bmr-calculator',
  icon: 'monitor_heart',
  category: 'health',
  title: 'BMR Calculator',
  shortDescription:
    'Calculate your Basal Metabolic Rate with the Mifflin-St Jeor and Katch-McArdle formulas — the calories you burn at complete rest.',
  answer:
    'The BMR calculator estimates the calories your body burns at complete rest using the Mifflin-St Jeor and Katch-McArdle formulas.',
  targetKeyword: 'bmr calculator',
  keywords: [
    'bmr calculator',
    'basal metabolic rate',
    'bmr formula',
    'resting calories',
    'calories at rest',
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
      type: 'number',
      id: 'bodyFatPercent',
      label: 'Body fat percentage',
      unit: '%',
      default: 20,
      min: 0,
      max: 60,
      step: 0.5,
      help: 'Optional — enables the Katch-McArdle estimate',
    },
  ],
  formulaId: 'bmr',
  outputs: [
    {
      id: 'bmrMifflin',
      label: 'BMR (Mifflin-St Jeor)',
      format: 'number',
      primary: true,
      note: 'Calories burned at complete rest',
    },
    {
      id: 'bmrKatch',
      label: 'BMR (Katch-McArdle)',
      format: 'number',
      note: 'From lean body mass',
    },
    {
      id: 'leanMass',
      label: 'Lean body mass',
      format: 'decimal',
      decimals: 1,
      note: 'Weight minus fat',
    },
  ],
  formulaDisplay:
    'Mifflin-St Jeor: men 10w + 6.25h − 5a + 5; women − 161. Katch-McArdle: 370 + 21.6 × lean mass (kg).',
  explanation: `Your **BMR (Basal Metabolic Rate)** is the energy your body burns at complete rest — keeping your heart beating, lungs working and cells repairing. It's typically **60–75% of your daily calorie burn**, before any activity.

### Mifflin-St Jeor

    Men:   10 × weight(kg) + 6.25 × height(cm) − 5 × age + 5
    Women: 10 × weight(kg) + 6.25 × height(cm) − 5 × age − 161

For a **30-year-old man, 175 cm, 75 kg**:

    BMR = 750 + 1093.75 − 150 + 5 ≈ 1,699 kcal

### Katch-McArdle

    BMR = 370 + 21.6 × lean body mass (kg)

Lean mass = weight × (1 − body fat %). If you know your body fat percentage, this formula is often more accurate, especially for athletes — muscle burns more calories at rest than fat.

### From BMR to your real needs

BMR is not your target calories — it's the baseline. Multiply by an activity factor to get your **TDEE**:

| Activity | Factor |
| --- | --- |
| Sedentary | 1.2 |
| Lightly active | 1.375 |
| Moderately active | 1.55 |
| Very active | 1.725 |
| Extra active | 1.9 |

So a BMR of 1,699 with moderate activity → **~2,633 kcal/day** to maintain weight. See the Maintenance Calories Calculator for the full picture.
`,
  faq: [
    {
      question: 'What is BMR?',
      answer:
        'Basal Metabolic Rate is the calories your body burns at complete rest just to stay alive — breathing, heartbeat and cell repair. It is typically 60–75% of your total daily burn.',
    },
    {
      question: 'How is BMR calculated?',
      answer:
        'The most common formula is Mifflin-St Jeor: 10 × weight(kg) + 6.25 × height(cm) − 5 × age + 5 for men, and − 161 for women. Katch-McArdle uses lean body mass instead.',
    },
    {
      question: 'What is the difference between BMR and TDEE?',
      answer:
        'BMR is your resting burn. TDEE (Total Daily Energy Expenditure) multiplies BMR by your activity level, giving the calories you actually burn each day.',
    },
    {
      question: 'Why does my BMR differ from a friend\u2019s with the same weight?',
      answer:
        'BMR depends on age, height, gender and body composition. Muscle raises BMR while fat barely contributes, which is why the Katch-McArdle formula can be more accurate for muscular people.',
    },
  ],
  relatedCalculators: ['maintenance-calories-calculator', 'calorie-calculator', 'body-fat-percentage-calculator', 'bmi-calculator'],
  updated: '2026-08-15',
};

export default config;
