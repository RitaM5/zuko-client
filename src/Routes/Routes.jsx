import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
// import Dashboard from "../Layout/Dashboard";
// import UserHome from "../pages/Dashboard/UserHome/UserHome";

// import PrivateRoute from "../Routes/PrivateRoute"

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
        ]
    },
    // {
    //     path: "dashboard",
    //     element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    //     children: [
    //         {
    //             path: 'userhome',
    //             element: <UserHome></UserHome>
    //         },
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
            // //admin routes
            // {
            //     path: 'adminhome',
            //     element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            // },
            // {
            //     path: 'manageusers',
            //     element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            // },
            // {
            //     path: 'manageclasses',
            //     element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            // },
            // //instructor
            // {
            //     path: 'instructorhome',
            //     element: <InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
            // },

            // {
            //     path: 'addclasses',
            //     element: <InstructorRoute><AddClasses></AddClasses></InstructorRoute>
            // },
            // {
            //     path: 'myclasses',
            //     element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            // },
    //     ]
    // }
]);