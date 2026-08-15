import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'shipping-cost-calculator',
  icon: 'local_shipping',
  category: 'finance',
  title: 'Shipping Cost Calculator',
  shortDescription:
    'Estimate shipping costs for UPS, USPS or FedEx from package weight, delivery zone and package type — before you book.',
  answer:
    'The shipping cost calculator estimates your delivery price by combining a carrier base rate with per-kg weight charges, a zone fee and a package-type surcharge.',
  targetKeyword: 'shipping calculator',
  keywords: [
    'shipping calculator',
    'ups calculate shipping',
    'usps calculate shipping',
    'shipping cost calculator',
    'package delivery cost',
  ],
  inputs: [
    {
      type: 'select',
      id: 'carrier',
      label: 'Carrier',
      options: [
        { value: 'ups', label: 'UPS' },
        { value: 'usps', label: 'USPS' },
        { value: 'fedex', label: 'FedEx' },
      ],
      default: 'ups',
    },
    {
      type: 'number',
      id: 'weightKg',
      label: 'Package weight',
      unit: 'kg',
      default: 2,
      min: 0,
      max: 100,
      step: 0.5,
    },
    {
      type: 'select',
      id: 'zone',
      label: 'Delivery zone',
      options: [
        { value: 'local', label: 'Local (same city)' },
        { value: 'regional', label: 'Regional (nearby states)' },
        { value: 'national', label: 'National' },
        { value: 'international', label: 'International' },
      ],
      default: 'regional',
    },
    {
      type: 'select',
      id: 'packageType',
      label: 'Package type',
      options: [
        { value: 'envelope', label: 'Envelope / document' },
        { value: 'box', label: 'Standard box' },
        { value: 'oversized', label: 'Oversized / bulky' },
      ],
      default: 'box',
    },
  ],
  formulaId: 'shipping',
  outputs: [
    {
      id: 'estimatedTotal',
      label: 'Estimated shipping cost',
      format: 'currency',
      primary: true,
      note: 'Estimate only — live rates vary',
    },
    {
      id: 'baseRate',
      label: 'Base rate',
      format: 'currency',
    },
    {
      id: 'weightCharge',
      label: 'Weight charge',
      format: 'currency',
      note: 'Per-kg rate × weight',
    },
    {
      id: 'zoneFee',
      label: 'Zone fee',
      format: 'currency',
    },
    {
      id: 'packagingFee',
      label: 'Packaging surcharge',
      format: 'currency',
    },
  ],
  formulaDisplay:
    'Estimated cost = carrier base rate + per-kg weight charge + zone fee + package-type surcharge.',
  explanation: `Shipping costs are a mix of fixed and variable components. Every carrier breaks them down differently, but the structure is similar.

### The components

- **Base rate** — the minimum charge to handle a shipment, set by carrier.
- **Weight charge** — the per-kilogram (or per-pound) rate times your package weight. Heavier costs more; carriers also charge "dimensional weight" for large light boxes.
- **Zone fee** — delivery distance. Same-city is cheapest; international is the most expensive.
- **Package surcharge** — envelopes are cheapest, standard boxes are typical, and oversized or bulky items carry a fee.

### Estimated vs actual

This calculator gives a **rough estimate** using typical public rate structures. Actual prices depend on:

- Your exact origin and destination ZIP/postal codes
- Dimensional weight (length × width × height ÷ divisor)
- Service level (ground vs express vs overnight)
- Business discounts and negotiated rates

Always confirm with the carrier's own quote tool before booking.

### Saving money

- Combine small items into fewer, denser boxes — you pay per shipment, not per item.
- Choose ground over express when speed isn't critical.
- Use the carrier's free packaging if available; oversized own-boxes trigger surcharges.
`,
  faq: [
    {
      question: 'How do I calculate shipping costs?',
      answer:
        'Carriers combine a base rate, a per-weight charge, a distance (zone) fee and package-type surcharges. This calculator estimates the total from typical rates; your exact quote depends on destination and service level.',
    },
    {
      question: 'Why is my actual shipping cost different from the estimate?',
      answer:
        'Real rates depend on your exact postal codes, dimensional weight (box size), service speed and any business discounts. Treat the estimate as a planning figure, not a final quote.',
    },
    {
      question: 'What is dimensional weight?',
      answer:
        'Carriers charge by volume for large, light packages: length × width × height divided by a divisor. If dimensional weight exceeds actual weight, you pay for the larger figure.',
    },
    {
      question: 'Which carrier is cheapest?',
      answer:
        'It varies by route and package. USPS is often cheapest for small, light packages; UPS and FedEx can win for heavier or business shipments. Compare quotes for your specific route.',
    },
  ],
  relatedCalculators: ['car-payment-calculator', 'mortgage-payment-calculator', 'square-footage-calculator'],
  updated: '2026-08-15',
};

export default config;
