import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'life-path-number-calculator',
  icon: 'route',
  category: 'fun',
  title: 'Life Path Number Calculator',
  shortDescription:
    'Find your numerology Life Path number from your date of birth — including master numbers 11, 22 and 33 — with its meaning.',
  answer:
    'The life path number calculator adds the digits of your full date of birth and reduces them to a single digit (or a master number 11, 22, 33), revealing the core themes of your numerological life path.',
  targetKeyword: 'life path number calculator',
  keywords: [
    'life path number calculator',
    'how to calculate life path number',
    'life path numerology',
    'destiny number',
    'birth date numerology',
  ],
  inputs: [
    {
      type: 'date',
      id: 'dateOfBirth',
      label: 'Date of birth',
      default: '1995-06-15',
    },
  ],
  formulaId: 'lifePath',
  outputs: [
    {
      id: 'lifePathNumber',
      label: 'Life Path number',
      format: 'number',
      primary: true,
      note: '1–9, or master number 11/22/33',
    },
    {
      id: 'isMasterNumber',
      label: 'Master number',
      format: 'text',
      note: 'Yes or no',
    },
    {
      id: 'meaning',
      label: 'Your life path meaning',
      format: 'text',
    },
  ],
  formulaDisplay:
    'Add all digits of your date of birth (day + month + year) and reduce to a single digit. Stop early and keep the number if the total is 11, 22 or 33.',
  explanation: `Your **Life Path number** is the most important number in Western numerology — it summarises the core themes of your life. It's derived from your **full date of birth**.

### The calculation

Write your date of birth in digits, add the month, day and year together, then reduce until a single digit — unless you hit a **master number**.

For **15 June 1995**:

    Day:    1 + 5 = 6
    Month:  6
    Year:   1 + 9 + 9 + 5 = 24 → 2 + 4 = 6
    Total:  6 + 6 + 6 = 18 → 1 + 8 = 9 → Life Path = 9

### The meanings

| Number | Title | Theme |
| --- | --- | --- |
| 1 | The Leader | Independence, initiative |
| 2 | The Diplomat | Cooperation, harmony |
| 3 | The Communicator | Creativity, joy |
| 4 | The Builder | Discipline, foundations |
| 5 | The Adventurer | Freedom, change |
| 6 | The Caretaker | Responsibility, nurturing |
| 7 | The Thinker | Analysis, spirituality |
| 8 | The Powerhouse | Ambition, mastery |
| 9 | The Humanitarian | Compassion, wisdom |

### Master numbers

If the sum lands on **11, 22 or 33**, numerologists keep it rather than reducing — these are **master numbers** with heightened potential:

- **11** — the intuitive idealist
- **22** — the master builder
- **33** — the master teacher

A quicker method (many practitioners use it) is to reduce each part first, as shown above. Some reduce only the total; the result is usually the same. This calculator uses the total-sum method that preserves master numbers.
`,
  faq: [
    {
      question: 'How do I calculate my life path number?',
      answer:
        'Add the digits of your full date of birth (day + month + year) and reduce to a single digit. Keep 11, 22 or 33 if the sum lands on them — those are master numbers.',
    },
    {
      question: 'What is a master number?',
      answer:
        '11, 22 and 33 are master numbers in numerology, kept unreduced because they carry intensified potential — intuition, building power and teaching respectively.',
    },
    {
      question: 'What does my life path number say about me?',
      answer:
        'Each number maps to core themes: 1 leadership, 2 cooperation, 3 creativity, 4 discipline, 5 freedom, 6 caregiving, 7 analysis, 8 ambition and 9 humanitarianism. Treat it as reflective, not predictive.',
    },
    {
      question: 'Is the life path number the same as the destiny number?',
      answer:
        'Both come from your date of birth. The Life Path is the standard Western number. In Indian numerology the equivalent is the Bhagyank (destiny number), calculated the same way — see the Mulank calculator.',
    },
  ],
  relatedCalculators: ['mulank-calculator', 'flames-calculator'],
  updated: '2026-08-15',
};

export default config;
