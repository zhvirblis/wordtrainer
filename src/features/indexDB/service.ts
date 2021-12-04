import { openDB, IDBPDatabase } from "idb";

export let db: IDBPDatabase;

export const newConn = async (): Promise<void> => {
    db = await openDB("wordApp", 1, {
        upgrade: (database: any) => {
            database.createObjectStore("modules", {
                keyPath: "id",
                autoIncrement: true,
            });
        },
    });
};
