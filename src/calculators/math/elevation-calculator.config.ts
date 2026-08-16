import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'elevation-calculator',
  icon: 'terrain',
  category: 'math',
  title: 'Elevation Change Calculator',
  shortDescription:
    'Find the elevation change over a distance from a slope angle in degrees or a percent grade.',
  answer:
    'Elevation change is the vertical rise over a horizontal distance: distance × tan(slope angle) for degrees, or distance × (grade ÷ 100) for percent grades.',
  targetKeyword: 'elevation calculator',
  keywords: [
    'elevation calculator',
    'how to calculate elevation',
    'elevation change',
    'slope elevation',
    'grade calculator',
  ],
  inputs: [
    {
      type: 'number',
      id: 'distance',
      label: 'Horizontal distance',
      unit: 'm',
      default: 100,
      min: 0,
      step: 1,
      help: 'The horizontal (level) length of the slope',
    },
    {
      type: 'select',
      id: 'method',
      label: 'Slope measured as',
      options: [
        { value: 'degrees', label: 'Angle in degrees' },
        { value: 'percent', label: 'Percent grade' },
      ],
      default: 'degrees',
    },
    {
      type: 'number',
      id: 'slope',
      label: 'Slope',
      unit: '° or %',
      default: 10,
      min: 0,
      max: 90,
      step: 0.5,
      help: 'Interpreted as degrees or percent grade based on your choice above',
    },
  ],
  formulaId: 'elevation',
  outputs: [
    {
      id: 'elevationChange',
      label: 'Elevation change',
      format: 'decimal',
      decimals: 2,
      primary: true,
      note: 'Vertical rise in metres',
    },
    {
      id: 'distance',
      label: 'Horizontal distance',
      format: 'number',
      note: 'Metres',
    },
    {
      id: 'slopeLabel',
      label: 'Slope',
      format: 'text',
    },
  ],
  formulaDisplay:
    'Degrees: elevation = distance × tan(angle). Percent: elevation = distance × grade ÷ 100. Example: 100 m at 10° → 17.6 m of climb.',
  explanation: `**Elevation change** is the vertical distance you climb (or drop) over a horizontal distance — essential for hiking, cycling, ramps and civil engineering.

### The two inputs

Slopes are described two ways:

1. **Angle in degrees** — the slope's angle from horizontal.
2. **Percent grade** — rise ÷ run × 100. A 10% grade rises 10 m per 100 m.

### The formulas

    Degrees:  elevation = distance × tan(angle)
    Percent:  elevation = distance × (grade ÷ 100)

### Example

A road climbs for **100 metres** horizontally at a **10°** angle:

    Elevation = 100 × tan(10°) ≈ 17.6 m

The same road at **18%** grade:

    Elevation = 100 × 0.18 = 18 m

(A 10° slope and an 18% grade are almost identical — the two scales agree closely for moderate slopes.)

### Real-world checks

| Grade | Angle | Feel |
| --- | --- | --- |
| 3% | 1.7° | Gentle — wheelchair accessible |
| 6% | 3.4° | Noticeable climb |
| 10% | 5.7° | Steep for walking |
| 15%+ | 8.5°+ | Very steep — hard work |

> Measure the *horizontal* distance, not the distance along the slope, or the result will be overstated.
`,
  faq: [
    {
      question: 'How do I calculate elevation change?',
      answer:
        'Multiply the horizontal distance by tan(slope angle in degrees), or by the percent grade divided by 100. 100 m at 10° climbs about 17.6 m.',
    },
    {
      question: 'What is the difference between slope degrees and percent grade?',
      answer:
        'Degrees are the angle from horizontal. Percent grade is rise ÷ run × 100 — a 45° slope is a 100% grade, because rise equals run.',
    },
    {
      question: 'Why use horizontal distance instead of the path length?',
      answer:
        'Elevation is defined against the level (horizontal) run. Using the sloped distance overstates the climb, especially on steep slopes.',
    },
  ],
  relatedCalculators: ['roof-pitch-calculator', 'square-footage-calculator', 'cubic-feet-calculator', 'percentage-calculator'],
  updated: '2026-08-16',
};

export default config;