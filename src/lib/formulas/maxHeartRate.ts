import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round } from './util';

const ZONES = [
  { name: 'Zone 1 — recovery', low: 0.5, high: 0.6 },
  { name: 'Zone 2 — fat burn', low: 0.6, high: 0.7 },
  { name: 'Zone 3 — cardio', low: 0.7, high: 0.8 },
  { name: 'Zone 4 — high intensity', low: 0.8, high: 0.9 },
  { name: 'Zone 5 — max effort', low: 0.9, high: 1 },
];

/** Max heart rate via 220−age or Tanaka, plus the five training zones. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const age = asNumber(inputs.age);
  const method = asString(inputs.method, '220');

  const maxHr = method === 'tanaka' ? 208 - 0.7 * age : 220 - age;

  return {
    maxHr: round(maxHr, 0),
    zone2Low: round(maxHr * 0.6, 0),
    zone2High: round(maxHr * 0.7, 0),
    methodNote:
      method === 'tanaka'
        ? 'Tanaka formula (208 − 0.7 × age) — closer to real-world max HR for most adults'
        : 'Standard formula (220 − age)',
    zoneTable: ZONES.map((z) => ({
      zone: z.name,
      low: round(maxHr * z.low, 0),
      high: round(maxHr * z.high, 0),
    })),
  };
};