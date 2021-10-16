import { useSelector } from "react-redux";
import Header from "../../page-parts/Header";
import {
    dbSelector,
    DBStateInterface,
    DBStatus,
} from "../../redux/slices/indexedDB";
import AddNewModule from "./parts/AddNewModule";
import ModuleList from "./parts/ModuleList";

export default function Home() {
    const db: DBStateInterface = useSelector(dbSelector);
    return (
        <div>
            <Header />
            <div className="container">
                {db?.status === DBStatus.Done && (
                    <>
                        <AddNewModule />
                        <ModuleList />
                    </>
                )}
            </div>
        </div>
    );
}
