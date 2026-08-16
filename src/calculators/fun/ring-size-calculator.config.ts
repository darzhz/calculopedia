import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'ring-size-calculator',
  icon: 'diamond',
  category: 'fun',
  title: 'Ring Size Calculator',
  shortDescription:
    'Find your ring size from finger circumference or diameter in millimetres, converted to US, UK and EU sizes.',
  answer:
    'A ring size calculator converts your finger circumference or diameter in millimetres into a ring size using the standard chart relationship — about 2.6 mm of circumference per ring size.',
  targetKeyword: 'ring size calculator',
  keywords: [
    'ring size calculator',
    'how to calculate ring size',
    'ring size from diameter',
    'ring size in mm',
    'ring size chart',
  ],
  inputs: [
    {
      type: 'number',
      id: 'circumference',
      label: 'Finger circumference',
      unit: 'mm',
      default: 55,
      min: 30,
      max: 90,
      step: 0.5,
      help: 'Wrap a string or paper strip around the finger, mark it, and measure the length',
    },
    {
      type: 'number',
      id: 'diameter',
      label: 'Ring diameter',
      unit: 'mm',
      default: 0,
      min: 0,
      max: 30,
      step: 0.5,
      help: 'Optional — measure an existing ring across the inside. Leave 0 to use circumference',
    },
    {
      type: 'select',
      id: 'unit',
      label: 'Preferred size system',
      options: [
        { value: 'us', label: 'US (also common in India)' },
        { value: 'uk', label: 'UK / Australian' },
        { value: 'eu', label: 'EU (diameter-based)' },
      ],
      default: 'us',
    },
  ],
  formulaId: 'ringSize',
  outputs: [
    {
      id: 'usSize',
      label: 'US ring size',
      format: 'decimal',
      decimals: 1,
      primary: true,
      note: 'Nearest half size recommended',
    },
    {
      id: 'ukSize',
      label: 'UK size',
      format: 'decimal',
      decimals: 1,
    },
    {
      id: 'euSize',
      label: 'EU size',
      format: 'number',
    },
    {
      id: 'circumference',
      label: 'Circumference',
      format: 'decimal',
      decimals: 1,
      note: 'Millimetres',
    },
    {
      id: 'diameter',
      label: 'Diameter',
      format: 'decimal',
      decimals: 1,
      note: 'Millimetres',
    },
  ],
  formulaDisplay:
    'US size ≈ (circumference mm − 36.28) ÷ 2.6. Diameter → circumference = diameter × π. UK = US − 0.5, EU ≈ US × 2 + 39.',
  explanation: `Ring sizes are really just **circumference measurements** in millimetres, compressed onto a size scale. Every size step adds roughly **2.6 mm** of circumference.

### From circumference

    US size ≈ (circumference − 36.28) ÷ 2.6

A finger circumference of **55 mm**:

    US size ≈ (55 − 36.28) ÷ 2.6 ≈ 7.2

So about a **US 7**.

### From an existing ring

Measure the **diameter** across the inside of a ring that fits. Convert to circumference:

    Circumference = diameter × π

A **17 mm** inner diameter: 17 × 3.1416 ≈ **53.4 mm** → about a US 6.5.

### Converting between systems

| System | Relationship |
| --- | --- |
| US | Baseline size from circumference |
| UK | US − 0.5 |
| EU | ≈ US × 2 + 39 |

### Measuring tips

- Measure at the **end of the day** — fingers swell slightly.
- Use a **non-stretch** string or paper strip, snug but not tight.
- If between sizes, order the **larger** size (better to be loose).
- Left and right hands differ; measure the correct hand and finger.

> Sizing differs slightly between manufacturers and styles (wide bands fit tighter). When in doubt, get professionally sized.
`,
  faq: [
    {
      question: 'How do I calculate my ring size?',
      answer:
        'Measure your finger circumference in millimetres and convert: US size ≈ (circumference − 36.28) ÷ 2.6. You can also measure the inner diameter of an existing ring and multiply by π.',
    },
    {
      question: 'What is the average ring size?',
      answer:
        'For women, US 5–7 is typical; for men, US 9–11. That corresponds to roughly 49–55 mm and 59–66 mm finger circumferences respectively.',
    },
    {
      question: 'How do I measure my ring size at home?',
      answer:
        'Wrap a non-stretch string or paper strip around the finger, mark where it overlaps, lay it flat and measure the length in millimetres — then convert it with this calculator.',
    },
  ],
  relatedCalculators: ['dog-years-calculator', 'golf-handicap-calculator', 'flames-calculator', 'age-calculator'],
  updated: '2026-08-16',
};

export default config;