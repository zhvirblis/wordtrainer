import { call, put, select, takeEvery } from "redux-saga/effects";
import {
    init as initDBAction,
    connected,
    failure,
} from "../../reducers/indexedDB";
import { newConn } from "../../../services/indexedDB";

export function* startInitDB() {
    yield put(initDBAction());
}

export function* initDB(): Generator {
    try {
        const request: any = yield call(newConn);
        yield put(connected(request));
    } catch (err) {
        yield put(failure(err));
    }
}

export function* indexedDBSaga() {
    yield takeEvery(initDBAction, initDB);
    yield call(startInitDB);
}
