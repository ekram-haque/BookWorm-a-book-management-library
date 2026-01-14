import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import TutorialsPage from "../pages/TutorialsPage";
import ExploreBooks from "../pages/ExploreBooks";
import Community from "../pages/Community";
import DashboardLayout from "../layouts/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/tutorial",
        element: <TutorialsPage />,
      },
      {
        path: "/explore-books",
        element: <ExploreBooks />,
      },
      {
        path: "/community",
        element: <Community />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children:[
        {
            path:'login',
            element:<Login/>
        },
        {
            path:'register',
            element:<Register/>
        },
    ]
  },
]);

export default router;
