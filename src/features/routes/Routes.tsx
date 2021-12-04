import { Switch, Route, Router } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import NotFound from "../not-found/NotFound";
import { history } from "../../app/store";
import RoutesIds from "./enums";
import SetList from "../sets/List";

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
        id: RoutesIds.SET_LIST,
        path: "/sets",
        component: SetList,
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
