import { createBrowserRouter } from "react-router-dom";
import Main from "../layer/Main";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Login from "./Login";
import Package from "./Package";
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