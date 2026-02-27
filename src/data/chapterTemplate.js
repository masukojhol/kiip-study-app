/**
 * KIIP Level 3 Chapter Data Template
 *
 * Copy this file and rename to chapterX.js (e.g., chapter5.js)
 * Fill in all the data following the structure below.
 *
 * IMPORTANT: All content should be in three languages:
 * - Korean (korean)
 * - English (english)
 * - Nepali (nepali)
 */

// Chapter Information
export const chapterInfo = {
  chapter: 0, // Chapter number (e.g., 5, 6, 7...)
  title: {
    korean: '',      // e.g., '부동산'
    english: '',     // e.g., 'Real Estate'
    nepali: ''       // e.g., 'घरजग्गा'
  }
};

// Vocabulary List
// Categories can be: Nouns, Verbs, Adjectives, Expressions, etc.
export const vocabulary = [
  {
    id: 1,
    category: 'Nouns',
    korean: '',
    pronunciation: '',
    english: '',
    nepali: '',
    example: {
      korean: '',
      english: '',
      nepali: ''
    }
  },
  // Add more vocabulary items...
];

// Grammar Patterns
export const grammar = [
  {
    id: 1,
    pattern: '',  // e.g., 'V + (으)ㄹ 만하다'
    meaning: {
      english: '',
      nepali: ''
    },
    description: {
      english: '',  // Detailed explanation of the grammar pattern
      nepali: ''
    },
    whenToUse: {
      situations: [
        {
          situation: {
            english: '',
            nepali: ''
          },
          example: {
            korean: '',
            english: '',
            nepali: ''
          }
        }
        // Add more situations...
      ]
    },
    whereToUse: {
      english: '',  // Formal/informal contexts, spoken/written, etc.
      nepali: ''
    },
    formality: {
      english: '',  // Explain formality level
      nepali: ''
    },
    formation: {
      rule: '',  // e.g., 'Verb stem + (으)ㄹ 만하다'
      notes: {
        english: '',  // When to use 을 vs ㄹ, exceptions, etc.
        nepali: ''
      },
      conjugationTable: [
        {
          verb: '',      // Base verb (e.g., '보다')
          stem: '',      // Verb stem (e.g., '보')
          result: '',    // Conjugated form (e.g., '볼 만하다')
          english: '',
          nepali: ''
        }
        // Add more conjugations...
      ]
    },
    comparisonWithSimilar: {
      // Option 1: Simple comparison
      english: '',
      nepali: '',
      // Option 2: Detailed pattern comparison
      patterns: [
        {
          pattern: '',
          difference: {
            english: '',
            nepali: ''
          },
          exampleComparison: {
            formal: '',
            casual: ''
          }
        }
      ]
    },
    examples: [
      {
        context: {
          english: '',  // Situation context
          nepali: ''
        },
        korean: '',
        english: '',
        nepali: ''
      }
      // Add more examples (aim for 5-10 per grammar pattern)
    ]
  }
  // Add more grammar patterns...
];

// Dialogues
export const dialogues = [
  {
    id: 1,
    title: {
      korean: '',
      english: '',
      nepali: ''
    },
    situation: {
      korean: '',
      english: '',
      nepali: ''
    },
    conversation: [
      {
        speaker: '',  // e.g., '손님', '직원', 'A', 'B'
        korean: '',
        english: '',
        nepali: ''
      }
      // Add more conversation turns...
    ]
  }
  // Add more dialogues...
];

// Reading Passages
export const readingPassages = [
  {
    id: 1,
    title: {
      korean: '',
      english: '',
      nepali: ''
    },
    content: {
      korean: '',   // Full Korean text
      english: '',  // English translation
      nepali: ''    // Nepali translation
    },
    keyPoints: [
      {
        korean: '',
        english: '',
        nepali: ''
      }
      // Add key points/summary...
    ]
  }
  // Add more reading passages...
];

// Practice Exercises
export const practiceExercises = [
  {
    type: 'fill-in-blank',  // or 'translation', 'multiple-choice', 'matching'
    instruction: {
      korean: '',
      english: '',
      nepali: ''
    },
    questions: [
      {
        question: '',      // Question with blank (use ___ for blank)
        nepaliQuestion: '',
        hint: '',          // Optional hint
        answer: ''
      }
      // Add more questions...
    ]
  },
  {
    type: 'translation',
    instruction: {
      korean: '',
      english: '',
      nepali: ''
    },
    questions: [
      {
        question: '',      // Sentence to translate
        nepaliQuestion: '',
        answer: ''
      }
      // Add more questions...
    ]
  }
];
