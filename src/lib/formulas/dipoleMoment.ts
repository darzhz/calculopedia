import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round } from './util';

const DEBYE_CONVERSION = 3.33564e-30; // 1 Debye in C·m

/** Dipole moment: μ = q × d, with unit conversion. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const charge = asNumber(inputs.charge);
  const chargeUnit = asString(inputs.chargeUnit, 'coulombs');
  const distance = asNumber(inputs.distance);
  const distanceUnit = asString(inputs.distanceUnit, 'pm');

  // Convert charge to Coulombs
  let chargeC = charge;
  if (chargeUnit === 'e') chargeC = charge * 1.602176634e-19;

  // Convert distance to meters
  let distanceM = distance;
  if (distanceUnit === 'pm') distanceM = distance * 1e-12;
  else if (distanceUnit === 'angstroms') distanceM = distance * 1e-10;

  const dipoleMomentCM = chargeC * distanceM;
  const dipoleMomentDebye = dipoleMomentCM / DEBYE_CONVERSION;

  return {
    dipoleMomentDebye: round(dipoleMomentDebye, 4),
    dipoleMomentCm: dipoleMomentCM.toExponential(3),
  };
};
