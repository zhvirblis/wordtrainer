import { DBSchema } from "idb";
import { ModuleSchema } from "../module/schema";
import { SetSchema } from "../set/schema";

export interface AppDBSchema extends DBSchema {
    modules: ModuleSchema;
    sets: SetSchema
}
