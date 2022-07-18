import { useParams } from "react-router-dom";
import Header from "../../common/page-parts/Header";
import { useModules } from "./hooks";

export default function ModulePreview() {
    const { modules } = useModules();
    const { id } = useParams();
    const module = modules.find((el) => el.id == id);

    return <>
        <Header />
        <div className="container">
            <h1>{module?.name}</h1>
        </div>;
    </>
}
