import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'take-home-pay-calculator',
  icon: 'payments',
  category: 'finance',
  title: 'Take-Home Pay Calculator',
  shortDescription:
    'Convert your annual gross salary to take-home pay after income tax, standard deduction and 4% cess — monthly and annual.',
  answer:
    'The take-home pay calculator subtracts your income tax, standard deduction and cess from your gross annual salary to show what you actually receive each month and each year.',
  targetKeyword: 'take home pay calculator',
  keywords: [
    'take home pay calculator',
    'calculate my take home pay',
    'salary calculator',
    'paycheck calculator',
    'net salary',
    'in hand salary',
  ],
  inputs: [
    {
      type: 'number',
      id: 'annualIncome',
      label: 'Gross annual salary',
      currency: true,
      default: 1200000,
      min: 0,
      step: 10000,
      help: 'Your CTC salary before tax and deductions',
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
      help: 'New regime has lower rates and a higher standard deduction but no most deductions',
    },
    {
      type: 'number',
      id: 'deductions',
      label: 'Deductions (80C, 80D, etc.)',
      currency: true,
      default: 150000,
      min: 0,
      step: 5000,
      showWhen: { field: 'regime', value: 'old' },
      help: 'Only available in the old regime',
    },
  ],
  formulaId: 'takeHomePay',
  outputs: [
    {
      id: 'netMonthly',
      label: 'Monthly take-home pay',
      format: 'currency',
      primary: true,
      note: 'After tax and cess',
    },
    {
      id: 'netAnnual',
      label: 'Annual take-home pay',
      format: 'currency',
    },
    {
      id: 'grossAnnual',
      label: 'Gross annual salary',
      format: 'currency',
    },
    {
      id: 'taxableIncome',
      label: 'Taxable income',
      format: 'currency',
      note: 'After standard deduction',
    },
    {
      id: 'taxTotal',
      label: 'Total tax & cess',
      format: 'currency',
    },
    {
      id: 'effectiveRate',
      label: 'Effective tax rate',
      format: 'percent',
      decimals: 1,
      note: 'Total tax ÷ gross salary',
    },
  ],
  formulaDisplay:
    'Taxable income = gross salary − standard deduction (₹75,000 new / ₹50,000 old) − deductions. Tax = slab tax + 4% cess. Take-home = gross − total tax.',
  explanation: `Your **take-home pay** (net salary) is what actually lands in your bank account after income tax. It is always less than your gross salary — and the gap is your effective tax burden.

### The steps

    1. Start with your gross annual salary.
    2. Subtract the standard deduction (₹75,000 new regime, ₹50,000 old).
    3. In the old regime, also subtract eligible deductions (80C, 80D, etc.).
    4. Apply the slab rates to the taxable amount.
    5. Add 4% health & education cess.
    6. Take-home = gross − total tax.

### Worked example

For a **₹12,00,000 gross salary in the new regime**:

- Standard deduction = ₹75,000 → taxable = ₹11,25,000
- Slab tax on ₹11,25,000 (new regime FY 2025-26) = ₹62,500
- Because taxable ≤ ₹12,00,000, the **87A rebate** wipes it to ₹0
- Total tax = ₹0 → **monthly take-home ≈ ₹1,00,000**

For a **₹15,00,000 salary**:

- Taxable = ₹14,25,000 → slab tax ₹93,750
- Cess 4% = ₹3,750 → total tax ₹97,500
- Annual take-home = ₹14,02,500 → **monthly ≈ ₹1,16,875**

### New vs old regime

- **New regime:** lower slab rates, ₹75,000 standard deduction, minimal deductions allowed.
- **Old regime:** higher slab rates, ₹50,000 standard deduction, but you can claim 80C, 80D, HRA, home-loan interest and more.

Run both through this calculator — for many taxpayers the new regime wins on salary income alone, but the old regime can pull ahead once deductions stack up.
`,
  faq: [
    {
      question: 'How do I calculate my take-home pay?',
      answer:
        'Start with your gross annual salary, subtract the standard deduction (₹75,000 new regime / ₹50,000 old), apply the slab rates, add 4% cess, and subtract the total from your gross salary.',
    },
    {
      question: 'What is the difference between gross salary and take-home pay?',
      answer:
        'Gross salary is your total compensation. Take-home pay is what remains after income tax and cess — the amount you actually receive. The calculator shows both.',
    },
    {
      question: 'Why is my take-home pay less than expected?',
      answer:
        'Income tax and cess are the main deductions. Some employers also deduct provident fund and professional tax on top. This calculator covers tax; for a full CTC breakdown, use the Salary Calculator.',
    },
    {
      question: 'Which tax regime gives higher take-home pay?',
      answer:
        'It depends on your deductions. The new regime usually wins with just salary income, while the old regime can win when you claim 80C, HRA, home-loan interest and other deductions. Compare both here.',
    },
  ],
  relatedCalculators: [
    'salary-calculator',
    'income-tax-calculator',
    'monthly-income-calculator',
    'hourly-rate-calculator',
  ],
  updated: '2026-08-15',
};

export default config;
