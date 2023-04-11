import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const FeaturedJob = ({ job }) => {

    const { id, companyName, contactInfo, requirements, fullOrPartTime, Experiences, jobTitle, jobDescription, jobResponsibility, jobType, location, logo, salary } = job;

    console.log(id, companyName, contactInfo, requirements, fullOrPartTime, Experiences, jobTitle, jobDescription, jobResponsibility, jobType, location, logo, salary);

    console.log("BREAK");
    return (
        <div className='border rounded-lg p-9 space-y-4'>
            {/* <div className='h-[100px] w-36 bg-slate-200 mb-8'>
                <img className='h-full object-scale-down' src={logo} alt="" />
            </div> */}
            <div className='h-[80px] w-32 mb-8'>
                <img className='h-full object-left object-scale-down' src={logo} alt="" />
            </div>

            <h3 className='text-2xl font-bold text-[#474747]'>{jobTitle}</h3>
            <p className='text-[#7d7d7d] font-semibold text-base'>{companyName}</p>
            <div className='flex gap-8'>
                <button className='border border-[#9873FF] text-[#9873FF] p-2 px-6 rounded text-xl font-semibold'>{jobType}</button>
                <button className='border border-[#9873FF] text-[#9873FF] p-2 px-6 rounded text-xl font-semibold'>{fullOrPartTime}</button>
            </div>
            <div className='flex text-[#7d7d7d] gap-7 font-semibold'>
                <div><FontAwesomeIcon className='mr-4' icon={faLocationDot} />{location}</div>
                <div>
                    <div className='inline-block rounded-full border-2 text-center w-7 h-7 mr-2'><FontAwesomeIcon className='text-center' icon={faDollarSign} /></div>Salary: {salary}
                </div>
            </div>
            <button className='bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100%  p-3 px-8 rounded-md text-xl text-white font-semibold'>View Details</button>
        </div>
    );
};

export default FeaturedJob;