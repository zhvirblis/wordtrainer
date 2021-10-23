import { Switch, Route, Router } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NotFound from "./pages/not-found/NotFound";
import { history } from "./redux/index";
import RoutesIds from "./enums/routes";

const routes = [
    {
        id: RoutesIds.MAIN_ROUTE,
        path: "/",
        component: Home,
        exact: true,
    },
    {
        id: RoutesIds.ABOUT_ROUTE,
        path: "/about",
        component: About,
        exact: true,
    },
    {
        id: RoutesIds.NOT_FOUND_ROUTE,
        path: "*",
        component: NotFound,
    },
];

export const getRouteConfig = (id: RoutesIds) => {
    const route = routes.find((r) => r.id === id);

    if (route) {
        const { component, ...rest } = route;

        return rest;
    }
};

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                {routes.map((r) => {
                    const { id, ...props } = r;
                    return <Route key={id} {...props} />;
                })}
            </Switch>
        </Router>
    );
}
