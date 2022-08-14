import { createRoot } from 'react-dom/client';
import { RecoilRoot } from "recoil";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import App from "./app/App";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
    <RecoilRoot>
        <App />
    </RecoilRoot>
);
