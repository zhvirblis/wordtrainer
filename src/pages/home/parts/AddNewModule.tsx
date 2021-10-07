import { useState } from "react";
import { useDispatch } from "react-redux";
import { moduleActions } from "../../../redux/slices/indexedDB/modules";

export default function AddNewModule() {
    const dispatch = useDispatch();
    const [name, setName] = useState<string>();
    return (
        <div className="card add-new-module">
            <div className="card-header">
                <h2>Add New Module</h2>
            </div>
            <div className="card-body">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        dispatch(moduleActions.add(name));
                    }}
                >
                    <div className="form-group">
                        <input
                            onChange={(e) => setName(e.currentTarget.value)}
                            className="form-control"
                            placeholder="Name"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
}
