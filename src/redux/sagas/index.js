import { spawn } from "redux-saga/effects"
import { routerSaga } from "./routerSagas";

export default function* rootSaga() {
    yield spawn(routerSaga);
}