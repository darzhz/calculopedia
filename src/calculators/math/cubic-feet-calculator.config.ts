import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'cubic-feet-calculator',
  icon: 'cube',
  category: 'math',
  title: 'Cubic Feet Calculator',
  shortDescription:
    'Calculate the volume of a box in cubic feet, cubic inches, cubic meters and liters from length, width and height.',
  answer:
    'The cubic feet calculator multiplies the length, width and height of a box (in feet, inches or centimetres) to give its volume in cubic feet and metric equivalents.',
  targetKeyword: 'cubic feet calculator',
  keywords: ['cubic feet calculator', 'how to calculate cubic feet', 'volume calculator', 'cubic feet to liters', 'cu ft'],
  inputs: [
    {
      type: 'select',
      id: 'unit',
      label: 'Measurement unit',
      options: [
        { value: 'ft', label: 'Feet' },
        { value: 'in', label: 'Inches' },
        { value: 'cm', label: 'Centimeters' },
      ],
      default: 'ft',
    },
    {
      type: 'number',
      id: 'length',
      label: 'Length',
      default: 2,
      min: 0,
      step: 0.1,
    },
    {
      type: 'number',
      id: 'width',
      label: 'Width',
      default: 2,
      min: 0,
      step: 0.1,
    },
    {
      type: 'number',
      id: 'height',
      label: 'Height',
      default: 3,
      min: 0,
      step: 0.1,
    },
  ],
  formulaId: 'cubicFeet',
  outputs: [
    {
      id: 'cubicFeet',
      label: 'Volume (cubic feet)',
      format: 'decimal',
      decimals: 2,
      primary: true,
    },
    {
      id: 'cubicInches',
      label: 'Volume (cubic inches)',
      format: 'number',
    },
    {
      id: 'cubicMeters',
      label: 'Volume (cubic meters)',
      format: 'decimal',
      decimals: 2,
    },
    {
      id: 'liters',
      label: 'Volume (liters)',
      format: 'number',
    },
  ],
  formulaDisplay:
    'Volume = length × width × height. 1 ft³ = 1,728 in³ = 0.0283 m³ = 28.317 liters. Inches: ÷ 12 per dimension; cm: ÷ 30.48 per dimension.',
  explanation: `**Cubic feet** measure volume — how much space a box, room, fridge or shipping carton takes up. It's length × width × height, all in the same unit.

### The formula

    Cubic feet = length × width × height

All three dimensions must be in **feet**. Convert inches by dividing by 12, and centimetres by dividing by 30.48 — the calculator handles this for you.

### Worked example

A box **2 ft × 2 ft × 3 ft**:

    Volume = 2 × 2 × 3 = 12 cubic feet

That's 12 × 1,728 = **20,736 cubic inches** and 12 × 28.317 ≈ **340 liters**.

### Quick conversions

| 1 cubic foot | equals |
| --- | --- |
| 1,728 in³ | cubic inches |
| 0.0283 m³ | cubic meters |
| 28.317 L | liters |

### Where it matters

- **Shipping** — couriers charge by dimensional weight (volume ÷ divisor), so box volume drives cost.
- **Storage** — how many moving boxes fit in a truck or unit.
- **Appliances** — refrigerator and freezer capacity is quoted in cubic feet.

To check a *floor* area rather than volume, use the [Square Footage Calculator](/math/square-footage-calculator/).
`,
  faq: [
    {
      question: 'How do I calculate cubic feet?',
      answer:
        'Multiply length × width × height, with all measurements in feet. For inches, divide each dimension by 12 first; for centimetres, divide by 30.48.',
    },
    {
      question: 'How many cubic feet is 1 cubic meter?',
      answer:
        '1 cubic meter equals about 35.3 cubic feet (1 m³ = 3.28084³ ft³). Conversely, 1 cubic foot is about 0.0283 cubic meters.',
    },
    {
      question: 'What is dimensional weight in shipping?',
      answer:
        'Carriers bill by volume for large light boxes: length × width × height ÷ a divisor (e.g. 139 for international). This calculator gives the volume you need for that calculation.',
    },
    {
      question: 'How many liters are in a cubic foot?',
      answer:
        'Exactly 28.317 liters. So a 12 cubic foot box holds about 340 liters — handy when comparing a fridge to a cooler or aquarium.',
    },
  ],
  relatedCalculators: ['square-footage-calculator', 'shipping-cost-calculator', 'gpa-calculator'],
  updated: '2026-08-15',
};

export default config;
