import { Kody as BaseKody } from 'basic-kodyfire';
import { Technology } from './technology';
export declare class Kody extends BaseKody {
    constructor(params: any, _schema?: {
        type: string;
        properties: {
            project: {
                type: string;
            };
            name: {
                type: string;
            };
            rootDir: {
                type: string;
            };
            concept: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        name: {
                            enum: any[];
                            description: string;
                        };
                        total: {
                            type: string;
                            description: string;
                        };
                        showAnswer: {
                            type: string;
                            description: string;
                            default: boolean;
                        };
                        showCorrectAnswer: {
                            type: string;
                            description: string;
                            default: boolean;
                        };
                        showReference: {
                            type: string;
                            description: string;
                            default: boolean;
                        };
                        showScore: {
                            type: string;
                            description: string;
                            default: boolean;
                        };
                    };
                };
            };
        };
        required: string[];
    }, technology?: Technology);
    read(source: any): any;
    parse(content: any): any;
}
