import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const AppliedJob = ({ appliedJob }) => {
    console.log(appliedJob);

    const Navigate = useNavigate();

    const handleNavigate = () => {
        Navigate(`/job/${appliedJob.id}`);
    };

    return (
        <div className='border rounded-md p-6 flex gap-7 items-center mb-6'>

            <div className='w-44 h-44 p-3 rounded-md bg-[#F4F4F4] flex justify-center items-center'>
                <img className='object-contain' src={appliedJob.logo} alt="" />
            </div>

            <div className='flex-grow space-y-2'>
                <h3 className='text-base font-bold text-[#474747]'>{appliedJob.jobTitle}</h3>
                <p className='text-[#7d7d7d] font-semibold text-xs'>{appliedJob.companyName}</p>
                <div className='flex gap-8'>
                    <button className='border border-[#9873FF] text-[#9873FF] p-1 px-6 rounded text-base font-semibold'>{appliedJob.jobType}</button>
                    <button className='border border-[#9873FF] text-[#9873FF] p-1 px-6 rounded text-base font-semibold'>{appliedJob.fullOrPartTime}</button>
                </div>
                <div className='flex text-[#7d7d7d] gap-8 font-semibold'>
                    <div className='text-xs'><FontAwesomeIcon className='mr-2' icon={faLocationDot} />{appliedJob.location}</div>
                    <div className='text-xs'>
                        <div className='inline-flex justify-center items-center rounded-full border-2 w-5 h-5 mr-2'><FontAwesomeIcon className='text-xs' icon={faDollarSign} />
                        </div>Salary: {appliedJob.salary}
                    </div>
                </div>
            </div>

            <div>
                <button onClick={handleNavigate} className='bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100%  p-2 px-8 rounded-md text-base text-white font-semibold'>View Details</button>
            </div>

        </div>
    );
};

export default AppliedJob;