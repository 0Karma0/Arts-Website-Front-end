import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import NotFoundPage from "../Pages/NotFoundPage";
import HomePage from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";

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
    {
        path: "/signUp",
        element: <RegisterPage />,
    },
]);

export default Route;