import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const FeaturedJob = ({ job}) => {

    const { id, companyName, contactInfo, requirements, fullOrPartTime, Experiences, jobTitle, jobDescription, jobResponsibility, jobType, location, logo, salary } = job;

    const Navigate = useNavigate();

    const handleNavigate = () => {
        Navigate(`/job/${id}`);
    };


    return (

        <div className='border rounded-lg md:p-9 p-6 w-[80%] mx-auto md:w-full md:space-y-4 space-y-2'>

            <div className='md:h-[80px] md:w-32 h-5 w-10 mb-8'>
                <img className='h-full object-left object-scale-down' src={logo} alt="" />
            </div>

            <h3 className='md:text-xl text-base font-bold text-[#474747]'>{jobTitle}</h3>
            <p className='text-[#7d7d7d] font-semibold text-xs'>{companyName}</p>
            <div className='flex gap-8'>
                <button className='border border-[#9873FF] text-[#9873FF] md:p-4 p-1 md:px-8 px-3 rounded md:text-base text-xs font-semibold'>{jobType}</button>
                <button className='border border-[#9873FF] text-[#9873FF] md:p-4 p-1 md:px-8 px-3 rounded md:text-base text-xs font-semibold'>{fullOrPartTime}</button>
            </div>
            <div className='flex text-[#7d7d7d] gap-8 font-semibold'>
                <div className='text-xs md:text-base'><FontAwesomeIcon className='mr-2' icon={faLocationDot} />{location}</div>
                <div className='text-xs md:text-base'>
                    <div className='inline-flex justify-center items-center rounded-full border-2 w-5 h-5 mr-2'><FontAwesomeIcon className='text-xs' icon={faDollarSign} />
                    </div>Salary: {salary}
                </div>
            </div>
            <button onClick={handleNavigate} className='bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100%  p-2 md:p-3 md:px-8 px-3 rounded-md md:text-base text-xs text-white font-semibold'>View Details</button> 

        </div>
    );
};

export default FeaturedJob;