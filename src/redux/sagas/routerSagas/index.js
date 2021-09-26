import { takeEvery } from "redux-saga/effects";
import { LOCATION_CHANGE } from "connected-react-router";

function* locationChanged(action) {
    console.log('Pathname', action.payload.location.pathname);
}

export function* routerSaga() {
    yield takeEvery(LOCATION_CHANGE, locationChanged);
}