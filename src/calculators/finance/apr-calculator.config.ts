import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'apr-calculator',
  icon: 'percent',
  category: 'finance',
  title: 'APR Calculator',
  shortDescription:
    'Convert a loan interest rate plus fees into its true annual percentage rate (APR), with the monthly payment.',
  answer:
    'An APR calculator shows the true yearly cost of a loan by adding upfront fees to the interest rate, so you can compare loans honestly — APR = rate + fees spread over the loan term.',
  targetKeyword: 'apr calculator',
  keywords: [
    'apr calculator',
    'how to calculate apr',
    'annual percentage rate',
    'effective interest rate',
    'loan comparison rate',
  ],
  inputs: [
    {
      type: 'number',
      id: 'loanAmount',
      label: 'Loan amount',
      currency: true,
      default: 100000,
      min: 1000,
      step: 1000,
    },
    {
      type: 'number',
      id: 'annualRate',
      label: 'Stated interest rate',
      unit: '%',
      default: 8,
      min: 0,
      max: 40,
      step: 0.1,
    },
    {
      type: 'number',
      id: 'fees',
      label: 'Upfront fees',
      currency: true,
      default: 2000,
      min: 0,
      step: 100,
      help: 'Origination, processing, documentation fees',
    },
    {
      type: 'number',
      id: 'years',
      label: 'Loan term',
      unit: 'years',
      default: 5,
      min: 1,
      max: 30,
      step: 1,
    },
    {
      type: 'number',
      id: 'paymentsPerYear',
      label: 'Payments per year',
      unit: 'times',
      default: 12,
      min: 1,
      max: 12,
      step: 1,
    },
  ],
  formulaId: 'apr',
  outputs: [
    {
      id: 'apr',
      label: 'Annual Percentage Rate',
      format: 'percent',
      decimals: 2,
      primary: true,
      note: 'True yearly cost including fees',
    },
    {
      id: 'monthlyPayment',
      label: 'Monthly payment',
      format: 'currency',
    },
    {
      id: 'totalCost',
      label: 'Total cost of loan',
      format: 'currency',
      note: 'Payments + upfront fees',
    },
    {
      id: 'fees',
      label: 'Upfront fees',
      format: 'currency',
    },
  ],
  formulaDisplay:
    'APR ≈ stated rate + (2 × payments/year × fees) ÷ (loan × (total payments + 1)) × 100. Monthly payment uses the standard amortization formula.',
  explanation: `The **Annual Percentage Rate (APR)** is the true yearly cost of borrowing. The "rate" a lender quotes is just the interest; the **APR adds upfront fees**, so you can compare two loans with different fees and rates apples-to-apples.

### The concept

    APR ≈ stated rate + fees expressed as an extra yearly rate

### A practical approximation

    APR ≈ rate + (2 × m × F) ÷ (P × (N + 1)) × 100

- **m** = payments per year
- **F** = total upfront fees
- **P** = loan amount
- **N** = total number of payments

### Example

A **₹1,00,000 loan at 8%** with **₹2,000 fees** over **5 years** (60 payments):

    APR ≈ 8 + (2 × 12 × 2,000) ÷ (1,00,000 × 61) × 100
        ≈ 8 + 0.79 ≈ 8.79%

So although the rate reads "8%", you are really paying **8.79%** per year. The monthly payment is computed with the standard amortization formula on the loan.

### Why it matters

Comparing *rates* is misleading. Two loans at the same 8% can have very different APRs once fees are included — the loan with the lower APR is cheaper overall.

> This is an approximation. Regulators require lenders to disclose a precise APR computed with a stricter method.
`,
  faq: [
    {
      question: 'How do I calculate APR on a loan?',
      answer:
        'Add the effect of upfront fees to the stated interest rate: APR ≈ rate + (2 × payments/year × fees) ÷ (loan amount × (total payments + 1)) × 100.',
    },
    {
      question: 'What is the difference between APR and interest rate?',
      answer:
        'The interest rate is the cost of borrowing the principal only. APR adds upfront fees, so it reflects the true yearly cost — always compare APRs, not rates.',
    },
    {
      question: 'Is a lower APR always better?',
      answer:
        'Almost always, for comparable loans. A lower APR means lower true cost. Just make sure you are comparing the same term and loan amount.',
    },
  ],
  relatedCalculators: [
    'loan-emi-calculator',
    'interest-per-month-calculator',
    'compound-interest-calculator',
    'credit-card-interest-calculator',
  ],
  updated: '2026-08-16',
};

export default config;