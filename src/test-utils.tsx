import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { dbReducer } from "./redux/slices/indexedDB";
import { moduleReducer } from "./redux/slices/indexedDB/modules";

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

function render(
    ui: any,
    {
        preloadedState,
        store = configureStore({
            reducer: {
                db: dbReducer,
                modules: moduleReducer,
            },
            middleware: [sagaMiddleware],
        }),
        ...renderOptions
    }: any = {}
) {
    function Wrapper({ children }: any) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react';

export { render }