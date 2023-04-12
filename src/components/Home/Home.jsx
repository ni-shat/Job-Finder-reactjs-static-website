import React from 'react';
import Header from '../Header/Header';
import JobCategories from '../JobCategories/JobCategories';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import JobDetails from '../JobDetails/JobDetails';


const Home = () => {
    return (
        <div>
            <Header></Header>
         
            <JobCategories></JobCategories>
            <FeaturedJobs></FeaturedJobs>
      
        </div>
    );
};

export default Home;