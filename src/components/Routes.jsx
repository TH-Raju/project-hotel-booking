import { createBrowserRouter } from "react-router-dom";
import Main from "../layer/Main";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Login from "./Login";
import OrderConfirm from "./OrderConfirm";
import Package from "./Package";
import PrivateRoute from "./PrivateRoute";
import Register from "./Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/package',
                element: <Package></Package>
            },
            {
                path: '/confirm',
                element: <PrivateRoute><OrderConfirm></OrderConfirm></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])