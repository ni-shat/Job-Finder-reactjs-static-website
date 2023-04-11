import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const FeaturedJob = ({ job}) => {

    const { id, companyName, contactInfo, requirements, fullOrPartTime, Experiences, jobTitle, jobDescription, jobResponsibility, jobType, location, logo, salary } = job;

    // const [jobRepresentingState, setJobRepresentingState] = useState(false);
    // const [_id, setId] = useState(0);

    // useEffect(() => {

    //     if (id > 4 && seeAllState == true) {
    //         // setId(parseInt(id));
    //         setJobRepresentingState(true);
    //     }

    //     else if (id > 4 && seeAllState == false) {
    //         setJobRepresentingState(false);
    //     }
    //     else if(id < 5){
    //         setJobRepresentingState(true);
    //     }

    // }, [])


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
                <button className='border border-[#9873FF] text-[#9873FF] p-4 px-8 rounded text-xl font-semibold'>{jobType}</button>
                <button className='border border-[#9873FF] text-[#9873FF] p-4 px-8 rounded text-xl font-semibold'>{fullOrPartTime}</button>
            </div>
            <div className='flex text-[#7d7d7d] gap-8 font-semibold'>
                <div><FontAwesomeIcon className='mr-2' icon={faLocationDot} />{location}</div>
                <div>
                    <div className='inline-flex justify-center items-center rounded-full border-2 w-5 h-5 mr-2'><FontAwesomeIcon className='text-xs' icon={faDollarSign} />
                    </div>Salary: {salary}
                </div>
            </div>
            <button className='bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100%  p-3 px-8 rounded-md text-xl text-white font-semibold'>View Details</button>
        </div>
    );
};

export default FeaturedJob;