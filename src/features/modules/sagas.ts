import {
    call,
    CallEffect,
    ForkEffect,
    put,
    PutEffect,
    takeEvery,
} from "@redux-saga/core/effects";
import { moduleActions } from "./slice";
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
        yield put(moduleActions.get());
    } catch (e) {
        yield put(moduleActions.failure(e));
    }
}

function* getAllModulesSaga(): Generator<
    CallEffect | PutEffect,
    void,
    Module[]
> {
    try {
        const modules: Module[] = yield call(getAllModules);
        yield put(moduleActions.done(modules));
    } catch (e) {
        yield put(moduleActions.failure(e));
    }
}

function* deleteModuleSaga(action: any): Generator {
    try {
        yield call(deleteModule, action.payload);
        yield put(moduleActions.get());
    } catch (e) {
        yield put(moduleActions.failure(e));
    }
}

function* editModuleSaga(action: any): Generator {
    try {
        yield call(editModule, action.payload.id, action.payload.name);
        yield put(moduleActions.get());
    } catch (e) {
        yield put(moduleActions.failure(e));
    }
}

export function* modulesSaga(): Generator<ForkEffect> {
    yield takeEvery(moduleActions.add, addNewModuleSaga);
    yield takeEvery(moduleActions.get, getAllModulesSaga);
    yield takeEvery(moduleActions.delete, deleteModuleSaga);
    yield takeEvery(moduleActions.edit, editModuleSaga);
}
