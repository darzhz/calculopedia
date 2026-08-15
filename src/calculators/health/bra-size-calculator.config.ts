import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'bra-size-calculator',
  icon: 'checkroom',
  category: 'health',
  title: 'Bra Size Calculator',
  shortDescription:
    'Find your bra size from just two tape measurements — underbust and bust — using the US modern or traditional +4 method.',
  answer:
    'The bra size calculator converts your underbust and bust measurements into a band size and cup letter, using either the modern method (round band to nearest even) or the traditional +4 method.',
  targetKeyword: 'bra size calculator',
  keywords: ['bra size calculator', 'how to calculate bra size', 'bra measurement', 'bra fit', 'sister sizes'],
  inputs: [
    {
      type: 'select',
      id: 'unit',
      label: 'Measurement unit',
      options: [
        { value: 'in', label: 'Inches' },
        { value: 'cm', label: 'Centimeters' },
      ],
      default: 'in',
    },
    {
      type: 'number',
      id: 'underbust',
      label: 'Underbust (band)',
      unit: 'in',
      default: 31,
      min: 20,
      max: 55,
      step: 0.5,
      help: 'Measure snugly around the ribcage, right under the bust',
    },
    {
      type: 'number',
      id: 'bust',
      label: 'Bust',
      unit: 'in',
      default: 36,
      min: 25,
      max: 65,
      step: 0.5,
      help: 'Measure around the fullest part of the bust',
    },
    {
      type: 'select',
      id: 'method',
      label: 'Sizing method',
      options: [
        { value: 'modern', label: 'Modern (round to nearest even)' },
        { value: 'traditional', label: 'Traditional (+4 inches)' },
      ],
      default: 'modern',
    },
  ],
  formulaId: 'braSize',
  outputs: [
    {
      id: 'braSize',
      label: 'Your bra size',
      format: 'text',
      primary: true,
      note: 'Band + cup',
    },
    {
      id: 'bandSize',
      label: 'Band size',
      format: 'number',
    },
    {
      id: 'cupLetter',
      label: 'Cup letter',
      format: 'text',
    },
    {
      id: 'cupDifference',
      label: 'Cup difference',
      format: 'decimal',
      decimals: 1,
      note: 'Bust − band, in inches',
    },
  ],
  formulaDisplay:
    'Band = underbust rounded to nearest even (modern) or +4/+5 (traditional). Cup = bust − band, mapped to a letter: ~1" = A, 2" = B, 3" = C, 4" = D.',
  explanation: `Finding a bra size only needs **two measurements** and a little arithmetic.

### The two measurements

- **Underbust** — snug around the ribcage, directly under the bust. This gives the **band** number.
- **Bust** — around the fullest part of the bust. This sets the **cup**.

### Step 1 — the band

**Modern method:** round your underbust to the nearest even number. Underbust 31" → band **32**.

**Traditional method (+4):** add 4 (or 5 if the rounded number is odd) to the underbust. Underbust 31" → 31 + 5 = **36**. Older sizing guides still use this; modern bras fit better with the rounded-even method.

### Step 2 — the cup

The cup is the **difference** between bust and band:

| Difference | Cup |
| --- | --- |
| < 1" | AA |
| 1" | A |
| 2" | B |
| 3" | C |
| 4" | D |
| 5" | DD |
| 6" | DDD / F |
| 7"+ | G and beyond |

### Worked example

Underbust **31"**, bust **36"**, modern method:

    Band = 32
    Difference = 36 − 32 = 4" → D cup
    Bra size = 32D

### Sister sizes

Sizes shift together: **32D** ≈ **34C** ≈ **30DD**. If a 32D is snug in the band but loose in the cup, try 34C. Fit is king — treat any calculated size as a starting point, and get fitted in person when you can.
`,
  faq: [
    {
      question: 'How do I calculate my bra size?',
      answer:
        'Round your underbust to the nearest even number for the band, subtract it from your bust measurement, and map the difference to a cup letter (1" = A, 2" = B, 3" = C, 4" = D).',
    },
    {
      question: 'What is the difference between the modern and +4 methods?',
      answer:
        'The modern method rounds the underbust to the nearest even number. The traditional +4 method adds 4–5 inches to the underbust. Modern bras generally fit better with the modern method.',
    },
    {
      question: 'What are sister sizes?',
      answer:
        'Sister sizes are adjacent sizes that fit the same cup volume — 32D, 34C and 30DD all hold the same cup. If one size is snug in the band, try a sister size.',
    },
    {
      question: 'Why does my size differ between brands?',
      answer:
        'Sizing varies by brand and country (US vs UK vs EU scales differ). Use this calculator as a starting point and always check each brand\u2019s fit guide.',
    },
  ],
  relatedCalculators: ['bmi-calculator', 'ideal-weight-calculator', 'body-fat-percentage-calculator'],
  updated: '2026-08-15',
};

export default config;
