import { IConcept, ITechnology } from 'kodyfire-core';
import { startQuiz } from "linkedin-quizzes";
import { Concept as BaseConcept } from 'basic-kodyfire';
import { Engine } from './engine';
export class Concept extends BaseConcept {
  constructor(concept: Partial<IConcept>, technology: ITechnology) {
    super(concept, technology);
    this.engine = new Engine();
  }

  async generate(_data: any) {
    await startQuiz(_data.name, _data)
  }
}
