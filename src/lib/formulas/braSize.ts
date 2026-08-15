import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';

const CM_PER_INCH = 2.54;

function toEven(n: number): number {
  const r = Math.round(n);
  return r % 2 === 0 ? r : r + 1;
}

function cupLetter(diff: number): string {
  const letters = [
    'AA',
    'A',
    'B',
    'C',
    'D',
    'DD',
    'DDD/F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
  ];
  const idx = diff < 0 ? 0 : Math.min(Math.floor(diff), letters.length - 1);
  return letters[idx];
}

/** Bra size from underbust and bust, US modern or traditional +4 method. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const unit = asString(inputs.unit, 'in');
  const method = asString(inputs.method, 'modern');
  let underbust = asNumber(inputs.underbust);
  let bust = asNumber(inputs.bust);

  if (unit === 'cm') {
    underbust /= CM_PER_INCH;
    bust /= CM_PER_INCH;
  }

  const band =
    method === 'traditional' ? Math.round(underbust) + (Math.round(underbust) % 2 === 0 ? 4 : 5) : toEven(underbust);

  const diff = bust - band;
  const cup = cupLetter(diff);
  const braSize = `${band}${cup}`;

  return {
    bandSize: band,
    cupLetter: cup,
    cupDifference: Math.round(diff * 10) / 10,
    braSize,
  };
};
