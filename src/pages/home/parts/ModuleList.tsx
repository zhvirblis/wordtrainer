import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moduleSelector } from "../../../redux/slices/indexedDB/modules";
import { moduleActions } from "../../../redux/slices/indexedDB/modules";
import "./styles.css";

export default function ModuleList() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(moduleActions.get());
    }, []);
    const some = useSelector(moduleSelector);
    console.log("--moduleSelector", some);
    return <div>Module list</div>;
}
