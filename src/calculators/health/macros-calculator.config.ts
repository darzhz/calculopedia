import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'macros-calculator',
  icon: 'restaurant',
  category: 'health',
  title: 'Macros Calculator',
  shortDescription:
    'Work out your daily protein, fat and carbohydrate targets in grams from your TDEE and your fitness goal.',
  answer:
    'A macros calculator takes your calorie target (from TDEE) and splits it into protein, fat and carbohydrate grams — typically protein by body weight, fat at about 25% of calories, carbs for the rest.',
  targetKeyword: 'macros calculator',
  keywords: [
    'macros calculator',
    'how to calculate macros',
    'macro split',
    'protein carb fat grams',
    'macros for muscle gain',
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
        { value: 'cut', label: 'Cut (lose fat)' },
        { value: 'maintain', label: 'Maintain' },
        { value: 'bulk', label: 'Bulk (gain muscle)' },
      ],
      default: 'maintain',
    },
    {
      type: 'select',
      id: 'proteinSplit',
      label: 'Protein intake',
      options: [
        { value: 'low', label: '1.2 g/kg — general health' },
        { value: 'moderate', label: '1.6 g/kg — most active people' },
        { value: 'high', label: '2.0 g/kg — bodybuilding / heavy training' },
      ],
      default: 'moderate',
    },
  ],
  formulaId: 'macros',
  outputs: [
    {
      id: 'targetCalories',
      label: 'Daily calorie target',
      format: 'number',
      primary: true,
      note: 'From your goal and TDEE',
    },
    {
      id: 'proteinG',
      label: 'Protein',
      format: 'number',
      note: 'Grams per day',
    },
    {
      id: 'fatG',
      label: 'Fat',
      format: 'number',
      note: 'Grams per day',
    },
    {
      id: 'carbG',
      label: 'Carbohydrates',
      format: 'number',
      note: 'Grams per day',
    },
    {
      id: 'proteinCals',
      label: 'Protein calories',
      format: 'number',
      note: '4 kcal/g',
    },
    {
      id: 'fatCals',
      label: 'Fat calories',
      format: 'number',
      note: '9 kcal/g',
    },
    {
      id: 'carbCals',
      label: 'Carb calories',
      format: 'number',
      note: '4 kcal/g',
    },
    {
      id: 'tdee',
      label: 'Maintenance (TDEE)',
      format: 'number',
      note: 'Before goal adjustment',
    },
  ],
  formulaDisplay:
    'TDEE = BMR (Mifflin-St Jeor) × activity. Protein = weight × (1.2–2.0) g. Fat = 25% of calories ÷ 9. Carbs = remaining calories ÷ 4.',
  explanation: `**Macros** are the three nutrients that provide calories — **protein, fat and carbohydrates**. Counting them instead of just calories helps you hit body-composition goals (lose fat, build muscle) more precisely.

### Step 1 — calorie target

Your **TDEE** comes from BMR × activity. Then adjust for the goal:

    Cut:      TDEE − 500
    Maintain: TDEE
    Bulk:     TDEE + 500

### Step 2 — protein (by body weight)

Protein protects muscle when cutting and builds it when bulking:

| Intake | Grams per kg of body weight |
| --- | --- |
| Low | 1.2 |
| Moderate | 1.6 |
| High | 2.0 |

Protein and carbs supply **4 kcal per gram**; fat supplies **9 kcal per gram**.

### Step 3 — fat and carbs

Fat gets about **25% of calories** (divide by 9 for grams). The **remaining calories** go to carbs (divide by 4).

### Example

A 30-year-old man, 175 cm, 75 kg, moderately active, maintaining, moderate protein:

- TDEE ≈ **2,633 kcal** → target 2,633 kcal
- Protein = 75 × 1.6 = **120 g** → 480 kcal
- Fat = 2,633 × 0.25 ÷ 9 ≈ **73 g** → 658 kcal
- Carbs = (2,633 − 480 − 658) ÷ 4 ≈ **374 g**

> These splits are starting points. Adjust after 2–3 weeks based on how your weight and energy respond.
`,
  faq: [
    {
      question: 'How do I calculate my macros?',
      answer:
        'Set your calorie target from TDEE (plus or minus 500 for cut/bulk), take protein at 1.2–2.0 g per kg of body weight, fat at about 25% of calories, and fill the rest with carbohydrates.',
    },
    {
      question: 'What are good macros for muscle gain?',
      answer:
        'For a bulk, eat TDEE + 500 kcal, protein at 1.6–2.0 g/kg, fat at 25–30% of calories, and carbs making up the remainder to fuel training.',
    },
    {
      question: 'How many grams of protein, carbs and fat should I eat?',
      answer:
        'It depends on your weight and goal. As a guide, protein 1.2–2.0 g/kg, fat ≈ 25% of calories, and carbs the remaining calories. The calculator gives exact gram targets.',
    },
  ],
  relatedCalculators: [
    'tdee-calculator',
    'calorie-deficit-calculator',
    'protein-intake-calculator',
    'calorie-calculator',
  ],
  updated: '2026-08-16',
};

export default config;