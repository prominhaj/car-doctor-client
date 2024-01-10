import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div className="px-4 md:px-0">
            <Header></Header>
            <Outlet></Outlet>
            <Toaster />
        </div>
    );
};

export default Main;