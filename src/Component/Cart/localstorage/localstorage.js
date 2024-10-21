const getStoredJobsApplication = () => {
    const storedJobApplication = localStorage.getItem('inputValue');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveJobsApplication = _id => { 
    const storedJobApplication = getStoredJobsApplication();
    const exist = storedJobApplication.find(jobId => jobId === _id);
    if (!exist) { 
        storedJobApplication.push(_id); 
        localStorage.setItem('inputValue', JSON.stringify(storedJobApplication)); 
    }
}

export { getStoredJobsApplication, saveJobsApplication }
