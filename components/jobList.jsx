import React from 'react';

const JobList = ({ jobs }) => {
  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;