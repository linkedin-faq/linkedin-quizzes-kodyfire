"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.conceptArray = exports.concept = void 0;
const linkedin_quizzes_1 = require("linkedin-quizzes");
exports.concept = {
    type: 'object',
    properties: {
        name: { enum: (0, linkedin_quizzes_1.getQuizzes)().map((quiz) => quiz.value), description: 'The name of the quiz' },
        total: { type: 'number', description: 'The total number of questions' },
        showAnswer: { type: 'boolean', description: 'Show the answer after the quiz question', default: true },
        showCorrectAnswer: { type: 'boolean', description: 'Show the correct answer after the quiz question', default: true },
        showReference: { type: 'boolean', description: 'Show the reference after the quiz question', default: true },
        showScore: { type: 'boolean', description: 'Show the score after the quiz', default: true }
    },
};
exports.conceptArray = {
    type: 'array',
    items: exports.concept,
};
exports.schema = {
    type: 'object',
    properties: {
        project: { type: 'string' },
        name: { type: 'string' },
        rootDir: { type: 'string' },
        concept: exports.conceptArray,
    },
    required: ['name'],
};
//# sourceMappingURL=schema.js.map