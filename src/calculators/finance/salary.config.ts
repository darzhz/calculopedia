import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'salary-calculator',
  icon: 'account_balance_wallet',
  category: 'finance',
  title: 'Salary Calculator (CTC to In-Hand)',
  shortDescription:
    'Convert your CTC into monthly take-home salary, showing PF, professional tax and income-tax deductions.',
  answer:
    'The salary calculator converts your annual CTC into a monthly in-hand salary, breaking down employer PF, employee PF, professional tax and income tax for both the new and old regimes.',
  targetKeyword: 'salary calculator',
  keywords: [
    'salary calculator',
    'ctc calculator',
    'in hand salary',
    'take home salary',
    'salary breakup',
  ],
  inputs: [
    {
      type: 'number',
      id: 'ctc',
      label: 'Annual CTC',
      currency: true,
      default: 1200000,
      min: 0,
      step: 10000,
      help: 'Total cost to company per year',
    },
    {
      type: 'number',
      id: 'basicPercent',
      label: 'Basic salary (% of CTC)',
      unit: '%',
      default: 40,
      min: 0,
      max: 100,
      step: 1,
    },
    {
      type: 'number',
      id: 'yearsOfService',
      label: 'Years of service',
      unit: 'years',
      default: 0,
      min: 0,
      max: 50,
      step: 1,
      help: 'For gratuity accrual',
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
      label: 'Deductions (80C etc.)',
      currency: true,
      default: 150000,
      min: 0,
      step: 1000,
      showWhen: { field: 'regime', value: 'old' },
      help: 'Old regime only',
    },
  ],
  formulaId: 'salary',
  outputs: [
    {
      id: 'inHandMonthly',
      label: 'Monthly in-hand salary',
      format: 'currency',
      primary: true,
      note: 'What actually reaches your bank account',
    },
    {
      id: 'inHandAnnual',
      label: 'Annual in-hand salary',
      format: 'currency',
    },
    {
      id: 'grossMonthly',
      label: 'Gross monthly salary',
      format: 'currency',
      note: 'CTC minus employer PF and gratuity',
    },
    {
      id: 'employeePfMonthly',
      label: 'Employee PF (monthly)',
      format: 'currency',
    },
    {
      id: 'employerPfMonthly',
      label: 'Employer PF (monthly)',
      format: 'currency',
    },
    {
      id: 'taxMonthly',
      label: 'Income tax (monthly)',
      format: 'currency',
    },
    {
      id: 'ptMonthly',
      label: 'Professional tax (monthly)',
      format: 'currency',
    },
    {
      id: 'gratuityAnnual',
      label: 'Gratuity accrual (annual)',
      format: 'currency',
    },
  ],
  formulaDisplay:
    'In-hand = CTC − employer PF − gratuity accrual − employee PF − professional tax − income tax, spread over 12 months.',
  explanation: `**CTC (Cost To Company)** is the total your employer spends on you each year. It is **not** what lands in your bank. The gap between the two is explained by deductions that are part of your cost but not your take-home pay.

### The journey from CTC to in-hand

1. **Basic + HRA + special allowance** make up your salary structure. Basic is typically 40–50% of CTC — it matters because PF and gratuity are calculated on it.
2. **Employer PF** — 12% of basic (up to the ₹15,000/month wage cap) is paid by your employer and goes to your provident fund, not your salary.
3. **Gratuity accrual** — your employer sets aside ~4.81% of basic each year for your gratuity.
4. **Gross salary** = CTC − employer PF − gratuity accrual.
5. **Employee deductions** — your own 12% PF contribution, professional tax (about ₹200/month), and income tax.
6. **In-hand salary** = gross − employee PF − professional tax − income tax.

### Worked example

CTC = **₹12,00,000**, basic = 40% (₹4,80,000), new regime:

- Employer PF ≈ ₹21,600/yr; gratuity accrual ≈ ₹0 (under 5 years)
- Gross annual ≈ ₹11,78,400 → gross monthly ≈ ₹98,200
- Income tax ≈ ₹0/yr — the 87A rebate makes taxable income under ₹12 lakh tax-free
- Employee PF ≈ ₹1,800/month; professional tax ≈ ₹200/month
- **In-hand ≈ ₹96,200/month**

### Why your basic matters

A higher basic raises your PF and gratuity (good for long-term savings) but can push up tax. Your offer letter's salary breakup — especially the basic percentage — directly changes the numbers above. Some employers also deduct a special allowance or ESI (if your gross is under ₹21,000/month) which further reduces in-hand.
`,
  faq: [
    {
      question: 'What is the difference between CTC and in-hand salary?',
      answer:
        'CTC is the total your employer spends on you, including your salary, employer PF, gratuity and other benefits. In-hand salary is what actually reaches your bank after all deductions.',
    },
    {
      question: 'How is in-hand salary calculated from CTC?',
      answer:
        'Start from CTC, subtract employer PF and gratuity accrual to get gross, then subtract employee PF, professional tax and income tax. Divide by 12 for the monthly figure.',
    },
    {
      question: 'What percentage of basic is deducted for PF?',
      answer:
        "Both you and your employer contribute 12% of basic salary (capped at ₹15,000 monthly basic) to the Employees' Provident Fund.",
    },
    {
      question: 'Why is my in-hand lower than my offer letter says?',
      answer:
        'Offer letters usually quote CTC. Deductions like PF, professional tax and income tax are subtracted to arrive at take-home. Use this calculator with your actual CTC and breakup to verify.',
    },
  ],
  relatedCalculators: ['income-tax-calculator', 'gratuity-calculator', 'gst-calculator'],
  updated: '2026-08-14',
};

export default config;
