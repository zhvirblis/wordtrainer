import { spawn, all, AllEffect } from "redux-saga/effects";
import { routerSaga } from "./routerSagas";
import { indexedDBSaga } from "./indexedDBSaga";

export default function* rootSaga(): Generator<AllEffect<any>> {
    const sagas = [routerSaga, indexedDBSaga];
    yield all(sagas.map((s) => spawn(s)));
}
