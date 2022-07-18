import { render as rtlRender } from '@testing-library/react';

function render(
    ui: any,
    {
        preloadedState,
        ...renderOptions
    }: any = {}
) {
    function Wrapper({ children }: any) {
        return <>{children}</>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react';

export { render }