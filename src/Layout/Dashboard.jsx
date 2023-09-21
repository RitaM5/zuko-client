import React, { useState } from 'react';
import useAdmin from '../hooks/useAdmin';
import usePhotographer from '../hooks/usePhotographer';
import useAuth from '../hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import { NavLink, Outlet } from 'react-router-dom';

import Sidebar from './sidebar/Sidebar';
import AdminSidebar from './sidebar/AdminSidebar';
import PhotographerSidebar from './sidebar/PhotographerSidebar';

const Dashboard = () => {
    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const [isPhotographer] = usePhotographer();

    return (
        <div>
            <Helmet>
                Zuko | Dashboard
            </Helmet>
            {/* <Navbar></Navbar> */}

            <div className='lg:flex lg:gap-6'>
                <div className='w-full lg:w-[16rem] lg:min-h-screen lg:bg-teal-800'>
                    {
                        isAdmin ? <AdminSidebar></AdminSidebar>

                        : isPhotographer ? <PhotographerSidebar></PhotographerSidebar>
                        : <Sidebar></Sidebar>
                    }
                </div>
                < div className='font-poppins w-full lg:w-3/4'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;

