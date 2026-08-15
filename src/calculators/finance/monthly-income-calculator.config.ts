import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'monthly-income-calculator',
  icon: 'account_balance_wallet',
  category: 'finance',
  title: 'Monthly Income Calculator',
  shortDescription:
    'Convert hourly, daily, weekly, biweekly or annual income into monthly, weekly and annual figures — instantly.',
  answer:
    'The monthly income calculator converts your income from any pay frequency — hourly, daily, weekly, biweekly, monthly or annual — into a consistent monthly and annual figure.',
  targetKeyword: 'monthly income calculator',
  keywords: [
    'monthly income calculator',
    'how to calculate monthly income',
    'income converter',
    'hourly to monthly',
    'annual to monthly',
  ],
  inputs: [
    {
      type: 'number',
      id: 'amount',
      label: 'Income amount',
      currency: true,
      default: 100000,
      min: 0,
      step: 1000,
    },
    {
      type: 'select',
      id: 'frequency',
      label: 'Frequency',
      options: [
        { value: 'hourly', label: 'Hourly' },
        { value: 'daily', label: 'Daily' },
        { value: 'weekly', label: 'Weekly' },
        { value: 'biweekly', label: 'Biweekly (every 2 weeks)' },
        { value: 'monthly', label: 'Monthly' },
        { value: 'annually', label: 'Annually' },
      ],
      default: 'monthly',
    },
    {
      type: 'number',
      id: 'hoursPerWeek',
      label: 'Hours per week',
      unit: 'hours',
      default: 40,
      min: 1,
      max: 168,
      step: 1,
      showWhen: { field: 'frequency', value: 'hourly' },
      help: 'Only needed for hourly rates',
    },
  ],
  formulaId: 'monthlyIncome',
  outputs: [
    {
      id: 'monthlyIncome',
      label: 'Monthly income',
      format: 'currency',
      primary: true,
    },
    {
      id: 'annualIncome',
      label: 'Annual income',
      format: 'currency',
    },
    {
      id: 'weeklyIncome',
      label: 'Weekly income',
      format: 'currency',
    },
    {
      id: 'hourlyRate',
      label: 'Equivalent hourly rate',
      format: 'currency',
      note: 'Based on 40 hours/week',
    },
  ],
  formulaDisplay:
    'Monthly = (amount × periods per year) ÷ 12. Hourly → annual: amount × hours/week × 52. Daily → annual: × 260. Weekly × 52, biweekly × 26, monthly × 12.',
  explanation: `Knowing your true **monthly income** makes budgeting possible — but pay comes in many frequencies. This calculator converts them all to one consistent monthly figure.

### The conversion table

| Frequency | Periods per year | Annual = |
| --- | --- | --- |
| Hourly | — | rate × hours/week × 52 |
| Daily | 260 | daily × 260 |
| Weekly | 52 | weekly × 52 |
| Biweekly | 26 | biweekly × 26 |
| Monthly | 12 | monthly × 12 |
| Annually | 1 | the amount itself |

Then divide annual by 12 for the monthly figure.

### Worked example

**₹1,00,000 per month**:

    Annual = 1,00,000 × 12 = ₹12,00,000
    Weekly = 12,00,000 ÷ 52 ≈ ₹23,077

**₹800/hour, 40 hours/week**:

    Annual = 800 × 40 × 52 = ₹16,64,000
    Monthly = ₹16,64,000 ÷ 12 ≈ ₹1,38,667

### Why it matters

Lenders and landlords assess affordability on **monthly income**, budgets are built monthly, and comparing job offers means converting both sides to the same frequency. A monthly figure also feeds straight into debt-to-income and home-loan affordability checks.
`,
  faq: [
    {
      question: 'How do I calculate monthly income from an hourly rate?',
      answer:
        'Multiply your hourly rate by your weekly hours and by 52 to get annual income, then divide by 12: e.g. ₹800 × 40 × 52 ÷ 12 ≈ ₹1,38,667/month.',
    },
    {
      question: 'How do I calculate monthly income from annual salary?',
      answer:
        'Divide your annual salary by 12. An annual ₹12,00,000 is ₹1,00,000 per month before taxes and deductions.',
    },
    {
      question: 'How many pay periods are in a year?',
      answer:
        'Weekly = 52, biweekly = 26, semi-monthly = 24, and monthly = 12. Hourly and daily workers use hours/week × 52 and 260 working days respectively.',
    },
    {
      question: 'Should monthly income be gross or net?',
      answer:
        'For budgeting, use net (take-home). For loan affordability, lenders typically use gross. The calculator gives gross; subtract tax using the take-home pay calculator for a net view.',
    },
  ],
  relatedCalculators: [
    'take-home-pay-calculator',
    'hourly-rate-calculator',
    'debt-to-income-calculator',
    'salary-calculator',
  ],
  updated: '2026-08-15',
};

export default config;
