import { useState } from "react";
import { useDispatch } from "react-redux";
import { moduleActions } from "./slice";

type ModuleProps = {
    module: any;
    setDelModal: (module: any) => void;
};

export default function Module({ module, setDelModal }: ModuleProps) {
    const { name, id } = module;
    const dispatch = useDispatch();
    const [renameState, setNewName] = useState({
        active: false,
        newName: name,
    });
    return (
        <div className="module-item list-group-item">
            <div>
                {!renameState.active && (
                    <h3>
                        <a href="#">{name}</a>
                    </h3>
                )}
                {renameState.active && (
                    <div className="new-name-container">
                        <input
                            className="new-name-container"
                            onChange={(e) => {
                                setNewName({
                                    active: true,
                                    newName: e.currentTarget.value,
                                });
                            }}
                            value={renameState.newName}
                        />
                    </div>
                )}
                <div className="btns-wrapper">
                    {!renameState.active && (
                        <>
                            <button
                                type="button"
                                className="btn btn-outline-primary btn-sm"
                                onClick={() => {
                                    setNewName({
                                        ...renameState,
                                        active: true,
                                    });
                                }}
                            >
                                Rename
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => {
                                    setDelModal(module);
                                }}
                            >
                                Delete
                            </button>
                        </>
                    )}
                    {renameState.active && (
                        <>
                            <button
                                type="button"
                                className="btn btn-outline-success btn-sm"
                                onClick={() => {
                                    dispatch(
                                        moduleActions.edit({
                                            id,
                                            name: renameState.newName,
                                        })
                                    );
                                }}
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline btn-sm"
                                onClick={() => {
                                    setNewName({
                                        active: false,
                                        newName: name,
                                    });
                                }}
                            >
                                Cancel
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
