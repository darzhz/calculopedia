import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'water-tank-capacity-calculator',
  icon: 'water',
  category: 'math',
  title: 'Water Tank Capacity Calculator',
  shortDescription:
    'Calculate the capacity of a rectangular or cylindrical water tank in liters, gallons and cubic meters.',
  answer:
    'The water tank calculator computes the volume of a rectangular or cylindrical tank and converts it to liters, gallons and cubic meters.',
  targetKeyword: 'water tank capacity calculator',
  keywords: [
    'water tank capacity calculator',
    'water tank volume',
    'tank size calculator',
    'liters calculator',
    'water storage calculator',
  ],
  inputs: [
    {
      type: 'select',
      id: 'shape',
      label: 'Tank shape',
      options: [
        { value: 'rectangular', label: 'Rectangular / Cuboid' },
        { value: 'cylindrical', label: 'Cylindrical / Round' },
      ],
      default: 'rectangular',
    },
    {
      type: 'number',
      id: 'length',
      label: 'Length',
      unit: 'cm',
      default: 100,
      min: 0,
      step: 1,
      showWhen: { field: 'shape', value: 'rectangular' },
    },
    {
      type: 'number',
      id: 'width',
      label: 'Width',
      unit: 'cm',
      default: 50,
      min: 0,
      step: 1,
      showWhen: { field: 'shape', value: 'rectangular' },
    },
    {
      type: 'number',
      id: 'diameter',
      label: 'Diameter',
      unit: 'cm',
      default: 60,
      min: 0,
      step: 1,
      showWhen: { field: 'shape', value: 'cylindrical' },
    },
    {
      type: 'number',
      id: 'height',
      label: 'Height',
      unit: 'cm',
      default: 60,
      min: 0,
      step: 1,
    },
  ],
  formulaId: 'waterTankCapacity',
  outputs: [
    {
      id: 'capacityLiters',
      label: 'Capacity',
      format: 'decimal',
      decimals: 2,
      primary: true,
      note: 'liters',
    },
    {
      id: 'capacityGallons',
      label: 'Capacity',
      format: 'decimal',
      decimals: 2,
      note: 'gallons (US)',
    },
    {
      id: 'capacityM3',
      label: 'Capacity',
      format: 'decimal',
      decimals: 3,
      note: 'cubic meters',
    },
  ],
  formulaDisplay:
    'Rectangular: V = L × W × H. Cylindrical: V = π × (D/2)² × H. Convert cm³ to liters by dividing by 1000.',
  explanation: `A **water tank capacity calculator** helps you figure out how much water a tank can hold based on its dimensions.

### Rectangular tank

    Volume = Length × Width × Height

A tank 100 cm × 50 cm × 60 cm:

    Volume = 100 × 50 × 60 = 3,00,000 cm³
    Liters = 3,00,000 ÷ 1000 = **300 liters**

### Cylindrical tank

    Volume = π × (diameter ÷ 2)² × height

A tank with diameter 60 cm and height 60 cm:

    Radius = 30 cm
    Volume = π × 30² × 60 = 1,69,646 cm³
    Liters = **169.65 liters**

### Common conversions

- 1 liter = 1000 cm³
- 1 liter = 0.264172 gallons (US)
- 1 cubic meter = 1000 liters

### Common tank sizes in India

| Type | Typical capacity |
| --- | --- |
| Overhead tank (residential) | 500–2000 liters |
| Underground sump | 2000–10,000 liters |
| Sintex tank | 500–5000 liters |
| Industrial tank | 10,000+ liters |
`,
  faq: [
    {
      question: 'How do I calculate water tank capacity?',
      answer:
        'For a rectangular tank: Length × Width × Height (in cm) ÷ 1000 = liters. For a cylindrical tank: π × radius² × height ÷ 1000 = liters.',
    },
    {
      question: 'How many liters is a 1000 liter tank?',
      answer:
        'A 1000-liter tank holds exactly 1000 liters (1 cubic meter) of water. That\'s approximately 264 US gallons.',
    },
    {
      question: 'What size water tank do I need?',
      answer:
        'A family of 4 typically needs 500–1000 liters per day. For storage, a 1000–2000 liter overhead tank is common for Indian households.',
    },
  ],
  relatedCalculators: ['cubic-feet-calculator', 'square-footage-calculator'],
  updated: '2026-08-15',
};

export default config;
