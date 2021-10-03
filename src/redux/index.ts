import { env } from "process";
import { createStore, applyMiddleware, Store } from "redux";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import sagas from "./sagas";
import { history } from "./reducers";
import { routerMiddleware } from "connected-react-router";

let store: Store;
const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
if (env.NODE_ENV === "production") {
    store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware, routerMiddleware(history))
    );
} else {
    store = createStore(
        reducer,
        composeWithDevTools(
            applyMiddleware(sagaMiddleware, routerMiddleware(history))
        )
    );
}

sagaMiddleware.run(sagas);

export default store;
