import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'dog-years-calculator',
  icon: 'pets',
  category: 'fun',
  title: 'Dog Years Calculator',
  shortDescription:
    "Convert your dog's age into human years using the modern science-backed formula, adjusted for breed size.",
  answer:
    'Dog years are worked out with a modern formula — about 15 human years for the first year, 9 more for the second, then 4–7 per year depending on breed size — not the old "multiply by 7".',
  targetKeyword: 'dog years calculator',
  keywords: [
    'dog years calculator',
    'how to calculate dog years',
    'dog age in human years',
    'dog year formula',
    'puppy age calculator',
  ],
  inputs: [
    {
      type: 'number',
      id: 'age',
      label: "Your dog's age",
      unit: 'years',
      default: 5,
      min: 0,
      max: 25,
      step: 0.5,
    },
    {
      type: 'select',
      id: 'breedSize',
      label: 'Breed size',
      options: [
        { value: 'small', label: 'Small (under 10 kg)' },
        { value: 'medium', label: 'Medium (10–25 kg)' },
        { value: 'large', label: 'Large (25–40 kg)' },
        { value: 'giant', label: 'Giant (over 40 kg)' },
      ],
      default: 'medium',
      help: 'Larger breeds age faster after the second year',
    },
  ],
  formulaId: 'dogYears',
  outputs: [
    {
      id: 'humanYears',
      label: 'Human-equivalent age',
      format: 'decimal',
      decimals: 1,
      primary: true,
      note: 'By the modern formula',
    },
    {
      id: 'ageYears',
      label: "Dog's age",
      format: 'number',
      note: 'Years',
    },
    {
      id: 'stage',
      label: 'Life stage',
      format: 'text',
    },
  ],
  formulaDisplay:
    'Year 1 ≈ 15 human years, year 2 ≈ +9, then +4 (small) to +7 (giant) per year. Example: a 5-year-old medium dog ≈ 24 + 3×5 = 39.',
  explanation: `The old rule — "one dog year equals seven human years" — is wrong. Dogs mature far faster than that in their first two years, then the rate depends on size.

### The modern formula

    Year 1  → 15 human years
    Year 2  → +9 (so 24 at age 2)
    Year 3+ → +4 to +7 per year by breed size

| Breed size | Years added after age 2 |
| --- | --- |
| Small (<10 kg) | +4 |
| Medium (10–25 kg) | +5 |
| Large (25–40 kg) | +6 |
| Giant (>40 kg) | +7 |

### Example

A **5-year-old medium** dog:

    24 + (5 − 2) × 5 = 24 + 15 = 39 human years

A 5-year-old giant breed, however: 24 + 3 × 7 = **45**. Big dogs age faster.

### Why big dogs age faster

Larger breeds hit old age sooner — Great Danes are senior around 7, while a Chihuahua is still sprightly at 10. Their faster growth and higher metabolic stress take a toll on organs, joints and lifespan.

### DNA-level math

Scientists have even matched dogs to humans at the DNA level (epigenetic clocks). The pattern is close to the formula above: rapid early aging that flattens — and it confirms small breeds genuinely live longer.

> This is an approximation. Real aging varies with breed, health and care. Regular vet checks matter more than the number.
`,
  faq: [
    {
      question: 'How do you calculate dog years?',
      answer:
        'The modern formula counts the first year as about 15 human years, the second adds 9, and every year after adds 4–7 depending on breed size. The old multiply-by-7 rule is outdated.',
    },
    {
      question: 'Why is a dog year not 7 human years?',
      answer:
        'Dogs mature much faster early in life — a 1-year-old dog is physically like a 15-year-old human — and aging then slows. A flat ×7 underestimates puppy maturity and overestimates later aging.',
    },
    {
      question: 'Do big dogs age faster than small dogs?',
      answer:
        'Yes. Large and giant breeds are considered senior by age 6–7, while small breeds often live into their teens. This calculator adds more years per dog year for larger breeds.',
    },
  ],
  relatedCalculators: ['age-calculator', 'flames-calculator', 'mulank-calculator', 'life-path-number-calculator'],
  updated: '2026-08-16',
};

export default config;