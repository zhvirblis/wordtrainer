import { Item } from "../items/types";
import { SetSettings } from "./settings/types";

export interface Set {
    id?: number;
    name: string;
    items: Item[];
    moduleId: number,
    settings: SetSettings;
}
