import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import JobCategories from '../jobCategories/JobCategories';

const Home = () => {
  const [jobDetails, setJobDetails] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/allJobs')
    .then(response => response.json())
    .then(data =>setJobDetails(data))
  }, [])
  
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