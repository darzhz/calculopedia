import type { FormulaFn, InputValues, OutputValues } from './types';
import { asBoolean, asNumber } from './types';

/** D&D passive perception = 10 + Wisdom modifier + proficiency (doubled with Expertise). */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const wisdomMod = asNumber(inputs.wisdomMod);
  const proficiency = asNumber(inputs.proficiency);
  const hasExpertise = asBoolean(inputs.hasExpertise);
  const hasProficiency = asBoolean(inputs.hasProficiency);

  const profBonus = hasProficiency ? proficiency * (hasExpertise ? 2 : 1) : 0;
  const passive = 10 + wisdomMod + profBonus;

  return {
    passivePerception: passive,
    wisdomMod,
    profBonus,
  };
};