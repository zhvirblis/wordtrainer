import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DBState {
    connected: boolean;
    loading: boolean;
    error: any;
    request: IDBDatabase | null;
}

const initialDBState: DBState = {
    connected: false,
    loading: false,
    error: null,
    request: null,
};

export const dbSlice = createSlice({
    name: "db",
    initialState: initialDBState,
    reducers: {
        init: (state) => {
            state.loading = true;
        },
        connected: (state, action) => {
            state.loading = false;
            state.connected = true;
            state.request = action.payload;
        },
        failure: (state, action) => {
            state.loading = false;
            state.connected = false;
            state.error = action.payload;
        },
    },
});

export const { init, connected, failure } = dbSlice.actions;

export const dbReducer = dbSlice.reducer;
