import { openDB, IDBPDatabase } from "idb";

let db: IDBPDatabase;

const objDatas = ["modules"];

export const newConn = async () => {
    db = await openDB("wordApp", 1, {
        upgrade: (database) => {
            database.createObjectStore("modules", {
                keyPath: "id",
                autoIncrement: true,
            });
        },
    });
};
