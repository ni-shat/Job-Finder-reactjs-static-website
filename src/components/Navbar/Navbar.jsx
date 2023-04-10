import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='w-[65%] mx-auto pt-12 pb-12 flex justify-between items-center'>
            <div>
                <Link className='text-3xl font-bold' to='/'>JobFinder</Link>
            </div>
            <div className='text-xl space-x-12'>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/applied-jobs'>Applied jobs</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <div>
                <button className='bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100%  p-4 px-8 rounded-md text-xl text-white font-semibold'>Start Applying</button>
            </div>

        </nav>
    );
};

export default Navbar;

// bg-[#F9F9FF]  F9FAFF
// FAF8FF  F9FAFF   background: linear-gradient(90deg, #7E90FE 0%, #9873FF 100%);