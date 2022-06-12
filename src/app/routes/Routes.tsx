import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "../../features/home/Page";
import AboutPage from "../../features/about/Page";
import NotFound from "../../features/not-found/Page";
import ModulePreview from "../../features/module/Preview";
import RoutesIds from "./enums";
import SetListPage from "../../features/set/ListPage";
import NewSet from "../../features/set/new/Page";

const routes = [
    {
        id: RoutesIds.MAIN_ROUTE,
        path: "/",
        element: <HomePage />,
        exact: true,
    },
    {
        id: RoutesIds.ABOUT_ROUTE,
        path: "/about",
        element: <AboutPage />,
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
        element: <SetListPage />,
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
