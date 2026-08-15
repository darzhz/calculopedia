import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'bike-mileage-calculator',
  icon: 'two_wheeler',
  category: 'finance',
  title: 'Bike Mileage Calculator',
  shortDescription:
    'Calculate your motorcycle\'s fuel efficiency in km/l, cost per kilometre and total fuel cost.',
  answer:
    'The bike mileage calculator divides distance travelled by fuel consumed to give your motorcycle\'s fuel efficiency, with cost per kilometre based on fuel price.',
  targetKeyword: 'bike mileage calculator',
  keywords: [
    'bike mileage calculator',
    'motorcycle mileage',
    'two wheeler mileage',
    'bike km per litre',
    'bike fuel efficiency',
  ],
  inputs: [
    {
      type: 'number',
      id: 'distance',
      label: 'Distance travelled',
      unit: 'km',
      default: 200,
      min: 0,
      step: 1,
    },
    {
      type: 'number',
      id: 'fuelUsed',
      label: 'Fuel consumed',
      unit: 'liters',
      default: 8,
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
  formulaId: 'bikeMileage',
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
  explanation: `**Bike mileage** (fuel efficiency) tells you how many kilometres your motorcycle travels per litre of fuel. Motorcycles generally have much higher mileage than cars.

### The formula

    Mileage = distance (km) ÷ fuel consumed (liters)

For **200 km** on **8 liters**:

    Mileage = 200 ÷ 8 = **25 km/l**

### Cost per kilometre

    Cost per km = (8 × ₹102) ÷ 200 = ₹4.08 per km

### Typical bike mileage ranges

| Type | Mileage (km/l) |
| --- | --- |
| 100cc commuter | 60–80 |
| 125cc commuter | 50–65 |
| 150cc standard | 40–55 |
| 200cc+ performance | 30–40 |
| Electric (equivalent) | 100–150 km/charge |

### Tips to improve bike mileage

- **Maintain steady speed** — avoid rapid acceleration
- **Keep tyres properly inflated** — under-inflation increases rolling resistance
- **Regular servicing** — clean air filter and proper chain tension help
- **Shift early** — higher gears at lower RPM save fuel
- **Avoid idling** — turn off the engine at long stops
`,
  faq: [
    {
      question: 'How do I calculate bike mileage?',
      answer:
        'Fill the tank, note the odometer, ride normally, then fill again. Divide distance by fuel added. For example, 200 km ÷ 8 liters = 25 km/l.',
    },
    {
      question: 'What is a good bike mileage?',
      answer:
        'Commuter bikes (100–125cc) typically get 50–80 km/l. Performance bikes get 30–40 km/l. Electric bikes cover 100–150 km per charge.',
    },
  ],
  relatedCalculators: ['mileage-calculator', 'car-loan-interest-calculator'],
  updated: '2026-08-15',
};

export default config;
