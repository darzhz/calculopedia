import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'hourly-rate-calculator',
  icon: 'schedule',
  category: 'finance',
  title: 'Hourly Rate Calculator',
  shortDescription:
    'Convert an annual salary to an hourly rate, and see daily, weekly and monthly equivalents for any work schedule.',
  answer:
    'The hourly rate calculator divides your annual salary by the hours you work per year (hours/week × weeks/year) to show your hourly, daily, weekly and monthly rates.',
  targetKeyword: 'hourly rate calculator',
  keywords: [
    'hourly rate calculator',
    'how to calculate hourly rate from annual salary',
    'salary to hourly',
    'annual to hourly',
    'hourly wage',
  ],
  inputs: [
    {
      type: 'number',
      id: 'annualSalary',
      label: 'Annual salary',
      currency: true,
      default: 1200000,
      min: 0,
      step: 10000,
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
    },
    {
      type: 'number',
      id: 'weeksPerYear',
      label: 'Weeks per year',
      unit: 'weeks',
      default: 52,
      min: 1,
      max: 52,
      step: 1,
      help: 'Subtract unpaid vacation weeks',
    },
  ],
  formulaId: 'hourlyRate',
  outputs: [
    {
      id: 'hourlyRate',
      label: 'Hourly rate',
      format: 'currency',
      primary: true,
      note: 'Annual ÷ (hours × weeks)',
    },
    {
      id: 'daily',
      label: 'Daily rate',
      format: 'currency',
      note: 'Based on an 8-hour day',
    },
    {
      id: 'weekly',
      label: 'Weekly rate',
      format: 'currency',
    },
    {
      id: 'monthly',
      label: 'Monthly rate',
      format: 'currency',
    },
    {
      id: 'hoursPerYear',
      label: 'Hours per year',
      format: 'number',
    },
  ],
  formulaDisplay:
    'Hourly rate = annual salary ÷ (hours per week × weeks per year). Daily ≈ hourly × 8. Weekly = annual ÷ weeks. Monthly = annual ÷ 12.',
  explanation: `Comparing a salaried offer with an hourly job requires converting one to the other. The bridge is your **hours per year**.

### The formula

    Hourly rate = annual salary ÷ (hours per week × weeks per year)

### Worked example

An annual salary of **₹12,00,000** at **40 hours/week, 52 weeks/year**:

    Hours per year = 40 × 52 = 2,080
    Hourly rate = 12,00,000 ÷ 2,080 ≈ ₹577/hour

That's roughly ₹4,615/day (8-hour day), ₹23,077/week and ₹1,00,000/month.

### Tuning the inputs

- **Weeks per year** — if you get 2 weeks of unpaid vacation, use 50, not 52. Your effective hourly rate is *higher* than the "standard" 2,080-hour figure.
- **Hours per week** — an employee working 45 hours/week on a 40-hour salary earns a lower effective hourly rate.
- **Daily rate** — the calculator assumes an 8-hour day; shift workers can scale the daily figure up or down.

### How to compare offers

1. Convert both offers to **hourly rate** on the same hours basis.
2. Add the value of paid time off, benefits and bonuses to the total.
3. Remember hourly workers often don't get paid leave — adjust for that.

A salaried ₹12,00,000 job with paid leave usually beats a ₹600/hour contract with unpaid gaps in between.
`,
  faq: [
    {
      question: 'How do I calculate my hourly rate from annual salary?',
      answer:
        'Divide your annual salary by your total working hours per year (hours per week × weeks per year). ₹12,00,000 ÷ (40 × 52) ≈ ₹577/hour.',
    },
    {
      question: 'What is the standard hours-per-year figure?',
      answer:
        'The standard full-time figure is 2,080 hours (40 × 52). If you take unpaid leave, use a lower weeks-per-year number for a more accurate hourly rate.',
    },
    {
      question: 'How do I convert hourly to annual salary?',
      answer:
        'Multiply your hourly rate by hours per week and by 52: ₹577 × 40 × 52 = ₹12,00,000. Remember to add paid leave and other benefits for a true comparison.',
    },
    {
      question: 'Is my hourly rate the same as my take-home pay per hour?',
      answer:
        'No. Your hourly rate is gross — income tax and deductions apply. Divide your monthly take-home pay (see the Take-Home Pay Calculator) by your monthly hours for a net hourly figure.',
    },
  ],
  relatedCalculators: [
    'monthly-income-calculator',
    'take-home-pay-calculator',
    'hours-worked-calculator',
    'salary-calculator',
  ],
  updated: '2026-08-15',
};

export default config;
