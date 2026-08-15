import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'moles-calculator',
  icon: 'science',
  category: 'math',
  title: 'Moles Calculator (Chemistry)',
  shortDescription:
    'Convert between mass, moles and number of molecules for common chemical substances.',
  answer:
    'The moles calculator converts mass to moles using the molar mass, and shows the equivalent number of molecules using Avogadro\'s number.',
  targetKeyword: 'moles calculator',
  keywords: [
    'moles calculator',
    'molar mass calculator',
    'moles to grams',
    'how to calculate moles',
    'avogadro calculator',
  ],
  inputs: [
    {
      type: 'select',
      id: 'molecule',
      label: 'Substance',
      options: [
        { value: 'h2o', label: 'Water (H₂O) — 18.015 g/mol' },
        { value: 'nacl', label: 'Sodium chloride (NaCl) — 58.44 g/mol' },
        { value: 'o2', label: 'Oxygen (O₂) — 31.998 g/mol' },
        { value: 'co2', label: 'Carbon dioxide (CO₂) — 44.009 g/mol' },
        { value: 'c6h12o6', label: 'Glucose (C₆H₁₂O₆) — 180.156 g/mol' },
        { value: 'h2so4', label: 'Sulfuric acid (H₂SO₄) — 98.079 g/mol' },
        { value: 'naoh', label: 'Sodium hydroxide (NaOH) — 39.997 g/mol' },
        { value: 'custom', label: 'Custom' },
      ],
      default: 'h2o',
    },
    {
      type: 'number',
      id: 'mass',
      label: 'Mass',
      unit: 'grams',
      default: 18,
      min: 0,
      step: 0.1,
    },
    {
      type: 'number',
      id: 'customMolarMass',
      label: 'Molar mass',
      unit: 'g/mol',
      default: 40,
      min: 0,
      step: 0.001,
      showWhen: { field: 'molecule', value: 'custom' },
    },
  ],
  formulaId: 'moles',
  outputs: [
    {
      id: 'moles',
      label: 'Moles',
      format: 'decimal',
      decimals: 4,
      primary: true,
    },
    {
      id: 'molecules',
      label: 'Number of molecules',
      format: 'text',
    },
    {
      id: 'molarMass',
      label: 'Molar mass used',
      format: 'decimal',
      decimals: 3,
      note: 'g/mol',
    },
  ],
  formulaDisplay: 'Moles = mass ÷ molar mass. Molecules = moles × 6.022 × 10²³ (Avogadro\'s number).',
  explanation: `A **mole** is a counting unit in chemistry — just as a "dozen" means 12, a **mole** means **6.022 × 10²³** particles (atoms, molecules, etc.). This number is called **Avogadro's number**.

### The formula

    Moles = mass (grams) ÷ molar mass (g/mol)

For **18 grams of water (H₂O)**:

    Molar mass of H₂O = (2 × 1.008) + 15.999 = 18.015 g/mol
    Moles = 18 ÷ 18.015 ≈ 1.00 moles

### Molar mass

The **molar mass** is the mass of one mole of a substance, in grams per mole (g/mol). It equals the atomic or molecular weight from the periodic table.

| Substance | Formula | Molar mass |
| --- | --- | --- |
| Water | H₂O | 18.015 g/mol |
| Table salt | NaCl | 58.44 g/mol |
| Carbon dioxide | CO₂ | 44.009 g/mol |
| Glucose | C₆H₁₂O₆ | 180.156 g/mol |

### Number of molecules

    Molecules = moles × 6.022 × 10²³

1 mole of water = 6.022 × 10²³ molecules — about 18 grams or 18 mL.
`,
  faq: [
    {
      question: 'How do I calculate moles from grams?',
      answer:
        'Divide the mass in grams by the molar mass in g/mol. For 36g of water: 36 ÷ 18.015 ≈ 2.00 moles.',
    },
    {
      question: 'What is Avogadro\'s number?',
      answer:
        'Avogadro\'s number is 6.022 × 10²³ — the number of particles in one mole of any substance.',
    },
    {
      question: 'How do I find molar mass?',
      answer:
        'Add up the atomic masses of all atoms in the molecular formula. For H₂O: 2(1.008) + 15.999 = 18.015 g/mol.',
    },
  ],
  relatedCalculators: ['equivalent-weight-calculator', 'percentage-calculator'],
  updated: '2026-08-15',
};

export default config;
