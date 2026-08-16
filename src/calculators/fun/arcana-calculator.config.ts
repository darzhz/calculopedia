import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'arcana-calculator',
  icon: 'auto_awesome',
  category: 'fun',
  title: 'Arcana Check Calculator',
  shortDescription:
    'Calculate your D&D 5e Arcana check — d20 roll + Intelligence modifier + proficiency — for recalling magical knowledge.',
  answer:
    'An Arcana check in D&D 5e is your d20 roll plus your Intelligence modifier, plus your proficiency bonus if you are proficient in the Arcana skill (doubled with Expertise).',
  targetKeyword: 'arcana calculator',
  keywords: [
    'arcana calculator',
    'how to calculate arcana',
    'dnd arcana check',
    'arcana skill 5e',
    'arcane knowledge roll',
  ],
  inputs: [
    {
      type: 'number',
      id: 'intelligenceMod',
      label: 'Intelligence modifier',
      unit: '',
      default: 4,
      min: -5,
      max: 10,
      step: 1,
    },
    {
      type: 'number',
      id: 'proficiency',
      label: 'Proficiency bonus',
      unit: '',
      default: 4,
      min: 2,
      max: 9,
      step: 1,
      help: 'From your character level',
    },
    {
      type: 'toggle',
      id: 'hasProficiency',
      label: 'Proficient in Arcana',
      default: true,
    },
    {
      type: 'toggle',
      id: 'hasExpertise',
      label: 'Expertise in Arcana',
      default: false,
    },
    {
      type: 'number',
      id: 'roll',
      label: 'd20 roll',
      unit: '',
      default: 12,
      min: 1,
      max: 20,
      step: 1,
      help: 'Set to 10 for an average roll, or use your actual roll',
    },
  ],
  formulaId: 'arcana',
  outputs: [
    {
      id: 'total',
      label: 'Arcana check total',
      format: 'number',
      primary: true,
      note: 'Roll + Intelligence modifier + proficiency',
    },
    {
      id: 'roll',
      label: 'd20 roll',
      format: 'number',
    },
    {
      id: 'intelligenceMod',
      label: 'Intelligence modifier',
      format: 'number',
    },
    {
      id: 'profBonus',
      label: 'Proficiency bonus added',
      format: 'number',
    },
    {
      id: 'outcome',
      label: 'Result',
      format: 'text',
    },
  ],
  formulaDisplay:
    'Arcana check = d20 roll + Intelligence modifier + proficiency bonus (doubled with Expertise). Example: 12 + 4 + 4 = 20.',
  explanation: `**Arcana** is a D&D 5e Intelligence skill for recalling knowledge about spells, magic items, symbols and arcane traditions. When you want to identify a magic effect or remember an obscure spell, the DM calls for an Arcana check.

### The formula

    Arcana check = d20 roll + Intelligence modifier + proficiency bonus

- **d20 roll** — the die, from 1 to 20.
- **Intelligence modifier** — Arcana is based on Intelligence.
- **Proficiency bonus** — only if proficient in the Arcana skill; **Expertise** doubles it.

### Example

A level 9 wizard (proficiency +4, Intelligence modifier +4, proficient) rolls a **12**:

    Arcana = 12 + 4 + 4 = 20

### Reading the total

| Total | What the DM might reveal |
| --- | --- |
| 30+ | Obscure arcane secrets |
| 20+ | Deep understanding of the effect |
| 15+ | Useful arcane insight |
| 10+ | Basic facts about the magic |
| <10 | Little or nothing recalled |

### With Expertise

Wizards can take Expertise (some subclasses) to double proficiency:

    12 + 4 + (4 × 2) = 24

> The DM sets the DC — the number you must meet or beat. A check of 20 is a strong success against most DCs.
`,
  faq: [
    {
      question: 'How do you calculate an Arcana check?',
      answer:
        'Roll a d20, add your Intelligence modifier, and add your proficiency bonus if you are proficient in Arcana: 12 + 4 + 4 = 20. Expertise in Arcana doubles the proficiency bonus.',
    },
    {
      question: 'What is Arcana used for in D&D?',
      answer:
        'Arcana checks recall knowledge about spells, magic items and arcane phenomena — like identifying a spell being cast or remembering a rune\u2019s meaning.',
    },
    {
      question: 'What modifier does Arcana use?',
      answer:
        'Arcana uses your Intelligence modifier. Your proficiency bonus is added on top if you are proficient in the skill, and doubled if you have Expertise.',
    },
  ],
  relatedCalculators: ['passive-perception-calculator', 'flames-calculator', 'life-path-number-calculator', 'mulank-calculator'],
  updated: '2026-08-16',
};

export default config;