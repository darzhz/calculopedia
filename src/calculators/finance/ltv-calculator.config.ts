import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'ltv-calculator',
  icon: 'real_estate_agent',
  category: 'finance',
  title: 'Loan-to-Value (LTV) Calculator',
  shortDescription:
    'Calculate your loan-to-value ratio — the percentage of your property you are borrowing — and what it means for your loan terms.',
  answer:
    'Loan-to-value (LTV) is your loan amount divided by the property value: LTV = loan ÷ value × 100. Lower LTV means less risk for the lender and better terms for you.',
  targetKeyword: 'ltv calculator',
  keywords: [
    'ltv calculator',
    'how to calculate ltv',
    'loan to value ratio',
    'ltv mortgage',
    'ltv refinance',
  ],
  inputs: [
    {
      type: 'number',
      id: 'loanAmount',
      label: 'Loan amount',
      currency: true,
      default: 8000000,
      min: 0,
      step: 100000,
    },
    {
      type: 'number',
      id: 'propertyValue',
      label: 'Property value',
      currency: true,
      default: 10000000,
      min: 1,
      step: 100000,
      help: 'Current market value or appraised value',
    },
  ],
  formulaId: 'ltv',
  outputs: [
    {
      id: 'ltv',
      label: 'Loan-to-value ratio',
      format: 'percent',
      decimals: 1,
      primary: true,
      note: "Share of the property you're borrowing",
    },
    {
      id: 'category',
      label: 'Risk category',
      format: 'text',
    },
    {
      id: 'maxLoan80',
      label: 'Max loan at 80% LTV',
      format: 'currency',
      note: 'Typical comfortable ceiling',
    },
  ],
  formulaDisplay: 'LTV = loan amount ÷ property value × 100. Example: ₹80,00,000 loan on a ₹1,00,00,000 home = 80% LTV.',
  explanation: `**Loan-to-value (LTV)** compares how much you are borrowing to what the property is worth. It is the single most important number for lenders pricing a home loan.

### The formula

    LTV = loan amount ÷ property value × 100

Borrow **₹80,00,000** against a home worth **₹1,00,00,000**:

    LTV = 80,00,000 ÷ 1,00,00,000 × 100 = 80%

### What LTV means to lenders

| LTV | What it means |
| --- | --- |
| ≤ 60% | Low risk — best rates, easy approval |
| 60–80% | Standard home-loan territory |
| 80–90% | Higher risk — may need insurance |
| > 90% | Very high risk — tough to refinance |

The lower your LTV, the more the lender can recover if things go wrong — so they reward you with lower rates. A **down payment** is simply the tool that pushes LTV down: 20% down = 80% LTV.

### Using it

- **Buying** — your down payment sets your starting LTV. Most lenders cap LTV at 80–90% for a home loan.
- **Refinancing** — an LTV above 80% usually means **no cash-out refinance** and higher rates.

> This is a simple two-input calculation. Actual products may cap the maximum loan based on your income and other debts too.
`,
  faq: [
    {
      question: 'How do I calculate LTV?',
      answer:
        'Divide your loan amount by the property value and multiply by 100: LTV = loan ÷ value × 100. A ₹80 lakh loan on a ₹1 crore home is 80% LTV.',
    },
    {
      question: 'What is a good LTV ratio?',
      answer:
        'Below 80% is the standard comfort zone for home loans — under 60% earns the best rates. Above 90% is high risk and hard to refinance.',
    },
    {
      question: 'How does a down payment affect LTV?',
      answer:
        'A larger down payment lowers your loan, which lowers LTV. A 20% down payment gives an 80% LTV — the typical threshold for the best terms.',
    },
  ],
  relatedCalculators: [
    'home-equity-calculator',
    'heloc-payment-calculator',
    'mortgage-payment-calculator',
    'loan-emi-calculator',
  ],
  updated: '2026-08-16',
};

export default config;