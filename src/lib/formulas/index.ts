import type { FormulaFn, InputValues, OutputValues } from './types';
import { compute as carPayment } from './carPayment';
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
import { compute as takeHomePay } from './takeHomePay';
import { compute as gold } from './gold';
import { compute as bmi } from './bmi';
import { compute as bodyFat } from './bodyFat';
import { compute as calorie } from './calorie';
import { compute as idealWeight } from './idealWeight';
import { compute as maintenanceCalories } from './maintenanceCalories';
import { compute as mortgage } from './mortgage';
import { compute as pregnancy } from './pregnancy';
import { compute as pregnancyWeeks } from './pregnancyWeeks';
import { compute as age } from './age';
import { compute as daysBetween } from './daysBetween';
import { compute as dateAddSubtract } from './dateAddSubtract';
import { compute as timeDuration } from './timeDuration';
import { compute as flames } from './flames';
import { compute as mulank } from './mulank';
import { compute as lifePath } from './lifePath';
import { compute as shipping } from './shipping';
import { compute as zscore } from './zscore';
import { compute as hoursWorked } from './hoursWorked';
import { compute as monthlyIncome } from './monthlyIncome';
import { compute as interestPerMonth } from './interestPerMonth';
import { compute as gpa } from './gpa';
import { compute as cubicFeet } from './cubicFeet';
import { compute as hourlyRate } from './hourlyRate';
import { compute as bmr } from './bmr';
import { compute as debtToIncome } from './debtToIncome';
import { compute as squareFootage } from './squareFootage';
import { compute as creatinineClearance } from './creatinineClearance';
import { compute as braSize } from './braSize';
import { compute as ratio } from './ratio';
import { compute as average } from './average';
import { compute as discount } from './discount';
import { compute as hcf } from './hcf';
import { compute as lcm } from './lcm';
import { compute as moles } from './moles';
import { compute as cutOffMarks } from './cutOffMarks';
import { compute as dayOfWeek } from './dayOfWeek';
import { compute as leapYear } from './leapYear';
import { compute as proteinIntake } from './proteinIntake';
import { compute as heartRateECG } from './heartRateECG';
import { compute as carLoanInterest } from './carLoanInterest';
import { compute as mileage } from './mileage';
import { compute as bikeMileage } from './bikeMileage';
import { compute as gdp } from './gdp';
import { compute as waterTankCapacity } from './waterTankCapacity';
import { compute as sgpaToPercentage } from './sgpaToPercentage';
import { compute as dipoleMoment } from './dipoleMoment';
import { compute as equivalentWeight } from './equivalentWeight';
import { compute as edd } from './edd';
import { compute as tdee } from './tdee';
import { compute as calorieDeficit } from './calorieDeficit';
import { compute as maxHeartRate } from './maxHeartRate';
import { compute as zone2HeartRate } from './zone2HeartRate';
import { compute as dogYears } from './dogYears';
import { compute as heloc } from './heloc';
import { compute as apr } from './apr';
import { compute as roi } from './roi';
import { compute as inflation } from './inflation';
import { compute as ringSize } from './ringSize';
import { compute as golf } from './golf';
import { compute as magi } from './magi';
import { compute as realGdp } from './realGdp';
import { compute as breakEven } from './breakEven';
import { compute as costOfSales } from './costOfSales';
import { compute as ltv } from './ltv';
import { compute as socialSecurity } from './socialSecurity';
import { compute as homeEquity } from './homeEquity';
import { compute as creditCardInterest } from './creditCardInterest';
import { compute as biologicalAge } from './biologicalAge';
import { compute as vo2max } from './vo2max';
import { compute as ovulation } from './ovulation';
import { compute as macros } from './macros';
import { compute as passivePerception } from './passivePerception';
import { compute as arcana } from './arcana';
import { compute as roofPitch } from './roofPitch';
import { compute as elevation } from './elevation';
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
  carPayment,
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
  takeHomePay,
  gold,
  bmi,
  bodyFat,
  calorie,
  idealWeight,
  maintenanceCalories,
  mortgage,
  pregnancy,
  pregnancyWeeks,
  age,
  daysBetween,
  dateAddSubtract,
  timeDuration,
  flames,
  mulank,
  lifePath,
  shipping,
  zscore,
  hoursWorked,
  monthlyIncome,
  interestPerMonth,
  gpa,
  cubicFeet,
  hourlyRate,
  bmr,
  debtToIncome,
  squareFootage,
  creatinineClearance,
  braSize,
  ratio,
  average,
  discount,
  hcf,
  lcm,
  moles,
  cutOffMarks,
  dayOfWeek,
  leapYear,
  proteinIntake,
  heartRateECG,
  carLoanInterest,
  mileage,
  bikeMileage,
  gdp,
  waterTankCapacity,
  sgpaToPercentage,
  dipoleMoment,
  equivalentWeight,
  edd,
  tdee,
  calorieDeficit,
  maxHeartRate,
  zone2HeartRate,
  dogYears,
  heloc,
  apr,
  roi,
  inflation,
  ringSize,
  golf,
  magi,
  realGdp,
  breakEven,
  costOfSales,
  ltv,
  socialSecurity,
  homeEquity,
  creditCardInterest,
  biologicalAge,
  vo2max,
  ovulation,
  macros,
  passivePerception,
  arcana,
  roofPitch,
  elevation,
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
