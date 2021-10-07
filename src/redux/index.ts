import { configureStore, Store } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import sagas from "./sagas";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { dbReducer } from "./slices/indexedDB";
import { moduleReducer } from "./slices/indexedDB/modules";

export const history = createBrowserHistory();

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const store: Store = configureStore({
    reducer: {
        router: connectRouter(history),
        db: dbReducer,
        modules: moduleReducer,
    },
    middleware: [sagaMiddleware, routerMiddleware(history)],
});

sagaMiddleware.run(sagas);

export default store;
