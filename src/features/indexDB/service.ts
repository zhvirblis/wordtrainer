import { openDB, IDBPDatabase } from "idb";
import { AppDBSchema } from "./types";

export let db: IDBPDatabase<AppDBSchema>;

export const newConn = async (): Promise<void> => {
    db = await openDB("wordApp", 1, {
        upgrade: (database: any) => {
            database.createObjectStore("modules", {
                keyPath: "id",
                autoIncrement: true,
            });

            database.createObjectStore("sets", {
                keyPath: "id",
                autoIncrement: true,
            });
        },
    });
};
