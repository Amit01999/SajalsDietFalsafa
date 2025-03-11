import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import JobData from '../Data/JobData';
import ApplyForm from '../components/ApplyForm';

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
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{job.title}</h2>
      <p className="text-gray-600 text-lg mb-2">{job.institution}</p>
      <p className="text-[#808080] mb-2">
        Salary: {job.salary || 'Negotiable'}
      </p>
      <p className="text-[#808080] mb-2">
        Employment Type: {job.employment_type || 'N/A'}
      </p>
      <p className="text-[#808080] mb-2">Duration: {job.duration || 'N/A'}</p>
      <p className="text-[#808080] mb-2">
        Probation Period: {job.probation_period || 'N/A'}
      </p>
      <p className="text-[#808080] mb-2">
        Location: {job.location || 'Not specified'}
      </p>

      {job.facilities && (
        <div>
          <h3 className="font-semibold mt-4">Facilities:</h3>
          <ul className="list-disc ml-6 text-[#808080]">
            {job.facilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
        </div>
      )}

      {job.minimum_qualification && (
        <div>
          <h3 className="font-semibold mt-4">Minimum Qualification:</h3>
          <ul className="list-disc ml-6 text-[#808080]">
            {job.minimum_qualification.map((qual, index) => (
              <li key={index}>{qual}</li>
            ))}
          </ul>
        </div>
      )}

      {job.required_skills && (
        <div>
          <h3 className="font-semibold mt-4">Required Skills:</h3>
          <ul className="list-disc ml-6 text-[#808080]">
            {job.required_skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {job.responsibilities && (
        <div>
          <h3 className="font-semibold mt-4">Responsibilities:</h3>
          <ul className="list-disc ml-6 text-[#808080]">
            {job.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
      )}

      {job.work_schedule && (
        <div>
          <h3 className="font-semibold mt-4">Work Schedule:</h3>
          <p className="text-[#808080]">
            Days per Week: {job.work_schedule.days_per_week}
          </p>
          {job.work_schedule.remote && (
            <div>
              <h4 className="font-semibold">Remote Work:</h4>
              <p className="text-[#808080]">
                Days: {job.work_schedule.remote.days}
              </p>
              <p className="text-[#808080]">
                Hours: {job.work_schedule.remote.hours.join(', ')}
              </p>
            </div>
          )}
          {job.work_schedule.office && (
            <div>
              <h4 className="font-semibold">Office Work:</h4>
              <p className="text-[#808080]">
                Days: {job.work_schedule.office.days}
              </p>
              <p className="text-[#808080]">
                Location: {job.work_schedule.office.location}
              </p>
              <p className="text-[#808080]">
                Hours: {job.work_schedule.office.hours}
              </p>
            </div>
          )}
        </div>
      )}

      <p className="text-[#808080] font-bold mt-4">
        Application Deadline: {job.application_deadline}
      </p>
      <ApplyForm />
    </div>
  );
};

export default JobDetailsPage;
