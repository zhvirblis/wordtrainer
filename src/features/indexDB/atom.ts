import { atom } from "recoil";
import { DBState, DBStatus } from "./types";

export const dbState = atom<DBState>({
    key: "dbInit",
    default: {
        status: DBStatus.NotConnected
    }
});