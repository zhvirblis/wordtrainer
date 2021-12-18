import {
    call,
    CallEffect,
    ForkEffect,
    put,
    PutEffect,
    takeEvery,
} from "@redux-saga/core/effects";
import { moduleListActions } from "./slice";
import {
    addNewModule,
    getAllModules,
    deleteModule,
    editModule,
    Module,
} from "./service";

function* addNewModuleSaga(action: any): Generator {
    const name: string = action.payload;
    try {
        yield call(addNewModule, name);
        yield put(moduleListActions.get());
    } catch (e) {
        yield put(moduleListActions.failure(e));
    }
}

function* getAllModulesSaga(): Generator<
    CallEffect | PutEffect,
    void,
    Module[]
> {
    try {
        const modules: Module[] = yield call(getAllModules);
        yield put(moduleListActions.done(modules));
    } catch (e) {
        yield put(moduleListActions.failure(e));
    }
}

function* deleteModuleSaga(action: any): Generator {
    try {
        yield call(deleteModule, action.payload);
        yield put(moduleListActions.get());
    } catch (e) {
        yield put(moduleListActions.failure(e));
    }
}

function* editModuleSaga(action: any): Generator {
    try {
        yield call(editModule, action.payload.id, action.payload.name);
        yield put(moduleListActions.get());
    } catch (e) {
        yield put(moduleListActions.failure(e));
    }
}

export function* modulesSaga(): Generator<ForkEffect> {
    yield takeEvery(moduleListActions.add, addNewModuleSaga);
    yield takeEvery(moduleListActions.get, getAllModulesSaga);
    yield takeEvery(moduleListActions.delete, deleteModuleSaga);
    yield takeEvery(moduleListActions.edit, editModuleSaga);
}
