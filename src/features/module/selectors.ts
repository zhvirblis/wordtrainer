import { Module } from "../module/types";
import { selector } from "recoil";
import { dbState } from "../../common/indexDB/atom";
import { getAllModules } from "./service";
import { DBStatus } from "../../common/indexDB/types";

export const modulesStateSelector = selector<Module[]>({
    key: "modulesSelector",
    get: ({get}) => {
        const dbInit = get(dbState);
        if (dbInit.status === DBStatus.Done) {
            return getAllModules();
        } else {
            return [];
        }
    }
});