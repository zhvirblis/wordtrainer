import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moduleSelector } from "../../../redux/slices/indexedDB/modules";
import { moduleActions } from "../../../redux/slices/indexedDB/modules";
import { StoreStatus } from "../../../redux/slices/indexedDB";
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
                        <div
                            className="module-item list-group-item"
                            key={module.id}
                        >
                            <div>
                                <h3>
                                    <a href="#">{module.name}</a>
                                </h3>
                                <div className="btns-wrapper">
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary btn-sm"
                                    >
                                        Rename
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={() => {
                                            dispatch(
                                                moduleActions.delete(module.id)
                                            );
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
