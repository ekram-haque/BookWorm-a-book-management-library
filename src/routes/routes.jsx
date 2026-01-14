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
import MyLibrary from "../pages/dashboard/MyLibrary";
import MyReviews from "../pages/dashboard/MyReviews";
import Overview from "../pages/dashboard/admin/Overview";
import ManageUsers from "../pages/dashboard/admin/manageUsers";
import ManageBooks from "../pages/dashboard/admin/manageBooks";
import ManageReviews from "../pages/dashboard/admin/usersReviews";
import ManageTutorials from "../pages/dashboard/admin/manageTutorials";
import ManageGenre from "../pages/dashboard/admin/ManageGenre";
import MyProfile from "../pages/dashboard/MyProfile";

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
    children:[
        {
            index:true,
            element:<MyProfile/>
        },
        {
            path:'my-library',
            element:<MyLibrary/>
        },
        {
            path:'my-reviews',
            element:<MyReviews/>
        },

        {
            path:'overview',
            element:<Overview/>
        },
        {
            path:'manage-users',
            element:<ManageUsers/>
        },
        {
            path:'manage-books',
            element:<ManageBooks/>
        },
        {
            path:'manage-tutorials',
            element:<ManageTutorials/>
        },
        {
            path:'users-reviews',
            element:<ManageReviews/>
        },
        {
            path:'manage-genre',
            element:<ManageGenre/>
        },
    ]
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
