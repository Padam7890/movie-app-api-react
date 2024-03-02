import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Sidebar from "../Layout/Sidebar";
import Trending from "../Pages/Trending";
import ComingSoon from "../Pages/ComingSoon";
import Fav from "../Pages/Fav";
import Category from "../Pages/Category";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <newRelease />,
  },
  {
    path: "/",
    element: <Sidebar />,
    children: [
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/coming-soon",
        element: <ComingSoon />,
      },

      {
        path: "/category/:search",
        element: <Category />,
      },

      {
        path: "/favorites",
        element: <Fav />,
      },
    ],
  },
]);

export { router };
