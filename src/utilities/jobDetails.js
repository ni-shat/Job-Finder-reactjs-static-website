

const idAndData = async (jobId) => {

    const loadedJobs = await fetch('/featuredJobs.json');
    const jobs = await loadedJobs.json();
    
    return {jobId, jobs};
}


export default idAndData;