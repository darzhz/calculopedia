import type { CalculatorConfig } from '@/lib/schema';

const config: CalculatorConfig = {
  slug: 'mulank-calculator',
  icon: 'auto_awesome',
  category: 'fun',
  title: 'Mulank (Moolank) Calculator',
  shortDescription:
    'Find your numerology Mulank (birth-day root number) and Bhagyank (destiny number) from your date of birth, with their planet and meaning.',
  answer:
    'The Mulank calculator reduces your birth date to a single digit (1–9) to find your Moolank, and reduces your full date of birth to find your Bhagyank, then shows the governing planet and personality traits for each.',
  targetKeyword: 'mulank calculator',
  keywords: [
    'mulank calculator',
    'how to calculate mulank',
    'moolank',
    'bhagyank calculator',
    'numerology by date of birth',
    'root number',
  ],
  inputs: [
    {
      type: 'date',
      id: 'dateOfBirth',
      label: 'Date of birth',
      default: '1995-06-15',
    },
  ],
  formulaId: 'mulank',
  outputs: [
    {
      id: 'mulank',
      label: 'Mulank (root number)',
      format: 'number',
      primary: true,
      note: 'From your birth day, reduced to 1–9',
    },
    {
      id: 'mulankPlanet',
      label: 'Governing planet',
      format: 'text',
    },
    {
      id: 'mulankMeaning',
      label: 'Personality traits',
      format: 'text',
    },
    {
      id: 'bhagyank',
      label: 'Bhagyank (destiny number)',
      format: 'number',
      note: 'From your full date of birth',
    },
    {
      id: 'bhagyankPlanet',
      label: 'Destiny planet',
      format: 'text',
    },
    {
      id: 'bhagyankMeaning',
      label: 'Destiny traits',
      format: 'text',
    },
  ],
  formulaDisplay:
    'Mulank = reduce the birth day to a single digit (e.g. 15 → 1+5 = 6). Bhagyank = reduce the full date of birth (DD+MM+YYYY) to a single digit.',
  explanation: `In Indian numerology (based on the Chaldean / "Lo Shu" traditions popularised by Harish Johari), two numbers stand out from your **date of birth**: the **Mulank** and the **Bhagyank**.

### Mulank (Moolank) — your root number

Add the digits of your **birth day** until a single digit remains.

    Born on the 15th → 1 + 5 = 6 → Mulank = 6

Born on the 6th? Mulank = 6 directly. Born on the 29th? 2 + 9 = 11 → 1 + 1 = **2**.

### Bhagyank — your destiny number

Add all the digits of your full date of birth (day + month + year) and reduce.

For **15 June 1995**:

    15 + 6 + 1995 = 2016
    2 + 0 + 1 + 6 = 9 → Bhagyank = 9

### The numbers and their planets

| Number | Planet | Core trait |
| --- | --- | --- |
| 1 | Sun (Surya) | Leader |
| 2 | Moon (Chandra) | Diplomat |
| 3 | Jupiter (Guru) | Creative |
| 4 | Rahu / Uranus | Practical |
| 5 | Mercury (Budh) | Adaptable |
| 6 | Venus (Shukra) | Harmonious |
| 7 | Ketu / Neptune | Mystic |
| 8 | Saturn (Shani) | Ambitious |
| 9 | Mars (Mangal) | Courageous |

Numerologists pair your Mulank and Bhagyank with your **name number** (from the letters of your name) to read compatibility and timing. This calculator gives you the two birth-based numbers to start from. Treat the readings as reflective fun, not a verdict on your life.
`,
  faq: [
    {
      question: 'How do I calculate my Mulank?',
      answer:
        'Take the day you were born and reduce it to a single digit: for the 15th, 1 + 5 = 6. That digit is your Mulank (Moolank / root number).',
    },
    {
      question: 'What is the difference between Mulank and Bhagyank?',
      answer:
        'Mulank comes from your birth day only and reflects your core nature. Bhagyank comes from your full date of birth (day + month + year) and reflects your life path or destiny.',
    },
    {
      question: 'Which planet rules which Mulank?',
      answer:
        '1 Sun, 2 Moon, 3 Jupiter, 4 Rahu, 5 Mercury, 6 Venus, 7 Ketu, 8 Saturn and 9 Mars. Each number carries that planet\u2019s qualities in numerology.',
    },
    {
      question: 'Is numerology scientific?',
      answer:
        'No — numerology is a belief system, not a science. Use it for fun and self-reflection, not for major life decisions.',
    },
  ],
  relatedCalculators: ['life-path-number-calculator', 'flames-calculator'],
  updated: '2026-08-15',
};

export default config;
