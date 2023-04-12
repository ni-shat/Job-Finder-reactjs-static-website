import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';


const JobCategories = () => {

    const [jobsCategories, setJobsCategories] = useState([]);

    useEffect(() => {
        fetch('jobsCategories.json')
            .then(res => res.json())
            .then(data => setJobsCategories(data))
    }, []);
   

    return (
        <div className='mt-[130px] w-[65%] mx-auto'>
            <h2 className='text-5xl font-bold text-center text-[#1A1919]'>Job Category List</h2>
            <p className='text-center text-[#474747] text-xl mb-10 mt-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='flex justify-between gap-6'>

                {
                    jobsCategories.map(category => <JobCategory
                        category={category}
                        key={category.id}
                    ></JobCategory>)
                }
            </div>

        </div>
    );
};

export default JobCategories;
