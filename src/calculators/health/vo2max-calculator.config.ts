import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'vo2max-calculator',
  icon: 'directions_run',
  category: 'health',
  title: 'VO2 Max Calculator',
  shortDescription:
    'Estimate your VO2 max — your aerobic fitness — from your resting heart rate, with fitness categories for men and women.',
  answer:
    'A VO2 max calculator estimates your maximal oxygen uptake using your resting heart rate with the formula 15.3 × (max HR ÷ resting HR), then grades it against fitness categories.',
  targetKeyword: 'vo2 max calculator',
  keywords: [
    'vo2 max calculator',
    'how to calculate vo2 max',
    'aerobic fitness test',
    'resting heart rate vo2max',
    'cardio fitness score',
  ],
  inputs: [
    {
      type: 'number',
      id: 'age',
      label: 'Age',
      unit: 'years',
      default: 35,
      min: 15,
      max: 90,
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
      id: 'restingHr',
      label: 'Resting heart rate',
      unit: 'bpm',
      default: 65,
      min: 30,
      max: 120,
      step: 1,
      help: 'Measure on waking, before getting up',
    },
  ],
  formulaId: 'vo2max',
  outputs: [
    {
      id: 'vo2max',
      label: 'Estimated VO₂max',
      format: 'decimal',
      decimals: 1,
      primary: true,
      note: 'mL of oxygen per kg per minute',
    },
    {
      id: 'category',
      label: 'Fitness category',
      format: 'text',
      note: 'For a 30–39 year old',
    },
    {
      id: 'maxHr',
      label: 'Max heart rate',
      format: 'number',
      note: '220 − age',
    },
    {
      id: 'restingHr',
      label: 'Resting heart rate',
      format: 'number',
    },
  ],
  formulaDisplay:
    'VO₂max ≈ 15.3 × (max HR ÷ resting HR), where max HR = 220 − age. Fit people have lower resting HR → higher VO₂max.',
  explanation: `**VO₂max** — maximal oxygen uptake — is the best single measure of aerobic fitness: the maximum amount of oxygen your body can use per minute during intense exercise.

### The resting-heart-rate method

There is a strong link between a low resting heart rate and high fitness. The common non-exercise estimate is:

    VO₂max ≈ 15.3 × (max HR ÷ resting HR)

With **max HR = 220 − age**. For a **35-year-old** with a **65 bpm** resting HR:

    max HR = 185 → VO₂max = 15.3 × (185 ÷ 65) ≈ 43.5 mL/kg/min

### What the numbers mean (30–39 age bracket)

| Category | Men | Women |
| --- | --- | --- |
| Excellent | 52+ | 41+ |
| Good | 44–51 | 35–40 |
| Average | 38–43 | 31–34 |
| Fair | 32–37 | 25–30 |
| Below average | <32 | <25 |

A **43.5** lands in the *Good* range for a man.

### More accurate methods

Field tests like the **Rockport one-mile walk**, **Cooper 12-minute run** or a **Ramp/Bruce treadmill test** are more accurate, and lab gas analysis is the gold standard. Lower resting HR, more aerobic training, and being lighter all raise your score.

> This estimate is a quick fitness gauge. Use a wearable or a field test if you need a more precise number.
`,
  faq: [
    {
      question: 'How do I calculate my VO2 max?',
      answer:
        'A quick estimate uses your resting heart rate: VO₂max ≈ 15.3 × (max HR ÷ resting HR), where max HR = 220 − age. Field tests like the Cooper run give more accurate results.',
    },
    {
      question: 'What is a good VO2 max?',
      answer:
        'For a 30–39-year-old man, good is 44–51 mL/kg/min; for a woman 35–40. Above 52 for men and 41 for women is rated excellent.',
    },
    {
      question: 'How can I improve my VO2 max?',
      answer:
        'Regular aerobic training — especially zone 2 base work plus weekly high-intensity intervals — lowers resting heart rate and raises VO2 max. Consistency matters more than intensity.',
    },
  ],
  relatedCalculators: [
    'max-heart-rate-calculator',
    'zone-2-heart-rate-calculator',
    'heart-rate-ecg-calculator',
    'tdee-calculator',
  ],
  updated: '2026-08-16',
};

export default config;