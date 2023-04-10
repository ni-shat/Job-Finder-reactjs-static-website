import React from 'react';

const JobCategory = ({ category }) => {

    const { categoryLogo, categoryName, jobsAvailable } = category;
    console.log(categoryLogo)

    return (
        <div className='rounded-md bg-[#F9FAFF] w-1/4 p-10 space-y-2 border mb-32'>
            <div className='p-4  w-fit mb-8 rounded-md bg-gradient-to-r from-[#EEEFFF]/50 from-0% to-[#9873ff]/10 to-100%'>
                <img src={categoryLogo} alt="" />
            </div>

            <h3 className='text-2xl font-semibold'>{categoryName}</h3>
            <p className='text-[#A3A3A3]'>{jobsAvailable} Jobs Available</p>
        </div>
    );
};

export default JobCategory;

// bg-[#EEEFFF]