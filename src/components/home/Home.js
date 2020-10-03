import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import JobData from '../../jobData/JobData';
import Header from '../header/Header';
import JobCategories from '../jobCategories/JobCategories';

const Home = () => {
  const [jobDetails, setJobDetails] = useState(JobData);
    return (
        <div className="container bg-light pt-4">
                <Header/>
            <div className="row">
                {
                    jobDetails.map((jobs) =><JobCategories jobs={jobs} key={jobs.key}></JobCategories>)
                }
            </div>
        </div>
    );
};

export default Home;