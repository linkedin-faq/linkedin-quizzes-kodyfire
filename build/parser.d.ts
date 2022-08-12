import { Parser as BaseParser } from 'basic-kodyfire';
export declare class Parser extends BaseParser {
    constructor();
    reader(source: string): any;
    parse(data: any): any;
    validate: (data: any) => boolean;
}
