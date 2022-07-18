import { useRecoilState } from "recoil";
import { modulesState } from "./atom";
import { addNewModule, deleteModule, editModule } from "./service";

export function useModules() {
    const [modules, setModules] = useRecoilState(modulesState);
    const add = (name: string) => {
        addNewModule(name)
            .then((id) => {
                setModules([...modules, {
                    id, name
                }]);
            }).catch(err => {
                console.log(err);
            });
    }
    const edit = (id: number, name: string) => {
        editModule(id, name)
            .then(() => {
                setModules(modules.map(el => el.id === id ? { id, name } : el));
            })
            .catch(err => {
                console.log(err);
            })
    }; 
    const remove = (id: number) => {
        deleteModule(id)
            .then(() => {
                setModules(modules.filter(el => el.id !== id));
            })
    };
    return { modules, add, edit, remove };
}
