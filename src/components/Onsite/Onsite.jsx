import React from 'react';
import { useLocation } from 'react-router-dom';
import AppliedJobs from '../AppliedJobs/AppliedJobs';

const Onsite = () => {
    const location = useLocation();
    console.log("location :", location.state.name);
    return (
        <div>
            <AppliedJobs fileringKeyword={location.state.name}></AppliedJobs>
        </div>
    );
};

export default Onsite;