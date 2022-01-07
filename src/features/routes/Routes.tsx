import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import NotFound from "../not-found/NotFound";
import ModulePreview from "../modules/Preview";
import RoutesIds from "./enums";
import SetsPage from "../sets/Set";
import NewSet from "../sets/new/NewSet";

const routes = [
    {
        id: RoutesIds.MAIN_ROUTE,
        path: "/",
        element: <Home />,
        exact: true,
    },
    {
        id: RoutesIds.ABOUT_ROUTE,
        path: "/about",
        element: <About />,
        exact: true,
    },
    {
        id: RoutesIds.NOT_FOUND_ROUTE,
        path: "/module/:id",
        element: <ModulePreview />,
        exact: true,
    },
    {
        id: RoutesIds.SET_LIST,
        path: "/sets",
        element: <SetsPage />,
        exact: true,
    },
    {
        id: RoutesIds.SET_PAGE,
        path: "/sets/new",
        element: <NewSet />,
        exact: true,
    },
    {
        id: RoutesIds.NOT_FOUND_ROUTE,
        path: "*",
        element: <NotFound />,
    },
];

export const getRouteConfig = (id: RoutesIds) => {
    const route = routes.find((r) => r.id === id);

    if (route) {
        const { element, ...rest } = route;

        return rest;
    }
};

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                {routes.map((r) => {
                    const { id, ...props } = r;
                    return <Route key={id} {...props} />;
                })}
            </Routes>
        </Router>
    );
}
