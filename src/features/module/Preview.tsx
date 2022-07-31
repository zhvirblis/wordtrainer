import { useParams } from "react-router-dom";
import { useModules } from "./hooks";

export default function ModulePreview() {
    const { modules } = useModules();
    const { id } = useParams();
    const module = modules.find((el) => el.id == id);
    return (
        <h1>{module?.name}</h1>
    );
}
