import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'real-gdp-calculator',
  icon: 'monitoring',
  category: 'finance',
  title: 'Real GDP Calculator',
  shortDescription:
    'Convert nominal GDP into real GDP using the GDP deflator — measuring output after stripping out price changes.',
  answer:
    'Real GDP is nominal GDP adjusted for price changes using the GDP deflator: Real GDP = Nominal GDP ÷ Deflator × 100, and it measures actual production growth, not just price rises.',
  targetKeyword: 'real gdp calculator',
  keywords: [
    'real gdp calculator',
    'how to calculate real gdp',
    'real gdp formula',
    'gdp deflator',
    'nominal vs real gdp',
  ],
  inputs: [
    {
      type: 'number',
      id: 'nominalGdp',
      label: 'Nominal GDP',
      currency: true,
      default: 240000000000000,
      min: 0,
      step: 1000000000000,
      help: 'GDP at current prices',
    },
    {
      type: 'number',
      id: 'deflator',
      label: 'GDP deflator',
      unit: '',
      default: 120,
      min: 1,
      max: 1000,
      step: 1,
      help: 'Price index of the base year = 100',
    },
  ],
  formulaId: 'realGdp',
  outputs: [
    {
      id: 'realGdp',
      label: 'Real GDP',
      format: 'currency',
      primary: true,
      note: 'GDP at constant (base-year) prices',
    },
    {
      id: 'nominal',
      label: 'Nominal GDP',
      format: 'currency',
    },
    {
      id: 'deflator',
      label: 'GDP deflator',
      format: 'number',
    },
    {
      id: 'difference',
      label: 'Nominal − Real (price effect)',
      format: 'currency',
      note: 'The part of growth that was just inflation',
    },
  ],
  formulaDisplay: 'Real GDP = Nominal GDP ÷ GDP deflator × 100. Example: deflator 120 → real GDP = nominal ÷ 1.2.',
  explanation: `**GDP** is the total value of everything a country produces. But there are two versions — **nominal** and **real** — and the difference is price changes.

### Nominal vs real

- **Nominal GDP** — output valued at *current* prices. It rises when output grows *or* when prices rise.
- **Real GDP** — output valued at *base-year* prices. It strips out inflation, so it shows *actual production* growth.

### The formula

    Real GDP = Nominal GDP ÷ GDP deflator × 100

The **GDP deflator** is a price index set to **100 in the base year**. A deflator of 120 means prices have risen 20% since the base year.

### Example

A country's nominal GDP is **₹240 lakh crore** with a deflator of **120**:

    Real GDP = 240 lakh crore ÷ 120 × 100 = ₹200 lakh crore

The difference (₹40 lakh crore) is pure price growth — no extra goods were produced.

### Why economists use real GDP

Growth rates in the news are **real** growth. If nominal GDP grew 10% but prices grew 6%, the *real* growth is only about 4%. Real GDP is what reveals whether an economy is genuinely producing more.

> Use the same deflator base year when comparing multiple years, or the numbers are not comparable.
`,
  faq: [
    {
      question: 'How do I calculate real GDP?',
      answer:
        'Divide nominal GDP by the GDP deflator and multiply by 100: Real GDP = Nominal GDP ÷ Deflator × 100. This removes the effect of price changes.',
    },
    {
      question: 'What is the difference between nominal and real GDP?',
      answer:
        'Nominal GDP is valued at current prices and mixes output growth with inflation. Real GDP is valued at base-year prices, so it measures actual production growth only.',
    },
    {
      question: 'What is the GDP deflator?',
      answer:
        'It is a broad price index for everything included in GDP, set to 100 in a chosen base year. A deflator of 120 means prices have risen 20% since that base year.',
    },
  ],
  relatedCalculators: ['gdp-calculator', 'inflation-calculator', 'real-gdp-calculator', 'compound-interest-calculator'],
  updated: '2026-08-16',
};

export default config;