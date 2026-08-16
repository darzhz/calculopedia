import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'golf-handicap-calculator',
  icon: 'sports_golf',
  category: 'fun',
  title: 'Golf Handicap Calculator',
  shortDescription:
    'Calculate your golf handicap differential for a round — (score − course rating) × 113 ÷ slope — the basis of the World Handicap System.',
  answer:
    'A golf handicap is built from score differentials, each calculated as (score − course rating) × 113 ÷ slope. Your index is the average of your best 8 differentials from your last 20 rounds.',
  targetKeyword: 'golf handicap calculator',
  keywords: [
    'golf handicap calculator',
    'how to calculate handicap in golf',
    'golf handicap differential',
    'whs handicap',
    'golf score differential',
  ],
  inputs: [
    {
      type: 'number',
      id: 'score',
      label: 'Your score',
      unit: 'strokes',
      default: 90,
      min: 50,
      max: 130,
      step: 1,
    },
    {
      type: 'number',
      id: 'courseRating',
      label: 'Course rating',
      unit: '',
      default: 71.5,
      min: 60,
      max: 80,
      step: 0.1,
      help: 'Printed on the scorecard — the scratch golfer\u2019s expected score',
    },
    {
      type: 'number',
      id: 'slope',
      label: 'Slope rating',
      unit: '',
      default: 113,
      min: 55,
      max: 155,
      step: 1,
      help: 'Course difficulty for bogey golfers; 113 is standard',
    },
  ],
  formulaId: 'golf',
  outputs: [
    {
      id: 'differential',
      label: 'Handicap differential',
      format: 'decimal',
      decimals: 1,
      primary: true,
      note: 'For this round',
    },
    {
      id: 'score',
      label: 'Score',
      format: 'number',
      note: 'Strokes',
    },
    {
      id: 'slope',
      label: 'Slope rating',
      format: 'number',
    },
  ],
  formulaDisplay:
    'Differential = (score − course rating) × 113 ÷ slope. Example: (90 − 71.5) × 113 ÷ 113 = 18.5.',
  explanation: `A **golf handicap** lets players of different abilities compete fairly by adjusting every score to the difficulty of the course. It's calculated under the **World Handicap System (WHS)**.

### The score differential

Every round becomes a **differential** that corrects for how hard the course is:

    Differential = (score − course rating) × 113 ÷ slope

- **Course rating** — what a scratch golfer would score.
- **Slope rating** — how much harder the course is for a bogey golfer; 113 is average.

### Example

You shoot **90** on a course rated **71.5** with a slope of **113**:

    Differential = (90 − 71.5) × 113 ÷ 113 = 18.5

Shoot 90 on a tougher course (slope 130) and the differential improves to **16.1** — your round was more impressive there.

### From differentials to your handicap index

The WHS takes your **best 8 differentials from your last 20 rounds** and averages them:

    Handicap index = average of best 8 of last 20 differentials

Before you have 20 rounds, fewer rounds are used — as few as 3.

### What the number means

An index of **18.5** means you typically play about 18 strokes over a course rating. Lower is better. Your course handicap on any specific course adjusts the index for that course's slope and par.

> You still need at least a few rounds to get a real index — this calculator gives you the per-round differential that builds it.
`,
  faq: [
    {
      question: 'How do I calculate my golf handicap?',
      answer:
        'Compute each round\u2019s differential as (score − course rating) × 113 ÷ slope. Your handicap index is the average of your best 8 differentials from your last 20 rounds.',
    },
    {
      question: 'What is a golf handicap differential?',
      answer:
        'It is a single round\u2019s score adjusted for course difficulty using the course rating and slope rating, so rounds on different courses can be compared fairly.',
    },
    {
      question: 'What does a handicap of 20 mean?',
      answer:
        'It means you typically play about 20 strokes over the course rating. The lower the handicap, the better the golfer — scratch is 0, professionals are plus.',
    },
  ],
  relatedCalculators: ['dog-years-calculator', 'ring-size-calculator', 'flames-calculator', 'average-calculator'],
  updated: '2026-08-16',
};

export default config;