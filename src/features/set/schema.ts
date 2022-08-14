import Set from ".";

export interface SetSchema {
    key: number;
    value: Set;
    indexes: {
        id: number;
    }
}
