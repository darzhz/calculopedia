import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'social-security-calculator',
  icon: 'elderly',
  category: 'finance',
  title: 'Social Security Benefits Calculator',
  shortDescription:
    'Estimate your monthly US Social Security retirement benefit from your average indexed monthly earnings (AIME).',
  answer:
    "A Social Security benefits calculator estimates your monthly retirement benefit by running your average indexed monthly earnings (AIME) through the formula's bend points: 90% of the first portion, 32% of the next, and 15% above that.",
  targetKeyword: 'social security benefits calculator',
  keywords: [
    'social security calculator',
    'how to calculate social security benefits',
    'social security retirement benefit',
    'pia formula',
    'social security estimate',
  ],
  inputs: [
    {
      type: 'number',
      id: 'aime',
      label: 'Average Indexed Monthly Earnings',
      currency: true,
      default: 5000,
      min: 0,
      step: 100,
      help: 'Your 35 highest-earning years, adjusted for wage growth, divided by 420',
    },
  ],
  formulaId: 'socialSecurity',
  outputs: [
    {
      id: 'piaMonthly',
      label: 'Estimated monthly benefit (PIA)',
      format: 'currency',
      primary: true,
      note: 'Full retirement age benefit',
    },
    {
      id: 'piaAnnual',
      label: 'Annual benefit',
      format: 'currency',
    },
    {
      id: 'firstBend',
      label: 'First bend point',
      format: 'currency',
      note: '90% of earnings up to this',
    },
    {
      id: 'secondBend',
      label: 'Second bend point',
      format: 'currency',
      note: '32% of earnings between bend points',
    },
  ],
  formulaDisplay:
    'PIA = 90% × AIME up to the first bend point + 32% × AIME between bend points + 15% × AIME above the second bend point (2025 bend points).',
  explanation: `**Social Security** pays a monthly retirement benefit based on your lifetime earnings. The benefit is a **Primary Insurance Amount (PIA)**, computed from your **Average Indexed Monthly Earnings (AIME)** using a progressive formula.

### Step 1 — AIME

Take your **35 highest-earning years**, adjust each year's wages for average wage growth, and divide by **420 months**. That is your AIME. Zeroes fill in if you worked fewer than 35 years.

### Step 2 — the bend-point formula (2025)

    PIA = 90% × first part + 32% × second part + 15% × the rest

    First bend point:   $1,226
    Second bend point:  $7,392

For an **AIME of $5,000**:

    90% × 1,226        = $1,103.40
    32% × (5,000 − 1,226) = $1,207.68
    PIA                = $2,311.08/month

### Why it is progressive

Low earners get a **90% replacement** on their first dollars; high earners only **15%** on the amount above the second bend point. Social Security deliberately replaces a larger share of income for lower earners.

### Adjusting your benefit

- **Early** (age 62) — up to ~30% less than PIA.
- **Full retirement age** (67 for most) — exactly PIA.
- **Delayed** (up to 70) — ~8% more per year past full retirement age.

> This is an estimate using standard bend points. Use your actual earnings record at ssa.gov for a precise number.
`,
  faq: [
    {
      question: 'How are Social Security benefits calculated?',
      answer:
        'Your average indexed monthly earnings (AIME) from your 35 best years is run through bend points: 90% up to $1,226, 32% up to $7,392, and 15% above. That gives your PIA.',
    },
    {
      question: 'What is the Social Security bend point formula?',
      answer:
        'In 2025, the formula is 90% of AIME up to the first bend point ($1,226), 32% of AIME between the bend points, and 15% of AIME above $7,392.',
    },
    {
      question: 'What is my full retirement age?',
      answer:
        'For most people born in 1960 or later, it is 67. Claiming before it (from 62) reduces the benefit by up to 30%; delaying past it up to age 70 adds about 8% per year.',
    },
  ],
  relatedCalculators: [
    'magi-calculator',
    'income-tax-calculator',
    'take-home-pay-calculator',
    'gdp-calculator',
  ],
  updated: '2026-08-16',
};

export default config;