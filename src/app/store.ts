import { configureStore, Store } from "@reduxjs/toolkit";

import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import sagas from "./rootSaga";
import { createBrowserHistory, History } from "history";
import { dbReducer } from "../features/indexDB/slice";
import { moduleReducer } from "../features/modules/slice";

export const history: History = createBrowserHistory();

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const store: Store = configureStore({
    reducer: {
        db: dbReducer,
        modules: moduleReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

export default store;
