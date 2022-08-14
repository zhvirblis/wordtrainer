import { ReactNode, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

export interface SuspenceErrorWrapperProps {
    children: ReactNode
}
export default function SuspenceErrorWrapper({ children }: SuspenceErrorWrapperProps) {
    return (
        <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                { children }
            </Suspense>
        </ErrorBoundary>
    )
}