import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'car-loan-interest-calculator',
  icon: 'directions_car',
  category: 'finance',
  title: 'Car Loan Interest Calculator',
  shortDescription:
    'Calculate the total interest, EMI and total payable amount for your car loan.',
  answer:
    'The car loan calculator computes the monthly EMI, total interest payable and total amount for a car loan based on the loan amount, interest rate and tenure.',
  targetKeyword: 'car loan interest calculator',
  keywords: [
    'car loan interest calculator',
    'car loan emi',
    'auto loan calculator',
    'vehicle loan interest',
    'car loan calculator',
  ],
  inputs: [
    {
      type: 'number',
      id: 'principal',
      label: 'Loan amount',
      currency: true,
      default: 800000,
      min: 10000,
      step: 10000,
    },
    {
      type: 'number',
      id: 'annualRate',
      label: 'Interest rate',
      unit: '%',
      default: 8.5,
      min: 0,
      max: 30,
      step: 0.1,
      help: 'Annual interest rate',
    },
    {
      type: 'number',
      id: 'tenure',
      label: 'Loan tenure',
      unit: 'years',
      default: 5,
      min: 1,
      max: 10,
      step: 1,
    },
  ],
  formulaId: 'carLoanInterest',
  outputs: [
    {
      id: 'monthlyEMI',
      label: 'Monthly EMI',
      format: 'currency',
      primary: true,
    },
    {
      id: 'totalInterest',
      label: 'Total interest payable',
      format: 'currency',
    },
    {
      id: 'totalAmount',
      label: 'Total amount payable',
      format: 'currency',
    },
  ],
  formulaDisplay:
    'EMI = P × r × (1+r)ⁿ ÷ ((1+r)ⁿ − 1), where P = principal, r = monthly rate, n = total months.',
  explanation: `A **car loan** is an amortising loan — you pay equal monthly instalments (EMI) that cover both principal and interest over the loan tenure.

### The formula

    EMI = P × r × (1 + r)ⁿ ÷ ((1 + r)ⁿ − 1)

Where:
- **P** = loan amount (principal)
- **r** = monthly interest rate (annual rate ÷ 12 ÷ 100)
- **n** = total months (years × 12)

### Worked example

**₹8,00,000** loan at **8.5%** for **5 years**:

    r = 8.5 ÷ 12 ÷ 100 = 0.007083
    n = 5 × 12 = 60
    EMI = 8,00,000 × 0.007083 × (1.007083)⁶⁰ ÷ ((1.007083)⁶⁰ − 1)
    EMI ≈ ₹16,468

    Total = 16,468 × 60 = ₹9,88,080
    Interest = 9,88,080 − 8,00,000 = **₹1,88,080**

### Tips to reduce car loan interest

- **Higher down payment** — reduces the principal, so less interest
- **Shorter tenure** — higher EMI but much less total interest
- **Prepayments** — even one extra payment per year can save lakhs
- **Compare rates** — public sector banks typically offer lower rates than private ones

### Fixed vs floating rate

- **Fixed rate** — stays the same throughout; predictable but usually 0.5–1% higher
- **Floating rate** — changes with market conditions (e.g., RBI repo rate); can go up or down
`,
  faq: [
    {
      question: 'How is car loan interest calculated?',
      answer:
        'Car loan interest uses the reducing balance method. The EMI formula is P × r × (1+r)ⁿ ÷ ((1+r)ⁿ − 1), where P is the loan amount, r is the monthly rate, and n is the number of months.',
    },
    {
      question: 'What is a good interest rate for a car loan?',
      answer:
        'In India, car loan rates typically range from 7.5% to 12% depending on the lender, your credit score and the loan tenure. Public sector banks usually offer lower rates.',
    },
    {
      question: 'How can I reduce my car loan interest?',
      answer:
        'Make a larger down payment, choose a shorter tenure, make prepayments when possible, and compare rates from multiple lenders before deciding.',
    },
  ],
  relatedCalculators: ['loan-emi-calculator', 'interest-per-month-calculator', 'car-payment-calculator'],
  updated: '2026-08-15',
};

export default config;
