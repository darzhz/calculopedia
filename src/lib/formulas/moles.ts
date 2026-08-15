import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round } from './util';

const AVOGADRO = 6.022e23;

const MOLECULES: Record<string, { molarMass: number; name: string }> = {
  h2o: { molarMass: 18.015, name: 'Water (H₂O)' },
  nacl: { molarMass: 58.44, name: 'Sodium chloride (NaCl)' },
  o2: { molarMass: 31.998, name: 'Oxygen (O₂)' },
  co2: { molarMass: 44.009, name: 'Carbon dioxide (CO₂)' },
  c6h12o6: { molarMass: 180.156, name: 'Glucose (C₆H₁₂O₆)' },
  h2so4: { molarMass: 98.079, name: 'Sulfuric acid (H₂SO₄)' },
  naoh: { molarMass: 39.997, name: 'Sodium hydroxide (NaOH)' },
};

/** Moles = mass / molar mass; molecules = moles × Avogadro's number. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const mass = asNumber(inputs.mass);
  const molecule = asString(inputs.molecule, 'h2o');
  const customMolarMass = asNumber(inputs.customMolarMass, 18);

  const molarMass = molecule === 'custom' ? customMolarMass : (MOLECULES[molecule]?.molarMass ?? customMolarMass);
  const moles = molarMass > 0 ? mass / molarMass : 0;
  const molecules = moles * AVOGADRO;

  return {
    moles: round(moles, 4),
    molecules: molecules.toExponential(3),
    molarMass: round(molarMass, 3),
  };
};
