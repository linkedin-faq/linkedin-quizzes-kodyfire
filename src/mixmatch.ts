import { IConcept, ITechnology } from 'kodyfire-core';
import {  getQuizFile, checkAnswer, displayResult, extractQuestionsFromMd, getChoices, getQuestion, prepareQuestion } from "linkedin-quizzes";
import { Concept as BaseConcept } from 'basic-kodyfire';
import { Engine } from './engine';
import _ from 'lodash';
import prompts from 'prompts';

export class Mixmatch extends BaseConcept {
  constructor(concept: Partial<IConcept>, technology: ITechnology) {
    super(concept, technology);
    this.engine = new Engine();
  }

  async generate(_data: any) {
    const candidateAnswers = [];
    let allQuizQuestions: any[] = [];
    for (const quiz of _data.quizzes) {
      let quizQuestions = [];
      const quizFile =  await getQuizFile(quiz.name);
      const questions = await extractQuestionsFromMd(`${quizFile}`);
      quizQuestions = _.sampleSize(questions, quiz.total);
      
      for await (const node of quizQuestions) {
        const question = await getQuestion(node);
        const {
          choices,
          answers,
          references
        } = await getChoices(node);
        
        allQuizQuestions.push({answers, choices, question: await prepareQuestion(quiz.name, question, answers, choices), references});        
      }
    }

    allQuizQuestions = _.shuffle(allQuizQuestions);
    for await (const question of allQuizQuestions) {
    console.clear();
      const {
        value
      } = await prompts(question.question);
      candidateAnswers.push(await checkAnswer(question.answers, question.choices, value, question.references, _data));
  }
    if (_data.showScore) {
      displayResult(candidateAnswers);
    }
  }
}
