import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';

const JobCategories = () => {

    const [jobsCategory, setJobsCategory] = useState([]);
    console.log("NIshat");

    useEffect(() => {
        fetch('jobsCategories.json')
            .then(res => res.json())
            .then(data => setJobsCategory(data))
    }, []);

    console.log(jobsCategory);

    return (
        <div className='mt-32 w-[65%] mx-auto'>
            <h2 className='text-3xl font-bold text-center'>Job Category List</h2>
            <p className='text-center text-slate-600 text-xl mb-10 mt-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='flex justify-between gap-6'>

                {
                    jobsCategory.map(category => <JobCategory
                        category={category}
                        key={category.id}
                    ></JobCategory>)
                }
            </div>

        </div>
    );
};

export default JobCategories;