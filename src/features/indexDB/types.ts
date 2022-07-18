import { DBSchema } from "idb";
import { ModuleSchema } from "../module/schema";
import { SetSchema } from "../set/schema";

export interface AppDBSchema extends DBSchema {
    modules: ModuleSchema;
    sets: SetSchema
}

export enum StoreStatus {
    BeforeLoad = "BeforeLoad",
    Loading = "Loading",
    Updating = "Updating",
    Failed = "Failed",
    Done = "Done",
}

export enum DBStatus {
    NotConnected = "NotConnected",
    Loading = "Loading",
    Failed = "Failed",
    Done = "Done",
}

export interface DBStateWithoutError {
    status: Exclude<DBStatus, DBStatus.Failed>
}

export interface DBStateWithError{
    status: DBStatus.Failed;
    error: any;
}

export type DBState = DBStateWithoutError | DBStateWithError;