import { DBSchema } from "idb";
import { ModuleSchema } from "../modules/schema";
import { SetSchema } from "../sets/schema";

export interface AppDBSchema extends DBSchema {
    modules: ModuleSchema;
    sets: SetSchema
}
