import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'max-heart-rate-calculator',
  icon: 'favorite',
  category: 'health',
  title: 'Max Heart Rate Calculator',
  shortDescription:
    'Estimate your maximum heart rate with the classic 220−age or the more accurate Tanaka formula, with all five training zones.',
  answer:
    'Max heart rate is your highest safe heart rate during exercise, estimated as 220 minus your age (or 208 − 0.7 × age), and it anchors every heart-rate training zone.',
  targetKeyword: 'max heart rate calculator',
  keywords: [
    'max heart rate calculator',
    'how to calculate max heart rate',
    'maximum heart rate formula',
    'heart rate zones',
    '220 minus age',
  ],
  inputs: [
    {
      type: 'number',
      id: 'age',
      label: 'Age',
      unit: 'years',
      default: 30,
      min: 10,
      max: 100,
      step: 1,
    },
    {
      type: 'select',
      id: 'method',
      label: 'Formula',
      options: [
        { value: '220', label: '220 − age (classic)' },
        { value: 'tanaka', label: '208 − 0.7 × age (Tanaka)' },
      ],
      default: '220',
    },
  ],
  formulaId: 'maxHeartRate',
  outputs: [
    {
      id: 'maxHr',
      label: 'Maximum heart rate',
      format: 'number',
      primary: true,
      note: 'Beats per minute',
    },
    {
      id: 'zone2Low',
      label: 'Zone 2 range',
      format: 'text',
      note: 'Fat-burn zone (60–70% of max)',
    },
    {
      id: 'methodNote',
      label: 'Formula used',
      format: 'text',
    },
    {
      id: 'zoneTable',
      label: 'Training zones',
      format: 'table',
    },
  ],
  formulaDisplay: 'Max HR ≈ 220 − age (classic) or 208 − 0.7 × age (Tanaka). Zones are percentages of this number.',
  explanation: `Your **maximum heart rate** is the ceiling your heart can reach during all-out effort. It is individual — but the only reliable ways to measure it precisely require a lab test, so the everyday method is a formula estimate.

### The formulas

    Classic:   Max HR = 220 − age
    Tanaka:    Max HR = 208 − 0.7 × age

The classic **220 − age** is what most people know. **Tanaka's formula** fits real measured data better for most adults, especially after 40:

| Age | 220 − age | Tanaka |
| --- | --- | --- |
| 20 | 200 | 194 |
| 30 | 190 | 187 |
| 40 | 180 | 180 |
| 50 | 170 | 173 |

### Training zones

Once you have your max HR, zones are simple percentages:

| Zone | % of max | Purpose |
| --- | --- | --- |
| 1 — Recovery | 50–60% | Warm-up, recovery |
| 2 — Fat burn | 60–70% | Steady aerobic base |
| 3 — Cardio | 70–80% | Endurance, tempo |
| 4 — High intensity | 80–90% | Threshold, speed |
| 5 — Max effort | 90–100% | Sprints, intervals |

### Example

A **30-year-old** runner: classic max HR = **190 bpm**, so Zone 2 is **114–133 bpm**.

> A heart-rate strap or watch gives far more accurate numbers than any formula. If you are new to intense exercise or have heart conditions, check with a doctor first.
`,
  faq: [
    {
      question: 'How do I calculate my maximum heart rate?',
      answer:
        'The simplest estimate is 220 minus your age. The more accurate Tanaka formula is 208 − 0.7 × age. For a 30-year-old that gives 190 bpm and 187 bpm respectively.',
    },
    {
      question: 'What is the best formula for max heart rate?',
      answer:
        'Tanaka (208 − 0.7 × age) is closer to measured values for most adults than 220 − age, which tends to overestimate max HR in younger people and underestimate it in older people.',
    },
    {
      question: 'What heart rate zone should I train in?',
      answer:
        'Zone 2 (60–70% of max HR) builds your aerobic base and burns fat efficiently. Zone 3 (70–80%) improves endurance, and Zones 4–5 build speed and power but are much harder to sustain.',
    },
  ],
  relatedCalculators: [
    'zone-2-heart-rate-calculator',
    'heart-rate-ecg-calculator',
    'vo2max-calculator',
    'tdee-calculator',
  ],
  updated: '2026-08-16',
};

export default config;