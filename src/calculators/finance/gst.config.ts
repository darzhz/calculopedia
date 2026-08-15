import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'gst-calculator',
  icon: 'receipt_long',
  category: 'finance',
  title: 'GST Calculator (India)',
  shortDescription:
    'Add GST to a price or extract GST from an inclusive amount, for 5%, 12%, 18% and 28% rates.',
  answer:
    'The GST calculator adds goods and services tax to an amount or extracts the GST component from a price that already includes it, for the Indian GST rates of 5%, 12%, 18% and 28%.',
  targetKeyword: 'gst calculator',
  keywords: [
    'gst calculator',
    'gst rate',
    'goods and services tax',
    'add gst',
    'gst inclusive price',
  ],
  inputs: [
    {
      type: 'number',
      id: 'amount',
      label: 'Amount',
      currency: true,
      default: 10000,
      min: 0,
      step: 100,
    },
    {
      type: 'select',
      id: 'gstRate',
      label: 'GST rate',
      options: [
        { value: '5', label: '5%' },
        { value: '12', label: '12%' },
        { value: '18', label: '18%' },
        { value: '28', label: '28%' },
      ],
      default: '18',
    },
    {
      type: 'select',
      id: 'mode',
      label: 'Calculation type',
      options: [
        { value: 'add', label: 'Add GST to amount' },
        { value: 'exclude', label: 'Extract GST from amount' },
      ],
      default: 'add',
      help: 'Extract = amount already includes GST',
    },
  ],
  formulaId: 'gst',
  outputs: [
    {
      id: 'gstAmount',
      label: 'GST amount',
      format: 'currency',
    },
    {
      id: 'total',
      label: 'Total (with GST)',
      format: 'currency',
      primary: true,
    },
    {
      id: 'baseAmount',
      label: 'Base amount (without GST)',
      format: 'currency',
    },
  ],
  formulaDisplay:
    'Add: GST = amount × rate/100, total = amount + GST. Extract: base = amount / (1 + rate/100), GST = amount − base.',
  explanation: `**GST (Goods and Services Tax)** is India's single indirect tax on the supply of goods and services. It replaced a tangle of earlier taxes (VAT, service tax, excise, octroi) when it launched in July 2017. GST is charged at four main rates depending on the item: **5%, 12%, 18% and 28%** (plus 0% and 3% for a few special goods).

### Two ways to use GST

**1. Add GST to a price (exclusive price):** if you sell at ₹10,000 plus 18% GST, the GST is ₹10,000 × 18% = ₹1,800 and the customer pays ₹11,800.

    GST = amount × rate / 100
    Total = amount + GST

**2. Extract GST from an inclusive price:** if the customer pays ₹11,800 and that price *already includes* 18% GST, the base is ₹11,800 / 1.18 = ₹10,000 and the GST is ₹1,800.

    Base = amount / (1 + rate / 100)
    GST = amount − base

### Which rate applies?

- **5%** — most packaged food, medicines, domestic LPG, rail/air economy
- **12%** — computers, processed food, business-class air travel
- **18%** — most services, telecom, restaurants, packaged consumer goods
- **28%** — luxury goods, cars, tobacco, aerated drinks (some also attract a cess)

When in doubt, ask your supplier or check the GST council rate schedule — the rate really depends on the specific HSN/SAC code of your item.
`,
  faq: [
    {
      question: 'How is GST calculated?',
      answer:
        'To add GST: GST = amount × rate ÷ 100, then add it to the amount. To extract GST from an inclusive price: base = amount ÷ (1 + rate ÷ 100), and GST = amount − base.',
    },
    {
      question: 'What are the GST rates in India?',
      answer:
        'India has four main GST rates: 5%, 12%, 18% and 28%, plus 0% and 3% for select items. Essential goods are taxed lower; luxury and sin goods are taxed higher.',
    },
    {
      question: 'Is GST included in the price I pay?',
      answer:
        'Usually yes. Most retail prices are GST-inclusive. If you need the pre-GST price, use the "Extract GST" mode of this calculator.',
    },
    {
      question: 'How do I claim GST input credit?',
      answer:
        'Registered businesses can claim a credit for the GST they pay on purchases, offset against the GST they collect on sales. This is what prevents GST from piling up across the supply chain.',
    },
  ],
  relatedCalculators: ['salary-calculator', 'percentage-calculator', 'gratuity-calculator'],
  updated: '2026-08-14',
};

export default config;
