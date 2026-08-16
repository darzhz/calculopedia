import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'heloc-payment-calculator',
  icon: 'home',
  category: 'finance',
  title: 'HELOC Payment Calculator',
  shortDescription:
    'Estimate your Home Equity Line of Credit payment — interest-only or fully amortized — from your drawn balance, rate and term.',
  answer:
    'A HELOC payment calculator works out your monthly payment on the amount you have drawn from your home equity line of credit, either interest-only or amortized over the repayment term.',
  targetKeyword: 'heloc payment calculator',
  keywords: [
    'heloc payment calculator',
    'how to calculate heloc payment',
    'home equity line of credit payment',
    'heloc monthly payment',
    'heloc interest only payment',
  ],
  inputs: [
    {
      type: 'number',
      id: 'drawAmount',
      label: 'Amount drawn',
      currency: true,
      default: 50000,
      min: 1000,
      step: 1000,
      help: 'The balance you have actually used from your HELOC',
    },
    {
      type: 'number',
      id: 'annualRate',
      label: 'Annual interest rate',
      unit: '%',
      default: 8.5,
      min: 0,
      max: 30,
      step: 0.1,
    },
    {
      type: 'number',
      id: 'years',
      label: 'Repayment term',
      unit: 'years',
      default: 10,
      min: 1,
      max: 30,
      step: 1,
    },
    {
      type: 'toggle',
      id: 'interestOnly',
      label: 'Interest-only payment',
      default: true,
      help: 'HELOCs often allow interest-only payments during the draw period',
    },
  ],
  formulaId: 'heloc',
  outputs: [
    {
      id: 'monthlyPayment',
      label: 'Monthly payment',
      format: 'currency',
      primary: true,
      note: 'Interest-only or amortized',
    },
    {
      id: 'monthlyInterest',
      label: 'Monthly interest',
      format: 'currency',
    },
    {
      id: 'annualInterest',
      label: 'Annual interest',
      format: 'currency',
    },
    {
      id: 'totalInterest',
      label: 'Total interest over term',
      format: 'currency',
    },
  ],
  formulaDisplay:
    'Monthly interest = balance × (rate ÷ 12). Amortized payment = P × r ÷ (1 − (1 + r)⁻ⁿ) with r = monthly rate, n = months. Interest-only = just the monthly interest.',
  explanation: `A **HELOC** (Home Equity Line of Credit) lets you borrow against your home's equity. You only pay interest on what you actually draw, and payments are unusually flexible — often interest-only during the draw period.

### Interest-only payments

During the draw period (typically the first 5–10 years) you can often pay only the interest:

    Monthly interest = balance × (annual rate ÷ 12)

For **$50,000 drawn at 8.5%**:

    Monthly interest = 50,000 × 0.00708 ≈ $354/month

The balance stays flat — you are not paying down principal.

### Amortized payments

When the repayment period begins, your payment amortizes the remaining balance over the term:

    Payment = P × r ÷ (1 − (1 + r)⁻ⁿ)

With r = monthly rate and n = months. Same $50,000 over 10 years: roughly **$620/month**.

### Why HELOC rates feel low (and can bite)

HELOCs use **variable rates** tied to a benchmark (like SOFR or a bank's base rate). The teaser rate can rise sharply. Because it is secured by your home, falling behind on a HELOC puts the house at risk — so only draw what you can repay.

> This calculator is an estimate. Actual HELOC terms — draw period, rate caps, and payment structure — vary by lender.
`,
  faq: [
    {
      question: 'How is a HELOC payment calculated?',
      answer:
        'Interest-only: balance × monthly rate. Amortized: the standard loan payment formula P × r ÷ (1 − (1 + r)⁻ⁿ) over the repayment term. Your rate is usually variable.',
    },
    {
      question: 'Is a HELOC payment interest only?',
      answer:
        'Often, during the draw period, yes — you can pay only the interest, keeping the balance flat. After the draw period ends, payments amortize the principal too.',
    },
    {
      question: 'How much is the monthly payment on a $50,000 HELOC?',
      answer:
        'At 8.5% interest-only, about $354 per month. Amortized over 10 years, roughly $620 per month. The calculator shows both.',
    },
  ],
  relatedCalculators: [
    'mortgage-payment-calculator',
    'home-equity-calculator',
    'ltv-calculator',
    'interest-per-month-calculator',
  ],
  updated: '2026-08-16',
};

export default config;