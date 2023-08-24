import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className=' overflow-hidden'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ScrollRestoration />
            <Footer></Footer>
        </div>
    );
};

export default Main;