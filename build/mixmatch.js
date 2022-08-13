"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mixmatch = void 0;
const linkedin_quizzes_1 = require("linkedin-quizzes");
const basic_kodyfire_1 = require("basic-kodyfire");
const engine_1 = require("./engine");
const lodash_1 = __importDefault(require("lodash"));
const prompts_1 = __importDefault(require("prompts"));
class Mixmatch extends basic_kodyfire_1.Concept {
    constructor(concept, technology) {
        super(concept, technology);
        this.engine = new engine_1.Engine();
    }
    generate(_data) {
        var e_1, _a, e_2, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const candidateAnswers = [];
            let allQuizQuestions = [];
            for (const quiz of _data.quizzes) {
                let quizQuestions = [];
                const quizFile = yield (0, linkedin_quizzes_1.getQuizFile)(quiz.name);
                const questions = yield (0, linkedin_quizzes_1.extractQuestionsFromMd)(`${quizFile}`);
                quizQuestions = lodash_1.default.sampleSize(questions, quiz.total);
                try {
                    for (var quizQuestions_1 = (e_1 = void 0, __asyncValues(quizQuestions)), quizQuestions_1_1; quizQuestions_1_1 = yield quizQuestions_1.next(), !quizQuestions_1_1.done;) {
                        const node = quizQuestions_1_1.value;
                        const question = yield (0, linkedin_quizzes_1.getQuestion)(node);
                        const { choices, answers, references } = yield (0, linkedin_quizzes_1.getChoices)(node);
                        allQuizQuestions.push({ answers, choices, question: yield (0, linkedin_quizzes_1.prepareQuestion)(quiz.name, question, answers, choices), references });
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (quizQuestions_1_1 && !quizQuestions_1_1.done && (_a = quizQuestions_1.return)) yield _a.call(quizQuestions_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            allQuizQuestions = lodash_1.default.shuffle(allQuizQuestions);
            try {
                for (var allQuizQuestions_1 = __asyncValues(allQuizQuestions), allQuizQuestions_1_1; allQuizQuestions_1_1 = yield allQuizQuestions_1.next(), !allQuizQuestions_1_1.done;) {
                    const question = allQuizQuestions_1_1.value;
                    console.clear();
                    const { value } = yield (0, prompts_1.default)(question.question);
                    candidateAnswers.push(yield (0, linkedin_quizzes_1.checkAnswer)(question.answers, question.choices, value, question.references, _data));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (allQuizQuestions_1_1 && !allQuizQuestions_1_1.done && (_b = allQuizQuestions_1.return)) yield _b.call(allQuizQuestions_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            if (_data.showScore) {
                (0, linkedin_quizzes_1.displayResult)(candidateAnswers);
            }
        });
    }
}
exports.Mixmatch = Mixmatch;
//# sourceMappingURL=mixmatch.js.map