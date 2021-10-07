import { useSelector } from "react-redux";
import { moduleSelector } from "../../../redux/slices/indexedDB/modules";
import "./styles.css";

export default function ModuleList() {
    const some = useSelector(moduleSelector);
    console.log(some);
    return <div>Module list</div>;
}
