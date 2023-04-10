import React from 'react';
import Navbar from '../Navbar/Navbar';


const Header = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className='flex justify-between'>
                <div className='leading-8 mr-8 w-2/4 flex flex-col gap-10 justify-center'>
                    <h1 className='text-7xl font-bold w-[85%]'>One Step Closer To Your <span className='text-[#7E90FE]'>Dream Job</span></h1>
                    <p className='w-[95%] text-xl leading-8'>
                        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <div>
                        <button className='bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100%  p-4 px-8 rounded-md text-xl text-white font-semibold'>
                            Get Started
                        </button>
                    </div>

                </div>
                <div className='w-2/4'>
                    <img src="/images/banner.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;

