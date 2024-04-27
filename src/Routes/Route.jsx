import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import NotFoundPage from "../Pages/NotFoundPage";
import HomePage from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFoundPage></NotFoundPage>,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
        ]
    },
    {
        path: "/signIn",
        element: <LoginPage />,
    },
]);

export default Route;