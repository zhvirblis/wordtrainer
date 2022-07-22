import { Suspense } from "react";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../../common/page-parts/ErrorBoundary";
import Header from "../../common/page-parts/Header";
import { useModules } from "./hooks";

export default function ModulePreview() {
    return <>
        <Header />
        <div className="container">
            <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <ModuleContent />
                </Suspense>
            </ErrorBoundary>
        </div>
    </>
}

function ModuleContent() {
    const { modules } = useModules();
    const { id } = useParams();
    const module = modules.find((el) => el.id == id);
    return (
        <h1>{module?.name}</h1>
    );
}
