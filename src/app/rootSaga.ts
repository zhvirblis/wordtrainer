import { spawn, all, AllEffect } from "redux-saga/effects";
import { indexedDBSaga } from "../features/indexDB/saga";
import { modulesSaga } from "../features/module/sagas";

export default function* rootSaga(): Generator<AllEffect<any>> {
    const sagas = [indexedDBSaga, modulesSaga];
    yield all(sagas.map((s) => spawn(s)));
}
