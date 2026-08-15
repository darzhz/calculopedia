import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'gold-value-calculator',
  icon: 'diamond',
  category: 'finance',
  title: 'Gold Value Calculator',
  shortDescription:
    'Work out the value of your gold jewellery by weight and purity (24k, 22k, 18k), including making charges.',
  answer:
    'The gold calculator estimates the value of your gold based on its weight, purity (24k, 22k or 18k) and the current price per gram, plus making charges.',
  targetKeyword: 'gold calculator',
  keywords: [
    'gold calculator',
    'gold price calculator',
    '22k gold',
    'gold rate',
    'gold jewellery value',
  ],
  inputs: [
    {
      type: 'number',
      id: 'weight',
      label: 'Gold weight',
      unit: 'grams',
      default: 20,
      min: 0,
      step: 0.5,
    },
    {
      type: 'select',
      id: 'purity',
      label: 'Purity',
      options: [
        { value: '24', label: '24k (99.9%)' },
        { value: '22', label: '22k (91.6%)' },
        { value: '18', label: '18k (75%)' },
      ],
      default: '22',
    },
    {
      type: 'number',
      id: 'pricePerGram',
      label: 'Price per gram',
      currency: true,
      default: 7250,
      min: 0,
      step: 10,
      help: 'Current market rate for the selected purity',
    },
    {
      type: 'number',
      id: 'makingPercent',
      label: 'Making charges',
      unit: '%',
      default: 8,
      min: 0,
      max: 30,
      step: 1,
      help: 'Typical jewellery making charges are 8–14%',
    },
  ],
  formulaId: 'gold',
  outputs: [
    {
      id: 'goldValue',
      label: 'Gold value',
      format: 'currency',
      note: 'Weight × price per gram',
    },
    {
      id: 'makingCharges',
      label: 'Making charges',
      format: 'currency',
    },
    {
      id: 'totalPayable',
      label: 'Total payable',
      format: 'currency',
      primary: true,
    },
  ],
  formulaDisplay:
    'Gold value = weight × price per gram; total = gold value × (1 + making charges % / 100).',
  explanation: `Gold in India is sold by **weight** and **purity**. Purity is measured in carats (k): **24k** is 99.9% pure gold, **22k** (91.6%) is the standard for jewellery because pure gold is too soft, and **18k** (75%) is common in studded or western-style pieces.

### How the value is worked out

    Gold value = weight (grams) × price per gram

For example, **20 grams of 22k gold at ₹7,250 per gram** has a gold value of:

    20 × 7,250 = ₹1,45,000

Jewellers then add **making charges** — a fee for crafting — typically 8% to 14% of the gold value, plus any GST. At 8%:

    Total = ₹1,45,000 × 1.08 = ₹1,56,600

### Making charges: the hidden cost

Making charges vary wildly by jeweller — from ~6% for plain bangles to 20%+ for intricate designs. Some jewellers quote "per gram" making charges instead of a percentage; both are just different ways to charge the same thing. Ask before you buy, because making charges are where jewellers make most of their margin.

### When you sell

When you sell gold back, most buyers pay only for the **gold value**, not the making charges you originally paid. So a "loss" at resale is partly the making charges + GST you can't recover. This is why comparing total cost (gold + making + GST) matters when buying jewellery.

### A note on rates

The price per gram changes daily with global gold prices and the rupee. This calculator lets you enter today's rate from your jeweller or a trusted gold-price source — it does not fetch live prices.
`,
  faq: [
    {
      question: 'How is gold price calculated?',
      answer:
        'Gold value = weight × price per gram for the chosen purity. Jewellers add making charges (typically 8–14%) and GST on top of the gold value.',
    },
    {
      question: 'What is 22k gold?',
      answer:
        '22k gold is 91.6% pure gold, the standard for jewellery in India. It is more durable than 24k (99.9%) pure gold, which is too soft for everyday wear.',
    },
    {
      question: 'Why do I lose money when selling gold jewellery?',
      answer:
        'Buyers usually pay only for the gold value, not the making charges and GST you paid. The difference is effectively a cost of buying new jewellery.',
    },
    {
      question: 'Does this calculator use live gold rates?',
      answer:
        "No. Gold rates change daily, so you enter today's price per gram. You can find current rates from major jewellers or gold-price trackers.",
    },
  ],
  relatedCalculators: ['percentage-calculator', 'income-tax-calculator'],
  updated: '2026-08-14',
};

export default config;
