import { AnyAction } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { Reducer, combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

export const history = createBrowserHistory();

const initial = {
}

const appReducer: Reducer = function(state = initial, action: AnyAction) {
    return state;
}

const reducer = combineReducers({
    'appReducer': appReducer,
    'router': connectRouter(history)
});

export default reducer;