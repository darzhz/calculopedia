import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'flames-calculator',
  icon: 'favorite',
  category: 'fun',
  title: 'FLAMES Calculator',
  shortDescription:
    'Check name compatibility the classic way — Friends, Lovers, Affectionate, Marriage, Enemies or Siblings — by comparing any two names.',
  answer:
    'The FLAMES calculator strips matching letters from two names and counts the remainder to pick one of six results — Friends, Lovers, Affectionate, Marriage, Enemies or Siblings.',
  targetKeyword: 'flames calculator',
  keywords: ['flames calculator', 'flames game', 'calculate flames', 'name compatibility', 'flames result'],
  inputs: [
    {
      type: 'text',
      id: 'name1',
      label: 'Your name',
      default: 'Rahul',
      placeholder: 'e.g. Rahul',
      maxLength: 60,
    },
    {
      type: 'text',
      id: 'name2',
      label: 'Their name',
      default: 'Priya',
      placeholder: 'e.g. Priya',
      maxLength: 60,
    },
  ],
  formulaId: 'flames',
  outputs: [
    {
      id: 'result',
      label: 'Your FLAMES result',
      format: 'text',
      primary: true,
    },
    {
      id: 'letter',
      label: 'Letter',
      format: 'text',
      note: 'F · L · A · M · E · S',
    },
    {
      id: 'remaining',
      label: 'Remaining letters',
      format: 'number',
      note: 'Total unmatched letters after crossing out',
    },
  ],
  formulaDisplay:
    'Cross out all common letters in the two names. Count the unmatched letters (n). Then repeatedly remove the n-th letter around the FLAMES circle until one letter — and its meaning — remains.',
  explanation: `FLAMES is the classic name game: it "predicts" the nature of a relationship between two people using nothing but their names. It's pure fun — treat the result as a joke, not destiny.

### The rules

    1. Write both names, ignoring spaces.
    2. Cross out every letter that appears in both names.
    3. Count the letters that remain unmatched.
    4. Step around the FLAMES circle (F · L · A · M · E · S) and remove the letter at each n-th position, until one letter is left.

### Worked example

Names **RAM** and **SITA**:

    RAM:  R A M
    SITA: S I T A

'A' appears in both, so cross it out. Remaining letters: R, M, S, I, T → **5 unmatched**.

Starting at the beginning of **FLAMES** and counting off every 5th letter:

    F L A M E S  →  remove E
    F L A M S    →  remove M
    F L A S      →  remove S
    F L A        →  remove L
    F A          →  remove A

The last letter is **F → Friends**.

### The six results

| Letter | Meaning |
| --- | --- |
| F | Friends |
| L | Lovers |
| A | Affectionate |
| M | Marriage |
| E | Enemies |
| S | Siblings |

The fewer common letters, the larger the "count" — and the more steps it takes around the circle. Whether you get Lovers or Enemies, it's all in good fun. Try variations: use full names, nicknames, or just first names, and compare!
`,
  faq: [
    {
      question: 'How is FLAMES calculated?',
      answer:
        'Cross out the common letters between the two names, count the unmatched letters (n), then remove every n-th letter around the FLAMES circle until one letter remains. That letter gives the result.',
    },
    {
      question: 'What does FLAMES stand for?',
      answer:
        'F = Friends, L = Lovers, A = Affectionate, M = Marriage, E = Enemies and S = Siblings. The last letter standing after the counting game is your result.',
    },
    {
      question: 'How do I do the FLAMES game with my name?',
      answer:
        'Write both names, cancel out all common letters, count the leftover letters, then count that number around the FLAMES circle, removing every nth letter until one remains. This calculator does it in a click.',
    },
    {
      question: 'Is the FLAMES result real?',
      answer:
        'No — it is a fun name game with no basis in real relationship prediction. Enjoy it as entertainment, not as advice.',
    },
  ],
  relatedCalculators: ['mulank-calculator', 'life-path-number-calculator'],
  updated: '2026-08-15',
};

export default config;
