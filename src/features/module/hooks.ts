import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moduleListActions, moduleListSelector, ModulesInitialState } from "./slice";

export function useModules() {
    const dispatch = useDispatch();
    const data: ModulesInitialState = useSelector(moduleListSelector);
    const add = (name: string) =>{
        dispatch(moduleListActions.add(name));
    }
    const remove = (id: number) => {
        dispatch(moduleListActions.delete(id));
    }
    const get = () => dispatch(moduleListActions.get());
    const edit = (id: number, name: string) => dispatch(moduleListActions.edit({id, name}));
    return { data, add, remove, get, edit };
}

export function useGetModules() {
    const moduleState = useModules();
    useEffect(() => {
        moduleState.get();
    }, []);
    return moduleState;
}
