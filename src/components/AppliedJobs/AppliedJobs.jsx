import React, { useEffect, useState } from 'react';
import { findAddedJobsInfo } from '../../utilities/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faXmark, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { getAppliedJobs } from '../../utilities/retrieveAppliedJobs';



const AppliedJobs = (props) => {

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [keywordMsg, setkeywordMsg] = useState("");
    const [clickedXmark, setClickedXmark] = useState(false);
    let msg;


    const jobsTemp = getAppliedJobs();

    const handleRemovingKeyword = () => {
        console.log("keyword clicked")
        setClickedXmark(true);
        console.log('state of xmarkstate ', clickedXmark)
    }


    useEffect(() => { console.log('im in usefff')

        if (!props.fileringKeyword || clickedXmark) {
            console.log('im in if of all jobs and state is', clickedXmark)
            setAppliedJobs(jobsTemp);
            msg = <div></div>
            setkeywordMsg(msg);
        }
        else if(!clickedXmark) {
            console.log('im in if of filtered jobs and state is', clickedXmark);

            let filteredJobs = [];
            let keyword = props.fileringKeyword;
            keyword = keyword.replace(/[^a-z0-9]/gi, '');
            msg = <div className='relative btn m-1 bg-[#F9FAFF] hover:bg-[#F9FAFF] hover:cursor-default text-black text-base border-0 rounded-none px-10'>
                <button>#{keyword.toLowerCase()}</button>
                <FontAwesomeIcon onClick={handleRemovingKeyword} className='absolute -top-2 -right-0 text-slate-500' icon={faCircleXmark} />
            </div>
            setkeywordMsg(msg);

            for (const property of jobsTemp) {

                let jobtype = property.jobType.replace(/[^a-z0-9]/gi, '');

                if (jobtype.toLowerCase() == keyword.toLowerCase()) {
                    console.log("MATCHED");
                    filteredJobs.push(property);
                }
            }
            setAppliedJobs(filteredJobs);
        }
    }, [jobsTemp, clickedXmark]);


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

            <div className='bg-[#F9FAFF] relative flex justify-center md:pb-20 pb-10'>

                <img className='absolute left-0 md:w-fit w-[25%] bg-[#F9FAFF]' src="/public/images/Vector.png" alt="" />

                <div className=''>
                    <h2 className='md:text-3xl text-xl font-bold text-center text-[#1A1919] md:pt-32 pt-0 -mt-5'>Applied jobs</h2>
                </div>
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