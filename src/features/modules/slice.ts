import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { StoreStatus } from "../indexDB/slice";
import { Module } from "./service";

export type ModulesInitialState = {
    status: StoreStatus;
    list: Module[];
    error: any;
};

export interface ModulesAction extends AnyAction {
    payload: Module[];
}

export interface ModuleErrorAction extends AnyAction {
    payload: any;
}

export const modulesInitialState: ModulesInitialState = {
    status: StoreStatus.BeforeLoad,
    list: [],
    error: null,
};

export const moduleListSlice = createSlice({
    name: "modules",
    initialState: modulesInitialState,
    reducers: {
        get: (state) => {
            state.status = StoreStatus.Loading;
        },
        add: (state, action) => {
            state.status = StoreStatus.Updating;
        },
        edit: (state, action) => {
            state.status = StoreStatus.Updating;
        },
        delete: (state, action) => {
            state.status = StoreStatus.Updating;
        },
        done: (state, action: ModulesAction) => {
            state.list = action.payload;
            state.status = StoreStatus.Done;
        },
        failure: (state, action: ModuleErrorAction) => {
            state.status = StoreStatus.Failed;
            state.error = action.payload;
        },
    },
});

export const moduleListReducer = moduleListSlice.reducer;

export const moduleListActions = moduleListSlice.actions;

export const moduleListSelector = (state: any) => state.modules;

export const moduleStatusSelector = (state: any) => state.modules.status;

export const moduleSelector = (id: number) => (state: any) => state.modules.list.find((el: any) => el.id == id);
