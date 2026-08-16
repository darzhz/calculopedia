import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'credit-card-interest-calculator',
  icon: 'credit_card',
  category: 'finance',
  title: 'Credit Card Interest Calculator',
  shortDescription:
    'See how much interest your credit card charges each month and how long it takes to pay off your balance.',
  answer:
    'Credit card interest is charged daily on your outstanding balance at your annual rate divided by 365 (compounded monthly), and a calculator shows the monthly interest plus how long a fixed payment takes to clear the debt.',
  targetKeyword: 'credit card interest calculator',
  keywords: [
    'credit card interest calculator',
    'how to calculate credit card interest',
    'how to calculate interest on credit card',
    'credit card payoff',
    'credit card monthly interest',
  ],
  inputs: [
    {
      type: 'number',
      id: 'balance',
      label: 'Current balance',
      currency: true,
      default: 50000,
      min: 0,
      step: 1000,
    },
    {
      type: 'number',
      id: 'annualRate',
      label: 'Annual interest rate',
      unit: '%',
      default: 36,
      min: 0,
      max: 60,
      step: 1,
      help: 'Check your card statement — India cards commonly run 30–48%',
    },
    {
      type: 'number',
      id: 'monthlyPayment',
      label: 'Monthly payment',
      currency: true,
      default: 5000,
      min: 0,
      step: 500,
    },
  ],
  formulaId: 'creditCardInterest',
  outputs: [
    {
      id: 'monthlyInterest',
      label: 'Interest this month',
      format: 'currency',
      primary: true,
      note: "Before this month's payment",
    },
    {
      id: 'payoffPossible',
      label: 'Payoff possible?',
      format: 'text',
      note: 'Payment must exceed monthly interest',
    },
    {
      id: 'payoffMonths',
      label: 'Payoff time',
      format: 'number',
      note: 'Months with this payment',
    },
    {
      id: 'payoffYears',
      label: 'Payoff time',
      format: 'decimal',
      decimals: 1,
      note: 'Years',
    },
    {
      id: 'totalInterest',
      label: 'Total interest paid',
      format: 'currency',
      note: 'Over the full payoff',
    },
  ],
  formulaDisplay:
    'Monthly interest = balance × (annual rate ÷ 12). Payoff: simulate monthly interest minus payment until the balance reaches zero.',
  explanation: `**Credit cards** charge interest on any balance you don't pay in full by the due date. Rates are high — often **30–48% per year** in India — and the cost compounds quickly.

### How the interest is charged

Most cards charge interest **daily** but post it **monthly**. The daily rate is:

    Daily rate = annual rate ÷ 365

Your balance each day earns that fraction, and at month end it is added to your balance. From then on, **you pay interest on the interest** — that's compounding.

The quick monthly estimate is:

    Monthly interest = balance × (annual rate ÷ 12)

### Example

A **₹50,000** balance at **36% per year**:

    Monthly interest = 50,000 × 0.36 ÷ 12 = ₹1,500/month

If you pay **₹5,000/month**, each month the interest is added, then your payment is deducted:

    Month 1: 50,000 + 1,500 − 5,000 = ₹46,500
    Month 2: 46,500 + 1,395 − 5,000 = ₹42,895
    ... and so on until zero.

### The trap

If your payment is **less than the monthly interest**, the balance never shrinks — you pay interest forever. Your card's "minimum due" is often exactly this kind of payment. Paying it keeps you trapped in debt.

> Pay the full statement balance by the due date and you pay zero interest. If you can't, pay as much as possible and treat the card as closed.
`,
  faq: [
    {
      question: 'How do I calculate credit card interest?',
      answer:
        'Multiply your balance by the annual rate divided by 12 for the monthly interest: ₹50,000 at 36% = ₹1,500 per month. Cards compute it daily but bill monthly.',
    },
    {
      question: 'How long will it take to pay off my credit card?',
      answer:
        'The calculator simulates your balance each month: add interest, subtract payment, repeat until zero. If your payment is below the monthly interest, it never gets to zero.',
    },
    {
      question: 'Why does my minimum payment keep me in debt?',
      answer:
        'The minimum due is often close to the monthly interest, so almost none of it reduces the principal. The balance barely moves and the interest never stops.',
    },
  ],
  relatedCalculators: [
    'apr-calculator',
    'interest-per-month-calculator',
    'loan-emi-calculator',
    'compound-interest-calculator',
  ],
  updated: '2026-08-16',
};

export default config;