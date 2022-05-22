import { Module } from "./service";

export interface ModuleSchema {
    key: number;
        value: Module;
        indexes: {
        id: number;
    }
}
