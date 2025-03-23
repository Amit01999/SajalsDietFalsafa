import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import programsData from '../Data/ProggramData';

const ProgramDisplayPage = () => {
  const location = useLocation();

  const [program, setProgram] = useState(null);

  useEffect(() => {
    // Get the current path from location
    const currentPath = location.pathname;

    // Find program that matches the current path
    const foundProgram = programsData.find(p => p.link === currentPath);

    console.log('Found program:', foundProgram);
    setProgram(foundProgram || null);
  }, [location.pathname]);

  // Show "Not Found" if program is missing
  if (!program) {
    return <p className="text-center text-red-500 mt-10">Program not found.</p>;
  }

  return (
    <div>
      <div className="bg-[#FAFAFA] py-10 pl-32 text-[#545454] font-medium text-xl relative border-b border-[#E5E5E5] mt-24">
        {program.title}
      </div>

      <div className="max-w-6xl mx-auto my-5 p-5 bg-white">
        {/* Image (Only if available) */}
        {program.img && (
          <img
            src={program.img}
            alt={program.title}
            className="w-full object-cover mb-14"
          />
        )}

        {/* English & Bangla Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {/* English Section */}
          <div>
            {program.heading && (
              <h2 className="text-2xl font-medium mb-5 text-[#303030]">
                {program.heading}
              </h2>
            )}
            {program.description && (
              <p className="text-neutral-600 mb-2">{program.description}</p>
            )}

            {program.duration && (
              <h2 className="text-neutral-600 mb-4">
                <span className="font-bold">Duration:</span> {program.duration}
              </h2>
            )}
            {program.guideline && (
              <p className="text-neutral-600 mb-2">{program.guideline}</p>
            )}

            {program.benefits_en?.length > 0 && (
              <ul className="list-decimal list-inside mt-3 text-neutral-600">
                {program.benefits_en.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Bangla Section */}
          {program.title_bn && (
            <div>
              <h2 className="text-xl font-bold mb-2">{program.title_bn}</h2>
              {program.heading_bn && (
                <p className="text-neutral-600 mb-2">{program.heading_bn}</p>
              )}

              {program.duration_bn && (
                <h2 className="text-neutral-600 mb-4">
                  <span className="font-bold">সময়কাল:</span>{' '}
                  {program.duration_bn}
                </h2>
              )}
              {program.guideline_bn && (
                <p className="text-neutral-600 mb-2">{program.guideline_bn}</p>
              )}

              {program.benefits_bn?.length > 0 && (
                <ul className="list-inside mt-3 text-neutral-600">
                  {program.benefits_bn.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        {/* Book Appointment Button */}
        <div className="flex items-center justify-center mt-5">
          <button className="px-4 py-2 border rounded-full mt-4 bg-black text-white transition">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramDisplayPage;
