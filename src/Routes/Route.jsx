import {createBrowserRouter} from "react-router-dom";
import Root from "../Layout/Root";
import NotFoundPage from "../Pages/NotFoundPage";
import HomePage from "../Pages/Home";

const Route = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <NotFoundPage></NotFoundPage>,
      children: [
        {
           path:"/",
           element: <HomePage/>
        },
      ]
    },
  ]);

export default Route;