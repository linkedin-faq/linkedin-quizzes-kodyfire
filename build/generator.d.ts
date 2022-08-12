import { Generator as BaseGenerator } from "basic-kodyfire";
import { ITechnology } from "kodyfire-core";
export declare class Generator extends BaseGenerator {
    technology: ITechnology;
    input: any;
    output: any;
    constructor(params: any, technology: ITechnology);
    generate(content: any): Promise<any>;
}
