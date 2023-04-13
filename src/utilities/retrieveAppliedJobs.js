import { useEffect, useState } from "react";
import { findAddedJobsInfo } from "./fakedb";


const getAppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedJobsInfo = findAddedJobsInfo();

        let appliedJobsTemp = [];

        if (storedJobsInfo) {
            for (const property in storedJobsInfo) {
                appliedJobsTemp.push(storedJobsInfo[property]);
            }
        }
        console.log(appliedJobsTemp)
        setAppliedJobs(appliedJobsTemp);
    }, []);

    return appliedJobs;
}


export {getAppliedJobs}


