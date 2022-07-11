import { useDispatch } from "react-redux";

function useDispatchActions<T>(moduleListActions: T): T {
    const dispatch = useDispatch();
    const moduleListActionsEntries = Object.entries(moduleListActions);
    return moduleListActionsEntries.reduce((newObj: any, action) => {
        const [key, fun] = action;
        return { ...newObj, [key]: (param?: any) => {
            dispatch(fun(param));
        } }
    } , {});
};

export default useDispatchActions;