import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Services from '../Pages/Services/Services';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Error from '../Pages/Error/Error';

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