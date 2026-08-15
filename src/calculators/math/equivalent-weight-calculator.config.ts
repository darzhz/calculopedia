import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'equivalent-weight-calculator',
  icon: 'science',
  category: 'math',
  title: 'Equivalent Weight Calculator',
  shortDescription:
    'Calculate the equivalent weight of a substance from its molar mass and n-factor for chemistry calculations.',
  answer:
    'The equivalent weight calculator divides the molar mass by the n-factor (valency or charge) to give the mass that provides one equivalent of reactive capacity.',
  targetKeyword: 'equivalent weight calculator',
  keywords: [
    'equivalent weight calculator',
    'normality calculator',
    'n factor calculator',
    'molar mass to equivalent weight',
    'chemistry equivalent weight',
  ],
  inputs: [
    {
      type: 'select',
      id: 'substance',
      label: 'Substance',
      options: [
        { value: 'custom', label: 'Custom' },
        { value: 'hcl', label: 'HCl (Molar mass: 36.461, n-factor: 1)' },
        { value: 'naoh', label: 'NaOH (Molar mass: 39.997, n-factor: 1)' },
        { value: 'h2so4', label: 'H₂SO₄ (Molar mass: 98.079, n-factor: 2)' },
        { value: 'h3po4', label: 'H₃PO₄ (Molar mass: 97.994, n-factor: 3)' },
      ],
      default: 'h2so4',
    },
    {
      type: 'number',
      id: 'customMolarMass',
      label: 'Molar mass',
      unit: 'g/mol',
      default: 40,
      min: 0,
      step: 0.001,
      showWhen: { field: 'substance', value: 'custom' },
    },
    {
      type: 'number',
      id: 'nFactor',
      label: 'n-factor (valency)',
      default: 2,
      min: 0.1,
      step: 0.1,
      help: 'Number of replaceable H⁺ or OH⁻ ions',
      showWhen: { field: 'substance', value: 'custom' },
    },
  ],
  formulaId: 'equivalentWeight',
  outputs: [
    {
      id: 'equivalentWeight',
      label: 'Equivalent weight',
      format: 'decimal',
      decimals: 4,
      primary: true,
      note: 'g/eq',
    },
    {
      id: 'molarMass',
      label: 'Molar mass used',
      format: 'decimal',
      decimals: 3,
      note: 'g/mol',
    },
    {
      id: 'nFactor',
      label: 'n-factor used',
      format: 'decimal',
      decimals: 1,
    },
  ],
  formulaDisplay: 'Equivalent weight = Molar mass ÷ n-factor.',
  explanation: `**Equivalent weight** is the mass of a substance that provides one equivalent of reactive capacity — one mole of H⁺ ions for acids, one mole of OH⁻ ions for bases, or one mole of electrons for redox reactions.

### The formula

    Equivalent weight = Molar mass ÷ n-factor

The **n-factor** depends on the reaction:
- **Acids** — number of replaceable H⁺ ions (HCl = 1, H₂SO₄ = 2, H₃PO₄ = 3)
- **Bases** — number of replaceable OH⁻ ions (NaOH = 1, Ca(OH)₂ = 2)
- **Salts** — total positive or negative charge
- **Redox** — number of electrons transferred per molecule

### Worked example: H₂SO₄

    Molar mass = 98.079 g/mol
    n-factor = 2 (two H⁺ ions)
    Equivalent weight = 98.079 ÷ 2 = **49.040 g/eq**

### Equivalent weight vs molar mass

| Substance | Molar mass | n-factor | Equivalent weight |
| --- | --- | --- | --- |
| HCl | 36.461 | 1 | 36.461 |
| NaOH | 39.997 | 1 | 39.997 |
| H₂SO₄ | 98.079 | 2 | 49.040 |
| H₃PO₄ | 97.994 | 3 | 32.665 |

### Relationship to normality

    Normality = Molarity × n-factor
    Normality = Molarity × (Molar mass ÷ Equivalent weight)
`,
  faq: [
    {
      question: 'What is equivalent weight?',
      answer:
        'Equivalent weight is the molar mass divided by the n-factor. It represents the mass of a substance that provides one equivalent of reactive capacity (one H⁺, one OH⁻, or one electron).',
    },
    {
      question: 'How do I find the n-factor?',
      answer:
        'For acids: count the replaceable H⁺ ions (H₂SO₄ = 2). For bases: count the OH⁻ ions (Ca(OH)₂ = 2). For redox: count electrons transferred per molecule.',
    },
    {
      question: 'What is the difference between molar mass and equivalent weight?',
      answer:
        'Molar mass is the mass of one mole of a substance. Equivalent mass is the mass that provides one equivalent of reactive capacity. They are equal when the n-factor is 1.',
    },
  ],
  relatedCalculators: ['moles-calculator', 'dipole-moment-calculator'],
  updated: '2026-08-15',
};

export default config;
