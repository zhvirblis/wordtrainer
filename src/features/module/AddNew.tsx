import { useState } from "react";
import { useModules } from "./hooks";

export default function AddNewModule() {
    const { add } = useModules();
    const [name, setName] = useState<string>("");
    return (
        <div className="card add-new-module">
            <div className="card-header">
                <h2>Add New Module</h2>
            </div>
            <div className="card-body">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        add(name);
                        setName("");
                    }}
                >
                    <div className="form-group">
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
