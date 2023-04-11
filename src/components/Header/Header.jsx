import React from 'react';
import Navbar from '../Navbar/Navbar';


const Header = () => {
    return (
        <div className='bg-[#F9FAFF]'>
            <div className='flex justify-between w-[65%] mx-auto'>
                <div className=' mr-8 w-2/4 flex flex-col gap-10 justify-center'>
                    <h1 className='text-7xl font-bold w-[85%] leading-[75px]'>One Step Closer To Your <span className='text-[#7E90FE]'>Dream Job</span></h1>
                    <p className='w-[95%] text-xl leading-8 text-[#474747]'>
                        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <div>
                        <button className='bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100%  p-4 px-8 rounded-md text-xl text-white font-semibold'>
                            Get Started
                        </button>
                    </div>

                </div>
                <div className='w-2/4'>
                    <div className=' '>
                        <img className='-mr-16 relative -right-14' src="/images/banner.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;

