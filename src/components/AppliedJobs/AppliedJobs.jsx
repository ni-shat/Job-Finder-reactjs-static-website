import React, { useEffect, useState } from 'react';
import { findAddedJobsInfo } from '../../utilities/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { getAppliedJobs } from '../../utilities/retrieveAppliedJobs';




const AppliedJobs = (props) => {

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [keywordMsg, setkeywordMsg] = useState("");


    const jobsTemp = getAppliedJobs();
    useEffect(() => {

        if (!props.fileringKeyword) {
            setAppliedJobs(jobsTemp);
        }
        else {
            let filteredJobs = [];
            let keyword = props.fileringKeyword;
            keyword = keyword.replace(/[^a-z0-9]/gi, '');
            let msg = <div className='btn m-1 bg-[#F9FAFF] text-black text-base hover:bg-[#F9FAFF] border-0 rounded-none px-10'>
                            <button>#{keyword.toLowerCase()}</button>
                        </div>
            setkeywordMsg(msg);

            for (const property of jobsTemp) {
                // console.log("JOBTYPEEEEEEE:::  ",property.jobType); console.log("PROPERTYYYYY: ", property);

                let jobtype = property.jobType.replace(/[^a-z0-9]/gi, '');

                if (jobtype.toLowerCase() == keyword.toLowerCase()) {
                    console.log("MATCHED");
                    filteredJobs.push(property);
                }
            }
            // console.log("filteredJobs", filteredJobs);
            setAppliedJobs(filteredJobs);
        }

    }, [jobsTemp]);


    console.log("props", props.fileringKeyword);
    console.log("applied jobs", appliedJobs);



    const Navigate = useNavigate();
    const handleRemote = () => {
        console.log("remote");
        Navigate('/remote', { state: { name: 'remote' } });

    }
    const handleOnsite = () => {
        Navigate('/onsite', { state: { name: 'onsite' } });
    }


    return (
        <div>
            <div className='bg-[#F9FAFF]'>
                <h2 className='text-3xl font-bold text-center text-[#1A1919] pt-32 pb-[176px]'>Applied jobs</h2>
            </div>
            <div className='w-[65%] mx-auto mt-32 mb-10 flex justify-end gap-8'>

                {keywordMsg}

                {/* Daisy Ui Component */}
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1 bg-[#F9FAFF] text-black hover:bg-[#F9FAFF] border-gray-200">Filtered By <FontAwesomeIcon className='ml-3' icon={faAngleDown} /></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => { handleRemote() }}><a>Remote</a></li>
                        <li onClick={handleOnsite}><a>On-site</a></li>
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