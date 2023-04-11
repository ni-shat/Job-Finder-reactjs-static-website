import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from '../FeaturedJob/FeaturedJob';


const FeaturedJobs = () => {

    const [featuredJobs, useFeaturedJobs] = useState([]);

    const getFeaturedJobs = useLoaderData();
    console.log(getFeaturedJobs);

    useEffect(() => {
        useFeaturedJobs(getFeaturedJobs);
    }, [])

    return (
        <div className='w-[65%] mx-auto mb-32'>
            <h2 className='text-5xl font-bold text-center text-[#1A1919]'>Featured Jobs</h2>
            <p className='text-center text-[#474747] text-xl mb-10 mt-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-2 gap-6'>
                {
                    featuredJobs.map(job => <FeaturedJob
                        key={job.id}
                        job={job}
                    ></FeaturedJob>)
                }
            </div>

        </div>
    );
};

export default FeaturedJobs;