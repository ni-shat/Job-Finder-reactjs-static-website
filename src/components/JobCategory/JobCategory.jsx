import React from 'react';

const JobCategory = ({ category }) => {

    const { categoryLogo, categoryName, jobsAvailable } = category;
    // console.log(categoryLogo)

    return (
        <div className='rounded-lg bg-[#F9FAFF] md:w-1/4 w-[80%] p-8 md:p-[39px] md:space-y-2'>
            <div className='p-4 md:w-fit w-14 mb-8 rounded-md bg-gradient-to-r from-[#EEEFFF]/50 from-0% to-[#9873ff]/10 to-100%'>
                <img src={categoryLogo} alt="" />
            </div>

            <h3 className='md:text-2xl text-base font-bold text-[#474747]'>{categoryName}</h3>
            <p className='text-[#7d7d7d]'>{jobsAvailable} Jobs Available</p>
        </div>
    );
};

export default JobCategory;

// bg-[#EEEFFF]