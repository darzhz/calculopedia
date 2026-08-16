import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'roi-calculator',
  icon: 'trending_up',
  category: 'finance',
  title: 'Return on Investment (ROI) Calculator',
  shortDescription:
    'Calculate your ROI and annualized return from the amount invested, the final value and how long you held it.',
  answer:
    'ROI is your profit divided by what you invested, expressed as a percentage: (final value − cost) ÷ cost × 100. Annualized ROI spreads that return over the years held.',
  targetKeyword: 'return on investment calculator',
  keywords: [
    'roi calculator',
    'how to calculate return on investment',
    'return on investment formula',
    'annualized roi',
    'investment return calculator',
  ],
  inputs: [
    {
      type: 'number',
      id: 'cost',
      label: 'Amount invested',
      currency: true,
      default: 100000,
      min: 100,
      step: 1000,
    },
    {
      type: 'number',
      id: 'finalValue',
      label: 'Final value',
      currency: true,
      default: 150000,
      min: 0,
      step: 1000,
      help: 'Current value of the investment',
    },
    {
      type: 'number',
      id: 'years',
      label: 'Holding period',
      unit: 'years',
      default: 5,
      min: 0,
      max: 50,
      step: 1,
      help: 'Leave 0 to skip the annualized return',
    },
  ],
  formulaId: 'roi',
  outputs: [
    {
      id: 'roi',
      label: 'Total ROI',
      format: 'percent',
      decimals: 1,
      primary: true,
      note: 'Total return on your money',
    },
    {
      id: 'profit',
      label: 'Profit',
      format: 'currency',
    },
    {
      id: 'annualizedRoi',
      label: 'Annualized ROI',
      format: 'percent',
      decimals: 1,
      note: 'Average return per year',
    },
  ],
  formulaDisplay:
    'ROI = (final value − cost) ÷ cost × 100. Annualized ROI = ((final value ÷ cost)^(1 ÷ years) − 1) × 100.',
  explanation: `**Return on Investment (ROI)** answers a simple question: for every rupee I put in, how much did I get back?

### The formula

    ROI = (final value − cost) ÷ cost × 100

Invest **₹1,00,000** and it is now worth **₹1,50,000**:

    ROI = (1,50,000 − 1,00,000) ÷ 1,00,000 × 100 = 50%

### Annualized ROI — the honest comparison

The plain ROI doesn't say *how long* you held the investment. Annualized ROI spreads the return over the holding period so different investments can be compared fairly:

    Annualized ROI = ((final value ÷ cost)^(1 ÷ years) − 1) × 100

That same 50% over **5 years**:

    ((1.5)^(1/5) − 1) × 100 ≈ 8.4% per year

### Example comparison

| Investment | Total ROI | Period | Annualized |
| --- | --- | --- | --- |
| Fixed deposit | 50% | 5 yrs | 8.4% |
| Stock | 50% | 2 yrs | 22.5% |

Same headline ROI — completely different performance. Always use annualized ROI for comparison.

> ROI ignores taxes, inflation and risk. Pair it with annualized return and a risk check for a full picture.
`,
  faq: [
    {
      question: 'How do I calculate return on investment?',
      answer:
        'Divide your profit by the amount invested and multiply by 100: ROI = (final value − cost) ÷ cost × 100. For time comparisons, use annualized ROI = ((final ÷ cost)^(1/years) − 1) × 100.',
    },
    {
      question: 'What is the difference between ROI and annualized ROI?',
      answer:
        'ROI is the total return over the whole holding period. Annualized ROI is the average yearly return, which lets you compare investments held for different lengths of time.',
    },
    {
      question: 'What is a good ROI?',
      answer:
        'It depends on risk and time frame. Historically, broad stock markets have returned roughly 8–10% per year. Any return should be judged against inflation and the risk taken.',
    },
  ],
  relatedCalculators: [
    'compound-interest-calculator',
    'sip-calculator',
    'fd-calculator',
    'gold-value-calculator',
  ],
  updated: '2026-08-16',
};

export default config;