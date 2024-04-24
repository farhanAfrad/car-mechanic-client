import {
    createBrowserRouter,
} from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import About from "../Pages/About.jsx/About";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Booking from "../Book/Booking";
import MyBookings from "../MyBookings/MyBookings";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/book/:id',
                element: <PrivateRoute>
                    <Booking></Booking>
                </PrivateRoute>,
                
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/mybookings',
                element: <PrivateRoute>

                    <MyBookings></MyBookings>
                </PrivateRoute>
            }
        ]
    }
])

export default Routes;