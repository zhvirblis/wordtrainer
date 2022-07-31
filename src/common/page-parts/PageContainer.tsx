import { ReactNode } from "react";
import Header from "./Header";
import SuspenceErrorWrapper from "./SuspenceErrorWrapper";

export interface PageContainerProps {
    children: ReactNode
}
export default function PageContainer({ children }: PageContainerProps) {
    return <>
        <Header />
        <div className="container">
            <SuspenceErrorWrapper>
                { children }
            </SuspenceErrorWrapper>
        </div>
    </>
}