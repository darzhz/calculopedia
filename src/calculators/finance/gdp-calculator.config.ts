import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'gdp-calculator',
  icon: 'trending_up',
  category: 'finance',
  title: 'GDP Calculator',
  shortDescription:
    'Calculate GDP using the expenditure approach: consumption, investment, government spending and net exports.',
  answer:
    'The GDP calculator adds up consumption, investment, government spending and net exports (exports minus imports) to compute Gross Domestic Product using the expenditure approach.',
  targetKeyword: 'gdp calculator',
  keywords: [
    'gdp calculator',
    'gdp formula',
    'gross domestic product',
    'gdp expenditure approach',
    'gdp calculation',
  ],
  inputs: [
    {
      type: 'number',
      id: 'consumption',
      label: 'Consumer spending (C)',
      currency: true,
      default: 200,
      min: 0,
      step: 1,
      help: 'Total household consumption',
    },
    {
      type: 'number',
      id: 'investment',
      label: 'Investment (I)',
      currency: true,
      default: 80,
      min: 0,
      step: 1,
      help: 'Business investment in capital',
    },
    {
      type: 'number',
      id: 'governmentSpending',
      label: 'Government spending (G)',
      currency: true,
      default: 60,
      min: 0,
      step: 1,
      help: 'Government expenditure on goods and services',
    },
    {
      type: 'number',
      id: 'exports',
      label: 'Exports (X)',
      currency: true,
      default: 50,
      min: 0,
      step: 1,
      help: 'Goods and services sold abroad',
    },
    {
      type: 'number',
      id: 'imports',
      label: 'Imports (M)',
      currency: true,
      default: 40,
      min: 0,
      step: 1,
      help: 'Goods and services bought from abroad',
    },
    {
      type: 'number',
      id: 'population',
      label: 'Population (optional)',
      default: 0,
      min: 0,
      step: 1,
      help: 'For per capita GDP calculation',
    },
  ],
  formulaId: 'gdp',
  outputs: [
    {
      id: 'gdp',
      label: 'GDP',
      format: 'currency',
      primary: true,
    },
    {
      id: 'netExports',
      label: 'Net exports (X − M)',
      format: 'currency',
    },
    {
      id: 'gdpPerCapita',
      label: 'GDP per capita',
      format: 'currency',
      note: 'If population is entered',
    },
  ],
  formulaDisplay: 'GDP = C + I + G + (X − M). Per capita GDP = GDP ÷ population.',
  explanation: `**Gross Domestic Product (GDP)** is the total monetary value of all goods and services produced within a country in a given period. It's the most widely used measure of economic output.

### The expenditure approach

    GDP = C + I + G + (X − M)

Where:
- **C** = Consumer spending (household consumption)
- **I** = Investment (business capital, residential construction, inventory changes)
- **G** = Government spending (on goods and services, not transfer payments)
- **X** = Exports (goods and services sold to other countries)
- **M** = Imports (goods and services bought from other countries)

### Worked example

C = 200, I = 80, G = 60, X = 50, M = 40:

    Net exports = 50 − 40 = 10
    GDP = 200 + 80 + 60 + 10 = **350**

### GDP per capita

    GDP per capita = GDP ÷ population

This gives the average economic output per person and is used to compare living standards across countries.

### Three approaches to GDP

1. **Expenditure** (C + I + G + X − M) — what is spent
2. **Income** — wages + profits + rents + interest — what is earned
3. **Production** — value added at each stage — what is produced

All three should give the same GDP figure.
`,
  faq: [
    {
      question: 'What is GDP?',
      answer:
        'GDP (Gross Domestic Product) is the total value of all goods and services produced within a country. It\'s calculated as C + I + G + (X − M) using the expenditure approach.',
    },
    {
      question: 'How is GDP calculated?',
      answer:
        'Using the expenditure approach: GDP = Consumer spending + Investment + Government spending + (Exports − Imports). This sums up all spending in the economy.',
    },
    {
      question: 'What is GDP per capita?',
      answer:
        'GDP per capita is the GDP divided by the population. It gives the average economic output per person and is used to compare living standards between countries.',
    },
  ],
  relatedCalculators: ['interest-per-month-calculator', 'compound-interest-calculator'],
  updated: '2026-08-15',
};

export default config;
