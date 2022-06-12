import { render as rtlRender } from '@testing-library/react';
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { dbReducer } from "./features/indexDB/slice";
import { moduleListReducer } from "./features/module/slice";

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

function render(
    ui: any,
    {
        preloadedState,
        store = configureStore({
            reducer: {
                db: dbReducer,
                modules: moduleListReducer,
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