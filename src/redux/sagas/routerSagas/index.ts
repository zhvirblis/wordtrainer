import { takeEvery } from "redux-saga/effects";
import { LOCATION_CHANGE } from "connected-react-router";
import { getRouteConfig } from "../../../Routes";
import RoutesIds from "../../../enums/routes";
import { matchPath } from "react-router";
import { AnyAction } from "@reduxjs/toolkit";

function* locationChanged(action: AnyAction) {
    const pathname: any = action.payload.location.pathname;
    const aboutRoutePath = getRouteConfig(RoutesIds.ABOUT_ROUTE)?.path;
    if (aboutRoutePath && matchPath(pathname, aboutRoutePath)) {
        // tslint:disable-next-line: no-console
        console.log("--==About==--");
    }
}

export function* routerSaga() {
    yield takeEvery(LOCATION_CHANGE, locationChanged);
}
