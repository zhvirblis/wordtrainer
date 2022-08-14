export interface Item {
    id: string;
    term: string;
    defenition: string;
    transcription?: string;
    example?: string;
    [others: string]: string | number | undefined;
}
