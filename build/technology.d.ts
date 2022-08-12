import { Technology as BaseTechnology } from 'basic-kodyfire';
export declare class Technology extends BaseTechnology {
    constructor(params: any, _assets?: {
        name: string;
        version: string;
        rootDir: string;
        concepts: {
            name: string;
        }[];
    });
    initConcepts(): void;
}
