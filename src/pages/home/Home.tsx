import Header from "../../page-parts/Header";
import AddNewModule from "./parts/AddNewModule";
import ModuleList from "./parts/ModuleList";

export default function Home() {
    return (
        <div>
            <Header />
            <div className="container">
                <AddNewModule />
                <ModuleList />
            </div>
        </div>
    );
}
