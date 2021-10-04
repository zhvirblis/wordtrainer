import { configureStore, Store } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import sagas from "./sagas";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { dbReducer } from "./reducers/indexedDB";

export const history = createBrowserHistory();

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const store: Store = configureStore({
    reducer: {
        router: connectRouter(history),
        db: dbReducer,
    },
    middleware: [sagaMiddleware, routerMiddleware(history)],
});

sagaMiddleware.run(sagas);

export default store;
