import React, { useEffect, useState } from 'react';
import programsData from '../Data/ProggramData';
import { useParams } from 'react-router-dom';

const ProgramDisplayPage = () => {
  const { id } = useParams();
  const [program, setProgram] = useState(null);

  useEffect(() => {
    if (!id) return; // Prevent parsing an undefined value
    const foundProgram = programsData.find(p => p.id === parseInt(id, 10));
    setProgram(foundProgram || null);
  }, [id]);

  // Show loading state if program is not found
  if (!program) {
    return (
      <p className="text-center text-gray-500">Loading program details...</p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto my-10 p-5">
      {/* Image */}
      {program.img && (
        <img
          src={program.img}
          alt={program.title || 'Program Image'}
          className="w-full h-64 object-cover rounded-lg"
        />
      )}

      {/* English & Bangla Content Side-by-Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {/* English Section */}
        <div>
          <h2 className="text-xl font-bold mb-2">
            {program.title || 'Title not available'}
          </h2>
          <p className="text-gray-600 mb-2">
            {program.description || 'No description available.'}
          </p>
          <p className="font-bold">Duration: {program.duration || 'N/A'}</p>

          {Array.isArray(program.benefits) && program.benefits.length > 0 ? (
            <ul className="list-disc list-inside mt-3 text-gray-700">
              {program.benefits.map((item, index) => (
                <li key={index}>{item.en}</li>
              ))}
            </ul>
          ) : Array.isArray(program.guidelines) &&
            program.guidelines.length > 0 ? (
            <ul className="list-disc list-inside mt-3 text-gray-700">
              {program.guidelines.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No guidelines available.</p>
          )}
        </div>

        {/* Bangla Section (Only if available) */}
        {program.title_bn && (
          <div>
            <h2 className="text-xl font-bold mb-2">{program.title_bn}</h2>
            <p className="text-gray-600 mb-2">
              {program.description_bn || 'বর্ণনা পাওয়া যায়নি।'}
            </p>
            <p className="font-bold">সময়কাল: {program.duration_bn || 'N/A'}</p>

            {Array.isArray(program.benefits) && program.benefits.length > 0 ? (
              <ul className="list-disc list-inside mt-3 text-gray-700">
                {program.benefits.map((item, index) => (
                  <li key={index}>{item.bn}</li>
                ))}
              </ul>
            ) : Array.isArray(program.guidelinesBn) &&
              program.guidelinesBn.length > 0 ? (
              <ul className="list-disc list-inside mt-3 text-gray-700">
                {program.guidelinesBn.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">গাইডলাইন পাওয়া যায়নি।</p>
            )}
          </div>
        )}
      </div>
      <button className="ms-auto px-4 py-2 border rounded-full mt-4 bg-black text-white transition">
        Book an Appoinment
      </button>
    </div>
  );
};

export default ProgramDisplayPage;
