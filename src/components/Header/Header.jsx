import React from 'react';


const Header = () => {
    return (
        <div className='bg-[#F9FAFF] pt-20 md:pt-0'>
            <div className='flex flex-col md:flex-row gap-0 justify-between w-[95%] lg:w-[65%] mx-auto'>
                <div className='w-full md:mr-8 -mr-0 text-center md:text-start md:w-2/4 flex flex-col gap-4 md:gap-10 justify-center'>
                    <h1 className='lg:text-5xl text-center md:text-start text-3xl font-bold md:w-[100%] w-[85%] mx-auto md:mx-0 lg:leading-[50px] mb-4 md:mb-0'>One Step Closer To Your <span className='text-[#7E90FE]'>Dream Job</span></h1>
                    <p className='w-[100%] md:mt-0 -mt-4 md:text-base text-base md:leading-6 text-[#474747]'>
                        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <div>
                        <button className='bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100%  md:p-3 p-2 px-3 md:px-8 rounded-md text-base md:text-base text-white font-semibold'>
                            Get Started
                        </button>
                    </div>

                </div>

                <div className='md:w-2/4 w-full'>
                    <img className='-mr-16 md:mr-0 relative md:-right-14' src="/images/banner.png" alt="" />
                </div>


            </div>
        </div>
    );
};

export default Header;

