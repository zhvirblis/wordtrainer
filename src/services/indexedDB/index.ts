import { openDB, IDBPDatabase } from "idb";

let db: IDBPDatabase;

export type Module = {
    id: number;
    name: string;
};

export const newConn = async (): Promise<void> => {
    db = await openDB("wordApp", 1, {
        upgrade: (database) => {
            database.createObjectStore("modules", {
                keyPath: "id",
                autoIncrement: true,
            });
        },
    });
};

export const addNewModule = async (name: string): Promise<void> => {
    await db.add("modules", {
        name,
    });
};

export const getAllModules = async (): Promise<Module[]> => {
    const tx = db.transaction("modules", "readonly");
    const store = tx.objectStore("modules");
    const modules: Module[] = await store.getAll();
    await tx.done;
    return modules;
};

export const deleteModule = async (id: number): Promise<void> => {
    const tx = db.transaction("modules", "readwrite");
    const store = tx.objectStore("modules");
    await store.delete(id);
    await tx.done;
};

export const editModule = async (
    id: number,
    newName: string
): Promise<void> => {
    const tx = db.transaction("modules", "readwrite");
    const store = tx.objectStore("modules");
    await store.put({ id, name: newName });
    await tx.done;
};
