import React from 'react';
// import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';


const Layout = () => {
    return (
        <div className='w-full bg-[#F9FAFF]'>
            <div className='w-[67%] mx-auto'>
                <Header></Header>

                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Layout;