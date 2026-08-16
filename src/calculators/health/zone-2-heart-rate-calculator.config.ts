import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'zone-2-heart-rate-calculator',
  icon: 'activity_zone',
  category: 'health',
  title: 'Zone 2 Heart Rate Calculator',
  shortDescription:
    'Find your Zone 2 heart rate range — the fat-burning aerobic zone — as a percentage of max HR or with the Karvonen method.',
  answer:
    'Zone 2 heart rate is 60–70% of your maximum heart rate, or 60–70% of your heart-rate reserve plus your resting heart rate when using the Karvonen formula.',
  targetKeyword: 'zone 2 heart rate calculator',
  keywords: [
    'zone 2 heart rate calculator',
    'how to calculate zone 2 heart rate',
    'zone 2 training',
    'fat burn heart rate zone',
    'zone 2 bpm',
  ],
  inputs: [
    {
      type: 'number',
      id: 'age',
      label: 'Age',
      unit: 'years',
      default: 35,
      min: 10,
      max: 100,
      step: 1,
    },
    {
      type: 'select',
      id: 'method',
      label: 'Method',
      options: [
        { value: 'maxHr', label: 'Percentage of max HR (60–70%)' },
        { value: 'karvonen', label: 'Karvonen (heart-rate reserve)' },
      ],
      default: 'maxHr',
      help: 'Karvonen is more personalised — use it if you know your resting heart rate',
    },
    {
      type: 'number',
      id: 'restingHr',
      label: 'Resting heart rate',
      unit: 'bpm',
      default: 60,
      min: 30,
      max: 120,
      step: 1,
      showWhen: { field: 'method', value: 'karvonen' },
      help: 'Your pulse when fully relaxed, ideally on waking',
    },
  ],
  formulaId: 'zone2HeartRate',
  outputs: [
    {
      id: 'zone2Low',
      label: 'Zone 2 — lower bound',
      format: 'number',
      primary: true,
      note: 'BPM',
    },
    {
      id: 'zone2High',
      label: 'Zone 2 — upper bound',
      format: 'number',
      primary: true,
      note: 'BPM',
    },
    {
      id: 'maxHr',
      label: 'Maximum heart rate',
      format: 'number',
      note: '220 − age',
    },
    {
      id: 'methodNote',
      label: 'Method used',
      format: 'text',
    },
  ],
  formulaDisplay:
    'Max HR = 220 − age. % method: zone 2 = 0.6–0.7 × max HR. Karvonen: 0.6–0.7 × (max HR − resting HR) + resting HR.',
  explanation: `**Zone 2** is the aerobic "fat-burn" zone — easy enough that you can hold a conversation, intense enough to build your aerobic base. It is the foundation of endurance training.

### The percentage method

Max HR is estimated as **220 − age**. Zone 2 sits at **60–70% of max HR**:

    Zone 2 = 0.6 × max HR  to  0.7 × max HR

For a **35-year-old**: max HR = 185, so Zone 2 = **111–130 bpm**.

### The Karvonen method (more personal)

Karvonen uses your **heart-rate reserve** (HRR = max HR − resting HR), which accounts for how fit you already are:

    Lower = 0.6 × HRR + resting HR
    Upper = 0.7 × HRR + resting HR

Same 35-year-old with a **60 bpm** resting HR: HRR = 125 → Zone 2 = **135–147 bpm**. A lower resting HR (fitter heart) raises your Zone 2 numbers — which is why Karvonen is more accurate for athletes.

### Why train in Zone 2?

- Burns fat as the primary fuel.
- Builds capillary density and mitochondria — your endurance engine.
- Allows high weekly volume without excessive fatigue.

> If you cannot hold a conversation at your Zone 2 pace, drop the intensity. Zone 2 is meant to feel easy — that is the point.
`,
  faq: [
    {
      question: 'How do I calculate my Zone 2 heart rate?',
      answer:
        'Estimate max HR as 220 − age, then take 60–70% of it. For a 35-year-old: 185 × 0.6 to 185 × 0.7 = 111–130 bpm. The Karvonen method gives a more personal range using your resting HR.',
    },
    {
      question: 'What is Zone 2 heart rate used for?',
      answer:
        'Zone 2 is the aerobic base-building zone. Training there improves fat burning and endurance while staying easy enough to recover from day to day.',
    },
    {
      question: 'Karvonen or percentage of max HR — which is better?',
      answer:
        'Karvonen is more accurate for fit individuals because it accounts for resting heart rate. The simple percentage method is fine for general fitness and easy to calculate.',
    },
  ],
  relatedCalculators: [
    'max-heart-rate-calculator',
    'heart-rate-ecg-calculator',
    'vo2max-calculator',
    'tdee-calculator',
  ],
  updated: '2026-08-16',
};

export default config;