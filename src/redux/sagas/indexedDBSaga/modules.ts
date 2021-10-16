import { call, put, takeEvery } from "@redux-saga/core/effects";
import { moduleActions } from "../../slices/indexedDB/modules";
import { addNewModule, getAllModules } from "../../../services/indexedDB";

function* addNewModuleSaga(action: any): Generator {
    const name: string = action.payload;
    try {
        yield call(addNewModule, name);
        yield put(moduleActions.get());
    } catch (e) {
        yield put(moduleActions.failure(e));
    }
}

function* getAllModulesSaga(): Generator {
    try {
        const modules = yield call(getAllModules);
        yield put(moduleActions.done(modules));
    } catch (e) {
        yield put(moduleActions.failure(e));
    }
}

export function* modulesSaga(): Generator {
    yield takeEvery(moduleActions.add, addNewModuleSaga);
    yield takeEvery(moduleActions.get, getAllModulesSaga);
}
