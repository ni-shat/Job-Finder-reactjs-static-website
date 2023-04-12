import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UL from '../UL/UL';
import { addToDb } from '../../utilities/fakedb';
import { Toaster } from 'react-hot-toast';

const JobDetails = () => {

    const [job, setJob] = useState({});
    // const [id, setId] = useState([]);
    const [requirements, setRequirements] = useState([]);
    const [jobResponsibility, setJobResponsibility] = useState([]);


    const idAndData = useLoaderData();

    useEffect(() => {

        const jobsData = idAndData.jobs;
        const id = idAndData.jobId;

        if (jobsData) {
            const filteredJob = jobsData.find(job => job.id == id);

            setJob(filteredJob);
            const { requirements, jobResponsibility } = job;
            setRequirements(requirements);
            setJobResponsibility(jobResponsibility);
        }

    }, [job]);



    return (
        <div>

            <div className='bg-[#F9FAFF]'>
                <h2 className='text-3xl font-bold text-center text-[#1A1919] pt-32 pb-[176px]'>Job details</h2>

            </div>

            <div className='mt-32 flex gap-6 w-[65%] mx-auto'>
                <div className='w-[70%]'>
                    {
                        job.jobDescription && <div className='text-[#474747] text-base mb-12'><span className='font-bold text-xl'>Job description:  </span> {job.jobDescription}</div>
                    }

                    {
                        jobResponsibility &&
                        <div className='text-[#474747] text-base mb-12'><span className='font-bold text-xl'>Job Responsibility:</span>
                            {
                                <UL array={jobResponsibility}></UL>
                            }
                        </div>
                    }
                    {
                        requirements &&
                        <div className='text-[#474747] text-base mb-12'><span className='font-bold text-xl'>Educational Requirements:</span>
                            {
                                <UL array={requirements}></UL>
                            }
                        </div>
                    }
                    {
                        job.Experiences &&
                        <div className='text-[#474747] text-base mb-12'><span className='font-bold text-xl'>Experiences:</span> {job.Experiences}</div>
                    }

                </div>

                {
                    job &&

                    <div className='w-[30%] '>

                        <div className="p-8 bg-[#F9F7FF] rounded-md">
                            <div>
                                <h2 className='text-xl font-bold mb-4'>Job details</h2>
                                <hr className='mb-6' />
                                <p className='text-[#474747] text-base mb-1'>
                                    <span className='font-semibold'>Salary:</span> {job.salary}
                                </p>
                                <p className='text-[#474747] text-base mb-12'>
                                    <span className='font-semibold'>Job title:</span> {job.jobTitle}
                                </p>
                            </div>

                            <div>
                                <h2 className='text-xl font-bold mb-4'>Contact Information</h2>
                                <hr className='mb-6' />
                                {
                                    job?.contactInfo?.Phone &&
                                    <p className='text-[#474747] text-base mb-1'>
                                        <span className='font-semibold'>Phone:</span> {job.contactInfo.Phone}
                                    </p>
                                }
                                {
                                    job?.contactInfo?.email &&
                                    <p className='text-[#474747] text-base mb-1'>
                                        <span className='font-semibold'>Email:</span>{job.contactInfo.email}
                                    </p>
                                }
                                {
                                    job?.contactInfo?.location &&
                                    <p className='text-[#474747] text-base'>
                                        <span className='font-semibold'>Address:</span>{job.contactInfo.location}
                                    </p>
                                }
                            </div>
                        </div>
                        <div>
                            <button onClick={() => addToDb(job.id, job)} className='bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100%  p-4 px-8 rounded-md text-base text-white font-semibold mt-8 w-full'>Apply Now</button>
                            <Toaster position="top-right" />
                        </div>

                    </div>
                }
            </div>
        </div>
    );
};

export default JobDetails;