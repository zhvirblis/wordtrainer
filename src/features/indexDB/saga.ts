import { call, put, takeEvery } from "redux-saga/effects";
import { init as initDBAction, failure, done } from "./slice";
import { newConn } from "./service";

export function* startInitDB(): Generator {
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
