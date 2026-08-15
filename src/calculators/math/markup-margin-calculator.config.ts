import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'markup-margin-calculator',
  icon: 'storefront',
  category: 'math',
  title: 'Markup & Margin Calculator',
  shortDescription:
    'Work out the selling price from cost plus markup, and the resulting margin percentage.',
  answer:
    'The markup calculator adds a markup percentage to your cost to find the selling price, and shows both the markup amount and the resulting profit margin percentage.',
  targetKeyword: 'markup calculator',
  keywords: [
    'markup calculator',
    'margin calculator',
    'selling price',
    'profit margin',
    'cost plus',
  ],
  inputs: [
    {
      type: 'number',
      id: 'cost',
      label: 'Cost price',
      currency: true,
      default: 500,
      min: 0,
      step: 1,
    },
    {
      type: 'number',
      id: 'markupPercent',
      label: 'Markup',
      unit: '%',
      default: 20,
      min: 0,
      max: 1000,
      step: 1,
    },
  ],
  formulaId: 'markupMargin',
  outputs: [
    {
      id: 'sellingPrice',
      label: 'Selling price',
      format: 'currency',
      primary: true,
    },
    {
      id: 'markupAmount',
      label: 'Markup amount (profit)',
      format: 'currency',
    },
    {
      id: 'marginPercent',
      label: 'Profit margin',
      format: 'percent',
      decimals: 1,
      note: 'Profit as % of selling price',
    },
  ],
  formulaDisplay:
    'Selling price = cost × (1 + markup ÷ 100). Margin % = (selling − cost) ÷ selling × 100.',
  explanation: `Every business adds a **markup** to what it pays for goods to arrive at a **selling price**. The markup and the resulting **margin** sound similar but are two different ways to measure profit — and confusing them is a classic pricing mistake.

### The formulas

    Selling price = cost × (1 + markup ÷ 100)
    Markup amount = selling price − cost
    Margin % = markup amount ÷ selling price × 100

### Worked example

**Cost ₹500, markup 20%:**

    Selling price = 500 × 1.20 = ₹600
    Markup amount = ₹100
    Margin % = 100 ÷ 600 × 100 ≈ 16.7%

So a 20% markup on cost produces a **16.7% margin** on the selling price — the two numbers are not the same.

### Markup vs margin, the difference

- **Markup** is the profit *relative to cost*: "I add 20% on top of what I paid."
- **Margin** is the profit *relative to the selling price*: "20% of every rupee I charge is profit."

Because margin is a share of the price, it's always smaller than the equivalent markup. A 100% markup gives a 50% margin; a 25% markup gives a 20% margin. Retailers commonly say "we run at a 25% margin" — that means the selling price is cost ÷ 0.75.

### Everyday uses

- **Retail and e-commerce** — pricing products profitably
- **Freelancers and agencies** — adding a margin to resold services
- **Restaurants** — food-cost pricing (often a 60–70% markup on ingredients)
- **Check your quotes** — what margin is a supplier really earning?
`,
  faq: [
    {
      question: 'How do I calculate selling price from cost and markup?',
      answer:
        'Selling price = cost × (1 + markup ÷ 100). For a ₹500 cost with 20% markup: 500 × 1.20 = ₹600.',
    },
    {
      question: 'What is the difference between markup and margin?',
      answer:
        'Markup is profit as a percentage of cost; margin is profit as a percentage of selling price. For a 20% markup, the margin is about 16.7%.',
    },
    {
      question: 'How do I convert markup to margin?',
      answer:
        'Margin % = markup % ÷ (100 + markup %) × 100. A 25% markup equals 25 ÷ 125 × 100 = 20% margin.',
    },
  ],
  relatedCalculators: ['percentage-increase-calculator', 'percentage-calculator', 'gst-calculator'],
  updated: '2026-08-14',
};

export default config;
