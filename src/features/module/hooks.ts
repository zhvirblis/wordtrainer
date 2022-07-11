import { useEffect } from "react";
import { useSelector } from "react-redux";
import useDispatchActions from "../../common/hooks/useDispatchActions";
import { moduleListActions, moduleListSelector, ModulesInitialState } from "./slice";

export function useModules() {
    const data: ModulesInitialState = useSelector(moduleListSelector);
    const { add, delete: remove, get, edit } = useDispatchActions<typeof moduleListActions>(moduleListActions);
    return { data, add, remove, get, edit };
}

export function useGetModules() {
    const moduleState = useModules();
    useEffect(() => {
        moduleState.get();
    }, []);
    return moduleState;
}
