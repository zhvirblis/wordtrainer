import { spawn, all, AllEffect } from "redux-saga/effects";
import { indexedDBSaga } from "./indexedDBSaga";
import { modulesSaga } from "./indexedDBSaga/modules";

export default function* rootSaga(): Generator<AllEffect<any>> {
    const sagas = [indexedDBSaga, modulesSaga];
    yield all(sagas.map((s) => spawn(s)));
}
