import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'discount-calculator',
  icon: 'local_offer',
  category: 'math',
  title: 'Discount Calculator',
  shortDescription:
    'Find the final price after a discount and see exactly how much you save.',
  answer:
    'The discount calculator subtracts a percentage from the original price to show the discounted price and the amount you save.',
  targetKeyword: 'discount calculator',
  keywords: [
    'discount calculator',
    'percentage off calculator',
    'sale price calculator',
    'how to calculate discount',
    'markdown calculator',
  ],
  inputs: [
    {
      type: 'number',
      id: 'originalPrice',
      label: 'Original price',
      currency: true,
      default: 2000,
      min: 0,
      step: 1,
    },
    {
      type: 'number',
      id: 'discountPercent',
      label: 'Discount',
      unit: '%',
      default: 25,
      min: 0,
      max: 100,
      step: 1,
    },
  ],
  formulaId: 'discount',
  outputs: [
    {
      id: 'discountAmount',
      label: 'Discount amount',
      format: 'currency',
    },
    {
      id: 'finalPrice',
      label: 'Final price',
      format: 'currency',
      primary: true,
    },
    {
      id: 'savingsText',
      label: 'Savings',
      format: 'text',
    },
  ],
  formulaDisplay: 'Final price = Original price × (1 − discount ÷ 100). Savings = Original price − Final price.',
  explanation: `A **discount** is a reduction from the original price. To calculate a 25% discount on ₹2,000:

### The formula

    Final price = Original price × (1 − discount ÷ 100)
    Final price = 2,000 × (1 − 25 ÷ 100)
    Final price = 2,000 × 0.75 = ₹1,500

You save **₹500**.

### Quick mental math

- **10% off** → divide by 10 and subtract (₹2,000 − ₹200 = ₹1,800)
- **25% off** → divide by 4 and subtract (₹2,000 − ₹500 = ₹1,500)
- **50% off** → divide by 2 (₹2,000 → ₹1,000)
- **33% off** → divide by 3 and subtract

### Successive discounts

Two successive discounts of 10% and 20% are NOT the same as 30% off. The second discount applies to the already-reduced price:

    ₹2,000 × 0.90 = ₹1,800 (after 10%)
    ₹1,800 × 0.80 = ₹1,440 (after 20%)
    Total discount = 28%, not 30%

### GST on discounted price

In India, GST is calculated on the **discounted price**, not the original. So on a ₹1,500 item at 18% GST:

    GST = ₹1,500 × 0.18 = ₹270
    Final price = ₹1,500 + ₹270 = ₹1,770
`,
  faq: [
    {
      question: 'How do I calculate 20% off?',
      answer:
        'Multiply the original price by 0.80 (which is 1 − 0.20). For a ₹1,000 item: ₹1,000 × 0.80 = ₹800.',
    },
    {
      question: 'How do I calculate the discount amount?',
      answer:
        'Multiply the original price by the discount percentage and divide by 100. For 25% off ₹2,000: 2,000 × 25 ÷ 100 = ₹500.',
    },
    {
      question: 'Are two 10% discounts the same as 20% off?',
      answer:
        'No. Two successive 10% discounts give 19% off total (0.9 × 0.9 = 0.81), not 20%. The second discount applies to the already-reduced price.',
    },
  ],
  relatedCalculators: ['percentage-calculator', 'percentage-decrease-calculator', 'gst-calculator'],
  updated: '2026-08-15',
};

export default config;
