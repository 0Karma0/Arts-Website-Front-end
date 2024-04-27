import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import NotFoundPage from "../Pages/NotFoundPage";
import HomePage from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import AllArtsAndCraftsItems from "../Pages/AllArtsAndCraftsItems";
import ProtectedRoute from "../utilitis/ProtectedRoute";
import AddArts from "../Pages/AddArts";
import MyCartPage from "../Pages/MyCartPage";

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
            {
                path: "/allItems",
                element: <AllArtsAndCraftsItems></AllArtsAndCraftsItems>
            },
            {
                path: "/addArts",
                element: <ProtectedRoute>
                    <AddArts></AddArts>
                </ProtectedRoute>
            },
            {
                path: "/myCart",
                element: <ProtectedRoute>
                    <MyCartPage/>
                </ProtectedRoute>,
                // loader: productsOfCart,
            },
            {
                path: "/signIn",
                element: <LoginPage />,
            },
            {
                path: "/signUp",
                element: <RegisterPage />,
            },
        ]
    },
]);

export default Route;