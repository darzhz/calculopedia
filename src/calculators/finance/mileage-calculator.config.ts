import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'mileage-calculator',
  icon: 'local_gas_station',
  category: 'finance',
  title: 'Mileage Calculator (Car)',
  shortDescription:
    'Calculate your car\'s fuel efficiency in km/l, cost per kilometre and total fuel cost.',
  answer:
    'The mileage calculator divides distance travelled by fuel consumed to give your car\'s fuel efficiency, and shows the cost per kilometre based on fuel price.',
  targetKeyword: 'mileage calculator',
  keywords: [
    'mileage calculator',
    'km per litre calculator',
    'fuel efficiency calculator',
    'car mileage calculator',
    'cost per km calculator',
  ],
  inputs: [
    {
      type: 'number',
      id: 'distance',
      label: 'Distance travelled',
      unit: 'km',
      default: 500,
      min: 0,
      step: 1,
    },
    {
      type: 'number',
      id: 'fuelUsed',
      label: 'Fuel consumed',
      unit: 'liters',
      default: 40,
      min: 0,
      step: 0.1,
    },
    {
      type: 'number',
      id: 'fuelPrice',
      label: 'Fuel price',
      unit: 'per liter',
      currency: true,
      default: 102,
      min: 0,
      step: 1,
    },
  ],
  formulaId: 'mileage',
  outputs: [
    {
      id: 'mileage',
      label: 'Mileage',
      format: 'decimal',
      decimals: 2,
      primary: true,
      note: 'km per liter',
    },
    {
      id: 'costPerKm',
      label: 'Cost per km',
      format: 'currency',
    },
    {
      id: 'totalFuelCost',
      label: 'Total fuel cost',
      format: 'currency',
    },
  ],
  formulaDisplay: 'Mileage = distance ÷ fuel consumed. Cost per km = total fuel cost ÷ distance.',
  explanation: `**Mileage** (fuel efficiency) tells you how many kilometres your car travels per litre of fuel. Higher mileage = better fuel efficiency.

### The formula

    Mileage = distance (km) ÷ fuel consumed (liters)

For **500 km** on **40 liters**:

    Mileage = 500 ÷ 40 = **12.5 km/l**

### Cost per kilometre

    Cost per km = total fuel cost ÷ distance
    Cost per km = (40 × ₹102) ÷ 500 = ₹8.16 per km

### What affects car mileage?

- **Driving style** — aggressive acceleration and braking reduce mileage
- **Speed** — most cars are most efficient at 60–80 km/h
- **Tyre pressure** — under-inflated tyres increase fuel consumption
- **AC usage** — running the AC can reduce mileage by 10–25%
- **Traffic** — stop-and-go traffic significantly lowers mileage
- **Vehicle maintenance** — clean air filters and proper engine tuning help

### ARAI vs real-world mileage

ARAI (Automotive Research Association of India) tests are done under ideal lab conditions. Real-world mileage is typically **15–25% lower** than ARAI figures.
`,
  faq: [
    {
      question: 'How do I calculate car mileage?',
      answer:
        'Fill your tank completely, note the odometer, drive normally, then fill again. Divide the distance driven by the fuel added. For example, 500 km ÷ 40 liters = 12.5 km/l.',
    },
    {
      question: 'What is a good car mileage?',
      answer:
        'In India, a petrol car with 15–20 km/l is considered good. Diesel cars typically get 18–25 km/l. Hybrid cars can achieve 25+ km/l.',
    },
    {
      question: 'How do I reduce fuel costs?',
      answer:
        'Drive at steady speeds (60–80 km/h), maintain proper tyre pressure, avoid aggressive braking, reduce AC usage, and keep your engine well-maintained.',
    },
  ],
  relatedCalculators: ['bike-mileage-calculator', 'shipping-cost-calculator', 'car-loan-interest-calculator'],
  updated: '2026-08-15',
};

export default config;
