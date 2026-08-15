import type { FormulaFn, InputValues, OutputValues } from './types';
import { asNumber } from './types';
import { round, round2 } from './util';

/** Cut off marks: average of best-of-4 (or 5) subjects. */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const maxMarks = asNumber(inputs.maxMarks, 100);
  const marks = [
    asNumber(inputs.subject1),
    asNumber(inputs.subject2),
    asNumber(inputs.subject3),
    asNumber(inputs.subject4),
  ];

  const subject5 = asNumber(inputs.subject5);
  if (subject5 > 0) marks.push(subject5);

  const sorted = [...marks].sort((a, b) => b - a);
  const best4 = sorted.slice(0, 4);
  const totalMarks = best4.reduce((a, b) => a + b, 0);
  const cutoff = maxMarks > 0 ? (totalMarks / (4 * maxMarks)) * 100 : 0;
  const percentage = maxMarks > 0 ? (totalMarks / (4 * maxMarks)) * 100 : 0;

  let grade = 'F';
  if (percentage >= 90) grade = 'A+';
  else if (percentage >= 80) grade = 'A';
  else if (percentage >= 70) grade = 'B+';
  else if (percentage >= 60) grade = 'B';
  else if (percentage >= 50) grade = 'C';
  else if (percentage >= 40) grade = 'D';

  return {
    cutoff: round(cutoff, 2),
    totalMarks,
    percentage: round(percentage, 1),
    grade,
  };
};
