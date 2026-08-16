import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'roof-pitch-calculator',
  icon: 'roofing',
  category: 'math',
  title: 'Roof Pitch Calculator',
  shortDescription:
    'Convert roof rise and run into pitch (X-in-12), angle in degrees and percent grade for roofing work.',
  answer:
    'Roof pitch describes how steep a roof is, expressed as the rise in inches per 12 inches of run, and converts to an angle with the formula degrees = arctan(rise ÷ run).',
  targetKeyword: 'roof pitch calculator',
  keywords: [
    'roof pitch calculator',
    'how to calculate roof pitch',
    'roof slope',
    'roof angle degrees',
    'pitch in 12',
  ],
  inputs: [
    {
      type: 'number',
      id: 'riseInches',
      label: 'Rise',
      unit: 'inches',
      default: 6,
      min: 0,
      max: 24,
      step: 0.5,
      help: 'Vertical rise over one run',
    },
    {
      type: 'number',
      id: 'runInches',
      label: 'Run',
      unit: 'inches',
      default: 12,
      min: 1,
      max: 48,
      step: 1,
      help: 'Horizontal distance — roofing uses 12 inches',
    },
  ],
  formulaId: 'roofPitch',
  outputs: [
    {
      id: 'pitchRatio',
      label: 'Pitch',
      format: 'text',
      primary: true,
      note: 'Rise per run (X-in-12)',
    },
    {
      id: 'degrees',
      label: 'Angle',
      format: 'decimal',
      decimals: 1,
      note: 'Degrees from horizontal',
    },
    {
      id: 'percentGrade',
      label: 'Grade',
      format: 'decimal',
      decimals: 1,
      note: 'Percent slope',
    },
    {
      id: 'riseInches',
      label: 'Rise',
      format: 'decimal',
      decimals: 1,
      note: 'Inches',
    },
    {
      id: 'runInches',
      label: 'Run',
      format: 'decimal',
      decimals: 1,
      note: 'Inches',
    },
  ],
  formulaDisplay:
    'Pitch = rise ÷ run (as X-in-12). Angle = arctan(rise ÷ run) in degrees. Grade = (rise ÷ run) × 100%.',
  explanation: `**Roof pitch** is how steep a roof is. Roofers express it as **rise per 12 inches of run** — a "6/12 roof" rises 6 inches for every 12 inches it runs horizontally.

### The three ways to say it

1. **Pitch ratio (X-in-12)** — rise per 12 inches of run: 6-in-12.
2. **Angle in degrees** — measured from horizontal.
3. **Percent grade** — rise ÷ run × 100.

### The math

    Ratio = rise ÷ run        (scaled to run = 12)
    Angle = arctan(rise ÷ run)  in degrees
    Grade = (rise ÷ run) × 100%

### Example

A roof that rises **6 inches** over a **12-inch** run:

    Ratio = 6-in-12
    Angle = arctan(6 ÷ 12) ≈ 26.6°
    Grade = (6 ÷ 12) × 100 = 50%

### What pitches mean in practice

| Pitch | Angle | Use |
| --- | --- | --- |
| 2/12–4/12 | 9–18° | Low slope — needs special roofing |
| 4/12–9/12 | 18–37° | Standard residential asphalt shingles |
| 9/12–12/12 | 37–45° | Steep — harder to walk, dramatic look |
| 12/12+ | 45°+ | Very steep — snow sheds well, costly |

A steeper roof sheds rain and snow better but costs more to build and is more dangerous to walk on.

> Measure rise over an exact run and keep units consistent. For most roofs you'll use run = 12 inches.
`,
  faq: [
    {
      question: 'How do I calculate roof pitch?',
      answer:
        'Divide the vertical rise by the horizontal run and scale to 12: a 6-inch rise over a 12-inch run is a 6/12 pitch. Angle = arctan(rise ÷ run), grade = rise ÷ run × 100.',
    },
    {
      question: 'What does a 6/12 roof pitch mean?',
      answer:
        'A 6/12 pitch rises 6 inches for every 12 inches of horizontal run — a medium-steep roof, about 26.6°, typical for residential homes.',
    },
    {
      question: 'What is the most common roof pitch?',
      answer:
        'Residential roofs are most commonly 4/12 to 9/12. A 4/12 pitch (about 18°) is the usual minimum for standard asphalt shingles.',
    },
  ],
  relatedCalculators: ['elevation-calculator', 'square-footage-calculator', 'cubic-feet-calculator', 'percentage-calculator'],
  updated: '2026-08-16',
};

export default config;