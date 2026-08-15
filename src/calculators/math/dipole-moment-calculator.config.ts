import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'dipole-moment-calculator',
  icon: 'electric_bolt',
  category: 'math',
  title: 'Dipole Moment Calculator',
  shortDescription:
    'Calculate the electric dipole moment from charge and separation distance with unit conversion.',
  answer:
    'The dipole moment calculator multiplies charge by separation distance and converts the result to Debye or Coulomb-metres.',
  targetKeyword: 'dipole moment calculator',
  keywords: [
    'dipole moment calculator',
    'electric dipole',
    'dipole moment formula',
    'charge distance dipole',
    'debye calculator',
  ],
  inputs: [
    {
      type: 'number',
      id: 'charge',
      label: 'Charge',
      default: 1.6e-19,
      min: 0,
      step: 0.001,
    },
    {
      type: 'select',
      id: 'chargeUnit',
      label: 'Charge unit',
      options: [
        { value: 'coulombs', label: 'Coulombs (C)' },
        { value: 'e', label: 'Elementary charges (e)' },
      ],
      default: 'e',
    },
    {
      type: 'number',
      id: 'distance',
      label: 'Separation distance',
      default: 100,
      min: 0,
      step: 0.1,
    },
    {
      type: 'select',
      id: 'distanceUnit',
      label: 'Distance unit',
      options: [
        { value: 'pm', label: 'Picometres (pm)' },
        { value: 'angstroms', label: 'Ångströms (Å)' },
        { value: 'm', label: 'Metres (m)' },
      ],
      default: 'pm',
    },
  ],
  formulaId: 'dipoleMoment',
  outputs: [
    {
      id: 'dipoleMomentDebye',
      label: 'Dipole moment',
      format: 'decimal',
      decimals: 4,
      primary: true,
      note: 'Debye (D)',
    },
    {
      id: 'dipoleMomentCm',
      label: 'In C·m',
      format: 'text',
    },
  ],
  formulaDisplay: 'μ = q × d. 1 Debye ≈ 3.336 × 10⁻³⁰ C·m.',
  explanation: `The **electric dipole moment** (μ) measures the separation of positive and negative charges in a molecule. It tells you how polar a molecule is.

### The formula

    μ = q × d

Where:
- **q** = magnitude of charge (in Coulombs)
- **d** = separation distance (in metres)

### Units

- **Debye (D)** — the most common unit in chemistry. 1 D ≈ 3.336 × 10⁻³⁰ C·m
- **Coulomb-metre (C·m)** — the SI unit

### Worked example

For a molecule with **1 elementary charge** separated by **100 pm**:

    q = 1.602 × 10⁻¹⁹ C
    d = 100 × 10⁻¹² m = 10⁻¹⁰ m
    μ = 1.602 × 10⁻¹⁹ × 10⁻¹⁰ = 1.602 × 10⁻²⁹ C·m
    μ = 1.602 × 10⁻²⁹ ÷ 3.336 × 10⁻³⁰ ≈ **4.80 D**

### Common dipole moments

| Molecule | Dipole moment (D) |
| --- | --- |
| HF | 1.82 |
| H₂O | 1.85 |
| NH₃ | 1.47 |
| CO₂ | 0 (nonpolar) |
| CH₄ | 0 (nonpolar) |
| HCl | 1.08 |

A dipole moment of 0 means the molecule is nonpolar (symmetrical charge distribution).
`,
  faq: [
    {
      question: 'What is dipole moment?',
      answer:
        'Dipole moment (μ) is the product of charge and separation distance: μ = q × d. It measures how polar a molecule is — larger dipole moment means more polar.',
    },
    {
      question: 'What is 1 Debye equal to?',
      answer:
        '1 Debye (D) ≈ 3.336 × 10⁻³⁰ C·m. It\'s the standard unit for molecular dipole moments in chemistry.',
    },
    {
      question: 'How do I convert elementary charges to Coulombs?',
      answer:
        'Multiply by the elementary charge: 1 e = 1.602 × 10⁻¹⁹ C. So 2 elementary charges = 3.204 × 10⁻¹⁹ C.',
    },
  ],
  relatedCalculators: ['moles-calculator', 'equivalent-weight-calculator'],
  updated: '2026-08-15',
};

export default config;
