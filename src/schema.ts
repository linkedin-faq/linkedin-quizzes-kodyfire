import { getQuizzes } from 'linkedin-quizzes'
export const concept = {
  type: 'object',
  properties: {
    name: { enum: getQuizzes().map((quiz:any) => quiz.value), description: 'The name of the quiz' },
    total: { type: 'number', description: 'The total number of questions' },
    showAnswer: { type: 'boolean', description: 'Show the answer after the quiz question', default: true },
    showCorrectAnswer: { type: 'boolean', description: 'Show the correct answer after the quiz question', default: true },
    showReference: { type: 'boolean', description: 'Show the reference after the quiz question', default: true },
    showScore: { type: 'boolean', description: 'Show the score after the quiz', default: true }
    
  },
};

export const conceptArray = {
  type: 'array',
  items: concept,
};

export const mixMatch = {
  type: 'object',
  properties: {
    quizzes: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { enum: getQuizzes().map((quiz:any) => quiz.value), description: 'The name of the quiz' },
          total: { type: 'number', description: 'The total number of questions' }, 
        },
      },
    },
    showAnswer: { type: 'boolean', description: 'Show the answer after the quiz question', default: true },
    showCorrectAnswer: { type: 'boolean', description: 'Show the correct answer after the quiz question', default: true },
    showReference: { type: 'boolean', description: 'Show the reference after the quiz question', default: true },
    showScore: { type: 'boolean', description: 'Show the score after the quiz', default: true }
    
  }
}
export const mixMatchArray = {
  type: 'array',
  items: mixMatch,
};

export const schema = {
  type: 'object',
  properties: {
    project: { type: 'string' },
    name: { type: 'string' },
    rootDir: { type: 'string' },
    concept: conceptArray,
    mixmatch: mixMatchArray,
  },
  required: ['name'],
};
