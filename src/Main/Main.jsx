import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div className="px-4 md:px-0">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Main;