import React, { useEffect, useState } from 'react';
import { findAddedJobsInfo } from '../../utilities/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



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


    // navigation.navigate('Details', {
    //     itemId: 86,
    //     otherParam: 'anything you want here',
    // });

    const Navigate = useNavigate();
    const handleRemote = () => {

        // Navigate('/remote', {
        //     itemId: 86,
        //     otherParam: 'anything you want here',
        // });
    }
    const handleOnsite = () => {
        Navigate('/onsite');
    }


    return (
        <div>
            <div className='bg-[#F9FAFF]'>
                <h2 className='text-4xl font-bold text-center text-[#1A1919] pt-32 pb-[176px]'>Job details</h2>
            </div>
            <div className='w-[65%] mx-auto text-right mt-32 mb-10'>
                {/* <label tabIndex={0} className='btn m-1 text-black bg-[#F9FAFF] border p-3 px-8 rounded-md text-xl font-semibold'>
                    Filtered By
                    <FontAwesomeIcon className='ml-3' icon={faAngleDown} />

                    
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </label> */}
                {/* Daisy Ui Component */}
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1 bg-[#F9FAFF] text-black hover:bg-[#F9FAFF] border-gray-200">Filtered By <FontAwesomeIcon className='ml-3' icon={faAngleDown} /></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={handleRemote}><a>Remote</a></li>
                        <li onPress={() => {
                            /* 1. Navigate to the Details route with params */
                            Navigate('/remote', {
                                itemId: 86,
                                otherParam: 'anything you want here',
                            });
                        }}><a>On-site</a></li>
                    </ul>
                </div>
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