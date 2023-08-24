import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import About from "../pages/Home/About/About";
import Gallery from "../pages/Home/Gallery/Gallery";
import Contact from "../pages/Home/Contact/Contact";
import PhotographerRoute from "./PhotographerRoute";
import PhotographerHome from "../pages/Dashboard/PhotographerHome/PhotographerHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AdminRoute from "./AdminRoute";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AddPhoto from "../pages/Dashboard/PhotographerHome/AddPhoto";
import MyGallery from "../pages/Dashboard/PhotographerHome/MyGallery";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
      
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'gallery',
                element: <Gallery></Gallery>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'userhome',
                element: <UserHome></UserHome>
            },
            // {
            //     path: 'myselectedclasses',
            //     element: <MySelectedClass></MySelectedClass>
            // },
            // {
            //     path: 'payment/:_id',
            //     element: <Payment></Payment>
            // },
            // {
            //     path: 'myenrolledclasses',
            //     element: <MyEnrolledClasses></MyEnrolledClasses>
            // },
            // {
            //     path: 'paymenthistory',
            //     element: <PaymentHistory></PaymentHistory>
            // },
            //admin routes
            {
                path: 'adminhome',
                element: <AdminHome></AdminHome>
            },
            // {
            //     path: 'manageusers',
            //     element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            // },
            // {
            //     path: 'manageclasses',
            //     element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            // },
            //instructor
            {
                path: 'photographerhome',
                element: <PhotographerHome></PhotographerHome>
            },

            {
                path: 'addphoto',
                element:<AddPhoto></AddPhoto>
            },
            {
                path: 'mygallery',
                element: <MyGallery></MyGallery>
            },
        ]
    }
]);