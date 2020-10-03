import React, { useState } from 'react';
import JobData from '../../jobData/JobData';
import Header from '../header/Header';
import JobCategories from '../jobCategories/JobCategories';

const Home = () => {
    const [jobs, setJobs] = useState(JobData);
    return (
        <div className="container bg-light pt-4">
                <Header/>
            <div className="row">
                {
                    jobs.map((job) =><JobCategories job={job} key={job.key}></JobCategories>)
                }
            </div>
        </div>
    );
};

export default Home;