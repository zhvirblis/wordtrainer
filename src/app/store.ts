import { configureStore, Store } from "@reduxjs/toolkit";

import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import sagas from "./rootSaga";
import { dbReducer } from "../features/indexDB/slice";
import { moduleListReducer } from "../features/module/slice";

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const store: Store = configureStore({
    reducer: {
        db: dbReducer,
        modules: moduleListReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

export default store;
