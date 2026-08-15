import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'creatinine-clearance-calculator',
  icon: 'monitor_heart',
  category: 'health',
  title: 'Creatinine Clearance Calculator',
  shortDescription:
    'Estimate creatinine clearance (CrCl) with the Cockcroft-Gault formula from age, weight, gender and serum creatinine.',
  answer:
    'The creatinine clearance calculator estimates CrCl in mL/min using the Cockcroft-Gault formula, an estimate of how well your kidneys filter waste, and categorises the result.',
  targetKeyword: 'creatinine clearance calculator',
  keywords: [
    'creatinine clearance calculator',
    'cockcroft gault',
    'crcl calculator',
    'kidney function',
    'creatinine clearance formula',
  ],
  inputs: [
    {
      type: 'number',
      id: 'age',
      label: 'Age',
      unit: 'years',
      default: 40,
      min: 18,
      max: 110,
      step: 1,
    },
    {
      type: 'select',
      id: 'gender',
      label: 'Gender',
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
      ],
      default: 'male',
    },
    {
      type: 'number',
      id: 'weight',
      label: 'Weight',
      unit: 'kg',
      default: 70,
      min: 30,
      max: 250,
      step: 0.5,
    },
    {
      type: 'number',
      id: 'serumCreatinine',
      label: 'Serum creatinine',
      unit: 'mg/dL',
      default: 1,
      min: 0.1,
      max: 15,
      step: 0.1,
    },
  ],
  formulaId: 'creatinineClearance',
  outputs: [
    {
      id: 'crCl',
      label: 'Creatinine clearance',
      format: 'decimal',
      decimals: 1,
      primary: true,
      note: 'Estimated mL/min',
    },
    {
      id: 'category',
      label: 'Kidney function',
      format: 'text',
      note: 'Based on CKD stages',
    },
  ],
  formulaDisplay:
    'CrCl = (140 − age) × weight(kg) ÷ (72 × serum creatinine mg/dL), multiplied by 0.85 for women.',
  explanation: `**Creatinine clearance (CrCl)** estimates how well your kidneys filter creatinine — a waste product of muscle metabolism. It's used to gauge kidney function and to dose drugs that are cleared by the kidneys.

### The Cockcroft-Gault formula

    Men:   CrCl = (140 − age) × weight(kg) ÷ (72 × serum creatinine mg/dL)
    Women: same result × 0.85

### Worked example

A **40-year-old man, 70 kg**, serum creatinine **1.0 mg/dL**:

    CrCl = (140 − 40) × 70 ÷ (72 × 1.0) = 7,000 ÷ 72 ≈ 97.2 mL/min

A 40-year-old woman with the same numbers:

    97.2 × 0.85 ≈ 82.6 mL/min

### Reading the result (CKD stages)

| CrCl (mL/min) | Kidney function |
| --- | --- |
| ≥ 90 | Normal |
| 60–89 | Mildly reduced |
| 30–59 | Moderately reduced |
| 15–29 | Severely reduced |
| < 15 | Kidney failure |

### Limitations

Cockcroft-Gault estimates creatinine clearance — it is not a direct measurement. Results are less accurate in very elderly, obese, or edematous patients, and other equations (MDRD, CKD-EPI) may be preferred. Always have results interpreted by a clinician.

> This tool is for general education and is not medical advice. Discuss any kidney-function results with your doctor.
`,
  faq: [
    {
      question: 'How is creatinine clearance calculated?',
      answer:
        'The Cockcroft-Gault formula estimates it: CrCl = (140 − age) × weight ÷ (72 × serum creatinine), multiplied by 0.85 for women. Results are in mL/min.',
    },
    {
      question: 'What is a normal creatinine clearance?',
      answer:
        'Normal is roughly 90 mL/min or above for adults. Values of 60–89 are mildly reduced, and below 60 suggests progressively more significant kidney impairment.',
    },
    {
      question: 'Why multiply by 0.85 for women?',
      answer:
        'Women typically have less muscle mass and therefore lower creatinine production, so the formula applies a 15% reduction to avoid overestimating their clearance.',
    },
    {
      question: 'Is creatinine clearance the same as GFR?',
      answer:
        'Not exactly. CrCl estimates creatinine filtration and is closely related to GFR, but modern practice often uses equations like CKD-EPI for estimated GFR. This calculator estimates CrCl only.',
    },
  ],
  relatedCalculators: ['bmi-calculator', 'maintenance-calories-calculator', 'age-calculator'],
  updated: '2026-08-15',
};

export default config;
