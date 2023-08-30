import React, { useState, useEffect } from 'react';
import JobList from '../../components/JobList';

const Home = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('/api/jobs')
            .then((response) => response.json())
            .then((data) => setJobs(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>JobAPI -All in one new Jobs posted- </h1>
            <JobList jobs={jobs} />
        </div>
    );
};

export default Home;