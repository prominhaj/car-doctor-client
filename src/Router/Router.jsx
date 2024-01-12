import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Services from '../Pages/Services/Services';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Error from '../Pages/Error/Error';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import CheckOut from '../Pages/CheckOut/CheckOut';
import OrderDetails from '../Pages/OrderDetails/OrderDetails';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'service',
                element: <Services></Services>
            },
            {
                path: 'checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params}) => fetch(`https://car-doctor-server-rho-eight.vercel.app/services/${params.id}`)
            },
            {
                path: 'details',
                element: <PrivateRoute><OrderDetails></OrderDetails></PrivateRoute>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: '/*',
                element: <Error></Error>
            }
        ]
    },
]);

export default router;