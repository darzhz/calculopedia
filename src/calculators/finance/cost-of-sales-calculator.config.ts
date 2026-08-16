import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'cost-of-sales-calculator',
  icon: 'receipt_long',
  category: 'finance',
  title: 'Cost of Sales Calculator',
  shortDescription:
    'Calculate the cost of goods sold (COGS) for your business from opening inventory, purchases and closing inventory.',
  answer:
    'Cost of sales (COGS) is what it costs you to make or buy the goods you sold, calculated as opening inventory + purchases − closing inventory.',
  targetKeyword: 'cost of sales calculator',
  keywords: [
    'cost of sales calculator',
    'how to calculate cost of sales',
    'cogs formula',
    'cost of goods sold',
    'inventory calculation',
  ],
  inputs: [
    {
      type: 'number',
      id: 'openingInventory',
      label: 'Opening inventory',
      currency: true,
      default: 200000,
      min: 0,
      step: 10000,
      help: 'Stock value at the start of the period',
    },
    {
      type: 'number',
      id: 'purchases',
      label: 'Purchases during the period',
      currency: true,
      default: 800000,
      min: 0,
      step: 10000,
      help: 'All stock bought or produced this period',
    },
    {
      type: 'number',
      id: 'closingInventory',
      label: 'Closing inventory',
      currency: true,
      default: 150000,
      min: 0,
      step: 10000,
      help: 'Stock value left at the end of the period',
    },
  ],
  formulaId: 'costOfSales',
  outputs: [
    {
      id: 'cogs',
      label: 'Cost of sales (COGS)',
      format: 'currency',
      primary: true,
      note: 'What your sold goods actually cost',
    },
    {
      id: 'availableForSale',
      label: 'Goods available for sale',
      format: 'currency',
      note: 'Opening inventory + purchases',
    },
    {
      id: 'opening',
      label: 'Opening inventory',
      format: 'currency',
    },
    {
      id: 'purchases',
      label: 'Purchases',
      format: 'currency',
    },
    {
      id: 'closing',
      label: 'Closing inventory',
      format: 'currency',
    },
  ],
  formulaDisplay:
    'COGS = opening inventory + purchases − closing inventory. Example: ₹2,00,000 + ₹8,00,000 − ₹1,50,000 = ₹8,50,000.',
  explanation: `**Cost of sales** — also called **cost of goods sold (COGS)** — is the direct cost of the products you sold during a period. Subtract it from revenue and you get **gross profit**, the first and most important profitability number for a business.

### The formula

    COGS = opening inventory + purchases − closing inventory

The logic is simple: everything you could have sold this period is what you started with plus what you bought, minus what you still have left.

### Example

A store opens the year with **₹2,00,000** of stock, buys **₹8,00,000** more, and ends with **₹1,50,000**:

    Available for sale = 2,00,000 + 8,00,000 = ₹10,00,000
    COGS = 10,00,000 − 1,50,000 = ₹8,50,000

So the goods that were actually sold cost **₹8,50,000**. If revenue was ₹12,00,000, gross profit = **₹3,50,000**.

### Why it matters

- **Gross margin** = (revenue − COGS) ÷ revenue. It shows how efficiently you buy and sell.
- **Tax** — COGS is a deductible business expense, so an accurate figure reduces taxable profit correctly.
- **Pricing** — you can't price profitably without knowing true unit cost.

> For service businesses, cost of sales is usually wages and materials directly tied to delivering the service — not rent or admin.
`,
  faq: [
    {
      question: 'How do I calculate cost of sales?',
      answer:
        'Use the formula: cost of sales = opening inventory + purchases − closing inventory. The result is the direct cost of the goods you sold in the period.',
    },
    {
      question: 'What is the difference between COGS and operating expenses?',
      answer:
        'COGS is the direct cost of producing or buying what you sell. Operating expenses (rent, marketing, admin) are indirect costs that keep the business running.',
    },
    {
      question: 'Why is cost of sales important?',
      answer:
        'It determines gross profit and gross margin — the core measure of how profitably you buy and sell — and it is a deductible expense for tax purposes.',
    },
  ],
  relatedCalculators: [
    'break-even-calculator',
    'markup-margin-calculator',
    'gst-calculator',
    'gratuity-calculator',
  ],
  updated: '2026-08-16',
};

export default config;