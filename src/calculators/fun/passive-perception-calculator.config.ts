import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'passive-perception-calculator',
  icon: 'visibility',
  category: 'fun',
  title: 'Passive Perception Calculator',
  shortDescription:
    'Find your D&D 5e passive Perception score — 10 + Wisdom modifier + proficiency — for spotting traps and hidden creatures.',
  answer:
    'Passive Perception in D&D 5e is 10 + your Wisdom modifier, plus your proficiency bonus if you are proficient in Perception (doubled with Expertise). It is the floor for noticing things without rolling.',
  targetKeyword: 'passive perception calculator',
  keywords: [
    'passive perception calculator',
    'how to calculate passive perception',
    'dnd passive perception',
    'dungeons and dragons perception',
    'passive perception 5e',
  ],
  inputs: [
    {
      type: 'number',
      id: 'wisdomMod',
      label: 'Wisdom modifier',
      unit: '',
      default: 3,
      min: -5,
      max: 10,
      step: 1,
      help: 'Your WIS modifier, usually −1 to +5',
    },
    {
      type: 'number',
      id: 'proficiency',
      label: 'Proficiency bonus',
      unit: '',
      default: 3,
      min: 2,
      max: 9,
      step: 1,
      help: 'From your character level (2 at level 1, up to 9 at level 17+)',
    },
    {
      type: 'toggle',
      id: 'hasProficiency',
      label: 'Proficient in Perception',
      default: true,
    },
    {
      type: 'toggle',
      id: 'hasExpertise',
      label: 'Expertise in Perception',
      default: false,
      help: 'Rogues and Bards can double their proficiency bonus',
    },
  ],
  formulaId: 'passivePerception',
  outputs: [
    {
      id: 'passivePerception',
      label: 'Passive Perception',
      format: 'number',
      primary: true,
      note: '10 + Wisdom modifier + proficiency',
    },
    {
      id: 'wisdomMod',
      label: 'Wisdom modifier',
      format: 'number',
    },
    {
      id: 'profBonus',
      label: 'Proficiency bonus added',
      format: 'number',
      note: 'Doubled with Expertise',
    },
  ],
  formulaDisplay:
    'Passive Perception = 10 + Wisdom modifier + proficiency bonus (proficiency doubled with Expertise). Example: 10 + 3 + 3 = 16.',
  explanation: `**Passive Perception** is a D&D 5e mechanic for noticing things without actively searching — a hidden trap, an ambush, or a creature in the shadows. The Dungeon Master uses it against your enemies' stealth rolls.

### The formula

    Passive Perception = 10 + Wisdom modifier + proficiency bonus

- **10** is the baseline (the average of a d20 roll).
- **Wisdom modifier** — your WIS modifier, usually −1 to +5.
- **Proficiency bonus** — only if you are **proficient in Perception**; from level-based proficiency (2 at level 1, 5 at level 13, etc.).

### Example

A level 5 character (proficiency +3) with a Wisdom modifier of **+3**, proficient in Perception:

    Passive Perception = 10 + 3 + 3 = 16

That 16 is the number the DM compares to creatures' Stealth rolls. A goblin rolling Stealth 14 fails to ambush you.

### Expertise

**Rogues** and **Bards** (and a few others) can take Expertise in Perception, which **doubles the proficiency bonus**:

    10 + 3 + (3 × 2) = 19

### Rule-of-thumb uses

- **Traps** — passive Perception often determines whether you spot them.
- **Ambushes** — compared against enemies' Stealth.
- **Secret doors** — many DMs use passive scores for "can I spot it if I'm not looking?"

> Your passive Perception is *always on*. If you roll Perception actively, use the d20 roll instead — passive is the floor.
`,
  faq: [
    {
      question: 'How do you calculate passive perception?',
      answer:
        'Passive Perception = 10 + your Wisdom modifier, plus your proficiency bonus if proficient in Perception. Expertise in Perception doubles the proficiency bonus.',
    },
    {
      question: 'What is passive perception used for in D&D?',
      answer:
        'It is the number the Dungeon Master compares against enemies\u2019 Stealth rolls and uses to decide whether you notice hidden traps, doors or ambushes without actively searching.',
    },
    {
      question: 'Does proficiency count for passive perception?',
      answer:
        'Yes — if you are proficient in the Perception skill, you add your proficiency bonus. Expertise doubles that bonus for Rogues, Bards and others with Expertise.',
    },
  ],
  relatedCalculators: ['arcana-calculator', 'flames-calculator', 'life-path-number-calculator', 'mulank-calculator'],
  updated: '2026-08-16',
};

export default config;