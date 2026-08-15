import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'mortgage-payment-calculator',
  icon: 'home',
  category: 'finance',
  title: 'Mortgage Payment Calculator',
  shortDescription:
    'Estimate your monthly mortgage payment including principal, interest, property tax, home insurance and PMI — with a full amortization schedule.',
  answer:
    'A mortgage calculator estimates your monthly payment by amortizing the loan over its term with interest, then adding property tax, insurance and PMI to give the true all-in monthly cost.',
  targetKeyword: 'mortgage calculator',
  keywords: [
    'mortgage calculator',
    'mortgage payment calculator',
    'how to calculate mortgage payment',
    'home loan payment',
    'monthly mortgage payment',
  ],
  inputs: [
    {
      type: 'number',
      id: 'homePrice',
      label: 'Home price',
      currency: true,
      default: 350000,
      min: 10000,
      step: 5000,
    },
    {
      type: 'number',
      id: 'downPayment',
      label: 'Down payment',
      currency: true,
      default: 70000,
      min: 0,
      step: 1000,
      help: 'Below 20% usually triggers private mortgage insurance',
    },
    {
      type: 'number',
      id: 'annualRate',
      label: 'Annual interest rate',
      unit: '%',
      default: 6.5,
      min: 0,
      max: 25,
      step: 0.1,
    },
    {
      type: 'number',
      id: 'years',
      label: 'Loan term',
      unit: 'years',
      default: 30,
      min: 5,
      max: 40,
      step: 1,
    },
    {
      type: 'number',
      id: 'annualTax',
      label: 'Annual property tax',
      currency: true,
      default: 3000,
      min: 0,
      step: 100,
      help: 'Roughly 0.5–1% of home value, depending on location',
    },
    {
      type: 'number',
      id: 'annualInsurance',
      label: 'Annual home insurance',
      currency: true,
      default: 1200,
      min: 0,
      step: 50,
    },
    {
      type: 'toggle',
      id: 'includePmi',
      label: 'Include PMI',
      default: true,
      help: 'Private mortgage insurance applies when your down payment is below 20%',
    },
    {
      type: 'number',
      id: 'pmiRate',
      label: 'PMI rate',
      unit: '%',
      default: 1,
      min: 0,
      max: 3,
      step: 0.1,
      showWhen: { field: 'includePmi', value: 'true' },
      help: 'Typically 0.5–1.5% of the loan per year',
    },
  ],
  formulaId: 'mortgage',
  outputs: [
    {
      id: 'totalMonthly',
      label: 'Total monthly payment',
      format: 'currency',
      primary: true,
      note: 'Principal + interest + tax + insurance + PMI',
    },
    {
      id: 'monthlyPI',
      label: 'Principal & interest',
      format: 'currency',
      note: 'The loan payment itself',
    },
    {
      id: 'monthlyTax',
      label: 'Monthly property tax',
      format: 'currency',
    },
    {
      id: 'monthlyInsurance',
      label: 'Monthly insurance',
      format: 'currency',
    },
    {
      id: 'monthlyPmi',
      label: 'Monthly PMI',
      format: 'currency',
      note: 'Only when down payment is under 20%',
    },
    {
      id: 'totalInterest',
      label: 'Total interest',
      format: 'currency',
    },
    {
      id: 'amortization',
      label: 'Amortization schedule',
      format: 'table',
    },
  ],
  formulaDisplay:
    'Monthly P&I = P × r × (1 + r)ⁿ / ((1 + r)ⁿ − 1), where P = price − down payment, r = monthly rate, n = months. Add tax/12 + insurance/12 + PMI (if down < 20%).',
  explanation: `A **mortgage** is a long-term home loan repaid in fixed monthly payments. The two biggest parts of the math are the **amortization** of the loan and the **escrow** items added on top.

### Principal & interest

    Monthly P&I = P × r × (1 + r)ⁿ / ((1 + r)ⁿ − 1)

- **P** = price − down payment
- **r** = annual rate ÷ 12 ÷ 100
- **n** = months (years × 12)

### Escrow: tax, insurance and PMI

Your lender collects the **annual property tax** and **home insurance** in monthly chunks (annual ÷ 12) and pays them for you. If your down payment is under **20%**, lenders also add **private mortgage insurance (PMI)** — roughly 0.5–1.5% of the loan per year — until you reach 20% equity.

### Worked example

A **$350,000 home, $70,000 down (20%), 6.5%, 30 years**:

- P = $280,000, r = 0.00542, n = 360 → P&I ≈ **$1,770/month**
- Property tax $3,000/yr = $250/month; insurance $1,200/yr = $100/month
- 20% down → no PMI
- **Total ≈ $2,120/month**

### Rule of thumb

Keep the total mortgage payment under **28% of gross monthly income** — that's the classic affordability ceiling lenders use.
`,
  faq: [
    {
      question: 'How is a mortgage payment calculated?',
      answer:
        'Amortize the loan with the payment formula P × r × (1 + r)ⁿ / ((1 + r)ⁿ − 1), then add monthly property tax, home insurance and PMI (if your down payment is under 20%).',
    },
    {
      question: 'What is PMI and when does it go away?',
      answer:
        'Private mortgage insurance protects the lender when your down payment is under 20%. It typically drops off automatically once you reach 20% equity in the home.',
    },
    {
      question: 'How much house can I afford?',
      answer:
        'A common rule is to keep the total monthly payment at or below 28% of your gross monthly income. This calculator shows the all-in payment so you can test different prices.',
    },
    {
      question: 'Is a 15-year or 30-year mortgage better?',
      answer:
        'A 15-year term has higher monthly payments but much less total interest. A 30-year term is more affordable monthly but roughly doubles the interest paid over the life of the loan.',
    },
  ],
  relatedCalculators: ['car-payment-calculator', 'loan-emi-calculator', 'interest-per-month-calculator', 'debt-to-income-calculator'],
  chart: 'amortization',
  updated: '2026-08-15',
};

export default config;
