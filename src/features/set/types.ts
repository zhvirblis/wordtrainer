import Item from "../item";
import SetSettings from "./settings";

export interface Set {
    id?: number;
    name: string;
    items: Item[];
    moduleId: number,
    settings: SetSettings;
}
