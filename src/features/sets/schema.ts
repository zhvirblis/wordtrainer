import { Set } from "../sets/types";

export interface SetSchema {
    key: number;
    value: Set;
    indexes: {
        id: number;
    }
}
