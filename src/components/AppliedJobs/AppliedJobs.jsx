import React, { useEffect, useState } from 'react';
import { findAddedJobsInfo } from '../../utilities/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';


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

            {
                appliedJobs &&
                <div className='w-[65%] mx-auto mt-52 mb-40'>
                    {
                        appliedJobs.map(job => <AppliedJob key={job.id} appliedJob={job}></AppliedJob>)
                    }
                </div>
            }
        </div>
       
    );
};

export default AppliedJobs;