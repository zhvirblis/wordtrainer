import { Switch, Route } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NotFound from "./pages/not-found/NotFound";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { history } from "./redux/reducers";

export default function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    );
}
