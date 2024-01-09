import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className="px-4 md:px-0">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;