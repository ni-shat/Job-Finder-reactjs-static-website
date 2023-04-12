import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {

    const Navigate = useNavigate();

    const handleNavigate = () => {
        Navigate('/');
    };

    return (
        <div className='mt-40 w-[60%] mx-auto mb-20'>
            <div className='flex gap-3 mb-20 justify-between items-center'>
                <img className='w-[25%] -ml-10' src="/images/404.jpg" alt="" />
                <p className='text-8xl font-extrabold text-[#7386fd] '>PAGE NOT FOUND</p>
            </div>

            <div className='flex flex-col gap-6 justify-center items-center'>

                <div className='w-full'>
                    <p className='text-3xl'>The page you were looking for doesn't exist.</p>
                </div>
                <div className='w-full mb-14'>
                    <p className='text-3xl'>You may have mistyped the address or the page may have removed.</p>
                </div>
                <div className='w-full'>
                    <button onClick={handleNavigate} className='border rounded-lg border-[#9873FF] text-[#9873FF] p-4 px-12  text-xl font-semibold'>
                        Go Back Home
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Error;