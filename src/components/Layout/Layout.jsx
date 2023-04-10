import React from 'react';
// import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


const Layout = () => {
    return (
        <div className='w-full'>

            <div className='w-full bg-[#F9FAFF]'>
                <Navbar></Navbar>
            </div>


            <Outlet></Outlet>


        </div>
    );
};

export default Layout;