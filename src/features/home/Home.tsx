import { useSelector } from "react-redux";
import Header from "../../common/page-parts/Header";
import {
    dbSelector,
    DBStateInterface,
    DBStatus,
} from "../indexDB/slice";
import AddNewModule from "../modules/AddNew";
import ModuleList from "../modules/List";

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
