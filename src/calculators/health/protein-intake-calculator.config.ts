import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'protein-intake-calculator',
  icon: 'restaurant',
  category: 'health',
  title: 'Protein Intake Calculator',
  shortDescription:
    'Find your ideal daily protein intake based on your weight, activity level and fitness goal.',
  answer:
    'The protein calculator estimates your daily protein needs in grams based on your body weight, activity level and whether you want to maintain, lose or gain weight.',
  targetKeyword: 'protein intake calculator',
  keywords: [
    'protein intake calculator',
    'how much protein do i need',
    'daily protein requirement',
    'protein for muscle gain',
    'protein for weight loss',
  ],
  inputs: [
    {
      type: 'number',
      id: 'weight',
      label: 'Body weight',
      unit: 'kg',
      default: 70,
      min: 20,
      max: 300,
      step: 0.5,
    },
    {
      type: 'select',
      id: 'activityLevel',
      label: 'Activity level',
      options: [
        { value: 'sedentary', label: 'Sedentary (little or no exercise)' },
        { value: 'light', label: 'Light (exercise 1–3 days/week)' },
        { value: 'moderate', label: 'Moderate (exercise 3–5 days/week)' },
        { value: 'intense', label: 'Intense (exercise 6–7 days/week)' },
        { value: 'athlete', label: 'Athlete (twice-daily training)' },
      ],
      default: 'moderate',
    },
    {
      type: 'select',
      id: 'goal',
      label: 'Goal',
      options: [
        { value: 'maintain', label: 'Maintain weight' },
        { value: 'lose', label: 'Lose fat' },
        { value: 'gain', label: 'Build muscle' },
      ],
      default: 'maintain',
    },
  ],
  formulaId: 'proteinIntake',
  outputs: [
    {
      id: 'dailyProtein',
      label: 'Daily protein needed',
      format: 'number',
      primary: true,
      note: 'grams per day',
    },
    {
      id: 'proteinPerKg',
      label: 'Protein per kg',
      format: 'decimal',
      decimals: 1,
      note: 'g/kg body weight',
    },
    {
      id: 'proteinRange',
      label: 'Safe range',
      format: 'text',
    },
  ],
  formulaDisplay: 'Daily protein = body weight (kg) × activity multiplier ± goal adjustment.',
  explanation: `**Protein** is essential for building and repairing muscle, skin, hormones and enzymes. How much you need depends on your weight, how active you are, and your fitness goal.

### Protein per kg by activity level

| Activity level | Protein per kg |
| --- | --- |
| Sedentary | 0.8 g/kg |
| Light exercise | 1.0 g/kg |
| Moderate exercise | 1.2 g/kg |
| Intense training | 1.6 g/kg |
| Athlete | 2.0 g/kg |

### Goal adjustments

- **Fat loss** — add 0.2 g/kg (higher protein preserves muscle during a calorie deficit)
- **Muscle gain** — add 0.2 g/kg (more protein supports muscle synthesis)

### Worked example

A **70 kg** person who exercises **moderately** and wants to **maintain**:

    70 × 1.2 = 84 grams per day

If they want to **lose fat**: 70 × 1.4 = **98 grams per day**

### Timing and distribution

Research suggests spreading protein across 3–5 meals is optimal for muscle protein synthesis. Aim for **20–40g per meal** rather than loading it all in one sitting.

### Protein sources

| Food | Protein |
| --- | --- |
| Chicken breast (100g) | 31g |
| Eggs (1 large) | 6g |
| Greek yogurt (100g) | 10g |
| Lentils (100g cooked) | 9g |
| Paneer (100g) | 18g |
| Whey protein (1 scoop) | 25g |

### Is too much protein harmful?

For healthy adults, up to 2.5 g/kg is considered safe. Excess protein is converted to glucose or fat. People with kidney disease should consult a doctor before increasing protein intake.
`,
  faq: [
    {
      question: 'How much protein do I need per day?',
      answer:
        'A sedentary adult needs about 0.8g per kg of body weight. Active people need 1.2–2.0g per kg depending on intensity. For a 70kg person, that\'s 56–140g per day.',
    },
    {
      question: 'How much protein for muscle gain?',
      answer:
        'Aim for 1.6–2.2g per kg of body weight. For a 70kg person, that\'s 112–154g per day, spread across 3–5 meals.',
    },
    {
      question: 'Is protein powder necessary?',
      answer:
        'No — you can get all your protein from food. Protein powder is a convenient supplement if you struggle to meet your target through whole foods alone.',
    },
  ],
  relatedCalculators: ['calorie-calculator', 'bmi-calculator', 'maintenance-calories-calculator'],
  updated: '2026-08-15',
};

export default config;
