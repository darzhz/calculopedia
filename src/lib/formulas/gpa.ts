import type { FormulaFn, InputValues, OutputValues, TableRow } from './types';
import { asNumber, asString } from './types';
import { round } from './util';

const POINTS_4: Record<string, number> = {
  O: 4,
  'A+': 4,
  A: 4,
  'A-': 3.7,
  'B+': 3.3,
  B: 3,
  'B-': 2.7,
  'C+': 2.3,
  C: 2,
  'C-': 1.7,
  D: 1,
  F: 0,
};

const POINTS_10: Record<string, number> = {
  O: 10,
  'A+': 9,
  A: 8,
  'A-': 7.5,
  'B+': 7,
  B: 6.5,
  'B-': 6,
  'C+': 5.5,
  C: 5,
  'C-': 4.5,
  D: 4,
  F: 0,
};

const SUBJECT_IDS = ['subject1', 'subject2', 'subject3', 'subject4', 'subject5'];

/** Weighted GPA from course grades and credit hours (4.0 or 10.0 scale). */
export const compute: FormulaFn = (inputs: InputValues): OutputValues => {
  const scale = asString(inputs.scale, '4');
  const points = scale === '10' ? POINTS_10 : POINTS_4;

  let totalPoints = 0;
  let totalCredits = 0;
  const rows: TableRow[] = [];

  for (const id of SUBJECT_IDS) {
    const grade = asString(inputs[`${id}Grade`]);
    const credits = asNumber(inputs[`${id}Credits`]);
    if (credits > 0 && grade) {
      const p = points[grade] ?? 0;
      totalPoints += p * credits;
      totalCredits += credits;
      rows.push({ subject: id.replace('subject', 'Course '), grade, credits, points: p, weighted: round(p * credits, 2) });
    }
  }

  const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;

  return {
    gpa: round(gpa, 2),
    totalPoints: round(totalPoints, 2),
    totalCredits,
    courseBreakdown: rows,
  };
};
