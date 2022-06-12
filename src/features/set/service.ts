import { db } from "../indexDB/service";
import { Set } from "./types";

export const addNewSet = async (set: Set): Promise<void> => {
    await db.add("sets", set);
};

export const getAllSets = async (): Promise<Set[]> => {
    const tx = db.transaction("sets", "readonly");
    const store = tx.objectStore("sets");
    const sets: Set[] = await store.getAll();
    await tx.done;
    return sets;
};

export const deleteSet = async (id: number): Promise<void> => {
    const tx = db.transaction("sets", "readwrite");
    const store = tx.objectStore("sets");
    await store.delete(id);
    await tx.done;
};

export const editSet = async (set: Set): Promise<void> => {
    const tx = db.transaction("sets", "readwrite");
    const store = tx.objectStore("sets");
    await store.put(set);
    await tx.done;
};
