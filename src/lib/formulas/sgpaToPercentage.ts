import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber, asString } from './types';
import { round } from './util';

/** SGPA to percentage conversion. Supports 10-point and 4-point scales. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const sgpa = asNumber(inputs.sgpa);
  const scale = asString(inputs.scale, '10');

  let percentage: number;
  if (scale === '4') {
    percentage = sgpa * 25;
  } else {
    percentage = sgpa * 10;
  }

  const equivalentCGPA = sgpa;

  let gradePoint = 'F';
  if (percentage >= 90) gradePoint = 'A+';
  else if (percentage >= 80) gradePoint = 'A';
  else if (percentage >= 70) gradePoint = 'B+';
  else if (percentage >= 60) gradePoint = 'B';
  else if (percentage >= 50) gradePoint = 'C';
  else if (percentage >= 40) gradePoint = 'D';

  return {
    percentage: round(percentage, 2),
    equivalentCGPA: round(equivalentCGPA, 2),
    gradePoint,
  };
};
