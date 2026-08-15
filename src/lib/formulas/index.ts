import type { FormulaFn, InputValues, OutputValues } from './types';
import { compute as emi } from './emi';
import { compute as compoundInterest } from './compoundInterest';
import { compute as sip } from './sip';
import { compute as fd } from './fd';
import { compute as rd } from './rd';
import { compute as swp } from './swp';
import { compute as incomeTax } from './incomeTax';
import { compute as gst } from './gst';
import { compute as gratuity } from './gratuity';
import { compute as salary } from './salary';
import { compute as gold } from './gold';
import { compute as bmi } from './bmi';
import { compute as calorie } from './calorie';
import { compute as idealWeight } from './idealWeight';
import { compute as pregnancy } from './pregnancy';
import { compute as age } from './age';
import { compute as daysBetween } from './daysBetween';
import { compute as dateAddSubtract } from './dateAddSubtract';
import { compute as timeDuration } from './timeDuration';
import {
  percentOf,
  percentChange,
  percentIncrease,
  percentDecrease,
  reversePercent,
  partOfPercent,
  percentDifference,
  markupMargin,
} from './percentage';

/** Map of formulaId → pure function. Server-side (SSR) dispatch. */
export const formulaRegistry: Record<string, FormulaFn> = {
  emi,
  compoundInterest,
  sip,
  fd,
  rd,
  swp,
  incomeTax,
  gst,
  gratuity,
  salary,
  gold,
  bmi,
  calorie,
  idealWeight,
  pregnancy,
  age,
  daysBetween,
  dateAddSubtract,
  timeDuration,
  percentOf,
  percentChange,
  percentIncrease,
  percentDecrease,
  reversePercent,
  partOfPercent,
  percentDifference,
  markupMargin,
};

export function computeFormula(id: string, inputs: InputValues): OutputValues {
  const fn = formulaRegistry[id];
  if (!fn) throw new Error(`Unknown formulaId: ${id}`);
  return fn(inputs);
}
