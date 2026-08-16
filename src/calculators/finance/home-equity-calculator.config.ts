import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'home-equity-calculator',
  icon: 'savings',
  category: 'finance',
  title: 'Home Equity Calculator',
  shortDescription:
    'Find how much equity you have in your home — its value minus your mortgage balance — and your equity share.',
  answer:
    "Home equity is your home's value minus what you still owe on it: equity = home value − mortgage balance. It is the part of your home you actually own.",
  targetKeyword: 'home equity calculator',
  keywords: [
    'home equity calculator',
    'how to calculate home equity',
    'home equity loan',
    'equity in home',
    'home value minus mortgage',
  ],
  inputs: [
    {
      type: 'number',
      id: 'homeValue',
      label: 'Current home value',
      currency: true,
      default: 12000000,
      min: 100000,
      step: 100000,
      help: 'What your home is worth today, not what you paid',
    },
    {
      type: 'number',
      id: 'mortgageBalance',
      label: 'Mortgage balance',
      currency: true,
      default: 5000000,
      min: 0,
      step: 100000,
      help: 'What you still owe on your home loan',
    },
  ],
  formulaId: 'homeEquity',
  outputs: [
    {
      id: 'equity',
      label: 'Home equity',
      format: 'currency',
      primary: true,
      note: 'Value − mortgage balance',
    },
    {
      id: 'equityPercent',
      label: 'Equity share',
      format: 'percent',
      decimals: 1,
      note: 'Portion of the home you own',
    },
    {
      id: 'homeValue',
      label: 'Home value',
      format: 'currency',
    },
    {
      id: 'mortgageBalance',
      label: 'Mortgage balance',
      format: 'currency',
    },
  ],
  formulaDisplay:
    'Equity = home value − mortgage balance. Equity % = equity ÷ home value × 100. Example: ₹1.2 crore − ₹50 lakh = ₹70 lakh equity (58%).',
  explanation: `**Home equity** is the portion of your home you actually own, free and clear. It is one of the biggest assets most families have — and it grows in two ways.

### The formula

    Equity = home value − mortgage balance

A home worth **₹1,20,00,000** with a **₹50,00,000** mortgage balance:

    Equity = 1,20,00,000 − 50,00,000 = ₹70,00,000

That's **58%** of the home owned outright (equity ÷ value × 100).

### How equity grows

1. **Payments** — every EMI payment reduces principal, slowly raising equity.
2. **Appreciation** — when your home's market value rises, your equity rises with it. This is usually the bigger driver.

### What you can do with equity

- **Home equity loan** — borrow against equity as a lump sum, often at lower rates than personal loans.
- **HELOC** — a line of credit secured by equity, drawn as needed.
- **Refinance cash-out** — replace your mortgage with a bigger one and pocket the difference.

### Caution

Borrowing against equity is a secured loan — your **home is collateral**. Lenders typically limit borrowing so you keep at least 20% equity (an LTV of 80% or less). Only tap equity for needs that justify the risk.
`,
  faq: [
    {
      question: 'How do I calculate home equity?',
      answer:
        "Subtract your mortgage balance from your home's current market value: equity = home value − mortgage balance. The result is the portion of the home you own.",
    },
    {
      question: 'What is a good amount of home equity to have?',
      answer:
        'Lenders generally want you to keep at least 20% equity in the home. Having more equity improves your options and borrowing rates.',
    },
    {
      question: 'How can I build home equity faster?',
      answer:
        'Make extra principal payments on your mortgage, and watch the market value. Higher home prices and lower balances both raise equity.',
    },
  ],
  relatedCalculators: [
    'heloc-payment-calculator',
    'ltv-calculator',
    'mortgage-payment-calculator',
    'loan-emi-calculator',
  ],
  updated: '2026-08-16',
};

export default config;