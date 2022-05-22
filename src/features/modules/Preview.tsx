import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../common/page-parts/Header";
import { StoreStatus } from "../indexDB/slice";
import { moduleListActions, moduleSelector, moduleStatusSelector } from "./slice";

export default function ModulePreview() {
    const dispatch = useDispatch();
    const modulesStatus = useSelector(moduleStatusSelector);
    const {id} = useParams();
    useEffect(() => {
        if (modulesStatus === StoreStatus.BeforeLoad) {
            dispatch(moduleListActions.get());
        }
    }, []);

    let module = null;

    if (id) {
        module = useSelector(moduleSelector(parseInt(id)));
    }

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
