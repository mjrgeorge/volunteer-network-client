import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../header/Header';
import JobCategories from '../jobCategories/JobCategories';

const Home = () => {
  const [, , , , jobDetails, setJobDetails] = useContext(UserContext);
  useEffect(() => {
    fetch('https://powerful-ravine-91496.herokuapp.com/allJobs')
    .then(response => response.json())
    .then(data =>setJobDetails(data))
  }, [])
  
    return (
        <div className="container bg-light pt-4">
                <Header/>
            <div className="row">
                {
                    jobDetails.map((jobs) =><JobCategories jobs={jobs} key={jobs._id}></JobCategories>)
                }
            </div>
        </div>
    );
};

export default Home;