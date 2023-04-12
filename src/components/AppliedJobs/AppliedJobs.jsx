import React, { useEffect, useState } from 'react';
import { findAddedJobsInfo } from '../../utilities/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


const AppliedJobs = () => {

    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedJobsInfo = findAddedJobsInfo();
        console.log(storedJobsInfo)

        let appliedJobsTemp = [];

        if (storedJobsInfo) {
            for (const property in storedJobsInfo) {
                appliedJobsTemp.push(storedJobsInfo[property]);
            }
        }
        console.log(appliedJobsTemp)
        setAppliedJobs(appliedJobsTemp);
    }, []);


    console.log(appliedJobs);


    return (
        <div>
            <div className='bg-[#F9FAFF]'>
                <h2 className='text-4xl font-bold text-center text-[#1A1919] pt-32 pb-[176px]'>Job details</h2>
            </div>
            <div className='w-[65%] mx-auto text-right mt-32 mb-10'>
                <button className=' text-black bg-[#F9FAFF] border p-3 px-8 rounded-md text-xl font-semibold'>
                    Filtered By 
                    <FontAwesomeIcon className='ml-3' icon={faAngleDown} />
                </button>
            </div>

            {
                appliedJobs &&
                <div className='w-[65%] mx-auto mb-40'>
                    {
                        appliedJobs.map(job => <AppliedJob key={job.id} appliedJob={job}></AppliedJob>)
                    }
                </div>
            }
        </div>
       
    );
};

export default AppliedJobs;