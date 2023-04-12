
let jobsInfo;

const addToDb = (id, job) => {
    console.log("got the id: ", id);
    console.log("got the job: ", job);

    findAddedJobsInfo(); 

    console.log(jobsInfo);

    if( isSpecificPropertyAvailable(id) ) {
        console.log("Already that id is added and job is applied");
    }
    else{
        console.log("not added")
        jobsInfo[id] = job;
    }

    localStorage.setItem('jobs-info', JSON.stringify(jobsInfo));
}


const findAddedJobsInfo = () => {

    const objFromDb = localStorage.getItem('jobs-info');

    if(objFromDb) {
        jobsInfo = JSON.parse(objFromDb);
    }
    else{
        jobsInfo = {};
    }
    return jobsInfo;
}

const isSpecificPropertyAvailable = (id) => {
    const value = jobsInfo[id];
    return value;
}



export {addToDb, findAddedJobsInfo}