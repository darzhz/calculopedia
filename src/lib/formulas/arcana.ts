import type { FormulaFn, InputValues, OutputValues } from './types';
import { asBoolean, asNumber } from './types';

/** D&D Arcana check = d20 roll + Intelligence modifier + proficiency (doubled with Expertise). */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const intelligenceMod = asNumber(inputs.intelligenceMod);
  const proficiency = asNumber(inputs.proficiency);
  const hasProficiency = asBoolean(inputs.hasProficiency);
  const hasExpertise = asBoolean(inputs.hasExpertise);
  const roll = asNumber(inputs.roll, 10);

  const profBonus = hasProficiency ? proficiency * (hasExpertise ? 2 : 1) : 0;
  const total = roll + intelligenceMod + profBonus;

  let outcome: string;
  if (total >= 30) outcome = 'You recall obscure arcane secrets';
  else if (total >= 20) outcome = 'Strong success — deep arcane knowledge';
  else if (total >= 15) outcome = 'Solid success — useful arcane insight';
  else if (total >= 10) outcome = 'Partial recall — basic arcane facts';
  else outcome = 'Failure — little or nothing is recalled';

  return {
    roll,
    intelligenceMod,
    profBonus,
    total,
    outcome,
  };
};