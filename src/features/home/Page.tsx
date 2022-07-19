import { Suspense } from "react";
import Header from "../../common/page-parts/Header";
import useIndexDB from "../../common/indexDB/hooks";
import { DBStatus } from "../../common/indexDB/types";
import AddNewModule from "../module/AddNew";
import ModuleList from "../module/List";

export default function HomePage() {
    const db = useIndexDB();
    return (
        <div>
            <Header />
            <div className="container">
                <Suspense fallback={<div>Loading...</div>}>
                {db?.status === DBStatus.Done && (
                    <>
                        <AddNewModule />
                        <ModuleList />
                    </>
                )}
                </Suspense>
            </div>
        </div>
    );
}
