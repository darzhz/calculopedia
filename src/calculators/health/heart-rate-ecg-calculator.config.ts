import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'heart-rate-ecg-calculator',
  icon: 'monitor_heart',
  category: 'health',
  title: 'Heart Rate from ECG Calculator',
  shortDescription:
    'Calculate heart rate in beats per minute (BPM) from an ECG strip using the RR interval or count method.',
  answer:
    'The heart rate calculator determines BPM from an ECG by dividing 60,000 by the RR interval in milliseconds, or by counting complexes over a time period.',
  targetKeyword: 'heart rate from ecg calculator',
  keywords: [
    'heart rate from ecg',
    'ecg heart rate calculator',
    'rr interval to bpm',
    'calculate heart rate',
    'ecg strip calculator',
  ],
  inputs: [
    {
      type: 'select',
      id: 'method',
      label: 'Calculation method',
      options: [
        { value: 'rr', label: 'RR interval method' },
        { value: 'count', label: 'Count complexes method' },
      ],
      default: 'rr',
    },
    {
      type: 'number',
      id: 'rrInterval',
      label: 'RR interval',
      unit: 'ms',
      default: 800,
      min: 100,
      max: 2000,
      step: 10,
      help: 'Time between two R waves on the ECG',
      showWhen: { field: 'method', value: 'rr' },
    },
    {
      type: 'number',
      id: 'complexes',
      label: 'Number of QRS complexes',
      default: 5,
      min: 1,
      max: 50,
      step: 1,
      showWhen: { field: 'method', value: 'count' },
    },
    {
      type: 'number',
      id: 'timePeriod',
      label: 'Time period',
      unit: 'seconds',
      default: 10,
      min: 1,
      max: 300,
      step: 1,
      showWhen: { field: 'method', value: 'count' },
    },
  ],
  formulaId: 'heartRateECG',
  outputs: [
    {
      id: 'heartRate',
      label: 'Heart rate',
      format: 'number',
      primary: true,
      note: 'beats per minute (BPM)',
    },
    {
      id: 'rhythm',
      label: 'Rhythm assessment',
      format: 'text',
    },
  ],
  formulaDisplay: 'Heart rate = 60,000 ÷ RR interval (ms), or (complexes × 60) ÷ time (seconds).',
  explanation: `The **heart rate** from an ECG is calculated in two ways, depending on whether you have a regular or irregular rhythm.

### Method 1: RR interval (regular rhythm)

Measure the time between two consecutive R waves (the tallest spikes) in milliseconds:

    Heart rate = 60,000 ÷ RR interval (ms)

For an RR interval of **800 ms**:

    HR = 60,000 ÷ 800 = **75 BPM**

### Method 2: Count complexes (irregular rhythm)

If the rhythm is irregular, count the number of QRS complexes over a known time period:

    Heart rate = (number of complexes × 60) ÷ time in seconds

For **5 complexes in 10 seconds**:

    HR = (5 × 60) ÷ 10 = **30 BPM**

### Heart rate ranges

| Category | BPM |
| --- | --- |
| Normal (adults) | 60–100 |
| Bradycardia (slow) | Below 60 |
| Tachycardia (fast) | Above 100 |
| Athletic resting | 40–60 |

### The 300-1500 rule (quick ECG reading)

On a standard ECG paper at 25 mm/s:
- **300 ÷ number of large boxes between R waves** = heart rate
- Example: 4 large boxes → 300 ÷ 4 = 75 BPM

### Important note

This calculator provides educational estimates. Clinical ECG interpretation requires trained medical professionals. Always consult a healthcare provider for medical concerns.
`,
  faq: [
    {
      question: 'How do I calculate heart rate from an ECG?',
      answer:
        'Use the RR interval method: divide 60,000 by the RR interval in milliseconds. For irregular rhythms, count complexes over a time period: (complexes × 60) ÷ seconds.',
    },
    {
      question: 'What is a normal heart rate?',
      answer:
        'A normal resting heart rate for adults is 60–100 BPM. Athletes may have resting rates of 40–60 BPM. Above 100 at rest is considered tachycardia.',
    },
    {
      question: 'What is the 300 rule on ECG?',
      answer:
        'On standard ECG paper, divide 300 by the number of large boxes between two R waves. 3 large boxes = 100 BPM, 4 = 75 BPM, 5 = 60 BPM, 6 = 50 BPM.',
    },
  ],
  relatedCalculators: ['bmi-calculator', 'bmr-calculator'],
  updated: '2026-08-15',
};

export default config;
