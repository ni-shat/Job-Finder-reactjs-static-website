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
        <div className='md:w-[65%] w-[95%] mx-auto mb-32'>
            <h2 className='md:text-5xl text-xl font-bold text-center text-[#1A1919]'>Featured Jobs</h2>
            <p className='text-center text-[#474747] md:text-xl text-base mb-10 mt-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-3'>
                {
                    featuredJobs && 
                    featuredJobs.map(job => <FeaturedJob
                        key={job.id}
                        job={job}
                    ></FeaturedJob>)
                }
            </div>
            <div className='text-center mt-10'>
                <button onClick={getSeeAllState} className={`bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100%  p-2 md:p-4 px-3 md:px-8 rounded-md md:text-xl text-xs text-white font-semibold ${hideBtn && 'hidden'}`}>See All Jobs</button>
            </div>

        </div>
    );
};

export default FeaturedJobs;