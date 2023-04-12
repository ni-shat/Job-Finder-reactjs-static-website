import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UL from '../UL/UL';

const JobDetails = () => {

    const [job, setJob] = useState({});
    // const [id, setId] = useState([]);
    const [requirements, setRequirements] = useState([]);
    const [jobResponsibility, setJobResponsibility] = useState([]);


    const idAndData = useLoaderData();

    useEffect(() => {
        // setJobs(idAndData.jobs);
        // setId(idAndData.jobId);

        const jobsData = idAndData.jobs;
        const id = idAndData.jobId;

        if (jobsData) {
            const filteredJob = jobsData.find(job => job.id == id);

            setJob(filteredJob);
            const { requirements, jobResponsibility } = job;
            setRequirements(requirements);
            setJobResponsibility(jobResponsibility);
            // console.log(jobDescription, requirements, Experiences, jobResponsibility);
        }

    }, [job]);


    // console.log(jobDescription, requirements, Experiences, jobResponsibility);



    return (
        <div>
            {/* requirements:
           {requirements}, 
           <br />
           job Responsibility:
           {jobResponsibility}

           <br /><br /><br /><br /> */}

            <div className='bg-[#F9FAFF]'>
                <h2 className='text-4xl font-bold text-center text-[#1A1919] pt-32 pb-[176px]'>Job details</h2>

            </div>

            <div className='mt-32 flex w-[65%] mx-auto bg-slate-200'>
                <div className='w-[70%]'>
                    {
                        job && <div className='text-[#474747] text-xl mb-12'><span className='font-semibold'>Job description:</span> {job.jobDescription}</div>
                    }

                    {
                        jobResponsibility &&
                        <div className='text-[#474747] text-xl mb-12'><span className='font-semibold'>Job Responsibility:</span>
                            {
                                <UL array={jobResponsibility}></UL>
                            }
                        </div>
                    }
                    {
                        requirements && 
                        <div className='text-[#474747] text-xl mb-12'><span className='font-semibold'>Educational Requirements:</span>
                            {
                                <UL array={requirements}></UL>
                            }
                        </div>
                    }
                    {
                        job.Experiences && 
                        <div className='text-[#474747] text-xl mb-12'><span className='font-semibold'>Experiences:</span> {job.Experiences}</div>
                    }

                </div>
                <div className="w-[30%]">
                    <div>
                        
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;