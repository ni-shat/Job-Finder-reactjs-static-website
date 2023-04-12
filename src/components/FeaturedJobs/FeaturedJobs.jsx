import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from '../FeaturedJob/FeaturedJob';


const FeaturedJobs = () => {

    const [featuredJobs, useFeaturedJobs] = useState([]);
    const [seeAllState, setSeeAllState] = useState(false);
    const [hideBtn, setHideBtn] = useState(false);


    const getFeaturedJobs = useLoaderData();
    console.log("featured jobs ",getFeaturedJobs);

    useEffect(() => {
        if(seeAllState == false && getFeaturedJobs){
            const filteredJobs = getFeaturedJobs.filter(job => (parseInt(job.id) < 5));
            console.log("FILtered jobs :", filteredJobs);
            useFeaturedJobs(filteredJobs);
        }
        else{        
            useFeaturedJobs(getFeaturedJobs);
        }

    }, [seeAllState]);

    const getSeeAllState = () => {
        setSeeAllState(true);
        setHideBtn(true);
    }

    return (
        <div className='w-[65%] mx-auto mb-32'>
            <h2 className='text-5xl font-bold text-center text-[#1A1919]'>Featured Jobs</h2>
            <p className='text-center text-[#474747] text-xl mb-10 mt-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-2 gap-6'>
                {
                    featuredJobs && 
                    featuredJobs.map(job => <FeaturedJob
                        key={job.id}
                        job={job}
                    ></FeaturedJob>)
                }
            </div>
            <div className='text-center mt-10'>
                <button onClick={getSeeAllState} className={`bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100%  p-4 px-8 rounded-md text-xl text-white font-semibold ${hideBtn && 'hidden'}`}>See All Jobs</button>
            </div>

        </div>
    );
};

export default FeaturedJobs;