import { render as rtlRender } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function render(
    ui: any,
    {
        preloadedState,
        ...renderOptions
    }: any = {}
) {
    function Wrapper({ children }: any) {
        return <RecoilRoot><BrowserRouter>{children}</BrowserRouter></RecoilRoot>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react';

export { render }