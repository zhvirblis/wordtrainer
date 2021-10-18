import { createSlice } from "@reduxjs/toolkit";
import { StoreStatus } from "./";

export type ModuleType = {
    name: string;
};

export type ModulesInitialState = {
    status: StoreStatus;
    list: ModuleType[];
    error: any;
};

export const modulesInitialState: ModulesInitialState = {
    status: StoreStatus.Done,
    list: [],
    error: null,
};

export const moduleSlice = createSlice({
    name: "modules",
    initialState: modulesInitialState,
    reducers: {
        get: (state) => {
            state.status = StoreStatus.Loading;
        },
        add: (state, action) => {
            state.status = StoreStatus.Updating;
        },
        edit: (state) => {
            state.status = StoreStatus.Updating;
        },
        delete: (state, action) => {
            state.status = StoreStatus.Updating;
        },
        done: (state, action) => {
            state.list = action.payload;
            state.status = StoreStatus.Done;
        },
        failure: (state, action) => {
            state.status = StoreStatus.Failed;
            state.error = action.payload;
        },
    },
});

export const moduleReducer = moduleSlice.reducer;

export const moduleActions = moduleSlice.actions;

export const moduleSelector = (state: any) => state.modules;
