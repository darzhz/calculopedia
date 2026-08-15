import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'square-footage-calculator',
  icon: 'crop_square',
  category: 'math',
  title: 'Square Footage Calculator',
  shortDescription:
    'Find the area of a room in square feet and square meters from its length and width — for flooring, painting and real estate.',
  answer:
    'The square footage calculator multiplies the length and width of a rectangular space (in feet or metres) to give its area in square feet and square meters.',
  targetKeyword: 'square footage calculator',
  keywords: [
    'square footage calculator',
    'how to calculate square footage',
    'sq ft calculator',
    'area calculator',
    'room size',
  ],
  inputs: [
    {
      type: 'select',
      id: 'unit',
      label: 'Measurement unit',
      options: [
        { value: 'ft', label: 'Feet' },
        { value: 'm', label: 'Meters' },
      ],
      default: 'ft',
    },
    {
      type: 'number',
      id: 'length',
      label: 'Length',
      default: 10,
      min: 0,
      step: 0.1,
    },
    {
      type: 'number',
      id: 'width',
      label: 'Width',
      default: 12,
      min: 0,
      step: 0.1,
    },
  ],
  formulaId: 'squareFootage',
  outputs: [
    {
      id: 'squareFeet',
      label: 'Area (square feet)',
      format: 'decimal',
      decimals: 2,
      primary: true,
    },
    {
      id: 'squareMeters',
      label: 'Area (square meters)',
      format: 'decimal',
      decimals: 2,
    },
  ],
  formulaDisplay:
    'Area = length × width. 1 meter = 3.28084 feet, so 1 m² = 10.7639 ft². The calculator converts your input automatically.',
  explanation: `**Square footage** measures the area of a flat space — the number of 1-foot squares that fit inside it. It's the universal unit for real estate listings, flooring and paint jobs.

### The formula

    Square footage = length × width

Both dimensions must be in **feet**. If you measured in metres, multiply each by 3.28084 first (1 m = 3.28084 ft) — the calculator does this for you.

### Worked example

A room **10 ft × 12 ft**:

    Area = 10 × 12 = 120 square feet
    120 ÷ 10.7639 ≈ 11.15 square meters

### Quick conversions

- 1 ft² = 144 in²
- 1 m² = 10.7639 ft²
- 1 acre = 43,560 ft²
- 1 marla ≈ 272.25 ft² (India/Pakistan); 1 cent = 435.6 ft²

### Planning materials

- **Flooring** — order about 10% extra for cutting waste: 120 sq ft needs ~132 sq ft of tiles or planks.
- **Paint** — a gallon of paint covers roughly 350 sq ft per coat.
- **Rent / property** — Indian cities quote area in sq ft, sq m or "sq yards" (1 sq yd = 9 sq ft).

For a box's *volume* rather than a floor's *area*, use the [Cubic Feet Calculator](/math/cubic-feet-calculator/).
`,
  faq: [
    {
      question: 'How do I calculate square footage?',
      answer:
        'Multiply the length by the width, both in feet: a 10 ft × 12 ft room is 120 square feet. For metres, multiply by 3.28084 first to convert.',
    },
    {
      question: 'How many square feet is a square meter?',
      answer:
        'One square meter equals 10.7639 square feet. To convert, multiply square meters by 10.7639 (or divide square feet by 10.7639).',
    },
    {
      question: 'How much flooring do I need for a room?',
      answer:
        'Calculate the room area, then add about 10% for cutting waste and mistakes. A 120 sq ft room needs roughly 132 sq ft of tiles, planks or carpet.',
    },
    {
      question: 'How do I measure an L-shaped or irregular room?',
      answer:
        'Split it into rectangles, calculate each separately, and add the results. This calculator handles one rectangle at a time — total each section and sum them.',
    },
  ],
  relatedCalculators: ['cubic-feet-calculator', 'shipping-cost-calculator', 'percentage-calculator'],
  updated: '2026-08-15',
};

export default config;
