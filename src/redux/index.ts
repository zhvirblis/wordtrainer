import { env } from "process";
import { createStore, applyMiddleware, Store } from "redux";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import sagas from "./sagas";

let store: Store;
let sagaMiddleware: SagaMiddleware = createSagaMiddleware();
if(env.NODE_ENV === "production") {
    store = createStore(reducer, applyMiddleware(sagaMiddleware));
} else {
    store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
}

sagaMiddleware.run(sagas);

export default store;