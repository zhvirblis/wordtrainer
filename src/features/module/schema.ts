import Module from ".";

export interface ModuleSchema {
    key: number;
    value: Module;
    indexes: {
        id: number;
    }
}
