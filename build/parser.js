"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const basic_kodyfire_1 = require("basic-kodyfire");
const _1 = require(".");
class Parser extends basic_kodyfire_1.Parser {
    constructor() {
        super(new basic_kodyfire_1.Validator(_1.schema));
        this.validate = (data) => {
            return this.validator.validate(data);
        };
    }
    reader(source) {
        return this.readfile(source);
    }
    parse(data) {
        if (!this.validate(data)) {
            return false;
        }
        this.data = data;
        return data;
    }
}
exports.Parser = Parser;
//# sourceMappingURL=parser.js.map