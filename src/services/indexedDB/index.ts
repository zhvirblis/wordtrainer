import { openDB, IDBPDatabase } from "idb";

let db: IDBPDatabase;

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

export const addNewModule = async (name: string) => {
    await db.add("modules", {
        name,
    });
};

export const getAllModules = async () => {
    const tx = db.transaction("modules", "readonly");
    const store = tx.objectStore("modules");
    const modules = await store.getAll();
    return modules;
};
