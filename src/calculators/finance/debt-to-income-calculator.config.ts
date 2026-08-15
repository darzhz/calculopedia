import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'debt-to-income-calculator',
  icon: 'balance',
  category: 'finance',
  title: 'Debt to Income Ratio Calculator',
  shortDescription:
    'Calculate your debt-to-income ratio — monthly debt payments as a share of gross monthly income — and see how lenders view it.',
  answer:
    'The debt to income ratio calculator divides your monthly debt payments by your gross monthly income (DTI = debts ÷ income × 100) and shows whether lenders will consider it healthy.',
  targetKeyword: 'debt to income ratio calculator',
  keywords: [
    'debt to income ratio calculator',
    'how to calculate debt to income ratio',
    'dti calculator',
    'debt ratio',
    'loan affordability',
  ],
  inputs: [
    {
      type: 'number',
      id: 'annualIncome',
      label: 'Gross annual income',
      currency: true,
      default: 1200000,
      min: 0,
      step: 10000,
      help: 'Before tax, all sources',
    },
    {
      type: 'number',
      id: 'monthlyDebts',
      label: 'Monthly debt payments',
      currency: true,
      default: 30000,
      min: 0,
      step: 500,
      help: 'EMIs, credit card minimums, rent — all recurring obligations',
    },
  ],
  formulaId: 'debtToIncome',
  outputs: [
    {
      id: 'dti',
      label: 'Debt-to-income ratio',
      format: 'percent',
      decimals: 1,
      primary: true,
      note: 'Debts ÷ gross monthly income',
    },
    {
      id: 'grossMonthly',
      label: 'Gross monthly income',
      format: 'currency',
    },
    {
      id: 'monthlyDebts',
      label: 'Monthly debt payments',
      format: 'currency',
    },
    {
      id: 'remaining',
      label: 'Income left after debts',
      format: 'currency',
    },
    {
      id: 'category',
      label: 'Lender outlook',
      format: 'text',
    },
  ],
  formulaDisplay:
    'DTI = total monthly debt payments ÷ gross monthly income × 100. Gross monthly income = annual income ÷ 12.',
  explanation: `Your **debt-to-income (DTI) ratio** tells lenders how much of your income is already committed to debt — and therefore how much room you have for a new loan. It is the single most important number in mortgage and loan approval.

### The formula

    DTI = total monthly debt payments ÷ gross monthly income × 100

Include: loan EMIs, credit-card minimums, car loans, rent and alimony. Exclude utilities, insurance and groceries.

### Worked example

Gross annual income **₹12,00,000** (₹1,00,000/month) with **₹30,000/month** in debt payments:

    DTI = 30,000 ÷ 1,00,000 × 100 = 30%

### What lenders look for

| DTI | Outlook |
| --- | --- |
| Below 36% | Good — approvals are routine |
| 36–43% | Fair — at the typical mortgage ceiling |
| Above 43% | High — most lenders will say no |

### Lowering your DTI

- **Pay off high-EMI debts first** — a small personal loan cleared makes a big dent.
- **Increase income** — a promotion or side income lowers the ratio.
- **Avoid new credit** before applying for a home loan — even small EMIs move the number.

Your DTI also determines the **maximum EMI** a bank will sanction: at 36%, for example, a ₹1,00,000 monthly income allows up to ₹36,000 in total EMIs.
`,
  faq: [
    {
      question: 'How do I calculate my debt-to-income ratio?',
      answer:
        'Divide your total monthly debt payments (EMIs, credit cards, rent) by your gross monthly income and multiply by 100. Monthly income = annual income ÷ 12.',
    },
    {
      question: 'What is a good debt-to-income ratio?',
      answer:
        'Below 36% is considered good and generally passes loan approvals. Between 36–43% is the typical ceiling for mortgages, and above 43% will be difficult to approve.',
    },
    {
      question: 'What counts as debt in the DTI calculation?',
      answer:
        'Recurring obligations: loan EMIs, credit-card minimum payments, auto loans, rent and alimony. Not counted: utilities, groceries, insurance and discretionary spending.',
    },
    {
      question: 'How can I lower my DTI quickly?',
      answer:
        'Pay off smaller high-interest debts first, increase income, and avoid taking on new loans before a major application. Every reduction in monthly EMIs directly improves the ratio.',
    },
  ],
  relatedCalculators: ['loan-emi-calculator', 'mortgage-payment-calculator', 'monthly-income-calculator', 'car-payment-calculator'],
  updated: '2026-08-15',
};

export default config;
