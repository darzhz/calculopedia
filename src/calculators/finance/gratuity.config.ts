import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'gratuity-calculator',
  icon: 'redeem',
  category: 'finance',
  title: 'Gratuity Calculator (India)',
  shortDescription:
    'Estimate the gratuity you receive after 5+ years of service under the Indian Payment of Gratuity Act, 1972.',
  answer:
    'The gratuity calculator estimates the gratuity you receive after at least 5 years of continuous service, using 15/26 × last drawn basic + DA × completed years for employees covered by the Gratuity Act.',
  targetKeyword: 'gratuity calculator',
  keywords: ['gratuity calculator', 'gratuity act 1972', 'gratuity eligibility', '15/26 formula'],
  inputs: [
    {
      type: 'number',
      id: 'lastBasicDa',
      label: 'Last drawn basic + DA',
      currency: true,
      default: 40000,
      min: 0,
      step: 1000,
      help: 'Monthly basic salary plus dearness allowance',
    },
    {
      type: 'number',
      id: 'yearsOfService',
      label: 'Completed years of service',
      unit: 'years',
      default: 12,
      min: 0,
      max: 50,
      step: 1,
    },
    {
      type: 'toggle',
      id: 'coveredByAct',
      label: 'Covered by the Gratuity Act',
      default: true,
      help: 'Most employers covered by the Act use 15/26; others use 15/30',
    },
  ],
  formulaId: 'gratuity',
  outputs: [
    {
      id: 'gratuityAmount',
      label: 'Gratuity amount',
      format: 'currency',
      primary: true,
    },
    {
      id: 'gratuityText',
      label: 'How it was calculated',
      format: 'text',
    },
  ],
  formulaDisplay:
    'Gratuity = Last drawn basic+DA × completed years × 15 / 26 (Act-covered) or 15 / 30 (not covered), eligible only after 5+ years.',
  explanation: `**Gratuity** is a lump-sum payment your employer gives you when you leave a job after **at least 5 years of continuous service**, as a reward for your time there. It is governed by the **Payment of Gratuity Act, 1972**.

### The formula

For employees **covered by the Act**:

    Gratuity = Last drawn (basic + DA) × Completed years × 15 / 26

- 15 days of wages for each completed year of service
- The daily wage is the monthly wage divided by 26 (working days)

For employees **not covered** by the Act (some private employers), a common alternate formula uses 15/30 instead of 15/26.

### Worked example

Last drawn basic + DA = **₹40,000**, completed **12 years**, covered by the Act:

- Gratuity = 40,000 × 12 × 15 / 26 = **₹2,76,923**

### Eligibility rules

- You must complete **5 continuous years** of service (5 years 240 days for underground mines).
- "Continuous service" counts your entire period with the employer; resignations, retirements and most terminations all qualify.
- The Act's original ₹20 lakh cap was removed for many employees by the 2024 amendments, so large gratuities may no longer be capped — check current law for your case.

### Tax treatment

Under Section 10(10) of the Income-tax Act, gratuity received by government employees is fully exempt. For non-government employees covered by the Act, the exemption is the lowest of: the actual amount, ₹20 lakh, or the amount computed by the 15/26 formula. Anything above the exempt amount is taxable in the year you receive it.
`,
  faq: [
    {
      question: 'What is gratuity in India?',
      answer:
        'Gratuity is a lump-sum payment employers give employees after at least 5 years of continuous service, under the Payment of Gratuity Act, 1972.',
    },
    {
      question: 'How is gratuity calculated?',
      answer:
        'For employees covered by the Act, gratuity = last drawn basic + DA × completed years × 15/26. It is based on 15 days of wages for each completed year of service.',
    },
    {
      question: 'What happens if I leave before 5 years?',
      answer:
        'You are generally not eligible for gratuity if you leave before completing 5 years of continuous service. There is an exception: gratuity is payable on death or disability regardless of tenure.',
    },
    {
      question: 'Is gratuity taxable?',
      answer:
        'For non-government employees covered by the Act, gratuity is exempt up to the lowest of the actual amount, ₹20 lakh, or the 15/26 formula amount. The excess is taxable.',
    },
  ],
  relatedCalculators: ['salary-calculator', 'income-tax-calculator'],
  updated: '2026-08-14',
};

export default config;
