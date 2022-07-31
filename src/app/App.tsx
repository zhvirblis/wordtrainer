import useIndexDB from "../common/indexDB/hooks";
import Routes from "./routes";

export default function App() {
    useIndexDB({ update: true });
    return (
            <Routes />
        );
}
