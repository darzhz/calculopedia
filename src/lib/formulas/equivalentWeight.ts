import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round } from './util';

const SUBSTANCES: Record<string, { molarMass: number; nFactor: number; name: string }> = {
  hcl: { molarMass: 36.461, nFactor: 1, name: 'HCl' },
  naoh: { molarMass: 39.997, nFactor: 1, name: 'NaOH' },
  h2so4: { molarMass: 98.079, nFactor: 2, name: 'H₂SO₄' },
  h3po4: { molarMass: 97.994, nFactor: 3, name: 'H₃PO₄' },
};

/** Equivalent weight = Molar mass / n-factor. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const substance = asString(inputs.substance, 'custom');
  const customMolarMass = asNumber(inputs.customMolarMass, 40);
  const customNFactor = asNumber(inputs.nFactor, 2);

  let molarMass: number;
  let nFactor: number;

  if (substance === 'custom') {
    molarMass = customMolarMass;
    nFactor = customNFactor;
  } else {
    const sub = SUBSTANCES[substance];
    molarMass = sub?.molarMass ?? customMolarMass;
    nFactor = sub?.nFactor ?? customNFactor;
  }

  const equivalentWeight = nFactor > 0 ? molarMass / nFactor : 0;

  return {
    equivalentWeight: round(equivalentWeight, 4),
    molarMass: round(molarMass, 3),
    nFactor,
  };
};
