import React from 'react';

const JobCategory = ({ category }) => {

    const { categoryLogo, categoryName, jobsAvailable } = category;
    console.log(categoryLogo)

    return (
        <div className='rounded-lg bg-[#F9FAFF] w-1/4 p-[39px] space-y-2 mb-32'>
            <div className='p-4  w-fit mb-8 rounded-md bg-gradient-to-r from-[#EEEFFF]/50 from-0% to-[#9873ff]/10 to-100%'>
                <img src={categoryLogo} alt="" />
            </div>

            <h3 className='text-2xl font-bold text-[#474747]'>{categoryName}</h3>
            <p className='text-[#7d7d7d]'>{jobsAvailable} Jobs Available</p>
        </div>
    );
};

export default JobCategory;

// bg-[#EEEFFF]