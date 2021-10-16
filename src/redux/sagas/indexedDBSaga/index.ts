import { call, put, takeEvery } from "redux-saga/effects";
import { init as initDBAction, failure, done } from "../../slices/indexedDB";
import { newConn } from "../../../services/indexedDB";

export function* startInitDB() {
    yield put(initDBAction());
}

export function* initDB(): Generator {
    try {
        yield call(newConn);
        yield put(done());
    } catch (err) {
        yield put(failure(err));
    }
}

export function* indexedDBSaga(): Generator {
    yield takeEvery(initDBAction, initDB);
    yield call(startInitDB);
}
