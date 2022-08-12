import { Generator as BaseGenerator } from "basic-kodyfire";
import { ITechnology } from "kodyfire-core";
export class Generator extends BaseGenerator {
  technology: ITechnology;
  input: any;
  output: any;
  constructor(params: any, technology: ITechnology) {
    super(params, technology);
  }
  async generate(content: any) {
    this.input = content;
    this.technology.input = content;
    this.technology.rootDir = content.rootDir || this.technology.rootDir;

    // for every concept in concepts list
    for await (const [key] of this.technology.concepts) {
      // eslint-disable-next-line no-prototype-builtins
      if (content.hasOwnProperty(key)) {
        for (const data of content[key]) {
          // do apropriate action
          this.output = await this.technology.concepts.get(key)?.generate(data);
        }
      } else {
        // do apropriate action
      }
    }
    // return result
    return this.output;
  }
}
