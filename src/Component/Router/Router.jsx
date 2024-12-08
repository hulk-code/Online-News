import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Page/Home/Home";
import Login from "../Layout/Page/Login/Login";
import Register from "../Layout/Page/Register/Register";
import TodayNews from "../Layout/Page/NewsDetails/TodayNews";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/todayNews/:id",
          element: <PrivateRoute><TodayNews></TodayNews></PrivateRoute>,
          loader: () => fetch('/public/news.json')
        },
      ],
    },
  ]);

  export default router;