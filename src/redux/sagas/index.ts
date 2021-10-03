import { spawn, all, AllEffect } from "redux-saga/effects";
import { routerSaga } from "./routerSagas";

export default function* rootSaga(): Generator<AllEffect<any>> {
    const sagas = [routerSaga];
    yield all(sagas.map((s) => spawn(s)));
}
