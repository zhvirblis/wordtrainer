import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moduleSelector } from "../../../redux/slices/indexedDB/modules";
import { moduleActions } from "../../../redux/slices/indexedDB/modules";
import { StoreStatus } from "../../../redux/slices/indexedDB";
import Module from "./Module";
import "./styles.css";

export default function ModuleList() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(moduleActions.get());
    }, []);
    const modules = useSelector(moduleSelector);
    return (
        <div className="modules-list">
            {modules.status === StoreStatus.Loading && (
                <div className="card-body message">Loading...</div>
            )}
            {modules.status === StoreStatus.Updating && (
                <div className="card-body message">Updating...</div>
            )}
            {modules.status === StoreStatus.Done && (
                <div className="list-group list-group-flush">
                    {modules.list.map((module: any) => (
                        <Module
                            key={module.id}
                            id={module.id}
                            name={module.name}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
