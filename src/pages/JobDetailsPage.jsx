import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import JobData from '../Data/JobData';
import ApplyForm from '../components/ApplyForm';
import EnglishJobPost from '../components/EnglishJobPost';
import BanglaJobPost from '../components/BanglaJobPost';

const JobDetailsPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const foundJob = JobData.find(b => b.id === Number(id));
    setJob(foundJob);
  }, [id]);

  // Add a loading state
  if (!job) {
    return <p className="text-center text-gray-500">Loading job details...</p>;
  }

  return (
    <>
      {job.id === 1 ? (
        <EnglishJobPost job={job} />
      ) : (
        <BanglaJobPost job={job} />
      )}

      {/* Show Apply Form if job is available */}
      <ApplyForm job={job} />
    </>
  );
};

export default JobDetailsPage;
