import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round, round2 } from './util';

/** Percentage of a number: P% of X */
export const percentOf: FormulaFn = (inputs: InputValues): OutputValues => {
  const percent = asNumber(inputs.percent);
  const value = asNumber(inputs.value);
  const result = (value * percent) / 100;
  return { result: round2(result), percentOfValue: value };
};

/** Percentage change from one value to another. */
export const percentChange: FormulaFn = (inputs: InputValues): OutputValues => {
  const from = asNumber(inputs.fromValue);
  const to = asNumber(inputs.toValue);
  const change = from === 0 ? 0 : ((to - from) / from) * 100;
  return {
    changePercent: round(change, 1),
    absoluteChange: round2(to - from),
  };
};

/** Increase a number by a percentage. */
export const percentIncrease: FormulaFn = (inputs: InputValues): OutputValues => {
  const value = asNumber(inputs.value);
  const percent = asNumber(inputs.percent);
  const increase = (value * percent) / 100;
  return { increase: round2(increase), newValue: round2(value + increase) };
};

/** Decrease a number by a percentage. */
export const percentDecrease: FormulaFn = (inputs: InputValues): OutputValues => {
  const value = asNumber(inputs.value);
  const percent = asNumber(inputs.percent);
  const decrease = (value * percent) / 100;
  return { decrease: round2(decrease), newValue: round2(value - decrease) };
};

/** Reverse percentage: X is P% of what number? */
export const reversePercent: FormulaFn = (inputs: InputValues): OutputValues => {
  const valueIs = asNumber(inputs.valueIs);
  const percent = asNumber(inputs.percent);
  const original = percent === 0 ? 0 : (valueIs * 100) / percent;
  return { original: round2(original), valueIs };
};

/** X is what percent of Y? */
export const partOfPercent: FormulaFn = (inputs: InputValues): OutputValues => {
  const part = asNumber(inputs.part);
  const whole = asNumber(inputs.whole);
  const percent = whole === 0 ? 0 : (part / whole) * 100;
  return { percent: round(percent, 1), part };
};

/** Percentage difference between two numbers. */
export const percentDifference: FormulaFn = (inputs: InputValues): OutputValues => {
  const first = asNumber(inputs.firstValue);
  const second = asNumber(inputs.secondValue);
  const avg = (first + second) / 2;
  const diff = avg === 0 ? 0 : (Math.abs(first - second) / avg) * 100;
  return {
    differencePercent: round(diff, 1),
    absoluteDifference: round2(Math.abs(first - second)),
  };
};

/** Markup and margin from cost + markup % */
export const markupMargin: FormulaFn = (inputs: InputValues): OutputValues => {
  const cost = asNumber(inputs.cost);
  const markupPercent = asNumber(inputs.markupPercent);
  const sellingPrice = cost * (1 + markupPercent / 100);
  const markupAmount = sellingPrice - cost;
  const marginPercent = sellingPrice === 0 ? 0 : (markupAmount / sellingPrice) * 100;
  return {
    sellingPrice: round2(sellingPrice),
    markupAmount: round2(markupAmount),
    marginPercent: round(marginPercent, 1),
  };
};
