import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'car-payment-calculator',
  icon: 'directions_car',
  category: 'finance',
  title: 'Car Payment Calculator',
  shortDescription:
    'Estimate your monthly car payment from the price, down payment, interest rate and loan term — with a full amortization schedule.',
  answer:
    'A car payment calculator estimates your monthly loan payment by dividing the financed amount (price minus down payment) across the loan term with interest, so you know your monthly cost before you buy.',
  targetKeyword: 'car payment calculator',
  keywords: [
    'car payment calculator',
    'calculate car payment',
    'auto payment calculator',
    'car loan calculator',
    'monthly car payment',
  ],
  inputs: [
    {
      type: 'number',
      id: 'carPrice',
      label: 'Car price',
      currency: true,
      default: 800000,
      min: 10000,
      step: 5000,
    },
    {
      type: 'number',
      id: 'downPayment',
      label: 'Down payment',
      currency: true,
      default: 150000,
      min: 0,
      step: 1000,
    },
    {
      type: 'number',
      id: 'annualRate',
      label: 'Annual interest rate',
      unit: '%',
      default: 9.5,
      min: 0,
      max: 30,
      step: 0.1,
    },
    {
      type: 'number',
      id: 'years',
      label: 'Loan term',
      unit: 'years',
      default: 5,
      min: 1,
      max: 8,
      step: 0.5,
    },
  ],
  formulaId: 'carPayment',
  outputs: [
    {
      id: 'monthlyPayment',
      label: 'Monthly payment',
      format: 'currency',
      primary: true,
      note: 'Your fixed monthly instalment',
    },
    {
      id: 'loanAmount',
      label: 'Amount financed',
      format: 'currency',
      note: 'Price minus down payment',
    },
    {
      id: 'totalInterest',
      label: 'Total interest',
      format: 'currency',
    },
    {
      id: 'totalCost',
      label: 'Total cost of the car',
      format: 'currency',
      note: 'Price + interest over the term',
    },
    {
      id: 'amortization',
      label: 'Amortization schedule',
      format: 'table',
      note: 'Principal and interest paid each month',
    },
  ],
  formulaDisplay:
    'Monthly payment = P × r × (1 + r)ⁿ / ((1 + r)ⁿ − 1), where P = price − down payment, r = monthly rate (annual ÷ 12 ÷ 100), n = months.',
  explanation: `A **car loan** works just like a home loan: you borrow the financed amount and repay it in fixed monthly payments (EMIs) that combine principal and interest.

### The formula

    Monthly payment = P × r × (1 + r)ⁿ / ((1 + r)ⁿ − 1)

- **P** = financed amount = car price − down payment
- **r** = monthly interest rate (annual rate ÷ 12 ÷ 100)
- **n** = number of months (years × 12)

### Worked example

For a **₹8,00,000 car with a ₹1,50,000 down payment**:

- P = 8,00,000 − 1,50,000 = ₹6,50,000
- r = 9.5 ÷ 12 ÷ 100 = 0.00792
- n = 5 × 12 = 60 months
- Payment = 6,50,000 × 0.00792 × (1.00792)⁶⁰ / ((1.00792)⁶⁰ − 1) ≈ **₹13,654/month**

Over 60 months that's ₹8,19,240 total, of which ₹1,69,240 is interest. The total cost of the car is price + interest = **₹9,69,240**.

### Tips

- A **bigger down payment** reduces the amount financed and the interest immediately — often more effective than a slightly lower rate.
- **Shorter terms** cost less interest but raise the monthly payment. Find the balance that fits your budget.
- Dealers sometimes quote rates on the full invoice price; always calculate on the actual financed amount.
`,
  faq: [
    {
      question: 'How is a car payment calculated?',
      answer:
        'Subtract your down payment from the car price to get the financed amount, then apply the EMI formula with your monthly interest rate and term: payment = P × r × (1 + r)ⁿ / ((1 + r)ⁿ − 1).',
    },
    {
      question: 'What is a good down payment for a car?',
      answer:
        'At least 20% of the car price is the common advice — it lowers your monthly payment and total interest, and helps avoid being "upside down" (owing more than the car is worth) early in the loan.',
    },
    {
      question: 'Should I choose a shorter or longer car loan?',
      answer:
        'A shorter loan means higher monthly payments but far less total interest. A longer loan lowers the monthly burden but costs more overall. Compare the total cost, not just the monthly figure.',
    },
    {
      question: 'Do car loan rates include fees?',
      answer:
        'No. The interest rate is separate from processing fees and insurance premiums. This calculator estimates principal and interest only — check the full loan offer for the all-in cost.',
    },
  ],
  relatedCalculators: [
    'loan-emi-calculator',
    'mortgage-payment-calculator',
    'interest-per-month-calculator',
    'compound-interest-calculator',
  ],
  chart: 'amortization',
  updated: '2026-08-15',
};

export default config;
