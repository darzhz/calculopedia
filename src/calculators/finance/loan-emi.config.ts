import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'loan-emi-calculator',
  icon: 'payments',
  category: 'finance',
  title: 'Loan EMI Calculator',
  shortDescription:
    'Calculate your monthly EMI, total interest and total payment for any home, car or personal loan — plus a full amortization schedule.',
  answer:
    'An EMI calculator works out your monthly loan instalment from the loan amount, interest rate and tenure, and shows the total interest you will pay over the life of the loan.',
  targetKeyword: 'emi calculator',
  keywords: [
    'emi calculator',
    'home loan emi calculator',
    'car loan emi calculator',
    'personal loan emi calculator',
    'loan repayment calculator',
    'monthly instalment',
  ],
  inputs: [
    {
      type: 'number',
      id: 'loanAmount',
      label: 'Loan amount',
      currency: true,
      default: 5000000,
      min: 1000,
      step: 1000,
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
      id: 'tenureYears',
      label: 'Tenure (years)',
      unit: 'years',
      default: 20,
      min: 0,
      max: 40,
      step: 1,
    },
    {
      type: 'number',
      id: 'tenureMonths',
      label: 'Extra months',
      unit: 'months',
      default: 0,
      min: 0,
      max: 11,
      step: 1,
    },
    {
      type: 'select',
      id: 'loanType',
      label: 'Loan type',
      options: [
        { value: 'home', label: 'Home loan' },
        { value: 'car', label: 'Car loan' },
        { value: 'personal', label: 'Personal loan' },
        { value: 'custom', label: 'Custom' },
      ],
      default: 'home',
      presets: {
        home: { loanAmount: 5000000, annualRate: 8.5, tenureYears: 20 },
        car: { loanAmount: 800000, annualRate: 9.5, tenureYears: 7 },
        personal: { loanAmount: 300000, annualRate: 11, tenureYears: 5 },
      },
      help: 'Applies typical rates and tenures for that loan type',
    },
  ],
  formulaId: 'emi',
  outputs: [
    {
      id: 'monthlyEmi',
      label: 'Monthly EMI',
      format: 'currency',
      primary: true,
      note: 'Your fixed monthly instalment',
    },
    {
      id: 'totalPayment',
      label: 'Total payment',
      format: 'currency',
      note: 'EMI × number of months',
    },
    {
      id: 'totalInterest',
      label: 'Total interest',
      format: 'currency',
    },
    {
      id: 'principalAmount',
      label: 'Principal amount',
      format: 'currency',
    },
    {
      id: 'amortization',
      label: 'Amortization schedule',
      format: 'table',
      note: 'Principal and interest paid each month',
    },
  ],
  formulaDisplay:
    'EMI = P × r × (1 + r)ⁿ / ((1 + r)ⁿ − 1), where P = loan amount, r = monthly interest rate (annual rate ÷ 12 ÷ 100), n = tenure in months.',
  explanation: `An **EMI (Equated Monthly Instalment)** is the fixed amount you pay your lender every month until the loan is fully repaid. Each EMI has two parts: the **principal** (the amount you borrowed) and the **interest** (the cost of borrowing).

### How the EMI formula works

The formula is:

    EMI = P × r × (1 + r)ⁿ / ((1 + r)ⁿ − 1)

- **P** is the loan amount (principal)
- **r** is the monthly interest rate — your annual rate divided by 12 and by 100
- **n** is the total number of monthly payments (years × 12)

Early in the loan, most of your EMI goes toward interest. Over time the balance falls, so a larger share of the EMI pays down the principal. The **amortization table** below the calculator shows this month by month: you can see exactly how much of each payment is interest and how much reduces what you owe.

### Worked example

For a **₹50,00,000 home loan at 8.5% for 20 years**:

- Monthly rate r = 8.5 / 12 / 100 = 0.00708
- n = 20 × 12 = 240 months
- EMI = 50,00,000 × 0.00708 × (1.00708)²⁴⁰ / ((1.00708)²⁴⁰ − 1) ≈ **₹43,391**

Over 240 months you pay ₹43,391 × 240 = ₹1,04,13,840 in total, of which ₹54,13,840 is interest. Notice that the interest — more than the loan amount itself — is why prepaying early saves so much.

### Tips

- A slightly lower rate or shorter tenure cuts the total interest dramatically. Try the sliders.
- Making **one extra EMI per year** or small monthly prepayments shortens the loan years and saves lakhs in interest.
- Compare offers using the same amount and tenure — the lowest rate wins, but watch for processing fees.
`,
  faq: [
    {
      question: 'What is an EMI?',
      answer:
        'EMI stands for Equated Monthly Instalment — the fixed amount you pay your lender every month to repay a loan, including both principal and interest.',
    },
    {
      question: 'How is EMI calculated?',
      answer:
        'EMI = P × r × (1 + r)ⁿ / ((1 + r)ⁿ − 1), where P is the loan amount, r is the monthly interest rate, and n is the tenure in months. This calculator does the math for you instantly.',
    },
    {
      question: 'Which banks have the best home loan interest rates?',
      answer:
        'Rates change frequently. As a general guide, SBI, HDFC and ICICI typically offer the lowest home-loan rates among large Indian banks. Always check the current rate and the processing fees before deciding. The interest rates in this calculator are defaults you can edit — they are not live rates.',
    },
    {
      question: 'How can I reduce the total interest on my loan?',
      answer:
        'Choose a shorter tenure, negotiate a lower rate, or make prepayments. Even a small annual prepayment shortens the loan and can save a substantial portion of the total interest.',
    },
  ],
  relatedCalculators: [
    'compound-interest-calculator',
    'sip-calculator',
    'income-tax-calculator',
    'salary-calculator',
  ],
  chart: 'amortization',
  updated: '2026-08-14',
};

export default config;
