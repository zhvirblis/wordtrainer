import { render as rtlRender } from '@testing-library/react';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot, RecoilState, useRecoilValue } from 'recoil';

interface RecoilObserverProps {
    recoilState: RecoilState<any>,
    onRecoilStateChange: Function
}

export const RecoilObserver = ({recoilState, onRecoilStateChange}: RecoilObserverProps) => {
    const value = useRecoilValue(recoilState);
    useEffect(() => onRecoilStateChange(value), [onRecoilStateChange, value]);
    return null;
};

export function Wrapper({recoilState, onRecoilStateChange}: RecoilObserverProps) {
    return ({ children }: any) => (
        <RecoilRoot>
            {recoilState && onRecoilStateChange && <RecoilObserver recoilState={recoilState} onRecoilStateChange={onRecoilStateChange} />}
            <BrowserRouter>{children}</BrowserRouter>
        </RecoilRoot>
    );
}

function render(
    ui: any,
    {
        recoilState,
        onRecoilStateChange,
        ...renderOptions
    }: any = {}
) {
    
    return rtlRender(ui, { wrapper: Wrapper({recoilState, onRecoilStateChange}), ...renderOptions })
}

export * from '@testing-library/react';

export { render }