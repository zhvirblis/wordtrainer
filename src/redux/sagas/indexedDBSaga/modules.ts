import { call, put, takeEvery } from "@redux-saga/core/effects";
import { moduleActions } from "../../slices/indexedDB/modules";
import { addNewModule } from "../../../services/indexedDB";

function* addNewModuleSaga(action: any): Generator {
    const name: string = action.payload;
    try {
        yield call(addNewModule, name);
        yield put(moduleActions.get());
    } catch (e) {
        yield put(moduleActions.failure);
    }
}

function* getAllModulesSaga(): Generator {
   console.log("Get All Modules");
}

export function* modulesSaga(): Generator {
    yield takeEvery(moduleActions.add, addNewModuleSaga);
    yield takeEvery(moduleActions.get, getAllModulesSaga);
}
