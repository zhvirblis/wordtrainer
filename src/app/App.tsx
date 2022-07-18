import useIndexDB from "../features/indexDB/hooks";
import Routes from "./routes";

export default function App() {
    useIndexDB({ update: true });
    return <Routes />;
}
