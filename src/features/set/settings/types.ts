export enum InputNames {
    TERM = "TERM",
    DEFENITION = "DEFENITION",
    EXAMPLE = "EXAMPLE"
} 

export interface SetSettings {
    termLang?: string;
    defenitionLang?: string;
    questions: (InputNames | string)[];
    answers: (InputNames | string)[];
    exampleMode?: boolean;
}
