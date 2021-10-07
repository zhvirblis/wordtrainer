import { spawn, all, AllEffect } from "redux-saga/effects";
import { routerSaga } from "./routerSagas";
import { indexedDBSaga } from "./indexedDBSaga";
import { modulesSaga } from "./indexedDBSaga/modules";

export default function* rootSaga(): Generator<AllEffect<any>> {
    const sagas = [routerSaga, indexedDBSaga, modulesSaga];
    yield all(sagas.map((s) => spawn(s)));
}
