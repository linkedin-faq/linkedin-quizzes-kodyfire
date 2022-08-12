"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.Engine = void 0;
const path_1 = require("path");
const basic_kodyfire_1 = require("basic-kodyfire");
const fs = require('fs');
const fsPromises = fs.promises;
// Wrap your builder in a class that implements the IBuilder interface
const builder = __importStar(require("handlebars"));
class Engine extends basic_kodyfire_1.Engine {
    constructor() {
        super();
        this.builder = builder;
    }
    read(path, templateName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (fs.existsSync((0, path_1.join)(path, templateName))) {
                const template = yield fsPromises.readFile((0, path_1.join)(path, templateName));
                return template === null || template === void 0 ? void 0 : template.toString();
            }
            const template = yield fsPromises.readFile((0, path_1.join)((0, path_1.relative)(process.cwd(), __dirname), path, templateName));
            return template === null || template === void 0 ? void 0 : template.toString();
        });
    }
    getPartial(path, template, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const tpl = yield this.read(path, template);
            const compiled = yield this.compile(tpl, data);
            return compiled;
        });
    }
    compile(template, data) {
        const tpl = this.builder.compile(template);
        return tpl(data);
    }
    create(rootDir, outputDir, filename, content) {
        return __awaiter(this, void 0, void 0, function* () {
            yield fsPromises.writeFile((0, path_1.join)(rootDir, outputDir, filename), content);
        });
    }
    overwrite(rootDir, outputDir, filename, content) {
        return __awaiter(this, void 0, void 0, function* () {
            yield fsPromises.writeFile((0, path_1.join)(rootDir, outputDir, filename), content);
        });
    }
    createOrOverwrite(rootDir, outputDir, filename, content, 
    // @todo allow to overwrite
    overwrite = false) {
        return __awaiter(this, void 0, void 0, function* () {
            filename = (0, path_1.join)(rootDir, outputDir, filename);
            // @todo allow to overwrite
            if (!overwrite) {
                content = this.setContent(filename, content);
            }
            // We need to create the directory if it doesn't exist
            yield fsPromises.mkdir((0, path_1.dirname)(filename), { recursive: true });
            yield fsPromises.writeFile(filename, content);
        });
    }
    setContent(filename, content) {
        try {
            if (fs.existsSync(filename)) {
                // @todo: use AST to check if the content is the same
                // and update accordingly
            }
        }
        catch (error) {
            // contine silently
            // @todo: elaborate error handling
            console.log(filename, error.message);
        }
        return content;
    }
    getFiles(rootDir, outputDir) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = yield fsPromises.readdir((0, path_1.join)(rootDir, outputDir));
            return files;
        });
    }
}
exports.Engine = Engine;
//# sourceMappingURL=engine.js.map