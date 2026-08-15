import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round2 } from './util';

/** GDP = C + I + G + (X - M). Optional per-capita calculation. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const consumption = asNumber(inputs.consumption);
  const investment = asNumber(inputs.investment);
  const governmentSpending = asNumber(inputs.governmentSpending);
  const exports = asNumber(inputs.exports);
  const imports = asNumber(inputs.imports);
  const population = asNumber(inputs.population);

  const netExports = exports - imports;
  const gdp = consumption + investment + governmentSpending + netExports;
  const gdpPerCapita = population > 0 ? gdp / population : 0;

  return {
    gdp: round2(gdp),
    netExports: round2(netExports),
    gdpPerCapita: round2(gdpPerCapita),
  };
};
