import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum StoreStatus {
    Loading = "Loading",
    Updating = "Updating",
    Failed = "Failed",
    Done = "Done",
}

export enum DBStatus {
    NotConnected = "NotConnected",
    Loading = "Loading",
    Failed = "Failed",
    Done = "Done",
}

export interface DBStateInterface {
    status: DBStatus;
    error: any;
}

const initialDBState: DBStateInterface = {
    status: DBStatus.NotConnected,
    error: null,
};

export const dbSlice = createSlice({
    name: "indexDB",
    initialState: initialDBState,
    reducers: {
        init: (state) => {
            state.status = DBStatus.Loading;
        },
        failure: (state, action) => {
            state.status = DBStatus.Failed;
            state.error = action.payload;
        },
        done: (state) => {
            state.status = DBStatus.Done;
        },
    },
});

export const { init, failure, done } = dbSlice.actions;

export const dbReducer = dbSlice.reducer;
