import React from 'react';

export default function EnglishJobPost({ job }) {
  return (
    <div>
      <div className="bg-[#FAFAFA] w-full py-10 md:pl-28 pl-6 text-[#545454] font-bold text-xl relative border-b border-[#E5E5E5] mt-24">
        {job.title}
      </div>
      <div className="max-w-6xl md:ml-24 p-6 bg-white mt-3">
        {job.description_en && (
          <p className="text-gray-[#303030] text-2xl font-bold mb-3">
            {job.description_en}
          </p>
        )}
        {job.institution_en && (
          <p className="text-[#848080]  mb-2">
            <span className=" font-semibold"> Institution: </span>
            {job.institution_en}
          </p>
        )}
        {job.Position_en && (
          <p className="text-[#848080]  mb-2">
            <span className=" font-semibold"> Position: </span>
            {job.Position_en}
          </p>
        )}
        {job.salary_en && (
          <p className="text-[#848080]  mb-2">
            <span className=" font-semibold"> Salary: </span>
            {job.salary_en}
          </p>
        )}
        {job.Facilities_en && (
          <p className="text-[#848080]  mb-2">
            <span className=" font-semibold"> Facilities: </span>
            {job.Facilities_en}
          </p>
        )}
        {job.Educational_Qualification_en && (
          <p className="text-[#848080]  mb-2">
            <span className=" font-semibold">Educational Qualification: </span>
            {job.Educational_Qualification_en}
          </p>
        )}
        {job.scheduleData && (
          <div className="work-schedule">
            <h2 className="font-bold text-2xl mb-3">Work Schedule</h2>
            <p className="font-semibold mb-3 text-[#848080]">6 days per week</p>
            <ul className="mt-2">
              {job.scheduleData.map((item, index) => (
                <li key={index} className="mb-2 text-[#848080]">
                  <span className="mr-2">•</span>
                  <strong>{item.days}:</strong> {item.location}
                  <br />
                  {item.hours.map((time, i) => (
                    <span key={i} className="block">
                      {time}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        )}
        {job.requirementsData && (
          <div className="requirements">
            <h2 className="font-bold text-2xl mt-4 ">Requirements</h2>
            <ul className="list-disc pl-6 mt-2 text-[#848080]">
              {job.requirementsData.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        )}
        {job.ResponsibilitiesData && (
          <div className="requirements">
            <h2 className="font-bold text-2xl mt-4 "> Responsibilities:</h2>
            <ul className="list-disc pl-6 mt-2 text-[#848080]">
              {job.ResponsibilitiesData.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        )}
        {job.Application_Deadline && (
          <div>
            <h2 className="font-bold text-2xl mt-4 "> Application Deadline:</h2>
            <ul className="list-disc pl-6 mt-2 text-[#848080]">
              <li>{job.Application_Deadline}</li>
            </ul>
            <p className="mt-4 border-b-2 pb-2 border-gray-400">
              If interested, please apply soon.
            </p>
          </div>
        )}

        {/* Bangla Version Start */}

        <div className="text-[#848080]">
          {/* Job Title Section */}
          <h2 className="text-2xl font-bold mt-8 mb-5 text-[#303030]">
            {job.title_bn}
          </h2>
          <p>
            <strong className="">প্রতিষ্ঠান:</strong> {job.company_bn}
          </p>
          <p>
            <strong>পদ:</strong> {job.position_bn}
          </p>
          <p>
            <strong>বেতন:</strong> {job.salary_bn}
          </p>

          {/* Benefits (Conditional Rendering) */}
          {job.benefits_bn && (
            <p>
              <strong>সুবিধাসমুহ:</strong> {job.benefits_bn}
            </p>
          )}
          {job.Educational_Qualification_bn && (
            <p>
              <strong>শিক্ষাগত যোগ্যতা:</strong>{' '}
              {job.Educational_Qualification_bn}
            </p>
          )}

          {/* Work Schedule Section */}
          <h2 className="text-lg font-bold mt-4 text-[#303030]">
            কর্ম সময়সূচী
          </h2>
          <p>সপ্তাহে {job.workDays_bn} দিন</p>
          <ul className="mt-2">
            {job.schedule_bn.map((item, index) => (
              <li key={index} className="mb-2 list-none">
                <span className="mr-2">•</span>
                <strong>{item.days}:</strong> {item.details}
              </li>
            ))}
          </ul>

          {/* Qualifications (Conditional Rendering) */}
          {job.qualifications_bn && job.qualifications_bn.length > 0 && (
            <>
              <h2 className="text-lg font-bold mt-4 text-[#303030]">যোগ্যতা</h2>
              <ul className="list-disc pl-6 mt-2">
                {job.qualifications_bn.map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
              </ul>
            </>
          )}

          {/* Responsibilities Section */}
          <h2 className="text-lg font-bold mt-4 text-[#303030]">
            দায়িত্বসমূহ
          </h2>
          <ul className="list-disc pl-6 mt-2">
            {job.responsibilities_bn.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>

          {/* Application Deadline (Conditional Rendering) */}
          {job.deadline_bn && (
            <p className="mt-4 border-b-2 border-gray-400 pb-2">
              <strong className="text-[#303030]">আবেদনের সময়সীমা:</strong>
              {job.deadline_bn}
              <p>** আগ্রহী প্রার্থীদের দ্রুত আবেদন করার অনুরোধ করা হলো</p>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
