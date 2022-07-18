import { atom, selector } from "recoil";
import { modulesStateSelector } from "./selectors";
import { Module } from "./types";

export const modulesState = atom<Module[]>({
    key: "moduleState",
    default: modulesStateSelector
});