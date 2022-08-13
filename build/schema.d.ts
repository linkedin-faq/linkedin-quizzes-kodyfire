export declare const concept: {
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
export declare const conceptArray: {
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
export declare const mixMatch: {
    type: string;
    properties: {
        quizzes: {
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
                };
            };
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
export declare const mixMatchArray: {
    type: string;
    items: {
        type: string;
        properties: {
            quizzes: {
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
                    };
                };
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
export declare const schema: {
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
        mixmatch: {
            type: string;
            items: {
                type: string;
                properties: {
                    quizzes: {
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
                            };
                        };
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
};
