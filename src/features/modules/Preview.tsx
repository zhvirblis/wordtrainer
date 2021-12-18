import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../common/page-parts/Header";
import { StoreStatus } from "../indexDB/slice";
import { moduleListActions, moduleSelector, moduleStatusSelector } from "./slice";

export default function ModulePreview({match}: any) {
    const dispatch = useDispatch();
    const modulesStatus = useSelector(moduleStatusSelector);
    useEffect(() => {
        if (modulesStatus === StoreStatus.BeforeLoad) {
            dispatch(moduleListActions.get());
        }
    }, []);

    const module = useSelector(moduleSelector(match.params.id));
    
    return <>
        <Header />
        {
            modulesStatus === StoreStatus.Done ? (
                <div className="container">
                    <h1>{module?.name}</h1>
                </div>
            ) : (
                <div className="container">Loading...</div>
            )
        }
    </>
}
