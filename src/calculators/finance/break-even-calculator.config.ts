import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'break-even-calculator',
  icon: 'balance',
  category: 'finance',
  title: 'Break-Even Point Calculator',
  shortDescription:
    'Find how many units you must sell — and at what revenue — to cover your fixed and variable costs.',
  answer:
    'The break-even point is the number of units you must sell so that revenue exactly covers fixed plus variable costs: units = fixed costs ÷ (price − variable cost per unit).',
  targetKeyword: 'break even point calculator',
  keywords: [
    'break even point calculator',
    'how to calculate break even point',
    'break even formula',
    'break even units',
    'break even revenue',
  ],
  inputs: [
    {
      type: 'number',
      id: 'fixedCosts',
      label: 'Fixed costs',
      currency: true,
      default: 500000,
      min: 0,
      step: 10000,
      help: "Rent, salaries, utilities — costs that don't change with sales",
    },
    {
      type: 'number',
      id: 'pricePerUnit',
      label: 'Selling price per unit',
      currency: true,
      default: 250,
      min: 1,
      step: 10,
    },
    {
      type: 'number',
      id: 'variableCostPerUnit',
      label: 'Variable cost per unit',
      currency: true,
      default: 150,
      min: 0,
      step: 10,
      help: 'Materials, packaging, per-unit labour',
    },
  ],
  formulaId: 'breakEven',
  outputs: [
    {
      id: 'breakEvenUnits',
      label: 'Break-even units',
      format: 'number',
      primary: true,
      note: 'Units to sell to cover all costs',
    },
    {
      id: 'breakEvenRevenue',
      label: 'Break-even revenue',
      format: 'currency',
    },
    {
      id: 'contributionMargin',
      label: 'Contribution per unit',
      format: 'currency',
      note: 'Price − variable cost',
    },
  ],
  formulaDisplay:
    'Break-even units = fixed costs ÷ (price − variable cost per unit). Break-even revenue = units × price.',
  explanation: `The **break-even point** is where your revenue exactly equals your costs — no profit, no loss. Sell more and you are profitable; sell less and you lose money.

### The formula

    Break-even units = fixed costs ÷ (price − variable cost per unit)

- **Fixed costs** — rent, salaries, utilities. They don't change with sales.
- **Variable costs** — materials, packaging, per-unit labour. They scale with every unit.
- **Contribution margin** = price − variable cost: the amount each unit contributes to covering fixed costs.

### Example

A bakery has **₹5,00,000** of fixed costs, sells cakes at **₹250** each, with **₹150** of variable costs per cake:

    Contribution = 250 − 150 = ₹100 per cake
    Break-even = 5,00,000 ÷ 100 = 5,000 cakes
    Break-even revenue = 5,000 × 250 = ₹12,50,000

The bakery must sell **5,000 cakes** (₹12,50,000 in sales) before it earns its first rupee of profit.

### How to improve break-even

- **Raise prices** — increases contribution per unit.
- **Cut variable costs** — better suppliers, less waste.
- **Lower fixed costs** — cheaper rent, smaller team.

A lower break-even means less risk: you need fewer sales just to survive.

> The model assumes every unit is sold at one price and costs stay linear — a simplification, but an excellent planning tool.
`,
  faq: [
    {
      question: 'How do I calculate the break-even point?',
      answer:
        'Divide fixed costs by the contribution margin: units = fixed costs ÷ (price − variable cost per unit). Multiply by price to get break-even revenue.',
    },
    {
      question: 'What does break-even mean in business?',
      answer:
        'It is the sales level where total revenue equals total costs. Below it you make a loss, above it you make a profit.',
    },
    {
      question: 'How can I lower my break-even point?',
      answer:
        'Increase the contribution margin (raise prices or cut variable costs) or reduce fixed costs. Either way you need fewer sales to become profitable.',
    },
  ],
  relatedCalculators: [
    'roi-calculator',
    'cost-of-sales-calculator',
    'markup-margin-calculator',
    'gst-calculator',
  ],
  updated: '2026-08-16',
};

export default config;