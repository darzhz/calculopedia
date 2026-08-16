import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'calorie-deficit-calculator',
  icon: 'monitor_weight_loss',
  category: 'health',
  title: 'Calorie Deficit Calculator',
  shortDescription:
    'Work out your daily calorie deficit, the intake you need to hit it, and how quickly you will lose weight — based on your TDEE.',
  answer:
    'A calorie deficit calculator finds your maintenance calories (TDEE), subtracts your chosen deficit, and tells you the daily intake to eat and the weekly weight loss that deficit produces.',
  targetKeyword: 'calorie deficit calculator',
  keywords: [
    'calorie deficit calculator',
    'how to calculate calorie deficit',
    'how to calculate my calorie deficit',
    'calorie deficit to lose weight',
    'daily calorie intake for weight loss',
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
      id: 'deficit',
      label: 'Daily deficit',
      options: [
        { value: '250', label: '250 kcal — gentle loss' },
        { value: '500', label: '500 kcal — standard (≈0.5 kg/week)' },
        { value: '750', label: '750 kcal — aggressive' },
        { value: '1000', label: '1,000 kcal — fast (≈1 kg/week)' },
      ],
      default: '500',
    },
  ],
  formulaId: 'calorieDeficit',
  outputs: [
    {
      id: 'targetCalories',
      label: 'Daily target intake',
      format: 'number',
      primary: true,
      note: 'TDEE minus your deficit',
    },
    {
      id: 'tdee',
      label: 'Maintenance (TDEE)',
      format: 'number',
      note: 'Calories to hold your weight',
    },
    {
      id: 'deficit',
      label: 'Daily deficit',
      format: 'number',
    },
    {
      id: 'weeklyLossKg',
      label: 'Projected weekly loss',
      format: 'decimal',
      decimals: 2,
      note: '1 kg of fat ≈ 7,700 kcal',
    },
    {
      id: 'weeksToLose5Kg',
      label: 'Time to lose 5 kg',
      format: 'decimal',
      decimals: 1,
      note: 'Weeks at this deficit',
    },
  ],
  formulaDisplay:
    'TDEE = BMR (Mifflin-St Jeor) × activity. Target intake = TDEE − deficit. Weekly loss = deficit × 7 ÷ 7,700 kg.',
  explanation: `A **calorie deficit** means eating fewer calories than you burn. Your body makes up the shortfall from stored fat — that is what weight loss is.

### Find your deficit

First, your maintenance calories (**TDEE**) come from your BMR and activity:

    TDEE = BMR × activity factor

The **BMR** uses Mifflin-St Jeor:

    Men:    10 × weight(kg) + 6.25 × height(cm) − 5 × age + 5
    Women:  10 × weight(kg) + 6.25 × height(cm) − 5 × age − 161

### The deficit and the math

    Target intake = TDEE − deficit
    Weekly loss = (deficit × 7) ÷ 7,700 kg

Since **1 kg of body fat ≈ 7,700 kcal**, a **500 kcal daily deficit** (3,500 kcal a week) loses about **0.45 kg per week** — the classic sustainable pace. A 1,000 kcal deficit roughly doubles that.

### Example

A 30-year-old man, 175 cm, 75 kg, moderately active: TDEE ≈ **2,633 kcal**. With a 500 kcal deficit → eat ≈ **2,133 kcal/day** → ≈ **0.45 kg/week**, so **5 kg in about 11 weeks**.

### Safety

Extremely low intake backfires — it is hard to sustain and risks muscle loss. This calculator never recommends going below **1,200 kcal** per day. A deficit of 250–500 kcal is sustainable for most people.
`,
  faq: [
    {
      question: 'How do I calculate my calorie deficit?',
      answer:
        'Find your TDEE (maintenance calories), then subtract your target deficit: target intake = TDEE − deficit. A 500 kcal daily deficit loses roughly 0.45 kg per week.',
    },
    {
      question: 'What is a good daily calorie deficit?',
      answer:
        'A deficit of 250–500 kcal per day is sustainable for most people. Larger deficits speed things up but are harder to stick to and raise the risk of muscle loss.',
    },
    {
      question: 'How much weight will I lose with a 500 calorie deficit?',
      answer:
        'About 0.45 kg (1 lb) per week, because 1 kg of body fat is roughly 7,700 kcal and 500 kcal × 7 days = 3,500 kcal.',
    },
  ],
  relatedCalculators: [
    'tdee-calculator',
    'calorie-calculator',
    'maintenance-calories-calculator',
    'bmr-calculator',
  ],
  updated: '2026-08-16',
};

export default config;