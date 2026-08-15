import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'income-tax-calculator',
  icon: 'calculate',
  category: 'finance',
  title: 'Income Tax Calculator (India)',
  shortDescription:
    'Estimate your Indian income tax under the new and old regimes, including 87A rebate and 4% cess, with a full slab breakdown.',
  answer:
    'The income tax calculator estimates how much income tax you owe in India under either the new or old regime, applying standard deduction, the 87A rebate and 4% health and education cess.',
  targetKeyword: 'income tax calculator',
  keywords: [
    'income tax calculator',
    'tax calculator',
    'new regime tax',
    'old regime tax',
    'income tax slabs',
  ],
  inputs: [
    {
      type: 'number',
      id: 'annualIncome',
      label: 'Annual income',
      currency: true,
      default: 1200000,
      min: 0,
      step: 10000,
      help: 'Gross salary plus other income',
    },
    {
      type: 'select',
      id: 'regime',
      label: 'Tax regime',
      options: [
        { value: 'new', label: 'New regime' },
        { value: 'old', label: 'Old regime' },
      ],
      default: 'new',
    },
    {
      type: 'number',
      id: 'deductions',
      label: 'Deductions (80C, 80D, etc.)',
      currency: true,
      default: 150000,
      min: 0,
      step: 1000,
      showWhen: { field: 'regime', value: 'old' },
      help: 'Old regime only — 80C, 80D, HRA and other deductions',
    },
  ],
  formulaId: 'incomeTax',
  outputs: [
    {
      id: 'taxableIncome',
      label: 'Taxable income',
      format: 'currency',
      note: 'After standard deduction',
    },
    {
      id: 'taxBeforeCess',
      label: 'Income tax',
      format: 'currency',
    },
    {
      id: 'cess',
      label: 'Health & education cess (4%)',
      format: 'currency',
    },
    {
      id: 'totalTax',
      label: 'Total tax payable',
      format: 'currency',
      primary: true,
    },
    {
      id: 'effectiveRate',
      label: 'Effective tax rate',
      format: 'percent',
    },
    {
      id: 'slabBreakdown',
      label: 'Slab breakdown',
      format: 'table',
    },
  ],
  formulaDisplay:
    'Tax = Σ over slabs of (income in slab × slab rate), minus 87A rebate if income ≤ limit; then add 4% cess. New-regime standard deduction: ₹75,000; old regime: ₹50,000.',
  explanation: `India's income tax applies **progressive slabs** — different portions of your income are taxed at different rates. How much you owe depends on which **regime** you choose. You can pick whichever gives you lower tax.

### The new regime (default since FY 2023-24)

No exemptions needed — lower rates, a flat ₹75,000 standard deduction, and income up to ₹12,00,000 is tax-free thanks to the 87A rebate:

| Slab | Rate |
| --- | --- |
| 0 – ₹4,00,000 | 0% |
| ₹4,00,001 – ₹8,00,000 | 5% |
| ₹8,00,001 – ₹12,00,000 | 10% |
| ₹12,00,001 – ₹16,00,000 | 15% |
| ₹16,00,001 – ₹20,00,000 | 20% |
| ₹20,00,001 – ₹24,00,000 | 25% |
| Above ₹24,00,000 | 30% |

### The old regime

You can claim deductions — Section 80C (up to ₹1.5 lakh), 80D (health insurance), HRA, home-loan interest and more. Rates: 0% up to ₹2.5 lakh, 5% up to ₹5 lakh, 20% up to ₹10 lakh, 30% above. The 87A rebate makes income up to ₹5,00,000 tax-free.

### How the calculator computes tax

1. Deduct the standard deduction (₹75,000 new / ₹50,000 old) and any 80C/80D-style deductions (old regime) to get **taxable income**.
2. Apply the slabs — tax each portion at its rate.
3. Apply the **87A rebate**: if taxable income is at or below the rebate limit (₹12 lakh new / ₹5 lakh old), tax becomes ₹0.
4. Add **4% health and education cess**.

### Worked example

Income of **₹12,00,000, new regime**:

- Taxable = 12,00,000 − 75,000 = ₹11,25,000
- Slab tax = 0 + 5% × 4,00,000 + 10% × 3,25,000 = ₹52,500
- Rebate 87A applies (income ≤ ₹12 lakh) → tax = **₹0**

Income of **₹15,00,000, new regime**:

- Taxable = ₹14,25,000
- Slab tax = 0 + 5% × 4,00,000 + 10% × 4,00,000 + 15% × 2,25,000 = ₹93,750
- Cess 4% = ₹3,750 → total ≈ **₹97,500**

> The slabs and rebate shown here are the latest available (FY 2025-26). Budget announcements can change them — this page is updated when they do.
`,
  faq: [
    {
      question: 'Which tax regime is better: new or old?',
      answer:
        'The old regime wins if you claim many deductions (80C, 80D, HRA, home-loan interest). The new regime wins if you have few deductions. Use this calculator for both to compare — and keep the lower one.',
    },
    {
      question: 'What are the income tax slabs for FY 2025-26?',
      answer:
        'Under the new regime: 0% up to ₹4 lakh, 5% to ₹8 lakh, 10% to ₹12 lakh, 15% to ₹16 lakh, 20% to ₹20 lakh, 25% to ₹24 lakh and 30% above. Income up to ₹12 lakh is tax-free via the 87A rebate.',
    },
    {
      question: 'What is the 87A rebate?',
      answer:
        'Section 87A lets you reduce your tax to zero if your taxable income is within the rebate limit — ₹12 lakh in the new regime and ₹5 lakh in the old regime.',
    },
    {
      question: 'Does the calculator include cess?',
      answer:
        'Yes. A 4% health and education cess is added to the income tax in the total shown. The calculator also shows it as a separate line.',
    },
  ],
  relatedCalculators: ['salary-calculator', 'gratuity-calculator', 'loan-emi-calculator'],
  updated: '2026-08-14',
};

export default config;
