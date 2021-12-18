import {
    createSlice,
    ActionCreatorWithPayload,
    ActionCreatorWithoutPayload,
} from "@reduxjs/toolkit";

export enum StoreStatus {
    BeforeLoad = "BeforeLoad",
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

export const {
    init,
    failure,
    done,
}: {
    init: ActionCreatorWithoutPayload;
    failure: ActionCreatorWithPayload<any>;
    done: ActionCreatorWithoutPayload;
} = dbSlice.actions;

export const dbReducer = dbSlice.reducer;

export const dbSelector = (state: any) => state.db;
