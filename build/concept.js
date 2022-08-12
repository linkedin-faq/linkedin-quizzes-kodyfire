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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concept = void 0;
const linkedin_quizzes_1 = require("linkedin-quizzes");
const basic_kodyfire_1 = require("basic-kodyfire");
const engine_1 = require("./engine");
class Concept extends basic_kodyfire_1.Concept {
    constructor(concept, technology) {
        super(concept, technology);
        this.engine = new engine_1.Engine();
    }
    generate(_data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, linkedin_quizzes_1.startQuiz)(_data.name, _data);
        });
    }
}
exports.Concept = Concept;
//# sourceMappingURL=concept.js.map